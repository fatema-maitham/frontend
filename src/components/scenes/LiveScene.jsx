import Scene from "../Scene.jsx";
import { useScrollScene } from "../../lib/useScrollScene.js";

const FIRST_SERVING = 24;
const YOU = 27;
const rows = [25, 26, 27];
const ROW_H = 76;

export default function LiveScene() {
  const { ref, step } = useScrollScene(3, 2);
  const serving = FIRST_SERVING + step;
  const position = YOU - serving;

  return (
    <Scene sceneRef={ref} height={260} label="Real-time updates">
      <div className="container split split-reverse">
        <div className="split-copy">
          <h2 className="section-title">
            Your position changes.
            <br />
            <span className="cream-soft">QLess changes with it.</span>
          </h2>
          <p className="sub">
            Every time someone is served, every phone in the line updates
            instantly.
          </p>
        </div>

        <div className="live-board" aria-hidden="true">
          <div className="live-head">
            <span className="live-pill">
              <span className="live-dot" />
              Live
            </span>
            <span className="live-you swap" key={position}>
              {position === 1 ? "You're next" : `You are #${position}`}
            </span>
          </div>

          <div className="now-serving">
            <span>Now serving</span>
            <strong className="swap" key={serving}>#{serving}</strong>
          </div>

          <ol className="live-list" style={{ height: rows.length * ROW_H }}>
            {rows.map((n) => {
              const slot = n - serving - 1;
              const served = slot < 0;
              return (
                <li
                  key={n}
                  className={`live-row ${n === YOU ? "is-you" : ""} ${served ? "is-served" : ""}`}
                  style={{ transform: `translateY(${Math.max(slot, -1) * ROW_H}px)` }}
                >
                  <span>{n === YOU ? "You" : "Waiting"}</span>
                  <strong>#{n}</strong>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </Scene>
  );
}
