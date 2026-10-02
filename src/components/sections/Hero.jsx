import { useEffect, useState } from "react";
import { PiArrowRight, PiDeviceMobile, PiGift, PiWifiHigh } from "react-icons/pi";
import Phone from "../Phone.jsx";
import { useReducedMotion } from "../../lib/useReducedMotion.js";

const PLACES = ["clinic", "bank", "salon", "ministry", "pharmacy"];

// Types a place name, waits, deletes it, moves to the next one.
function useTyping(words, reduce) {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(reduce ? words[0].length : 0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const word = words[index];
    let delay = deleting ? 45 : 90;
    if (!deleting && length === word.length) delay = 1600;
    if (deleting && length === 0) delay = 300;

    const timer = setTimeout(() => {
      if (!deleting && length === word.length) setDeleting(true);
      else if (deleting && length === 0) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else setLength((l) => l + (deleting ? -1 : 1));
    }, delay);
    return () => clearTimeout(timer);
  }, [index, length, deleting, words, reduce]);

  return words[index].slice(0, length);
}

const perks = [
  { icon: PiGift, label: "Free for customers" },
  { icon: PiDeviceMobile, label: "No app to download" },
  { icon: PiWifiHigh, label: "Live updates" },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const typed = useTyping(PLACES, reduce);

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1 aria-label="The easy way to skip the line at the clinic, bank, salon, ministry or pharmacy">
            <span aria-hidden="true">
              The easy way to skip the line at the{" "}
              <span className="typed">
                {typed}
                <span className="caret" />
              </span>
            </span>
          </h1>
          <p className="hero-text">
            QLess is a virtual queue. Take a ticket from your phone, see your
            place move live, and arrive right when it's your turn. No crowded
            waiting rooms, no lost time.
          </p>
          <div className="hero-actions">
            <a href="/register" className="pill pill-red">
              Join a queue
              <PiArrowRight aria-hidden="true" />
            </a>
            <a href="#business" className="pill pill-outline">
              For businesses
            </a>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="blob" />
          <Phone className="hero-phone">
            <p className="hp-place">City Clinic</p>
            <p className="hp-service">General consultation</p>
            <div className="hp-ticket">
              <span>Your ticket</span>
              <strong>A-27</strong>
            </div>
            <div className="hp-row">
              <div>
                <span>Ahead of you</span>
                <strong>3</strong>
              </div>
              <div>
                <span>Wait</span>
                <strong>9 min</strong>
              </div>
            </div>
          </Phone>
          <div className="float-chip chip-a">
            <span className="chip-dot" />
            You're next in line
          </div>
          <div className="float-chip chip-b">Now serving A-26</div>
        </div>

        <ul className="perks">
          {perks.map(({ icon: Icon, label }) => (
            <li key={label}>
              <span className="perk-icon">
                <Icon aria-hidden="true" />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
