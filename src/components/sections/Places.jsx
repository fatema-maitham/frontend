import { useEffect, useState } from "react";
import { PiMapPin, PiStorefront } from "react-icons/pi";
import { getBusinesses } from "../../services/businessService.js";

// Shows a few approved businesses from the backend.
export default function Places() {
  const [businesses, setBusinesses] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    getBusinesses()
      .then((data) => {
        setBusinesses(data || []);
        setStatus("done");
      })
      .catch((err) => {
        console.log(err);
        setStatus("error");
      });
  }, []);

  const shown = businesses.slice(0, 4);

  return (
    <section className="places">
      <div className="section-heading places-heading">
        <div>
          <h2>Places on QLess</h2>
          <p>Join their queues straight from your phone.</p>
        </div>
        <a href="/businesses" className="link-more">
          See all places
        </a>
      </div>

      {status === "loading" && (
        <div className="place-grid" aria-busy="true">
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="place-card is-skeleton" />
          ))}
        </div>
      )}

      {status === "done" && shown.length > 0 && (
        <div className="place-grid">
          {shown.map((b) => (
            <article className="place-card" key={b.id ?? b._id ?? b.name}>
              <span className="place-icon">
                <PiStorefront aria-hidden="true" />
              </span>
              {b.category && <span className="place-category">{b.category}</span>}
              <h3>{b.name}</h3>
              {b.description && <p>{b.description}</p>}
              {(b.city || b.address) && (
                <span className="place-where">
                  <PiMapPin aria-hidden="true" />
                  {b.city || b.address}
                </span>
              )}
            </article>
          ))}
        </div>
      )}

      {((status === "done" && shown.length === 0) || status === "error") && (
        <div className="place-empty">
          <PiStorefront aria-hidden="true" />
          <p>
            {status === "error"
              ? "We couldn't load places right now. Please try again soon."
              : "No places yet. Businesses appear here once they're approved."}
          </p>
          <a href="/register-business" className="btn btn-navy">
            Add your business
          </a>
        </div>
      )}
    </section>
  );
}
