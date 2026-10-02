import { PiMapPin, PiTicket, PiBellRinging } from "react-icons/pi";

const steps = [
  {
    icon: PiMapPin,
    title: "Find your place",
    text: "Search for a business, pick the branch, and choose the service you need.",
  },
  {
    icon: PiTicket,
    title: "Take a ticket",
    text: "One tap puts you in line. Your number and position update live.",
  },
  {
    icon: PiBellRinging,
    title: "Walk in on time",
    text: "We notify you as your turn gets close, so you arrive right when you're needed.",
  },
];

export default function Steps() {
  return (
    <section id="how" className="section">
      <div className="container steps-inner">
        <h2 className="section-heading steps-heading">
          Line up without standing in line.
        </h2>
        <ol className="steps">
          {steps.map(({ icon: Icon, title, text }) => (
            <li key={title} className="step">
              <span className="step-icon">
                <Icon aria-hidden="true" />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
