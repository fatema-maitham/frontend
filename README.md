# QLess Frontend

React (Vite) frontend for QLess, the virtual queue platform.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

During development, requests to `/api` are forwarded to the FastAPI backend at `http://localhost:8000` (see `vite.config.js`).

## Landing page

Light page with QLess colors only, readable text sizes (body text 16px and up).

| Section | What it does |
| --- | --- |
| Hero (navy block) | Live queue demo: people ahead get served every few seconds and your position counts down to "You're next" |
| How it works | 4 ticket-shaped steps; a red track fills as you scroll and each ticket lights up |
| Your queue follows you (pinned) | Scroll and the phone's position goes #7 to #4, wait 18 to 3 min |
| We'll tell you when (pinned, navy block) | Notifications build up to "It's your turn!" |
| For businesses (pinned) | A customer ticket expands into the staff dashboard |
| Places on QLess | Loads businesses from `GET /api/businesses` (loading, empty and error states included) |
| Closing | A big cream ticket with the sign-up buttons |

Pinned sections use `src/components/Scene.jsx` and `src/lib/useScrollScene.js`, which writes scroll progress to the CSS variable `--p` so the motion runs in CSS. With "reduce motion" on, nothing is pinned.

### Colors

| Color | Use |
| --- | --- |
| Navy `#0f2b7f` | Headings, hero and notification blocks |
| Red `#d62c32` | Main buttons and "you" moments, as a fill with white text |
| Cream `#f9eeb8` | Highlights on navy, queue demo card, closing ticket |

### Backend check

`src/services/businessService.js` calls `/api/businesses` and accepts a list or `{ items: [...] }`. Each card uses `name`, `category`, `description` and `city` (or `address`) if present. Adjust the field names if your backend uses different ones.

## Structure

```
src/
  main.jsx
  App.jsx                    page order
  index.css                  colors + all styles
  lib/
    useScrollScene.js        scroll progress (pinned scenes + normal sections)
    useReducedMotion.js
  components/
    Navbar.jsx
    Logo.jsx
    Footer.jsx
    QueueDemo.jsx            live queue in the hero
    Scene.jsx                pinned scroll section
    Phone.jsx                phone frame
    sections/
      Hero.jsx
      HowItWorks.jsx
      Places.jsx
      Closing.jsx
    scenes/
      PhoneScene.jsx
      NotifyScene.jsx
      BusinessScene.jsx
  services/
    businessService.js       GET /api/businesses
```
