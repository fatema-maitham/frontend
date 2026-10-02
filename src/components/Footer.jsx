export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="/" className="logo">
          <span className="logo-mark">Q</span>
          <span>QLess</span>
        </a>
        <nav className="footer-links">
          <a href="/login">Log in</a>
          <a href="/register">Sign up</a>
          <a href="#business">For businesses</a>
        </nav>
        <p className="copyright">© {new Date().getFullYear()} QLess</p>
      </div>
    </footer>
  );
}
