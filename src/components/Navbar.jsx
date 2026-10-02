import { useEffect, useRef, useState } from "react";
import Logo from "./Logo.jsx";

export default function Navbar() {
  const sentinel = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  // Show the frosted edge only once content actually scrolls under the bar.
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setScrolled(!entry.isIntersecting)
    );
    if (sentinel.current) observer.observe(sentinel.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinel} className="nav-sentinel" aria-hidden="true" />
      <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container navbar-inner">
          <Logo />
          <nav className="nav-links" aria-label="Main">
            <a href="#how">How it works</a>
            <a href="#business">For businesses</a>
          </nav>
          <div className="nav-actions">
            <a href="/login" className="btn btn-quiet">Log in</a>
            <a href="/register" className="btn btn-primary">Join a queue</a>
          </div>
        </div>
      </header>
    </>
  );
}
