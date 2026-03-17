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

    Generate platform-specific content for:

    1. LinkedIn (professional, informative)
    2. Instagram (engaging, visual, trendy)
    3. Twitter/X (short, catchy, viral)

    Return ONLY JSON in this format:

    {{
    "linkedin": {{
        "caption": "...",
        "hashtags": ["#..."],
        "image_prompt": "...",
        "video_prompt": "..."
    }},
    "instagram": {{
        "caption": "...",
        "hashtags": ["#..."],
        "image_prompt": "...",
        "video_prompt": "..."
    }},
    "twitter": {{
        "caption": "...",
        "hashtags": ["#..."],
        "image_prompt": "...",
        "video_prompt": "..."
    }}
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