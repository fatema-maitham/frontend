// A tall section whose inner frame pins to the screen while you scroll through it.
export default function Scene({ sceneRef, height, tone = "", label, id, children }) {
  return (
    <section
      ref={sceneRef}
      id={id}
      className={`scene ${tone}`}
      style={{ "--h": height }}
      aria-label={label}
    >
      <div className="scene-frame">{children}</div>
    </section>
  );
}
