import torch
from torch import nn
from torchvision import transforms, models
from PIL import Image
import os

class CattleBreedClassifier:
    def __init__(self, model_path, class_dir, device=None):
        self.device = device or torch.device("cuda" if torch.cuda.is_available() else "cpu")
        self.class_names = sorted(os.listdir(class_dir))
        self.num_classes = len(self.class_names)

        # Load model
        self.model = models.densenet121(weights=None)
        self.model.classifier = nn.Linear(self.model.classifier.in_features, self.num_classes)
        self.model.load_state_dict(torch.load(model_path, map_location=self.device))
        self.model.to(self.device)
        self.model.eval()

        # Preprocessing pipeline
        self.transform = transforms.Compose([
            transforms.Resize(256),
            transforms.CenterCrop(224),
            transforms.ToTensor(),
            transforms.Normalize([0.485, 0.456, 0.406],
                                 [0.229, 0.224, 0.225])
        ])

    def predict(self, image_path):
        image = Image.open(image_path).convert("RGB")
        image_tensor = self.transform(image).unsqueeze(0).to(self.device)
        with torch.no_grad():
            outputs = self.model(image_tensor)

            # Convert logits to probabilities
            probabilities = torch.nn.functional.softmax(outputs, dim=1)

            # Get top prediction
            confidence, predicted = torch.max(probabilities, 1)

        breed = self.class_names[predicted.item()]
        confidence_score = confidence.item()  # float value between 0 and 1

        return breed, confidence_score
