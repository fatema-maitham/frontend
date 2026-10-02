const features = [
  "Manage multiple branches and services",
  "Set opening hours and add staff",
  "Post announcements to your customers",
  "Call the next customer with one click",
];

export default function ForBusinesses() {
  return (
    <section id="business" className="section section-dark">
      <div className="container business-inner">
        <div>
          <h2 className="section-title">For businesses</h2>
          <p className="section-sub">
            Clinics, banks, government offices, salons: run your queues
            from one simple dashboard.
          </p>
          <ul className="feature-list">
            {features.map((f) => (
              <li key={f}>
                <span className="check">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a href="/register-business" className="btn btn-primary btn-lg">
            Register your business
          </a>
          <p className="small-note">Applications are reviewed before going live.</p>
        </div>

        <div className="dashboard">
          <div className="dash-header">
            <span>Today · Seef branch</span>
            <span className="dash-live">● Live</span>
          </div>
          <div className="dash-stats">
            <div><span className="stat-value">38</span><span className="stat-label">served</span></div>
            <div><span className="stat-value">9</span><span className="stat-label">waiting</span></div>
            <div><span className="stat-value">7m</span><span className="stat-label">avg wait</span></div>
          </div>
          <div className="dash-row now"><span>Now serving</span><strong>A-23</strong></div>
          <div className="dash-row"><span>Next</span><strong>A-24</strong></div>
          <div className="dash-row"><span>Next</span><strong>A-25</strong></div>
          <button className="btn btn-primary dash-btn" type="button">Call next</button>
        </div>
      </div>
    </section>
  );
}
