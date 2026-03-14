import json
from google import genai
from app.config import GEMINI_API_KEY

client = genai.Client(api_key=GEMINI_API_KEY)


def generate_campaign_content(prompt: str, platform: str):

    system_prompt = f"""
You are a social media marketing expert.

Campaign idea:
{prompt}

Target platform:
{platform}

Return ONLY JSON:

{{
"caption": "...",
"hashtags": ["#tag1","#tag2","#tag3","#tag4","#tag5"],
"image_prompt": "...",
"video_prompt": "..."
}}
"""

    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=system_prompt
    )

    return json.loads(response.text)