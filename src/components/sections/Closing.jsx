import { PiArrowRight } from "react-icons/pi";

export default function Closing() {
  return (
    <section className="closing">
      <div className="closing-ticket">
        <p className="closing-no">A-27</p>
        <h2>
          Your place in line,
          <br />
          without standing in it.
        </h2>
        <p className="closing-text">
          Create a free account and take your first ticket today.
        </p>
        <div className="hero-actions closing-actions">
          <a href="/register" className="btn btn-red">
            Join a queue
            <PiArrowRight aria-hidden="true" />
          </a>
          <a href="/register-business" className="btn btn-navy-outline">
            Register your business
          </a>
        </div>
      </div>
    </section>
  );
}
