---

> **Smarter Job Search. Personalized Career Insights. Right in Your LinkedIn Experience.**

---

### Better Linkedin

a browser-simulated enhancement that transforms the traditional LinkedIn interface into a **smart, AI-augmented career dashboard**.

This assistant lives in a collapsible right-side panel and provides:

* 🎯 Tailored job recommendations
* 🧠 Skill gap analysis (based on your profile vs target jobs)
* ✍️ Resume & headline rewrites
* 📊 Career path suggestions based on similar professionals

This project was built for the Level Up: Vibe Coding Hackathon 2025, focused on enhancing real-world websites with powerful features.

---

## 💡 Key Features

| Feature                            | Description                                                              |
| ---------------------------------- | ------------------------------------------------------------------------ |
| 🧠 **AI Career Assistant Sidebar** | Always-visible panel enhancing the LinkedIn UI                           |
| 📈 **Job Fit Analyzer**            | Matches your LinkedIn profile with job descriptions and scores alignment |
| 🕳️ **Skill Gap Highlighter**      | Detects and displays missing skills or certifications                    |
| ✍️ **Headline & Summary Rewriter** | AI-generated professional rewrites of your LinkedIn headline/about       |
| 🔮 **Career Path Predictor**       | Shows real paths taken by people like you using mock career graphing     |
| 📝 **One-click Resume Feedback**   | Upload your resume and get AI-powered suggestions (mocked in demo)       |

---

## 🎥 Demo

> [🔗 Live Demo on Vercel](https://better-linkedin.vercel.app/)

---

## 🛠 Tech Stack

* **Frontend**: React + TypeScript
* **Styling**: Tailwind CSS
* **UI Framework**: ShadCN (Radix UI)
* **AI**: OpenAI API (mocked with static JSON for hackathon)
* **Deployment**: Vercel
* **Icons**: Lucide

---

## 📂 Folder Structure

```
/src
  ├── components/
  │   ├── Sidebar.tsx            # Main assistant panel
  │   ├── SkillGap.tsx           # Skill analysis display
  │   ├── JobFitScore.tsx        # Job matching component
  │   ├── ResumeFeedback.tsx     # Upload + feedback UI
  │   └── HeadlineRewriter.tsx   # Rewriting section
  ├── data/
  │   ├── mockJobs.ts            # Sample job listings
  │   ├── mockProfile.ts         # Simulated LinkedIn profile data
  │   └── mockRecommendations.ts # Static AI suggestions
  ├── utils/
  │   └── aiUtils.ts             # Mocked GPT calls and logic
  ├── App.tsx
  └── index.tsx
```

---

## ⚙️ How to Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/dinxsh/better-linkedin
cd better-linkedin

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The app will open at [http://localhost:3000](http://localhost:3000)

---

## 🧪 Mock Data Details

Since real LinkedIn APIs are restricted, all data (profile, jobs, AI output) is **mocked with JSON files** and simulates real-world interaction.

| Mocked                        | Data Source              |
| ----------------------------- | ------------------------ |
| LinkedIn Profile              | `mockProfile.ts`         |
| Job Descriptions              | `mockJobs.ts`            |
| GPT Output (skills, rewrites) | `mockRecommendations.ts` |

---

## 🏁 Future Work

* Real-time LinkedIn scraping (with user consent)
* Live OpenAI API integration
* Browser extension version
* Resume parsing and smart alerts

---

## 🧑‍💻 Author

**Built by** [Dinesh Talwadker](https://www.linkedin.com/in/dineshtalwadker)
🎓 Hackathon submission for **Level Up: Vibe Coding Hackathon 2025**
🛠 Powered by [Cursor](https://cursor.sh) + [Vercel](https://vercel.com)

---

## 📜 License

MIT License — free to use and modify.