# 🤖 AI Digest

**AI Digest** is an intelligent dashboard that discovers, aggregates, and summarizes the latest AI tools, models, and research papers from popular platforms like GitHub, Hugging Face, and ArXiv. It helps developers, researchers, and enthusiasts stay up-to-date with cutting-edge advancements in AI — all in one place.

## 📌 Features

* 🔍 Discover latest AI models from GitHub, Hugging Face, and ArXiv
* 🧠 Summarized digests of new research and tools
* 📨 Email subscription for weekly or real-time AI digests
* 📈 Visual trends and analytics for tools/models
* 🗂️ Advanced search and filter by domain, date, and source
* 💬 Clean, responsive UI with modals for detailed view

## 💠 Tech Stack

* **Frontend:** React.js, Tailwind CSS, Framer Motion
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Email:** Nodemailer / Mailchimp API (optional)
* **Web Scraping/API:** GitHub API, Hugging Face API, ArXiv scraping or API

## 🚀 Getting Started

### Prerequisites

* Node.js
* MongoDB
* GitHub/Hugging Face/ArXiv API access (if using APIs)
* Mailchimp (optional for newsletters)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/ai-digest.git
   cd ai-digest
   ```

2. **Install backend dependencies**

   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies**

   ```bash
   cd ../client
   npm install
   ```

4. **Configure `.env`**

   In both `client` and `server`, create a `.env` file and add:

   ```env
   MONGO_URI=your_mongo_connection
   GITHUB_TOKEN=your_github_api_token
   HF_API_KEY=your_huggingface_token
   ```

5. **Run the app**

   ```bash
   # Run backend
   cd server
   npm start

   # In a new terminal, run frontend
   cd client
   npm start
   ```

6. Open in your browser:

   ```
   http://localhost:3000
   ```

## 📸 Screenshots

> Add screenshots or gifs showing:
>
> * AI model cards
> * Modal detail view
> * Digest subscription UI
> * Trend visualization

## ✨ Future Features

* Bookmark/favorite AI models
* RSS feed for updates
* Compare models side by side
* Browser extension for quick digest view
* Dark mode

```
Built with 💡 and ☕ by [Vaibhav Bhargav] – AI made digestible.
```
