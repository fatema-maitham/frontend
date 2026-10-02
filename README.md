# QLess Frontend

React (Vite) frontend for QLess, the virtual queue platform.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

During development, requests to `/api` are forwarded to the FastAPI backend at `http://localhost:8000` (see `vite.config.js`).

## Structure

```
src/
  main.jsx            entry point
  App.jsx             page layout
  index.css           global styles
  components/
    Navbar.jsx
    Hero.jsx
    HowItWorks.jsx
    ForBusinesses.jsx
    Benefits.jsx
    Footer.jsx
```
