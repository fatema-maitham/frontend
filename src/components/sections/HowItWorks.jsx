import { PiMagnifyingGlass, PiTicket, PiCoffee, PiBellRinging } from "react-icons/pi";
import { useViewProgress } from "../../lib/useScrollScene.js";

const steps = [
  { icon: PiMagnifyingGlass, title: "Find a place", text: "Search for a clinic, bank or office and pick the service you need." },
  { icon: PiTicket, title: "Take a ticket", text: "One tap puts you in line. No standing, no paper numbers." },
  { icon: PiCoffee, title: "Wait anywhere", text: "Watch your position move live from wherever you are." },
  { icon: PiBellRinging, title: "Get notified", text: "We tell you when you're close, so you walk in on time." },
];

export default function HowItWorks() {
  // a progress track fills in red and each ticket gets "punched" as you scroll
  const { ref, p } = useViewProgress();

  return (
    <section id="how" className="how" ref={ref}>
      <div className="section-heading">
        <h2>Your turn, without the waiting room.</h2>
        <p>Four steps from finding a place to being served.</p>
      </div>

      <div className="track" aria-hidden="true">
        <span className="track-fill" />
      </div>

      <ol className="tickets">
        {steps.map(({ icon: Icon, title, text }, i) => {
          const reached = p >= (i + 0.5) / steps.length;
          return (
            <li key={title} className={`ticket-step ${reached ? "is-reached" : ""}`}>
              <div className="ticket-step-top">
                <span className="ticket-step-icon">
                  <Icon aria-hidden="true" />
                </span>
                <span className="ticket-step-no">Step {i + 1}</span>
              </div>
              <span className="ticket-step-cut" aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
