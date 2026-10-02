import { PiBellRingingFill } from "react-icons/pi";
import Scene from "../Scene.jsx";
import Phone from "../Phone.jsx";
import { useScrollScene } from "../../lib/useScrollScene.js";

const NOTES = [
  { title: "You're getting close.", text: "2 people ahead of you." },
  { title: "You're next.", text: "Start heading to the counter." },
  { title: "It's your turn!", text: "Counter 3 is ready for you.", turn: true },
];

export default function NotifyScene() {
  const { ref, step } = useScrollScene(NOTES.length, NOTES.length - 1);
  const shown = NOTES.slice(0, step + 1).reverse();

  return (
    <Scene sceneRef={ref} height={280} label="Notifications">
      <div className="container">
        <div className="navy-panel stack-center notify-layout">
        <h2 className="section-title notify-title">We'll tell you when.</h2>

        <div className="notify-wrap" aria-hidden="true">
          <Phone className="phone-lock">
            <p className="lock-time">10:42</p>
            <p className="lock-date">Sunday, 4 October</p>
            <div className="notes">
              {shown.map((n) => (
                <div key={n.title} className={`note ${n.turn ? "is-turn" : ""}`}>
                  <span className="note-icon">
                    <PiBellRingingFill />
                  </span>
                  <div>
                    <p className="note-app">QLess</p>
                    <p className="note-title">{n.title}</p>
                    <p className="note-text">{n.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Phone>
        </div>
        </div>
      </div>
    </Scene>
  );
}
