import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import ProductionAnalysis from "./pages/ProductionAnalysis";
import MachineMonitoring from "./pages/MachineMonitoring";
import ProductionPrograms from "./pages/ProductionPrograms";
import CsvExport from "./pages/CsvExport";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductionAnalysis />} />
          <Route path="/monitoring" element={<MachineMonitoring />} />
          <Route path="/programs" element={<ProductionPrograms />} />
          <Route path="/export" element={<CsvExport />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Toaster position="top-right" />
    </QueryClientProvider>
  );
}
