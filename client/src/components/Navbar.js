import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>Analiza</Link>
      <Link to="/monitoring" style={{ marginRight: "1rem" }}>Monitoring</Link>
      <Link to="/programs" style={{ marginRight: "1rem" }}>Programy</Link>
      <Link to="/export">Eksport CSV</Link>
    </nav>
  );
}
