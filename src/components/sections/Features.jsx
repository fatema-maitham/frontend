import {
  PiTicket,
  PiTimer,
  PiBellRinging,
  PiBuildings,
  PiMonitor,
  PiMegaphone,
} from "react-icons/pi";

const features = [
  { icon: PiTicket, title: "Virtual tickets", text: "Customers join a queue from their phone in seconds. No paper numbers, no app download." },
  { icon: PiTimer, title: "Live position", text: "Everyone sees their place and an estimated wait that updates as the line moves." },
  { icon: PiBellRinging, title: "Smart notifications", text: "Customers get a heads-up when they're close and again when it's their turn." },
  { icon: PiBuildings, title: "Branches and services", text: "Run several branches, each with its own services, opening hours and staff." },
  { icon: PiMonitor, title: "Staff dashboard", text: "See who's waiting, who's being served, and call the next person in one tap." },
  { icon: PiMegaphone, title: "Announcements", text: "Closing a counter or running late? Tell everyone in line at once." },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="wrap">
        <div className="features-head" data-reveal>
          <h2 className="h2 on-navy">Everything a fair queue needs</h2>
          <p>Simple for customers, powerful for the people serving them.</p>
        </div>
        <div className="feature-grid">
          {features.map(({ icon: Icon, title, text }, i) => (
            <article key={title} className="feature" data-reveal style={{ "--d": `${i * 70}ms` }}>
              <span className="feature-icon">
                <Icon aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
