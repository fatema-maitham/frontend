import { PiArrowRight } from "react-icons/pi";
import QueueDemo from "../QueueDemo.jsx";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Skip the line.
          <br />
          <span>Keep your time.</span>
        </h1>
        <p className="hero-text">
          Join a queue from your phone, watch your place move live, and show up
          right when it's your turn.
        </p>
        <div className="hero-actions">
          <a href="/register" className="btn btn-red">
            Join a queue
            <PiArrowRight aria-hidden="true" />
          </a>
          <a href="#business" className="btn btn-outline">
            For businesses
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <QueueDemo />
      </div>
    </section>
  );
}
