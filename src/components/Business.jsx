import { PiArrowRight } from "react-icons/pi";
import CallNext from "./CallNext.jsx";
import HoursDemo from "./HoursDemo.jsx";
import AnnounceDemo from "./AnnounceDemo.jsx";
import ApprovalDemo from "./ApprovalDemo.jsx";

const cards = [
  {
    tone: "glow",
    title: "Call the next customer in one tap",
    text: "Staff see who's being served, who's next, and how long the line is. Try it.",
    demo: <CallNext />,
  },
  {
    tone: "tint",
    title: "Branches, services and hours, set once",
    text: "Each branch gets its own services and opening times. Customers only see what's open.",
    demo: <HoursDemo />,
  },
  {
    tone: "plain",
    title: "Tell everyone in line at once",
    text: "Running late or closing a counter? Post an announcement and every phone in the queue gets it.",
    demo: <AnnounceDemo />,
  },
  {
    tone: "dark",
    title: "Reviewed before going live",
    text: "Our team checks every business before it appears in search, so customers know who they're queueing with.",
    demo: <ApprovalDemo />,
    cta: true,
  },
];

export default function Business() {
  return (
    <section id="business" className="section business">
      <div className="container">
        <h2 className="section-heading business-heading">
          Run your queues from one screen.
        </h2>

        {/* Cards pin and stack as you scroll; earlier ones settle back underneath */}
        <div className="stack" style={{ "--count": cards.length }}>
          {cards.map((card, i) => (
            <div key={card.title} className="stack-item" style={{ "--i": i }}>
              <article className={`stack-card tone-${card.tone}`}>
                <div className="stack-copy">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  {card.cta && (
                    <a href="/register-business" className="btn btn-primary btn-lg">
                      Register your business
                      <PiArrowRight aria-hidden="true" />
                    </a>
                  )}
                </div>
                <div className="stack-demo">{card.demo}</div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
