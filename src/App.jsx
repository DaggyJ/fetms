import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Trips from "./pages/Trips.jsx";
import Fuel from "./pages/Fuel.jsx";
import Repairs from "./pages/Repairs.jsx";
import Tyres from "./pages/Tyres.jsx";
import Spares from "./pages/Spares.jsx";
import Drivers from "./pages/Drivers.jsx";
import Reports from "./pages/Reports.jsx";
import Settings from "./pages/Settings.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/trips" element={<Trips />} />
      <Route path="/fuel" element={<Fuel />} />
      <Route path="/repairs" element={<Repairs />} />
      <Route path="/tyres" element={<Tyres />} />
      <Route path="/spares" element={<Spares />} />
      <Route path="/drivers" element={<Drivers />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
