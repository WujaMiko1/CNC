import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-gray-800 text-white shadow">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-blue-300">Analiza</Link>
          <Link to="/monitoring" className="hover:text-blue-300">Monitoring</Link>
          <Link to="/programs" className="hover:text-blue-300">Programy</Link>
          <Link to="/export" className="hover:text-blue-300">Eksport CSV</Link>
        </div>
      </nav>
    </header>
  );
}
