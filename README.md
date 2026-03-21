# ⚡ Graphicon — AI-Powered Social Media Content Generator & Auto-Publisher

> **From a single prompt to a fully crafted, platform-optimized post — generated and published across Instagram, X (Twitter), and LinkedIn, automatically.**

[![React](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/Language-JavaScript%2084.9%25-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Python](https://img.shields.io/badge/Backend-Python%2014.4%25-3776AB?style=flat-square&logo=python&logoColor=white)](https://python.org)
[![Instagram](https://img.shields.io/badge/Platform-Instagram-E4405F?style=flat-square&logo=instagram&logoColor=white)](https://www.instagram.com/)
[![X / Twitter](https://img.shields.io/badge/Platform-X%20%2F%20Twitter-000000?style=flat-square&logo=x&logoColor=white)](https://twitter.com/)
[![LinkedIn](https://img.shields.io/badge/Platform-LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

---

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [The Problem We Solve](#-the-problem-we-solve)
- [Key Features](#-key-features)
- [How It Works](#-how-it-works)
- [Supported Platforms](#-supported-platforms)
- [Content Generation Pipeline](#-content-generation-pipeline)
- [Scheduling & Auto-Posting](#-scheduling--auto-posting)
- [System Architecture](#-system-architecture)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Social Media OAuth Setup](#-social-media-oauth-setup)
- [API Reference](#-api-reference)
- [Future Enhancements](#-future-enhancements)
- [Contributors](#-contributors)
- [License](#-license)

---

## 🧭 About the Project

**Graphicon** is a full-stack AI-powered social media content automation platform that eliminates the gap between having an idea and having it live on your social channels. 

You type a single prompt. Graphicon generates a tailored **caption**, **image**, and **video** for each platform you choose — respecting the tone, format, and character limits of Instagram, X (Twitter), and LinkedIn — and then either posts it **immediately** or **schedules it** for your chosen date and time, all without you opening a single app.

> Built to help brands and creators minimize the delay between a product launch and the start of its marketing campaign.

---

## ❌ The Problem We Solve

| Pain Point | Impact |
|---|---|
| Writing different captions per platform is time-consuming | Brands delay campaigns or post inconsistent content |
| Designing matching images/videos requires extra tools | Teams need graphic designers for every post |
| Manual posting at optimal times is unreliable | Missed engagement windows, inconsistent presence |
| Switching between Instagram, X, and LinkedIn dashboards | Context-switching kills productivity |
| No unified scheduler that also generates content | Existing tools either generate OR schedule, not both |

### ✅ Graphicon's Answer

One prompt. Three platforms. Fully generated content. Posted on time — automatically.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🧠 AI Caption Generation | Platform-aware captions: hashtag-rich for Instagram, punchy for X, professional for LinkedIn |
| 🖼️ AI Image Generation | Text-to-image generation tailored to your prompt and brand context |
| 🎬 AI Video Generation | Short-form video clips generated from prompt and assets for Reels / Shorts / Stories |
| 📅 Scheduled Auto-Posting | Set a date and time — Graphicon posts automatically, no manual action needed |
| ⚡ Instant Posting | One-click immediate publish to selected platforms |
| 🔐 OAuth Social Account Linking | Securely connect Instagram, X, and LinkedIn — one-time setup, permanent automation |
| 🎯 Platform Selection | Choose which platforms to post to — mix and match per campaign |
| 👁️ Content Preview | Preview exactly how your post will look on each platform before publishing |
| 📊 Post History Dashboard | Track all published and scheduled posts with status and metadata |
| 🔄 Multi-Platform Formatting | Content is automatically resized, reformatted, and tone-adjusted per platform |

---

## 🔄 How It Works

The Graphicon flow is designed to be as frictionless as possible:

```
Step 1 ──► Enter your prompt
           "Launch post for our new sustainable sneaker collection"

Step 2 ──► Select target platforms
           ☑ Instagram   ☑ X (Twitter)   ☑ LinkedIn

Step 3 ──► Choose content types
           ☑ Caption   ☑ Image   ☑ Video

Step 4 ──► AI generates platform-optimized content
           • Instagram: Aesthetic caption + hashtags + square image + Reel
           • X: Punchy 280-char tweet + 16:9 image
           • LinkedIn: Professional copy + banner image

Step 5 ──► Preview & optionally edit

Step 6 ──► Choose posting mode
           ⚡ Post Now   OR   📅 Schedule for later

Step 7 ──► Done. Graphicon handles the rest.
```

---

## 🌐 Supported Platforms

### 📸 Instagram
- Caption with platform-optimized hashtags (up to 30)
- Square (1:1), Portrait (4:5), or Story (9:16) image formats
- Reels-compatible short video clips
- Auto-post via Instagram Graph API

### 🐦 X (Twitter)
- 280-character tweet with relevant hashtags and mentions
- 16:9 image attachment
- Short video (up to 2m 20s) support
- Auto-post via X API v2

### 💼 LinkedIn
- Professional long-form or short-form post copy
- Banner/landscape image (1200×627px)
- Native video post support
- Auto-post via LinkedIn API

| Platform | Caption | Image | Video | Scheduling | Instant Post |
|---|---|---|---|---|---|
| Instagram | ✅ | ✅ | ✅ | ✅ | ✅ |
| X (Twitter) | ✅ | ✅ | ✅ | ✅ | ✅ |
| LinkedIn | ✅ | ✅ | ✅ | ✅ | ✅ |

---

## 🧠 Content Generation Pipeline

### 📝 Caption Generation

```
User Prompt
     │
     ▼
  LLM Processing
  (GPT / Gemini / Claude)
     │
     ├──► Instagram Caption
     │    • Engaging hook line
     │    • Body copy (story/value)
     │    • CTA
     │    • 15–30 niche hashtags
     │
     ├──► X / Twitter Post
     │    • Hook within 280 chars
     │    • Thread option for longer content
     │    • 2–5 targeted hashtags
     │
     └──► LinkedIn Post
          • Professional opening
          • Value-driven body (200–500 words)
          • Insight or takeaway
          • 3–5 industry hashtags
```

### 🖼️ Image Generation

```
User Prompt + Platform Context
          │
          ▼
   Text-to-Image Model
   (DALL·E / Stable Diffusion)
          │
          ├──► Instagram: Square 1080×1080px
          ├──► X: Landscape 1200×675px
          └──► LinkedIn: Banner 1200×627px
```

### 🎬 Video Generation

```
User Prompt + Generated Image Assets
          │
          ▼
   Video Generation Pipeline
   (AnimateDiff / Runway / Custom)
          │
          ├──► Instagram Reel: 9:16, 15–30s
          ├──► X Video: 16:9, up to 140s
          └──► LinkedIn Video: 16:9, up to 10min
```

---

## 📅 Scheduling & Auto-Posting

Graphicon supports two posting modes:

### ⚡ Instant Post
1. Content is generated and previewed
2. User clicks **"Post Now"**
3. Graphicon calls the respective platform API immediately
4. Confirmation and post URL returned to dashboard

### 🗓️ Scheduled Post
1. Content is generated and previewed
2. User selects date + time + timezone
3. Post is queued in the scheduler
4. A background job fires at the exact scheduled time
5. Platform API is called automatically — no user action required
6. Dashboard updates with live post status

```
┌──────────────────────────────────────────────────────────┐
│                   SCHEDULER ENGINE                       │
│                                                          │
│  Post Queue (DB)                                         │
│  ┌──────────────────────────────────────────────────┐   │
│  │  ID  │  Platform  │  Content  │  Schedule Time  │  │
│  │  001 │ Instagram  │  [...]    │  2026-04-01 09:00│  │
│  │  002 │ X          │  [...]    │  2026-04-01 09:00│  │
│  │  003 │ LinkedIn   │  [...]    │  2026-04-02 11:00│  │
│  └──────────────────────────────────────────────────┘   │
│                                                          │
│  Background Worker (Cron / Celery / APScheduler)         │
│  → Polls queue every minute                              │
│  → Fires API calls at scheduled time                     │
│  → Updates post status: Queued → Posting → Published     │
└──────────────────────────────────────────────────────────┘
```

**Scheduling Features:**
- Timezone-aware scheduling
- Best-time-to-post suggestions (per platform engagement data)
- Edit or cancel scheduled posts before they fire
- Retry logic for failed API calls
- Post status tracking: `Queued` → `Processing` → `Published` / `Failed`

---

## 🏗️ System Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                        USER INTERFACE                            │
│                     (React + Vite SPA)                           │
│                                                                  │
│   ┌────────────────┐  ┌────────────────┐  ┌──────────────────┐  │
│   │  Prompt Input  │  │ Platform Select│  │  Preview Panel   │  │
│   │  & Content     │  │  & Post Mode   │  │  (Per-platform   │  │
│   │  Type Picker   │  │  (Now/Schedule)│  │   live preview)  │  │
│   └────────┬───────┘  └───────┬────────┘  └──────────────────┘  │
└────────────┼──────────────────┼──────────────────────────────────┘
             │    REST API      │
             ▼                  ▼
┌──────────────────────────────────────────────────────────────────┐
│                         BACKEND LAYER                            │
│                    (Python — FastAPI / Flask)                     │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                    API GATEWAY                          │    │
│  └────────┬──────────────────┬───────────────┬────────────┘    │
│           │                  │               │                  │
│  ┌────────▼──────┐  ┌────────▼──────┐  ┌────▼──────────────┐  │
│  │ CONTENT       │  │  SCHEDULER    │  │  SOCIAL AUTH      │  │
│  │ GENERATION    │  │  ENGINE       │  │  SERVICE          │  │
│  │ SERVICE       │  │               │  │                   │  │
│  │ • Caption LLM │  │ • Post Queue  │  │ • Instagram OAuth │  │
│  │ • Image Gen   │  │ • Cron Worker │  │ • X OAuth 2.0     │  │
│  │ • Video Gen   │  │ • Retry Logic │  │ • LinkedIn OAuth  │  │
│  │ • Formatter   │  │ • Status Track│  │ • Token Storage   │  │
│  └────────┬──────┘  └────────┬──────┘  └────┬──────────────┘  │
└───────────┼──────────────────┼───────────────┼──────────────────┘
            │                  │               │
            ▼                  ▼               ▼
┌──────────────────────────────────────────────────────────────────┐
│                  EXTERNAL SERVICES & DATA LAYER                  │
│                                                                  │
│  ┌──────────────────┐  ┌───────────────┐  ┌──────────────────┐  │
│  │   AI MODELS      │  │   DATABASE    │  │  PLATFORM APIs   │  │
│  │                  │  │               │  │                  │  │
│  │ • OpenAI GPT     │  │ • Post Queue  │  │ • Instagram      │  │
│  │ • DALL·E / SD    │  │ • User Tokens │  │   Graph API      │  │
│  │ • Video Gen API  │  │ • Post History│  │ • X API v2       │  │
│  │ • Prompt Router  │  │ • Schedules   │  │ • LinkedIn API   │  │
│  └──────────────────┘  └───────────────┘  └──────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

### 🌐 Frontend
| Technology | Purpose |
|---|---|
| React.js | UI component library and SPA framework |
| Vite | Lightning-fast build tool and dev server |
| JavaScript (ES6+) | Core language (84.9% of codebase) |
| HTML5 / CSS3 | Markup and styling |
| ESLint | Code quality and linting |

### ⚙️ Backend
| Technology | Purpose |
|---|---|
| Python | Backend services and AI integrations (14.4% of codebase) |
| FastAPI / Flask | REST API server |
| APScheduler / Celery | Background job scheduling for auto-posting |

### 🤖 AI & Content Generation
| Technology | Purpose |
|---|---|
| OpenAI GPT | Caption and copy generation |
| DALL·E / Stable Diffusion | Text-to-image generation |
| Video Generation API | Short-form video creation |
| Prompt Engineering Layer | Platform-specific prompt formatting |

### 🔐 Social Media APIs
| Platform | API Used |
|---|---|
| Instagram | Instagram Graph API (Meta) |
| X (Twitter) | X API v2 (OAuth 2.0 PKCE) |
| LinkedIn | LinkedIn Marketing API + Share API |

### 🗄️ Storage & Infrastructure
| Technology | Purpose |
|---|---|
| Database (SQL/NoSQL) | Post queue, user tokens, history |
| Cloud Storage | Generated images and video assets |
| OAuth 2.0 | Secure social media account linking |

---

## 📁 Project Structure

```
Graphicon/
│
├── src/                          # React frontend source
│   ├── components/
│   │   ├── PromptInput/          # Main prompt input + content type selector
│   │   ├── PlatformSelector/     # Instagram / X / LinkedIn toggle
│   │   ├── PreviewPanel/         # Per-platform content preview cards
│   │   ├── Scheduler/            # Date-time picker + schedule controls
│   │   ├── PostHistory/          # Dashboard of past & scheduled posts
│   │   └── AccountConnect/       # OAuth login flow per platform
│   │
│   ├── pages/
│   │   ├── Home.jsx              # Landing / prompt entry page
│   │   ├── Dashboard.jsx         # User's post history and analytics
│   │   ├── Connect.jsx           # Social account OAuth connection page
│   │   └── Preview.jsx           # Full content preview before posting
│   │
│   ├── services/
│   │   ├── api.js                # Axios/fetch calls to backend
│   │   ├── auth.js               # OAuth token management
│   │   └── formatter.js          # Platform-specific content formatting
│   │
│   └── main.jsx                  # React app entry point
│
├── app/                          # Python backend
│   ├── main.py                   # FastAPI / Flask app entry point
│   ├── routes/
│   │   ├── generate.py           # Content generation endpoints
│   │   ├── publish.py            # Immediate and scheduled post endpoints
│   │   └── auth.py               # OAuth callback handlers
│   │
│   ├── services/
│   │   ├── caption_service.py    # LLM-powered caption generation
│   │   ├── image_service.py      # Text-to-image generation
│   │   ├── video_service.py      # Video generation pipeline
│   │   ├── scheduler_service.py  # Post queue + background worker
│   │   └── platform_clients/
│   │       ├── instagram.py      # Instagram Graph API client
│   │       ├── twitter.py        # X API v2 client
│   │       └── linkedin.py       # LinkedIn API client
│   │
│   └── models/
│       ├── post.py               # Post data model
│       └── schedule.py           # Schedule data model
│
├── index.html                    # Vite entry HTML
├── vite.config.js                # Vite build configuration
├── eslint.config.js              # ESLint rules
├── package.json                  # Node dependencies
├── package-lock.json
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ and `npm`
- **Python** 3.10+
- API keys for: OpenAI (or equivalent), Instagram Graph API, X API v2, LinkedIn API

---

### 1. Clone the Repository

```bash
git clone https://github.com/Devarshidesale/Graphicon.git
cd Graphicon
```

---

### 2. Set Up Environment Variables

Create a `.env` file in the root and in the `app/` directory:

```env
# .env (Frontend)
VITE_API_BASE_URL=http://localhost:8000

# app/.env (Backend)
OPENAI_API_KEY=your_openai_api_key

# Instagram
INSTAGRAM_APP_ID=your_instagram_app_id
INSTAGRAM_APP_SECRET=your_instagram_app_secret

# X / Twitter
TWITTER_CLIENT_ID=your_twitter_client_id
TWITTER_CLIENT_SECRET=your_twitter_client_secret

# LinkedIn
LINKEDIN_CLIENT_ID=your_linkedin_client_id
LINKEDIN_CLIENT_SECRET=your_linkedin_client_secret

# Database
DATABASE_URL=your_database_url

# App
SECRET_KEY=your_jwt_secret_key
```

---

### 3. Install Frontend Dependencies

```bash
npm install
```

---

### 4. Install Backend Dependencies

```bash
cd app
pip install -r requirements.txt
```

---

### 5. Run the Backend Server

```bash
# From the app/ directory
uvicorn main:app --reload --port 8000

# Or if using Flask:
python main.py
```

---

### 6. Run the Frontend Dev Server

```bash
# From the project root
npm run dev
```

The app will be live at: `http://localhost:5173`

---

### 7. Build for Production

```bash
npm run build
```

Output goes to `dist/` — deploy to Vercel, Netlify, or any static host.

---

## 🔐 Social Media OAuth Setup

Graphicon uses OAuth 2.0 to securely access your social accounts. You grant permission once and Graphicon stores an access token to post on your behalf.

### Instagram (Meta Graph API)
1. Create an app at [developers.facebook.com](https://developers.facebook.com)
2. Add the **Instagram Graph API** product
3. Request permissions: `instagram_basic`, `instagram_content_publish`
4. Add your `INSTAGRAM_APP_ID` and `INSTAGRAM_APP_SECRET` to `.env`
5. In the Graphicon dashboard, click **Connect Instagram** → Complete OAuth flow

### X (Twitter) API v2
1. Apply for a developer account at [developer.twitter.com](https://developer.twitter.com)
2. Create a project and app, enable **OAuth 2.0**
3. Set permissions to **Read and Write**
4. Add `TWITTER_CLIENT_ID` and `TWITTER_CLIENT_SECRET` to `.env`
5. In the Graphicon dashboard, click **Connect X** → Complete OAuth flow

### LinkedIn
1. Create an app at [linkedin.com/developers](https://www.linkedin.com/developers/)
2. Request permissions: `w_member_social`, `r_liteprofile`
3. Add `LINKEDIN_CLIENT_ID` and `LINKEDIN_CLIENT_SECRET` to `.env`
4. In the Graphicon dashboard, click **Connect LinkedIn** → Complete OAuth flow

> 🔒 **Security note:** All OAuth tokens are encrypted before storage. Graphicon never stores your social media passwords — only scoped API access tokens that can be revoked at any time from your social account's security settings.

---

## 📡 API Reference

### Generate Content

```http
POST /api/generate
Content-Type: application/json

{
  "prompt": "Launch post for our new sustainable sneaker collection",
  "platforms": ["instagram", "twitter", "linkedin"],
  "content_types": ["caption", "image", "video"]
}
```

**Response:**
```json
{
  "job_id": "gen_abc123",
  "content": {
    "instagram": {
      "caption": "Step into sustainability 🌿👟 ...",
      "hashtags": ["#SustainableFashion", "#EcoSneakers", "..."],
      "image_url": "https://storage.graphicon.io/img/gen_abc123_ig.png",
      "video_url": "https://storage.graphicon.io/vid/gen_abc123_ig.mp4"
    },
    "twitter": {
      "tweet": "We just dropped something the planet will thank you for 🌍👟 ...",
      "image_url": "https://storage.graphicon.io/img/gen_abc123_tw.png"
    },
    "linkedin": {
      "post": "Proud to introduce our most sustainable collection yet ...",
      "image_url": "https://storage.graphicon.io/img/gen_abc123_li.png"
    }
  }
}
```

---

### Post Immediately

```http
POST /api/post/now
Content-Type: application/json

{
  "job_id": "gen_abc123",
  "platforms": ["instagram", "linkedin"]
}
```

**Response:**
```json
{
  "status": "published",
  "results": {
    "instagram": { "status": "success", "post_url": "https://instagram.com/p/..." },
    "linkedin":  { "status": "success", "post_url": "https://linkedin.com/posts/..." }
  }
}
```

---

### Schedule a Post

```http
POST /api/post/schedule
Content-Type: application/json

{
  "job_id": "gen_abc123",
  "platforms": ["instagram", "twitter", "linkedin"],
  "scheduled_at": "2026-04-01T09:00:00",
  "timezone": "Asia/Kolkata"
}
```

**Response:**
```json
{
  "schedule_id": "sched_xyz789",
  "status": "queued",
  "scheduled_at": "2026-04-01T09:00:00+05:30",
  "platforms": ["instagram", "twitter", "linkedin"]
}
```

---

### Get Post History

```http
GET /api/posts?status=all&limit=20&offset=0
```

**Response:**
```json
{
  "posts": [
    {
      "id": "post_001",
      "prompt": "Launch post for our new sneaker...",
      "platforms": ["instagram", "linkedin"],
      "status": "published",
      "published_at": "2026-03-20T09:00:00Z",
      "post_urls": { "instagram": "...", "linkedin": "..." }
    }
  ],
  "total": 42
}
```

---

## 🔮 Future Enhancements

| Feature | Description |
|---|---|
| 📊 Engagement Analytics | Track likes, shares, comments, and reach per post from within Graphicon |
| 🤖 Best Time to Post AI | ML model to suggest optimal posting windows based on your audience's activity |
| 🎨 Brand Kit | Upload brand colors, fonts, and logo — all generated content auto-applies your identity |
| 🔁 Recurring Campaigns | Set a campaign to post weekly/monthly with fresh AI-generated variations |
| 🧵 Thread Generation | Auto-generate Twitter/X threads and LinkedIn carousels from a single prompt |
| 📱 Mobile App | React Native app for on-the-go content generation and approval |
| 🌍 Multilingual Posts | Generate captions in multiple languages simultaneously |
| 👥 Team Collaboration | Multi-user workspace with approval workflows before posts go live |
| 📁 Asset Library | Store and reuse approved images, videos, and caption templates |
| 🔗 Facebook & TikTok | Expand platform support to Facebook Pages and TikTok |
| 🧠 Brand Voice Training | Fine-tune the LLM on your past posts to match your unique tone |

---

## 👨‍💻 Contributors

| Name | GitHub |
|---|---|
| **Devarshi Desale** | [@Devarshidesale](https://github.com/Devarshidesale) |

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for full details.

---

## 🙌 Acknowledgements

- [OpenAI](https://openai.com/) — GPT & DALL·E APIs for caption and image generation
- [Meta for Developers](https://developers.facebook.com/) — Instagram Graph API
- [X Developer Platform](https://developer.twitter.com/) — X API v2
- [LinkedIn Developers](https://developer.linkedin.com/) — LinkedIn Share & Marketing APIs
- [Vite](https://vitejs.dev/) — Frontend build tooling
- [React](https://react.dev/) — UI framework

---

<p align="center">
  ⭐ If Graphicon saves you hours of manual posting, give it a star!<br/>
  Built to close the gap between ideas and impact — instantly.
</p>
