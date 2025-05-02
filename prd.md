---

# 🧾 Technical Product Requirements Document (PRD)

## 📌 Title

**Pathwise: AI-Powered Career Assistant Sidebar for LinkedIn**

---

## 🧭 Overview

**Pathwise** enhances the LinkedIn user interface by embedding a floating AI assistant that offers **real-time career insights** based on profile data. It provides:

* A concise AI-generated **career summary**
* **Skill suggestions** based on current role and goals
* **Outreach message templates**
* Curated **job match cards** (mocked)

This is an **interactive enhancement layer**, not a redesign, and is scoped for rapid implementation using **React + Tailwind in Cursor** with full deployability via Vercel.

---

## 🎯 Goals

| Goal                         | Description                                                                 |
| ---------------------------- | --------------------------------------------------------------------------- |
| **UI Mimicry**               | Replicate LinkedIn profile visuals with pixel accuracy                      |
| **Functional Enhancement**   | Add sidebar with multiple interactive and content sections                  |
| **Fast Response Simulation** | Use mock AI with delay-based responses                                      |
| **Developer Efficiency**     | Componentized, readable, portable TypeScript codebase for solo dev use case |

---

## 🧩 Functional Requirements

### 1. Profile Replica Component

* **Fields**: `name`, `title`, `location`, `experience[]`
* **Styling**: Use `grid` and `flex` to mirror LinkedIn card spacing
* **Interactivity**: None required for profile

### 2. Toggleable Sidebar

* **Position**: Right-aligned (absolute/fixed)
* **Initial State**: Hidden
* **Trigger**: Floating toggle button (bottom right)
* **Animation**: `slide-in` + `fade` (Tailwind `transition` + `translate-x`)

### 3. AI Summary Section

* **Label**: “AI Career Summary”
* **Data Source**: `mockAi.ts → summary`
* **Render Delay**: 1.5s on first open (simulates async generation)

### 4. Skill Suggestion Section

* **Label**: “Suggested Next Skill”
* **Data Source**: `mockAi.ts → skill`
* **Hover Tooltip**: Optional—show learning rationale

### 5. Outreach Message Generator

* **Label**: “Outreach Message”
* **Data Source**: `mockAi.ts → outreach`
* **Features**:

  * “Copy” button (uses `navigator.clipboard`)
  * Editable textarea (pre-populated)

### 6. Job Match Cards

* **Label**: “Relevant Job Matches”
* **Data**: Hardcoded array of job listings (`mockAi.ts → jobs[]`)
* **Card Fields**: Title, company (optional), link

---

## 🛠️ Technical Architecture

### File Structure

```
/src
  ├── App.tsx
  ├── components/
  │   ├── Profile.tsx
  │   ├── Sidebar.tsx
  │   ├── SidebarSection.tsx
  │   ├── ToggleButton.tsx
  │   └── JobCard.tsx
  ├── data/
  │   ├── mockProfile.ts
  │   └── mockAi.ts
  ├── utils/
  │   └── delay.ts
  ├── styles/
  │   └── globals.css
```

---

### Component Contracts

#### `Profile.tsx`

```ts
interface ProfileData {
  name: string;
  title: string;
  location: string;
  experience: { role: string; company: string; duration: string }[];
}
```

#### `Sidebar.tsx`

* Accepts `isOpen` prop and renders:

  * Summary
  * Skill Suggestion
  * Message
  * Jobs
* Handles delayed mock loading using `useEffect(() => setTimeout(...), [isOpen])`

#### `SidebarSection.tsx`

```ts
type Props = {
  title: string;
  content: React.ReactNode;
};
```

#### `ToggleButton.tsx`

* Positioned `fixed bottom-4 right-4`
* Toggles sidebar state using `useState`

#### `JobCard.tsx`

```ts
interface Job {
  title: string;
  link: string;
}
```

---

### Data Schema

#### `mockAi.ts`

```ts
export const mockAi = {
  summary: "You’re a skilled frontend developer with a strong React background and UI design experience.",
  skill: "Learn GraphQL to become a full-stack engineer.",
  outreach: "Hi [Name], I admire your work in web development. I'd love to connect and collaborate!",
  jobs: [
    { title: "Frontend Developer at Stripe", link: "#" },
    { title: "React Engineer – Remote", link: "#" },
  ]
};
```

---

## 🧪 Simulated Logic Flow

```mermaid
graph TD
A[Page Load] --> B[Render Profile UI]
B --> C[User Clicks 'Open AI Assistant']
C --> D[Sidebar slides in]
D --> E[setTimeout (1.5s)]
E --> F[Load mock AI content]
F --> G[Render Summary, Skills, Message, Jobs]
```

---

## 📱 Responsiveness

| Device  | Behavior                                                           |
| ------- | ------------------------------------------------------------------ |
| Desktop | Sidebar slides in from right, fixed height and width               |
| Mobile  | Sidebar becomes bottom drawer or modal (optional fallback for now) |

---

## 🎨 Styling System

* **Base**: Tailwind CSS
* **Typography**: System fonts (`text-sm`, `text-lg`, `font-semibold`)
* **Spacing**: `p-4`, `gap-2`, `gap-4`, `rounded-lg`
* **Colors**: Match LinkedIn’s white/gray/blue palette
* **Icons**: Use Lucide (optional: `Copy`, `Close`, `Expand`)

---

## ⏱️ Timeline (60–75 Minutes in Cursor)

| Time (min) | Task                                       |
| ---------- | ------------------------------------------ |
| 0–10       | Project init, Tailwind setup, layout grid  |
| 10–20      | Build profile component with mock data     |
| 20–30      | Create sidebar toggle + base component     |
| 30–40      | Add AI sections with mock content/delay    |
| 40–50      | Add animation, polish styles, test toggles |
| 50–60      | Deploy via Vercel, commit to GitHub        |
| 60–75      | Stretch: add copy button, editable message |

---

## ✅ Acceptance Criteria

* [ ] Sidebar toggle button works
* [ ] Sidebar animates in/out correctly
* [ ] AI content loads with 1.5s delay
* [ ] All sections render accurate mock data
* [ ] Styling mimics LinkedIn's look and feel
* [ ] Deployed link + GitHub repo submitted

---

## 🔄 Stretch Features (Optional for Bonus)

* [ ] DOM-scrape real LinkedIn content (injected via browser extension)
* [ ] Actual GPT integration via OpenAI API (if permitted)
* [ ] Theme switcher (light/dark)
* [ ] Save message templates locally

---

Would you like me to now generate the actual component code for this PRD in a ready-to-run React app structure?
