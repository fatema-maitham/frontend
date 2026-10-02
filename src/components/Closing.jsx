import { PiArrowRight } from "react-icons/pi";

export default function Closing() {
  return (
    <section className="closing">
      <div className="container closing-inner">
        <h2 className="display closing-heading">Stop standing in line.</h2>
        <p>Create a free account and take your first ticket today.</p>
        <div className="hero-actions closing-actions">
          <a href="/register" className="btn btn-primary btn-lg">
            Join a queue
            <PiArrowRight aria-hidden="true" />
          </a>
          <a href="/register-business" className="btn btn-secondary btn-lg">
            Register your business
          </a>
        </div>
      </div>
    </section>
  );
}
