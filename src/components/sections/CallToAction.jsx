import { PiArrowRight } from "react-icons/pi";

export default function CallToAction() {
  return (
    <section className="cta">
      <div className="wrap cta-inner" data-reveal>
        <h2>
          Ready to stop <span>standing in line?</span>
        </h2>
        <p>Create a free account and take your first ticket today.</p>
        <div className="hero-actions cta-actions">
          <a href="/register" className="pill pill-red">
            Join a queue
            <PiArrowRight aria-hidden="true" />
          </a>
          <a href="/register-business" className="pill pill-cream">
            Register your business
          </a>
        </div>
      </div>
    </section>
  );
}
