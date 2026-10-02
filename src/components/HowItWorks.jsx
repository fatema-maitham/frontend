const steps = [
  {
    number: "1",
    title: "Find a place",
    text: "Search for a business, pick the branch and the service you need.",
  },
  {
    number: "2",
    title: "Take a ticket",
    text: "Join the queue in one tap and see your position and wait time live.",
  },
  {
    number: "3",
    title: "Walk in on time",
    text: "Get notified when your turn is close, then show up and get served.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section">
      <div className="container">
        <h2 className="section-title">How it works</h2>
        <p className="section-sub">Three steps. No crowded waiting rooms.</p>
        <div className="steps">
          {steps.map((step) => (
            <div key={step.number} className="step-card">
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
