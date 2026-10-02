import Logo from "./Logo.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Logo />
        <nav className="footer-links" aria-label="Footer">
          <a href="#business">For businesses</a>
          <a href="/login">Log in</a>
          <a href="/register">Join a queue</a>
        </nav>
        <p className="copyright">© {new Date().getFullYear()} QLess</p>
      </div>
    </footer>
  );
}
