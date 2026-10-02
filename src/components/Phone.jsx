// Simple phone shell used by several scenes.
export default function Phone({ children, className = "" }) {
  return (
    <div className={`phone ${className}`}>
      <span className="phone-island" aria-hidden="true" />
      <div className="phone-screen">{children}</div>
    </div>
  );
}
