import {
  PiFirstAidKit,
  PiBank,
  PiScissors,
  PiBuildings,
  PiForkKnife,
  PiDeviceMobile,
  PiCar,
  PiPawPrint,
  PiStudent,
  PiPill,
} from "react-icons/pi";

const places = [
  { icon: PiFirstAidKit, label: "Clinics" },
  { icon: PiBank, label: "Banks" },
  { icon: PiBuildings, label: "Government offices" },
  { icon: PiScissors, label: "Salons" },
  { icon: PiForkKnife, label: "Restaurants" },
  { icon: PiDeviceMobile, label: "Telecom stores" },
  { icon: PiCar, label: "Car service centers" },
  { icon: PiPawPrint, label: "Vet clinics" },
  { icon: PiStudent, label: "University offices" },
  { icon: PiPill, label: "Pharmacies" },
];

function Row({ hidden }) {
  return (
    <ul className="marquee-row" aria-hidden={hidden || undefined}>
      {places.map(({ icon: Icon, label }) => (
        <li key={label} className="place-chip">
          <Icon aria-hidden="true" />
          {label}
        </li>
      ))}
    </ul>
  );
}

export default function Industries() {
  return (
    <section className="industries" aria-label="Places that use QLess">
      <p className="industries-title">Made for any place with a line</p>
      <div className="marquee">
        <div className="marquee-track">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
