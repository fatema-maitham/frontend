# QLess Frontend

React (Vite) frontend for QLess, the virtual queue platform.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

During development, requests to `/api` are forwarded to the FastAPI backend at `http://localhost:8000` (see `vite.config.js`).

## Landing page: a story told by scrolling

Instead of hero, features, features, call to action, the page shows what QLess does while you scroll:

standing in line → join QLess → leave the line → watch your place move → get notified → your turn → the business side → get started

| Scene | What scrolling does |
| --- | --- |
| 1. Hero | The queue moves up; your position counts down from #12 to "You're next" |
| 2. Leave the line | People in a physical line turn into phones, one by one |
| 3. Your queue follows you | The phone's position goes #7 → #4 and the wait 18 → 3 min |
| 4. Real-time | People ahead are served; "Now serving" catches up to you |
| 5. Notifications | "You're getting close" → "You're next" → "It's your turn!" pops out of the phone |
| 6. For businesses | A customer ticket expands into the staff dashboard, which keeps updating |
| 7. Final | Join → Wait remotely → Track → Get notified → Your turn, then one closing line |

### How it works

- Each scene is a tall `<section>` whose inner frame is `position: sticky`, so it stays on screen while you scroll through it (`src/components/Scene.jsx`).
- `src/lib/useScrollScene.js` measures how far you are through the scene and writes it as the CSS variable `--p` (0 to 1). Smooth movement is done in CSS with `--p`, so React does not re-render on every scroll frame. It also returns a `step` for text that changes in jumps (like #7 → #6).
- With "reduce motion" turned on, scenes are not pinned and each shows its key moment as a normal section.

### Colors

| Color | Use |
| --- | --- |
| Navy `#0f2b7f` | Page background |
| Cream `#f9eeb8` | Text (10.7:1 contrast on navy) |
| Red `#d62c32` | "You" moments and buttons, always as a fill with white text (red text on navy is too low contrast) |

## Structure

```
src/
  main.jsx
  App.jsx                    the order of the story
  index.css                  colors + all styles
  lib/
    useScrollScene.js        scroll progress for pinned scenes
    useReducedMotion.js
  components/
    Navbar.jsx
    Logo.jsx
    Footer.jsx
    Scene.jsx                pinned scroll section
    Phone.jsx                phone frame
    scenes/
      HeroScene.jsx
      LineScene.jsx
      PhoneScene.jsx
      LiveScene.jsx
      NotifyScene.jsx
      BusinessScene.jsx
      FinalScene.jsx
```
