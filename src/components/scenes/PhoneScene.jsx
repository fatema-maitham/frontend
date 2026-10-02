import Scene from "../Scene.jsx";
import Phone from "../Phone.jsx";
import { useScrollScene } from "../../lib/useScrollScene.js";

const STATES = [
  { position: 7, wait: 18 },
  { position: 6, wait: 14 },
  { position: 5, wait: 9 },
  { position: 4, wait: 3 },
];

export default function PhoneScene() {
  const { ref, step } = useScrollScene(STATES.length, STATES.length - 1);
  const { position, wait } = STATES[step];

  return (
    <Scene sceneRef={ref} height={280} label="Your queue follows you">
      <div className="container split">
        <div className="split-copy">
          <h2 className="section-title">Your queue follows you.</h2>
          <p className="sub">
            Grab a coffee, run an errand, wait in the car. Your place moves
            with you.
          </p>
        </div>

        <div className="phone-wrap" aria-hidden="true">
          <Phone className="phone-rise">
            <p className="app-title">Your queue</p>
            <p className="app-place">City Clinic, Seef branch</p>

            <div className="app-block">
              <span>Position</span>
              <strong className="big-num swap" key={`p${position}`}>#{position}</strong>
            </div>

            <div className="app-block">
              <span>Estimated wait</span>
              <strong className="mid-num swap" key={`w${wait}`}>{wait} min</strong>
            </div>

            <div className="mini-line">
              {Array.from({ length: position - 1 }, (_, i) => (
                <span key={`${step}-${i}`} className="mini-dot" />
              ))}
              <span className="mini-you">You</span>
            </div>

            <p className="app-note">We'll notify you when you're close.</p>
          </Phone>
        </div>
      </div>
    </Scene>
  );
}
