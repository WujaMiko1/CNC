import { useState } from "react";

export default function CsvExport() {
  const [dateRange, setDateRange] = useState({ from: '', to: '' });

  const handleExport = () => {
    alert(`Eksportuję dane od ${dateRange.from} do ${dateRange.to}`);
    // Tu można podpiąć fetch do /api/export i pobrać CSV
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Eksport danych CSV</h1>

      <div className="grid grid-cols-1 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium">Data od:</label>
          <input
            type="date"
            className="w-full border px-3 py-2 rounded mt-1"
            value={dateRange.from}
            onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Data do:</label>
          <input
            type="date"
            className="w-full border px-3 py-2 rounded mt-1"
            value={dateRange.to}
            onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
          />
        </div>
      </div>

      <button
        onClick={handleExport}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Eksportuj do CSV
      </button>
    </div>
  );
}
