import { useState } from "react";

// Demo data only: shows how owners set hours per branch.
const BRANCHES = {
  Seef: [
    ["Sun to Thu", "8:00 to 20:00"],
    ["Friday", "Closed"],
    ["Saturday", "9:00 to 14:00"],
  ],
  Manama: [
    ["Sun to Thu", "7:30 to 15:00"],
    ["Friday", "Closed"],
    ["Saturday", "Closed"],
  ],
  Muharraq: [
    ["Sun to Thu", "9:00 to 21:00"],
    ["Friday", "16:00 to 21:00"],
    ["Saturday", "9:00 to 21:00"],
  ],
};

const SERVICES = {
  Seef: ["General consultation", "Lab tests", "Pharmacy pickup"],
  Manama: ["General consultation", "Vaccinations"],
  Muharraq: ["General consultation", "Lab tests", "Dental", "X-ray"],
};

export default function HoursDemo() {
  const [branch, setBranch] = useState("Seef");

  return (
    <div className="demo-panel hours">
      <div className="segmented" role="tablist" aria-label="Branch">
        {Object.keys(BRANCHES).map((name) => (
          <button
            key={name}
            type="button"
            role="tab"
            aria-selected={branch === name}
            className={branch === name ? "is-active" : ""}
            onClick={() => setBranch(name)}
          >
            {name}
          </button>
        ))}
      </div>

      <dl className="hours-list swap" key={branch}>
        {BRANCHES[branch].map(([day, time]) => (
          <div key={day}>
            <dt>{day}</dt>
            <dd className={time === "Closed" ? "is-closed" : ""}>{time}</dd>
          </div>
        ))}
      </dl>

      <ul className="service-chips swap" key={`s-${branch}`} aria-label="Services">
        {SERVICES[branch].map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
