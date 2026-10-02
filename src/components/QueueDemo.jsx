import { useEffect, useState } from "react";
import { useReducedMotion } from "../lib/useReducedMotion.js";

// Demo only: 6 people ahead of you, one is served every couple of seconds.
const AHEAD = 6;
const FIRST = 21;
const ROW = 76;

export default function QueueDemo() {
  const [served, setServed] = useState(0);
  const [round, setRound] = useState(0);
  const reduce = useReducedMotion();
  const position = AHEAD - served;

  useEffect(() => {
    if (reduce) return;
    const isDone = served === AHEAD;
    const timer = setTimeout(
      () => {
        if (isDone) {
          setServed(0);
          setRound((r) => r + 1); // remount the list so it doesn't rewind
        } else {
          setServed((s) => s + 1);
        }
      },
      isDone ? 3200 : 1800
    );
    return () => clearTimeout(timer);
  }, [served, reduce]);

  return (
    <div className="queue-demo" aria-hidden="true">
      <div className="queue-demo-head">
        <span>Your position</span>
        <strong className="swap" key={`${round}-${position}`}>
          {position === 0 ? "You're next" : `#${position}`}
        </strong>
      </div>

      <div className="queue-demo-serving">
        Now serving
        <b className="swap" key={`${round}-s${served}`}>A-{FIRST - 1 + served}</b>
      </div>

      <ol className="queue-demo-list" key={round}>
        {Array.from({ length: AHEAD + 1 }, (_, i) => {
          const isYou = i === AHEAD;
          const slot = i - served;
          return (
            <li
              key={i}
              className={`queue-demo-row ${isYou ? "is-you" : ""} ${slot < 0 ? "is-gone" : ""}`}
              style={{ transform: `translateY(${Math.max(slot, -1) * ROW}px)` }}
            >
              <span>A-{FIRST + i}</span>
              <span>{isYou ? "You" : "Waiting"}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
