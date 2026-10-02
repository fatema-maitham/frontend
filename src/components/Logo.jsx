export default function Logo({ large = false }) {
  return (
    <a href="/" className={`logo ${large ? "logo-large" : ""}`} aria-label="QLess home">
      <span className="logo-mark" aria-hidden="true">Q</span>
      <span className="logo-word">QLess</span>
    </a>
  );
}
