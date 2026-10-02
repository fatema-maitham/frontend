import { PiUserFill, PiDeviceMobileFill } from "react-icons/pi";
import Scene from "../Scene.jsx";
import { useScrollScene } from "../../lib/useScrollScene.js";

const PEOPLE = 7;

export default function LineScene() {
  const { ref, step } = useScrollScene(2, 1);

  return (
    <Scene sceneRef={ref} height={280} label="Leave the physical line">
      <div className="container stack-center">
        <h2 className="section-title">
          Why stand in line
          <br />
          when you can move on?
        </h2>
        <p className="sub">Everyone keeps their place. Nobody has to stand in it.</p>

        <div className="line-stage" aria-hidden="true">
          <p className="line-label swap" key={step}>
            {step === 0 ? "Physical line" : "QLess line"}
          </p>
          <ul className="people">
            {Array.from({ length: PEOPLE }, (_, i) => (
              <li key={i} className="spot" style={{ "--i": i }}>
                <span className="person">
                  <PiUserFill />
                </span>
                <span className="phone-chip">
                  <PiDeviceMobileFill />
                  <b>#{PEOPLE - i}</b>
                </span>
              </li>
            ))}
          </ul>
          <div className="floor" />
        </div>
      </div>
    </Scene>
  );
}
