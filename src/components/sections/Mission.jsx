import { PiArrowRight } from "react-icons/pi";
import WaitlistDemo from "../WaitlistDemo.jsx";

export default function Mission() {
  return (
    <section className="mission" id="business">
      <div className="wrap split" data-reveal>
        <div>
          <p className="kicker">Give people their time back</p>
          <h2 className="h2">
            A smoother day for your customers and your staff
          </h2>
          <p className="lead">
            Waiting rooms are stressful for everyone. With QLess, customers wait
            wherever they like while your team sees the whole line, calls the
            next person in one tap, and sends updates without raising a voice.
          </p>
          <a href="/register-business" className="pill pill-navy">
            Register your business
            <PiArrowRight aria-hidden="true" />
          </a>
        </div>
        <WaitlistDemo />
      </div>
    </section>
  );
}
