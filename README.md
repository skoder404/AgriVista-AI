# AgriVista AI 🌱 🐄

AgriVista AI is an advanced, AI-powered platform designed to assist in identifying and analyzing cattle breeds. Built with a modern web stack and deep learning, this application empowers users to accurately identify cattle breeds, estimate market value, and generate health reports using state-of-the-art artificial intelligence.

---

## 🚀 Key Features

- **Dual AI Prediction Engine**: Combines a custom-trained deep learning model with Google's Gemini AI for robust, comparative breed identification.
- **Custom Trained Model**: A PyTorch model (DenseNet121) trained on **52 Indian cattle breeds**, achieving **~80% accuracy**.
- **Health Diagnostics**: AI-assisted veterinary notes and health scores based on uploaded images.
- **Market Value Estimator**: Estimates cattle market value using breed, health score, and age.
- **Modern & Responsive UI**: Built with Next.js, Tailwind CSS, and Radix UI.
- **Multi-language Support**: Supports 10+ Indian languages via i18next.

---

## 🛠️ Tech Stack

**Frontend:**
- [Next.js 15](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/) & [Radix UI](https://www.radix-ui.com/)
- [Firebase Genkit](https://firebase.google.com/docs/genkit) (Gemini AI Integration)

**Backend / Machine Learning:**
- [Python 3](https://www.python.org/) & [Flask](https://flask.palletsprojects.com/)
- [PyTorch](https://pytorch.org/) + DenseNet121
- [Torchvision](https://pytorch.org/vision/stable/index.html)

---

## 📈 Model Performance

The custom cattle breed classifier was fine-tuned using **DenseNet121** on a dataset of **52 unique Indian cattle breeds**, achieving **~80% accuracy** on the test set.

---

## 💻 Getting Started

### Prerequisites

- Node.js (v18+)
- Python (v3.8+)
- A **Google Gemini API Key** — [Get one free here](https://aistudio.google.com/app/apikey)

---

### Step 1: Clone the Repository

```bash
git clone https://github.com/gopikrishnaed/AgriVista-AI-FInal.git
cd AgriVista-AI-FInal
```

---

### Step 2: Set Up Your Environment Variables

Create a `.env.local` file in the **root directory** of the project and add your Gemini API key:

```bash
# .env.local
GEMINI_API_KEY="your_google_gemini_api_key_here"
GOOGLE_API_KEY="your_google_gemini_api_key_here"
GOOGLE_GENAI_API_KEY="your_google_gemini_api_key_here"
```

> ⚠️ **Important**: Without this key, the Gemini AI features (breed identification, health report, market value) will not work.

---

### Step 3: Start the Machine Learning API (Backend)

Open a terminal and run:

```bash
# Install required Python packages
pip install torch torchvision Flask Pillow

# Start the Flask server
python api/server.py
```

The API will start on `http://127.0.0.1:5000`.

---

### Step 4: Start the Next.js App (Frontend)

Open a **new terminal** and run:

```bash
# Install Node dependencies
npm install

# Start the development server
npm run dev
```

Open your browser and go to **http://localhost:9002**.

---

## 💡 Usage

1. Navigate to the **Identify & Analyze** page.
2. Upload a clear photo of cattle.
3. Click **Start Analysis**.
4. View a **side-by-side comparison** of results from:
   - 🤖 The local trained DenseNet model
   - ✨ Google Gemini AI
5. Enter the cattle's age to get an **estimated market value**.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open an issue or a pull request.

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
