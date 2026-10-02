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

Inspired by the clean, friendly feel of nextmeapp.com, built with QLess content and QLess colors only. No fake ratings, logos or statistics.

| Section | What it does |
| --- | --- |
| Hero | "The easy way to skip the line at the ___" types and deletes place names (clinic, bank, salon...). Phone ticket on a soft cream shape with floating chips. |
| Give people their time back | Staff waitlist cards with colored edges; a hand taps "Notify" and the last card turns to "Notified" (visitors can tap it too) |
| Features (navy band) | 6 feature cards that fade in one after another |
| How it works | 4 ticket-shaped steps, a red track fills as you scroll |
| Your queue follows you (pinned) | Scroll and the phone's position goes #7 to #4 |
| We'll tell you when (pinned) | Notifications build up to "It's your turn!" |
| Made for any place with a line | Industry grid |
| Places on QLess | Loads `GET /api/businesses` (loading, empty and error states) |
| Call to action (navy band) + footer | |

Font: Montserrat (Google Fonts, linked in `index.html`). Body text is 17px.

### Colors

| Color | Use |
| --- | --- |
| Navy `#0f2b7f` | Headings, features band, call to action, footer |
| Red `#d62c32` | Main buttons, typed word, "you" moments (fill with white text) |
| Cream `#f9eeb8` | Hero shape, icon circles, highlights on navy |

### Backend check

`src/services/businessService.js` calls `/api/businesses` and accepts a list or `{ items: [...] }`. Each card uses `name`, `category`, `description` and `city` (or `address`) if present.

## Structure

```
src/
  main.jsx
  App.jsx                    page order
  index.css                  colors + all styles
  lib/
    useScrollScene.js        scroll progress (pinned scenes + normal sections)
    useReveal.js             fade-in when sections scroll into view
    useReducedMotion.js
  components/
    Navbar.jsx
    Logo.jsx
    Footer.jsx
    WaitlistDemo.jsx         staff cards with the "Notify" tap
    Scene.jsx                pinned scroll section
    Phone.jsx                phone frame
    sections/
      Hero.jsx               typing headline
      Mission.jsx
      Features.jsx
      HowItWorks.jsx
      Industries.jsx
      Places.jsx
      CallToAction.jsx
    scenes/
      PhoneScene.jsx
      NotifyScene.jsx
  services/
    businessService.js       GET /api/businesses
```
