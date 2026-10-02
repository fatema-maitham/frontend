export default function Moment() {
  return (
    <section className="moment" aria-label="Wait anywhere">
      <div className="container">
        {/* TODO: replace with a real photo (1600x900), e.g. someone relaxing in a café while they wait */}
        <img
          className="moment-image"
          src="https://picsum.photos/seed/qless-cafe-waiting/1600/900"
          alt="A person relaxing in a café instead of a waiting room"
          width="1600"
          height="900"
          loading="lazy"
        />
        <p className="moment-text">
          Wait at a café, in the car, or at home.
          <span> QLess tells you when to head in.</span>
        </p>
      </div>
    </section>
  );
}
