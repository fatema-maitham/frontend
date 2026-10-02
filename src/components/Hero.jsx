import { useEffect, useState } from "react";
import { PiArrowRight } from "react-icons/pi";
import LiveTicket from "./LiveTicket.jsx";
import { useReducedMotion } from "../lib/useReducedMotion.js";

const PLACES = ["clinic.", "bank.", "salon.", "pharmacy.", "restaurant."];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  // Rotate the place name; stays on the first one if motion is reduced.
  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % PLACES.length), 2400);
    return () => clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1 className="display" aria-label="Skip the line at the clinic, the bank, the salon and more.">
            <span aria-hidden="true">
              Skip the line
              <br />
              at the{" "}
              <span className="rotating-word swap" key={index}>
                {PLACES[index]}
              </span>
            </span>
          </h1>
          <p className="hero-lead">
            Take a ticket from your phone, watch your place move live, and
            arrive when it's your turn.
          </p>
          <div className="hero-actions">
            <a href="/register" className="btn btn-primary btn-lg">
              Join a queue
              <PiArrowRight aria-hidden="true" />
            </a>
            <a href="#business" className="btn btn-secondary btn-lg">
              Register your business
            </a>
          </div>
        </div>

        <LiveTicket />
      </div>
    </section>
  );
}
