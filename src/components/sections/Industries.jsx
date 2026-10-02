import {
  PiFirstAidKit,
  PiBank,
  PiBuildings,
  PiScissors,
  PiForkKnife,
  PiDeviceMobile,
  PiStudent,
  PiPill,
} from "react-icons/pi";

const industries = [
  { icon: PiFirstAidKit, label: "Clinics" },
  { icon: PiBank, label: "Banks" },
  { icon: PiBuildings, label: "Government" },
  { icon: PiScissors, label: "Salons" },
  { icon: PiForkKnife, label: "Restaurants" },
  { icon: PiDeviceMobile, label: "Telecom" },
  { icon: PiStudent, label: "Universities" },
  { icon: PiPill, label: "Pharmacies" },
];

export default function Industries() {
  return (
    <section className="industries">
      <div className="wrap">
        <div className="center-head" data-reveal>
          <h2 className="h2">Made for any place with a line</h2>
          <p className="lead">
            If people wait for it, QLess can organise it.
          </p>
        </div>
        <ul className="industry-grid">
          {industries.map(({ icon: Icon, label }, i) => (
            <li key={label} className="industry" data-reveal style={{ "--d": `${i * 50}ms` }}>
              <span className="industry-icon">
                <Icon aria-hidden="true" />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
