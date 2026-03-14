from openai import OpenAI
import json
import re
from app.config import GROQ_API_KEY

client = OpenAI(
    api_key=GROQ_API_KEY,
    base_url="https://api.groq.com/openai/v1"
)


def generate_campaign_content(prompt: str, platform: str):

    system_prompt = f"""
You are a social media marketing expert.

Campaign idea:
{prompt}

Platform:
{platform}

Return ONLY JSON in this format:

{{
 "caption": "string",
 "hashtags": ["#tag1","#tag2","#tag3","#tag4","#tag5"],
 "image_prompt": "detailed prompt for AI image generation",
 "video_prompt": "detailed prompt for AI video generation"
}}
"""

    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[
            {"role": "system", "content": "You are a marketing expert."},
            {"role": "user", "content": system_prompt}
        ]
    )

    text = response.choices[0].message.content

    json_match = re.search(r"\{.*\}", text, re.DOTALL)

    if not json_match:
        raise ValueError(f"Model did not return JSON: {text}")

    json_string = json_match.group(0)

    return json.loads(json_string)