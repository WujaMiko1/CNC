import { Download } from "lucide-react";
export default function ExportSection({ dateRange }) {
  return (
    <button onClick={() => alert('Eksportuj dane')}>
      <Download /> Eksportuj
    </button>
  );
}