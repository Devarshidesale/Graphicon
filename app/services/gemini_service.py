import json
import requests
from app.config import GEMINI_API_KEY


def generate_campaign_content(prompt: str, platform: str):
    if not GEMINI_API_KEY:
        raise ValueError("GEMINI_API_KEY is missing. Check your .env file.")

    url = (
        "https://generativelanguage.googleapis.com/v1beta/"
        f"models/gemini-2.0-flash:generateContent?key={GEMINI_API_KEY}"
    )

    system_prompt = f"""
You are a social media marketing expert.

Campaign idea:
{prompt}

Target platform:
{platform}

Return ONLY valid JSON in this format:
{{
  "caption": "string",
  "hashtags": ["#tag1", "#tag2", "#tag3", "#tag4", "#tag5"],
  "image_prompt": "string",
  "video_prompt": "string"
}}
"""

    payload = {
        "contents": [
            {
                "parts": [
                    {"text": system_prompt}
                ]
            }
        ]
    }

    response = requests.post(url, json=payload, timeout=60)

    if response.status_code != 200:
        raise Exception(f"Gemini API Error: {response.text}")

    data = response.json()

    try:
        text = data["candidates"][0]["content"]["parts"][0]["text"]
        return json.loads(text)
    except Exception as e:
        raise Exception(f"Failed to parse Gemini response: {data}") from e