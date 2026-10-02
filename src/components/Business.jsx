import { PiMegaphone, PiSealCheck } from "react-icons/pi";
import CallNext from "./CallNext.jsx";

export default function Business() {
  return (
    <section id="business" className="section">
      <div className="container">
        <h2 className="section-heading business-heading">
          Run your queues from one screen.
        </h2>

        <div className="bento">
          <article className="tile tile-main">
            <div className="tile-copy">
              <h3>Call the next customer in one tap</h3>
              <p>Staff see who's being served, who's next, and how long the line is.</p>
            </div>
            <CallNext />
          </article>

          <article className="tile tile-photo">
            {/* TODO: replace with a real photo of a service counter (800x500) */}
            <img
              src="https://picsum.photos/seed/qless-branch-counter/800/500"
              alt="A service counter at a branch"
              width="800"
              height="500"
              loading="lazy"
            />
            <div className="tile-copy">
              <h3>Branches, services and hours</h3>
              <p>Set them once for every location. Customers only see what's open.</p>
            </div>
          </article>

          <article className="tile tile-announce">
            <div className="tile-copy">
              <h3>Announcements</h3>
              <p>Running late or closing early? Tell everyone in line at once.</p>
            </div>
            <div className="announce-preview">
              <PiMegaphone aria-hidden="true" />
              <p>
                <strong>Seef branch</strong>
                Counter 2 is closed for lunch until 1:30.
              </p>
            </div>
          </article>

          <article className="tile tile-band">
            <span className="band-icon">
              <PiSealCheck aria-hidden="true" />
            </span>
            <div className="tile-copy">
              <h3>Reviewed before going live</h3>
              <p>Our team checks every business before it appears in search.</p>
            </div>
            <a href="/register-business" className="btn btn-primary btn-lg">
              Register your business
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
