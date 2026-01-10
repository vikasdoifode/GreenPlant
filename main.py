from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import google.generativeai as genai
import os
from dotenv import load_dotenv
import json
import random

# Load env
load_dotenv()

# Configure Gemini
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

app = FastAPI(title="Eco AI Service")

# ---------- MODELS ----------

class QuizRequest(BaseModel):
    age: int
    topic: str
    level: str

class AnswerCheckRequest(BaseModel):
    question: str
    user_answer: str
    correct_answer: str

# ---------- HELPERS ----------

def safe_json_parse(text: str):
    """
    Extract and parse JSON safely from Gemini output
    """
    try:
        text = text.strip()
        text = text.replace("```json", "").replace("```", "")
        start = text.find("{")
        end = text.rfind("}") + 1
        return json.loads(text[start:end])
    except Exception:
        raise ValueError("AI returned invalid JSON")

# ---------- FEATURE 1: QUIZ ----------

@app.post("/quiz/generate")
def generate_quiz(data: QuizRequest):
    try:
        seed = random.randint(1000, 999999)

        prompt = f"""
You are an AI that generates educational quizzes.

Seed: {seed}
Topic: {data.topic}
Age: {data.age}
Difficulty: {data.level}

Rules:
- Generate 5 MCQ questions
- Easy to medium
- Environment / trees / climate related
- 1 question should be image-based (use image_hint instead of real URL)
- Questions MUST be different every time
- Output ONLY valid JSON
- No explanations, no markdown

JSON format:
{{
  "quiz": [
    {{
      "id": 1,
      "question": "Question text",
      "options": ["A", "B", "C", "D"],
      "correct_answer": "A",
      "image_hint": null
    }}
  ]
}}
"""

        model = genai.GenerativeModel("models/gemini-pro-latest")
        response = model.generate_content(prompt)

        if not response or not response.text:
            raise ValueError("Empty response from AI")

        return safe_json_parse(response.text)

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# ---------- FEATURE 2: VALIDATION ----------

@app.post("/quiz/validate")
def validate_answer(data: AnswerCheckRequest):
    try:
        prompt = f"""
Question: {data.question}
Correct Answer: {data.correct_answer}
User Answer: {data.user_answer}

Tasks:
- Say Correct or Wrong
- Give 2–3 line explanation
- Give one eco-friendly tip
- Output ONLY valid JSON

JSON format:
{{
  "result": "Correct/Wrong",
  "explanation": "short explanation",
  "eco_tip": "short tip"
}}
"""

        model = genai.GenerativeModel("models/gemini-pro-latest")
        response = model.generate_content(prompt)

        if not response or not response.text:
            raise ValueError("Empty response from AI")

        return safe_json_parse(response.text)

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
