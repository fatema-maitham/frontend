import { PiCheck } from "react-icons/pi";

const steps = [
  { title: "Application sent", text: "Business details and branches", done: true },
  { title: "Reviewed by QLess", text: "Usually within one working day", done: true },
  { title: "Live in search", text: "Customers can now join your queues", done: false },
];

export default function ApprovalDemo() {
  return (
    <ol className="approval" aria-label="How a business goes live">
      {steps.map((s) => (
        <li key={s.title} className={s.done ? "is-done" : "is-current"}>
          <span className="approval-mark" aria-hidden="true">
            {s.done ? <PiCheck /> : null}
          </span>
          <div>
            <p className="approval-title">{s.title}</p>
            <p className="approval-text">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
