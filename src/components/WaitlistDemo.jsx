import { useEffect, useState } from "react";
import { PiHandPointingFill, PiBellRinging } from "react-icons/pi";
import { useReducedMotion } from "../lib/useReducedMotion.js";

// Demo only: what staff see. The hand taps "Notify" on the last person.
const PEOPLE = [
  { name: "Ahmed K.", service: "Pharmacy pickup", time: "10:45", rank: "1st", wait: "Now" },
  { name: "Noor A.", service: "Lab tests", time: "10:48", rank: "2nd", wait: "4 min" },
  { name: "Sara M.", service: "General consultation", time: "10:52", rank: "3rd", wait: "9 min" },
];

const STATUS = {
  serving: "Serving",
  next: "Up next",
  waiting: "Waiting",
  notified: "Notified",
};

export default function WaitlistDemo() {
  // phase 0: waiting, 1: hand moves in, 2: tap, 3: notified
  const [phase, setPhase] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const delays = [1400, 900, 300, 2600];
    const timer = setTimeout(() => setPhase((p) => (p + 1) % 4), delays[phase]);
    return () => clearTimeout(timer);
  }, [phase, reduce]);

  const statusFor = (i) => {
    if (i === 0) return "serving";
    if (i === 1) return "next";
    return phase === 3 ? "notified" : "waiting";
  };

  return (
    <div className="waitlist" aria-label="Example staff waitlist">
      {PEOPLE.map((p, i) => {
        const status = statusFor(i);
        const isLast = i === PEOPLE.length - 1;
        return (
          <div key={p.name} className={`wl-card wl-${status} ${isLast ? "is-last" : ""}`}>
            <div className="wl-main">
              <p className="wl-name">{p.name}</p>
              <p className="wl-service">{p.service}</p>
              <p className="wl-time">{p.time}</p>
            </div>
            <div className="wl-side">
              <span className="wl-rank">{p.rank}</span>
              <span className={`wl-status swap`} key={status}>
                {STATUS[status]}
              </span>
              <span className="wl-wait">{p.wait}</span>
            </div>
            {isLast && (
              <button
                type="button"
                className={`wl-notify ${phase === 2 ? "is-pressed" : ""}`}
                onClick={() => setPhase(3)}
              >
                <PiBellRinging aria-hidden="true" />
                Notify
              </button>
            )}
          </div>
        );
      })}
      <PiHandPointingFill
        className={`wl-hand ${phase >= 1 && phase <= 2 ? "is-in" : ""} ${phase === 2 ? "is-tap" : ""}`}
        aria-hidden="true"
      />
    </div>
  );
}
