import { PiArrowRight } from "react-icons/pi";
import LiveTicket from "./LiveTicket.jsx";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1 className="display">
            Skip the line,
            <br />
            not your day.
          </h1>
          <p className="hero-lead">
            Take a ticket from your phone, watch your place move live, and
            arrive when it's your turn.
          </p>
          <div className="hero-actions">
            <a href="/register" className="btn btn-primary btn-lg">
              Join a queue
              <PiArrowRight aria-hidden="true" />
            </a>
            <a href="#business" className="btn btn-secondary btn-lg">
              Register your business
            </a>
          </div>
        </div>

        <LiveTicket />
      </div>
    </section>
  );
}
