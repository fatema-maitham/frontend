import Logo from "./Logo.jsx";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Logo />
        <nav className="nav-links" aria-label="Main">
          <a href="#business">For businesses</a>
          <a href="/login">Log in</a>
        </nav>
        <a href="/register" className="btn btn-red">Join a queue</a>
      </div>
    </header>
  );
}
