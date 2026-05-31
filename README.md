# AgriVista AI 🌱 🐄

AgriVista AI is an advanced, AI-powered platform designed to assist in identifying and analyzing cattle breeds. Built with a modern web stack and deep learning, this application empowers users to accurately identify cattle breeds, estimate market value, and generate health reports using state-of-the-art artificial intelligence.

## 🚀 Key Features

*   **Dual AI Prediction Engine**: Combines the power of a custom-trained deep learning model with Google's Gemini AI to provide robust and comparative breed identifications.
*   **Custom Trained Model**: Features a custom PyTorch model (DenseNet121) specifically trained on **52 Indian cattle breeds**, achieving an impressive **80% accuracy**.
*   **Health Diagnostics**: Generates quick AI-assisted veterinary notes and health scores based on uploaded images.
*   **Market Value Estimator**: Calculates estimated market values by synthesizing breed data, health scores, and age.
*   **Modern & Responsive UI**: Built with Next.js, Tailwind CSS, and Radix UI for a seamless, beautiful user experience across devices.

## 🛠️ Tech Stack

**Frontend:**
*   [Next.js 15](https://nextjs.org/) (React Framework)
*   [Tailwind CSS](https://tailwindcss.com/) & [Radix UI](https://www.radix-ui.com/) (Styling & Components)
*   [Genkit](https://firebase.google.com/docs/genkit) (Gemini AI Integration)

**Backend / Machine Learning:**
*   [Python 3](https://www.python.org/) & [Flask](https://flask.palletsprojects.com/) (API Server)
*   [PyTorch](https://pytorch.org/) (Deep Learning Framework)
*   [Torchvision](https://pytorch.org/vision/stable/index.html) (DenseNet121 Architecture)

## 📈 Model Performance
Our custom cattle breed classifier was fine-tuned using the DenseNet121 architecture. After rigorous training across a diverse dataset of **52 unique cattle breeds**, the model successfully achieves **~80% accuracy**, making it highly reliable for field identification.

---

## 💻 Installation & Setup

To run this project locally, you will need to start both the Python API server and the Next.js frontend application.

### Prerequisites
*   Node.js (v18 or higher)
*   Python (v3.8 or higher)
*   A Gemini AI API Key (Set up in your environment variables)

### 1. Start the Machine Learning API (Backend)
The local Flask API runs the `.pth` model to process images and return predictions.

```bash
# 1. Navigate to the API folder
cd api

# 2. Install required Python packages (ensure PyTorch and Flask are installed)
pip install torch torchvision Flask Pillow

# 3. Start the server
python server.py
```
*The API will start running locally on `http://127.0.0.1:5000`.*

### 2. Start the Next.js Application (Frontend)
Open a **new terminal window** and run the following commands from the root directory of the project:

```bash
# 1. Install Node dependencies
npm install

# 2. Start the development server
npm run dev
```
*The web application will be accessible at `http://localhost:9002` (or the port specified in your terminal).*

## 💡 Usage

1. Open your browser and navigate to the **Identify and Analyze** page.
2. Upload a clear image of cattle.
3. Click **Start Analysis**. 
4. The system will concurrently query the local custom model and Gemini AI, presenting the results side-by-side for comparison.
5. Provide the age of the cattle to generate an estimated market value!

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

## 📝 License
This project is open-source and available under the MIT License.
