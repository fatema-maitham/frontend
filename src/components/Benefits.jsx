const benefits = [
  { icon: "⏱", title: "Know your wait", text: "Live position and estimated time, always up to date." },
  { icon: "🪑", title: "No crowded rooms", text: "Wait wherever you like instead of standing in line." },
  { icon: "⚖", title: "Fair order", text: "First come, first served, with no skipping." },
  { icon: "📱", title: "Any phone", text: "Works in the browser, no app download needed." },
];

export default function Benefits() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Why QLess</h2>
        <div className="benefits">
          {benefits.map((b) => (
            <div key={b.title} className="benefit-card">
              <span className="benefit-icon">{b.icon}</span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </div>
          ))}
        </div>

        <div className="cta">
          <h2>Ready to stop waiting?</h2>
          <p>Create a free account and join your first queue in seconds.</p>
          <a href="/register" className="btn btn-light btn-lg">Get started</a>
        </div>
      </div>
    </section>
  );
}
