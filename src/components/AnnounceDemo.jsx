import { PiMegaphone, PiBellSimpleRinging } from "react-icons/pi";

// Demo content: what customers in line see on their phones.
export default function AnnounceDemo() {
  return (
    <div className="notif-stack" aria-label="Example notifications on a customer's phone">
      <div className="notif">
        <span className="notif-icon">
          <PiMegaphone aria-hidden="true" />
        </span>
        <div>
          <p className="notif-top">
            <strong>City Clinic, Seef</strong>
            <span>now</span>
          </p>
          <p>Counter 2 is closed for lunch until 1:30. Counters 1 and 3 are open.</p>
        </div>
      </div>
      <div className="notif notif-back">
        <span className="notif-icon">
          <PiBellSimpleRinging aria-hidden="true" />
        </span>
        <div>
          <p className="notif-top">
            <strong>QLess</strong>
            <span>4m ago</span>
          </p>
          <p>You're 2nd in line at City Clinic. About 6 minutes to go.</p>
        </div>
      </div>
    </div>
  );
}
