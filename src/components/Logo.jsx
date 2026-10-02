export default function Logo({ light = false }) {
  return (
    <a href="/" className={`logo ${light ? "logo-light" : ""}`} aria-label="QLess home">
      <span className="logo-mark" aria-hidden="true">Q</span>
      <span className="logo-word">QLess</span>
    </a>
  );
}
