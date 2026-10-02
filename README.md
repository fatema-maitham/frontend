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
- Hero headline rotates through places (clinic, bank, salon...), and an industries strip drifts under it.
- "For businesses" uses stacking cards: each card pins as you scroll and the earlier ones shrink back underneath (CSS scroll-driven animation, no scroll listeners). On phones the cards simply flow.
- The hero ticket is a live demo: the queue counts down by itself, and visitors can drag the ticket. It springs back using the small physics helper in `src/lib/spring.js`.
- Respects "reduce motion", "reduce transparency" and "increase contrast" settings.
- The photo is a placeholder from picsum.photos. Replace it (see the `TODO` comment in `Moment.jsx`).

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
    Hero.jsx             rotating place name
    LiveTicket.jsx       interactive ticket demo
    Industries.jsx       moving strip of places
    Steps.jsx            how it works
    Business.jsx         stacking scroll cards
    CallNext.jsx         demo: call next customer
    HoursDemo.jsx        demo: branch hours and services
    AnnounceDemo.jsx     demo: phone notifications
    ApprovalDemo.jsx     demo: review steps
    Moment.jsx           full-width photo
    Closing.jsx
    Footer.jsx
```
