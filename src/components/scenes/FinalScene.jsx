import { PiArrowDown, PiArrowRight } from "react-icons/pi";
import Scene from "../Scene.jsx";
import Logo from "../Logo.jsx";
import { useScrollScene } from "../../lib/useScrollScene.js";

const JOURNEY = ["Join", "Wait remotely", "Track", "Get notified", "Your turn"];

export default function FinalScene() {
  const { ref, step } = useScrollScene(JOURNEY.length + 1, JOURNEY.length);
  const isEnd = step === JOURNEY.length;

  return (
    <Scene sceneRef={ref} height={280} label="Get started">
      <div className="container final">
        <ol className={`journey ${isEnd ? "is-gone" : ""}`} aria-label="How QLess works">
          {JOURNEY.map((word, i) => (
            <li
              key={word}
              className={`journey-step ${step >= i ? "is-on" : ""} ${i === JOURNEY.length - 1 ? "is-turn" : ""}`}
            >
              {i > 0 && <PiArrowDown className="journey-arrow" aria-hidden="true" />}
              <span>{word}</span>
            </li>
          ))}
        </ol>

        <div className={`final-card ${isEnd ? "is-on" : ""}`}>
          <Logo large />
          <p className="final-line">Your place in line, without standing in it.</p>
          <a href="/register" className="btn btn-red btn-lg" tabIndex={isEnd ? 0 : -1}>
            Join a queue
            <PiArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </Scene>
  );
}
