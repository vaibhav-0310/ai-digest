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
   git clone https://github.com/vaibhav-0310/ai-digest.git
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

## Screenshots
![image](https://github.com/user-attachments/assets/f9d608e8-622f-4d5c-8a65-f3bb7155febc)

![image](https://github.com/user-attachments/assets/3a603eba-1a8c-4939-b7f7-3d435d5e528c)

![image](https://github.com/user-attachments/assets/c02a9aa9-7764-484c-b20e-802b563d1fb0)

![image](https://github.com/user-attachments/assets/7d94e277-880c-4279-8469-e27abc603b26)

![image](https://github.com/user-attachments/assets/2a1a660a-8b80-4865-8d81-912ab3bc2bb5)






## ✨ Future Features

* Bookmark/favorite AI models
* RSS feed for updates
* Compare models side by side
* Browser extension for quick digest view
* Dark mode

```
Built with 💡 and ☕ by [Vaibhav Bhargav] – AI made digestible.
```
