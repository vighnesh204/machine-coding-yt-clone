 ## Machine Coding Round — Approach

### 1. Requirement Clarification
Before writing any code, clarify the scope:
- What features need to be built?
- What's in scope vs. out of scope for the given time?
- Any specific edge cases or user flows to handle?

### 2. Tech Stack Discussion
Once requirements are clear, decide on the stack — and **justify every choice**:

| Decision | Choice | Why |
|---|---|---|
| Bundler | Vite | Faster dev server, quick HMR, minimal config |
| Library | React + Tailwind CSS | Component-driven UI, utility-first styling for speed |
| Language | JavaScript / TypeScript | Depends on time constraint & type-safety needs |
| State Management | Redux / Context API | Redux for complex/shared state, Context for simpler local state |
| Routing | React Router DOM | Standard for client-side routing in React apps |

> 💡 Interviewers care more about *why* you picked something than the pick itself.

### 3. Planning
- Break the app into components/modules
- Decide folder structure
- Identify reusable components
- Plan state flow (what lives where)

---
*(To be continued — implementation notes coming next)*


<!-- In Machine coding round => 

Requirement Clarification =>

Discuss what features are you going to develop

then you will discuss the tech stack
=> what bundler ? => Vite
=> React with tailwindcss
=> JavaScript or TypeScript
=> Redux or ContextAPIs
=> React router dom for routing

=> For every tech stack you have a proper justification


Planning -->