import { PiArrowRight } from "react-icons/pi";
import Scene from "../Scene.jsx";
import { useScrollScene } from "../../lib/useScrollScene.js";

// 12 people ahead of you, then you. Scrolling serves them one by one.
const AHEAD = 12;
const FIRST_TICKET = 15;
const tickets = Array.from({ length: AHEAD + 1 }, (_, i) => FIRST_TICKET + i);

export default function HeroScene() {
  const { ref, step } = useScrollScene(AHEAD + 1, 0);
  const position = AHEAD - step;

  return (
    <Scene sceneRef={ref} height={260} tone="scene-hero" label="Introduction">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 className="display">
            Skip the line.
            <br />
            <span className="cream-soft">Keep your time.</span>
          </h1>
          <p className="lead">
            Join a queue from your phone, watch your place move, and show up
            when it's your turn.
          </p>
          <div className="actions">
            <a href="/register" className="btn btn-red btn-lg">
              Join a queue
              <PiArrowRight aria-hidden="true" />
            </a>
            <a href="#business" className="btn btn-ghost btn-lg">
              Register your business
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="position-badge">
            <span>Your position</span>
            <strong className="swap" key={position}>
              {position === 0 ? "You're next" : `#${position}`}
            </strong>
          </div>

          <div className="queue-window">
            <div className="serving-line">Now serving</div>
            <ol className="queue-col">
              {tickets.map((n, i) => {
                const isYou = i === AHEAD;
                return (
                  <li key={n} className={`q-card ${isYou ? "is-you" : ""}`} style={{ "--i": i }}>
                    <span className="q-num">A-{n}</span>
                    <span className="q-tag">{isYou ? "You" : "Waiting"}</span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </Scene>
  );
}
