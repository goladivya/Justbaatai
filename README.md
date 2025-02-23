# Justbaatai# JustBaat AI - AI-Powered News Aggregator & FAQ Chatbot

JustBaat AI is an AI-powered news aggregator and chatbot application that analyzes headlines for potential misinformation and provides instant responses to frequently asked questions.

## 🚀 Features
- **News Aggregation**: Fetch and classify news headlines.
- **Conspiracy Score Analysis**: AI assigns a conspiracy score to headlines.
- **FAQ Chatbot**: NLP-based chatbot for answering common queries.
- **MERN Stack**: Built using **MongoDB, Express, React, and Node.js**.
- **NLTK NLP Integration**: Uses **Natural Language Toolkit (NLTK)** for text analysis.

## 🛠️ Tech Stack
- **Frontend**: React.js (Create-React-App)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ORM)
- **AI/NLP**: Python (NLTK), Scikit-learn

---

## 📌 Setup Instructions

### **1️⃣ Clone the Repository**
```bash
  git clone https://github.com/your-username/justbaat-ai.git
  cd justbaat-ai
```

### **2️⃣ Backend Setup**
```bash
cd backend
npm install  
```

#### **🔹 Set Up Environment Variables (`.env` file)**
Create a `.env` file in the `backend` folder and add:
```env
PORT=5000
MONGO_URI=
PYTHON_PATH=
```

#### **🔹 Start the Backend Server**
```bash
npm start
```

### **3️⃣ Frontend Setup**
```bash
cd ../src
npm start    # Start React app
```

---

## 📡 API Endpoints

### **🔹 Get All Headlines**
```http
GET /api/headlines
```
Returns a list of stored news headlines with their categories.

### **🔹 Analyze a Headline**
```http
POST /api/headlines/analyze
```
#### **Request Body:**
```json
{
  "headline": "NASA confirms water on Mars"
}
```
#### **Response Example:**
```json
{
  "score": 20,
  "suspicious_words": ["NASA"],
  "category": "Legitimate"
}
```

### **🔹 Ask the Chatbot**
```http
POST /api/chatbot/ask
```
#### **Request Body:**
```json
{
  "question": "How do I reset my password?"
}
```
#### **Response Example:**
```json
{
  "answer": "Go to settings and click on 'Reset Password'."
}
```















