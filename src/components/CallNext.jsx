import { useState } from "react";

// Demo data only: shows how staff move the line forward.
const FIRST = 23;
const WAITING = 8;
const SHOWN = 4;

export default function CallNext() {
  const [serving, setServing] = useState(FIRST);
  const [waiting, setWaiting] = useState(WAITING);
  const isClear = waiting === 0;

  const onClick = () => {
    if (isClear) {
      setServing(FIRST);
      setWaiting(WAITING);
    } else {
      setServing((s) => s + 1);
      setWaiting((w) => w - 1);
    }
  };

  const upcoming = Array.from({ length: Math.min(SHOWN, waiting) }, (_, i) => serving + i + 1);

  return (
    <div className="callnext" aria-live="polite">
      <div className="callnext-now">
        <span className="callnext-label">Now serving</span>
        <span className="callnext-number swap" key={serving}>A-{serving}</span>
      </div>
      <ul className="callnext-list">
        {upcoming.map((n) => (
          <li key={n} className="swap">
            <span>Next</span>
            <strong>A-{n}</strong>
          </li>
        ))}
        {isClear && <li className="callnext-empty">Nobody waiting. Nice work.</li>}
      </ul>
      <div className="callnext-foot">
        <span>{waiting} waiting</span>
        <button type="button" className="btn btn-primary" onClick={onClick}>
          {isClear ? "Reset demo" : "Call next"}
        </button>
      </div>
    </div>
  );
}
