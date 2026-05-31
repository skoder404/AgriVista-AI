import os
import tempfile
from flask import Flask, request, jsonify
from cattle_predictor import CattleBreedClassifier

# ---------------------------
# Configuration
# ---------------------------
BASE_DIR = os.path.dirname(os.path.abspath(__file__))


def resolve_path(env_var: str, default_relative: str) -> str:
    """Resolve a path from an env var or a default relative to this file's directory."""
    path = os.environ.get(env_var)
    if not path:
        return os.path.join(BASE_DIR, default_relative)
    if os.path.isabs(path):
        return os.path.normpath(path)
    return os.path.normpath(os.path.join(BASE_DIR, path))


MODEL_PATH = resolve_path('MODEL_PATH', 'best_densenet_breed_classifier.pth')
CLASS_DIR = resolve_path('CLASS_DIR', os.path.join('classifier', 'indian_breed_classifier'))

if not os.path.exists(MODEL_PATH):
    raise FileNotFoundError(f"Model file not found: {MODEL_PATH}")

# if not os.path.isdir(CLASS_DIR):
#     print(f"Warning: Classifier directory not found: {CLASS_DIR}. Using default dummy classes.")

# Initialize Flask app
app = Flask(__name__)

# Load model once when the server starts
classifier = CattleBreedClassifier(MODEL_PATH, CLASS_DIR)


# ---------------------------
# Routes
# ---------------------------
@app.route("/predict", methods=["POST"])
def predict():
    if "image" not in request.files:
        return jsonify({"error": "No image provided"}), 400

    image_file = request.files["image"]

    temp_path = None
    try:
        with tempfile.NamedTemporaryFile(suffix=".jpg", delete=False) as temp_file:
            temp_path = temp_file.name
            image_file.save(temp_path)

        breed, confidence = classifier.predict(temp_path)
        return jsonify({
            "predicted_breed": breed,
            "confidence": confidence
        }), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        if temp_path and os.path.exists(temp_path):
            os.remove(temp_path)


# ---------------------------
# Run server
# ---------------------------
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=os.environ.get("FLASK_DEBUG", "false").lower() == "true")
