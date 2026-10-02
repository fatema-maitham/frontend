import Logo from "./Logo.jsx";

const columns = [
  {
    title: "Customers",
    links: [
      ["Join a queue", "/register"],
      ["How it works", "#how"],
      ["Places", "/businesses"],
    ],
  },
  {
    title: "Businesses",
    links: [
      ["Register your business", "/register-business"],
      ["Features", "#features"],
      ["Log in", "/login"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Logo light />
          <p>Your place in line, without standing in it.</p>
        </div>
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <p className="footer-title">{col.title}</p>
            <ul>
              {col.links.map(([label, href]) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="wrap footer-bottom">
        <p>© {new Date().getFullYear()} QLess</p>
      </div>
    </footer>
  );
}
