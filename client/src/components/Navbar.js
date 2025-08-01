import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex space-x-6 font-medium text-sm text-gray-700">
          <Link to="/" className="hover:text-blue-600">Dashboard</Link>
          <Link to="/monitoring" className="hover:text-blue-600">Monitoring</Link>
          <Link to="/programs" className="hover:text-blue-600">Programy</Link>
          <Link to="/export" className="hover:text-blue-600">Eksport CSV</Link>
        </div>
      </div>
    </header>
  );
}
