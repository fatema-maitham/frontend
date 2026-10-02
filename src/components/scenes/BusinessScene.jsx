import { PiArrowRight } from "react-icons/pi";
import Scene from "../Scene.jsx";
import { useScrollScene } from "../../lib/useScrollScene.js";

const ROW_H = 60;
const upcoming = [25, 26, 27, 28, 29, 30, 31];

export default function BusinessScene() {
  const { ref, step } = useScrollScene(4, 3);
  const k = Math.max(0, step - 1);
  const current = 24 + k;
  const stats = [
    { label: "Waiting", value: 12 - k },
    { label: "Serving", value: 1 },
    { label: "Completed", value: 48 + k },
  ];

  return (
    <Scene sceneRef={ref} id="business" height={300} label="For businesses">
      <div className="container split">
        <div className="split-copy">
          <h2 className="section-title">
            One queue.
            <br />
            <span className="cream-soft">Everyone stays in sync.</span>
          </h2>
          <p className="sub">
            Customers see their place. Staff see the whole line. Both update
            the moment someone is served.
          </p>
          <a href="/register-business" className="btn btn-red btn-lg">
            Register your business
            <PiArrowRight aria-hidden="true" />
          </a>
        </div>

        <div className="biz-stage" aria-hidden="true">
          <div className="biz-ticket">
            <span>Customer</span>
            <strong>#3</strong>
          </div>

          <div className="dash">
            <div className="dash-top">
              <span className="dash-brand">QLess Dashboard</span>
              <span className="dash-branch">Seef branch</span>
            </div>

            <div className="dash-stats">
              {stats.map((s) => (
                <div key={s.label}>
                  <span>{s.label}</span>
                  <strong className="swap" key={`${s.label}${s.value}`}>{s.value}</strong>
                </div>
              ))}
            </div>

            <div className="dash-current">
              <span>Current</span>
              <strong className="swap" key={current}>#{current}</strong>
            </div>

            <ol className="dash-list" style={{ height: 4 * ROW_H }}>
              {upcoming.map((n) => {
                const slot = n - current - 1;
                return (
                  <li
                    key={n}
                    className={`dash-row ${slot < 0 ? "is-served" : ""} ${slot > 3 ? "is-hidden" : ""}`}
                    style={{ transform: `translateY(${Math.max(slot, -1) * ROW_H}px)` }}
                  >
                    <span>#{n}</span>
                    <span className="dash-service">
                      {n % 2 ? "General consultation" : "Lab tests"}
                    </span>
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
