export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="/" className="logo">
          <span className="logo-mark">Q</span>
          <span>QLess</span>
        </a>
        <nav className="nav-links">
          <a href="#how">How it works</a>
          <a href="#business">For businesses</a>
        </nav>
        <div className="nav-actions">
          <a href="/login" className="btn btn-ghost">Log in</a>
          <a href="/register" className="btn btn-primary">Sign up</a>
        </div>
      </div>
    </header>
  );
}
