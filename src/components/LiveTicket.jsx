import { useEffect, useRef, useState } from "react";
import { PiCheckCircleFill } from "react-icons/pi";
import {
  Spring,
  rubberband,
  unrubberband,
  createVelocityTracker,
} from "../lib/spring.js";
import { useReducedMotion } from "../lib/useReducedMotion.js";

// Demo data only: a simulated queue so visitors can see how a ticket behaves.
const START_AHEAD = 5;
const MINUTES_PER_PERSON = 3;
const PULL_RANGE = 260;

export default function LiveTicket() {
  const [ahead, setAhead] = useState(START_AHEAD);
  const [number, setNumber] = useState(27);
  const cardRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const reduceRef = useRef(reduceMotion);
  reduceRef.current = reduceMotion;

  // Simulated queue: one person is served every few seconds.
  useEffect(() => {
    const isTurn = ahead === 0;
    const timer = setTimeout(
      () => {
        if (isTurn) {
          setNumber((n) => n + 1);
          setAhead(START_AHEAD);
        } else {
          setAhead((a) => a - 1);
        }
      },
      isTurn ? 4200 : 2600
    );
    return () => clearTimeout(timer);
  }, [ahead]);

  // Drag the ticket: 1:1 tracking, soft resistance, and a spring back
  // that continues at the speed of your release.
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const pos = { x: 0, y: 0 };
    const render = () => {
      card.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) rotate(${pos.x * 0.035}deg)`;
    };
    const springX = new Spring(0, (v) => {
      pos.x = v;
      render();
    });
    const springY = new Spring(0, (v) => {
      pos.y = v;
      render();
    });
    const tracker = createVelocityTracker();
    let drag = null;

    const onDown = (e) => {
      if (e.button !== 0) return;
      springX.stop();
      springY.stop();
      card.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        startX: e.clientX,
        startY: e.clientY,
        // start from where the card is right now, even mid-animation
        rawX: unrubberband(pos.x, PULL_RANGE),
        rawY: unrubberband(pos.y, PULL_RANGE),
      };
      tracker.reset();
      tracker.add(pos.x, pos.y);
      card.classList.add("is-grabbed");
    };

    const onMove = (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      pos.x = rubberband(drag.rawX + e.clientX - drag.startX, PULL_RANGE);
      pos.y = rubberband(drag.rawY + e.clientY - drag.startY, PULL_RANGE);
      tracker.add(pos.x, pos.y);
      render();
    };

    const onRelease = (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      drag = null;
      card.classList.remove("is-grabbed");
      if (reduceRef.current) {
        springX.set(0);
        springY.set(0);
        return;
      }
      const v = tracker.velocity();
      // a little bounce, because the release carried momentum
      springX.to(0, { damping: 0.75, response: 0.45, velocity: v.x });
      springY.to(0, { damping: 0.75, response: 0.45, velocity: v.y });
    };

    card.addEventListener("pointerdown", onDown);
    card.addEventListener("pointermove", onMove);
    card.addEventListener("pointerup", onRelease);
    card.addEventListener("pointercancel", onRelease);
    return () => {
      springX.stop();
      springY.stop();
      card.removeEventListener("pointerdown", onDown);
      card.removeEventListener("pointermove", onMove);
      card.removeEventListener("pointerup", onRelease);
      card.removeEventListener("pointercancel", onRelease);
    };
  }, []);

  const isTurn = ahead === 0;

  return (
    <figure className="ticket-stage" aria-label="Example of a live QLess ticket">
      <div ref={cardRef} className={`ticket ${isTurn ? "is-turn" : ""}`}>
        <div className="ticket-head">
          <div>
            <p className="ticket-place">City Clinic</p>
            <p className="ticket-meta">Seef branch, general consultation</p>
          </div>
          <span className="ticket-live">
            <span className="live-dot" aria-hidden="true" />
            Live
          </span>
        </div>

        <div className="ticket-number-row">
          <span className="ticket-number-label">Your number</span>
          <span className="ticket-number swap" key={number}>
            A-{number}
          </span>
        </div>

        <div className="ticket-cut" aria-hidden="true" />

        <div className="ticket-body" aria-live="polite">
          {isTurn ? (
            <p className="ticket-turn swap" key="turn">
              <PiCheckCircleFill aria-hidden="true" />
              It's your turn. Head to counter 3.
            </p>
          ) : (
            <>
              <dl className="ticket-stats">
                <div>
                  <dt>Ahead of you</dt>
                  <dd className="swap" key={`a${ahead}`}>{ahead}</dd>
                </div>
                <div>
                  <dt>Estimated wait</dt>
                  <dd className="swap" key={`w${ahead}`}>
                    {ahead * MINUTES_PER_PERSON} min
                  </dd>
                </div>
              </dl>
              <div className="queue-line" aria-hidden="true">
                {Array.from({ length: ahead }, (_, i) => (
                  <span key={`${number}-${START_AHEAD - ahead + i}`} className="queue-person" />
                ))}
                <span className="queue-person is-you">You</span>
              </div>
            </>
          )}
        </div>
      </div>
    </figure>
  );
}
