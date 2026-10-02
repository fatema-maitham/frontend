export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <span className="badge">Virtual queues, made simple</span>
          <h1>
            Skip the line,
            <br />
            <span className="accent">not your day.</span>
          </h1>
          <p className="lead">
            Join a queue from your phone, see your live wait time, and get
            notified when it's your turn. Show up just in time.
          </p>
          <div className="hero-buttons">
            <a href="/register" className="btn btn-primary btn-lg">Join a queue</a>
            <a href="#business" className="btn btn-outline btn-lg">Register your business</a>
          </div>
        </div>

        <div className="phone">
          <div className="phone-screen">
            <p className="ticket-label">City Clinic · Manama branch</p>
            <p className="ticket-service">General consultation</p>
            <div className="ticket">
              <span className="ticket-small">Your number</span>
              <span className="ticket-number">A-27</span>
            </div>
            <div className="ticket-stats">
              <div>
                <span className="stat-value">4</span>
                <span className="stat-label">ahead of you</span>
              </div>
              <div>
                <span className="stat-value">~12</span>
                <span className="stat-label">min wait</span>
              </div>
            </div>
            <div className="progress">
              <div className="progress-bar" />
            </div>
            <p className="ticket-note">We'll notify you when you're next</p>
          </div>
        </div>
      </div>
    </section>
  );
}
