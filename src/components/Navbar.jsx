import Logo from "./Logo.jsx";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="wrap navbar-inner">
        <Logo />
        <nav className="nav-links" aria-label="Main">
          <a href="#how">How it works</a>
          <a href="#features">Features</a>
          <a href="#business">For businesses</a>
        </nav>
        <div className="nav-actions">
          <a href="/login" className="nav-login">Log in</a>
          <a href="/register" className="pill pill-red pill-sm">Join a queue</a>
        </div>
      </div>
    </header>
  );
}
