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

- Light and dark mode follow the visitor's system setting.
- Uses the system font (San Francisco on Apple devices).
- Icons: Phosphor icons via `react-icons/pi`.
- The hero ticket is a live demo: the queue counts down by itself, and visitors can drag the ticket. It springs back using the small physics helper in `src/lib/spring.js`.
- Respects "reduce motion", "reduce transparency" and "increase contrast" settings.
- The two photos are placeholders from picsum.photos. Replace them (see the `TODO` comments in `Moment.jsx` and `Business.jsx`).

## Structure

```
src/
  main.jsx               entry point
  App.jsx                page layout
  index.css              design tokens + all styles
  lib/
    spring.js            spring physics for the draggable ticket
    useReducedMotion.js
  components/
    Navbar.jsx
    Logo.jsx
    Hero.jsx
    LiveTicket.jsx       interactive ticket demo
    Steps.jsx            how it works
    Moment.jsx           full-width photo
    Business.jsx         for businesses (bento grid)
    CallNext.jsx         interactive "call next" demo
    Closing.jsx
    Footer.jsx
```
