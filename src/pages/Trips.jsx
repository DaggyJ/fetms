import React, { useState } from "react";
import { Plus } from "lucide-react";
import Layout from "../components/Layout.jsx";
import { Panel, StatusPill, Table } from "../components/ui.jsx";
import { trips } from "../data/mockData.js";

export default function Trips() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? trips : trips.filter((t) => t.status === filter);

  return (
    <Layout title="Trips" subtitle="All trips departing from Mombasa to regional destinations.">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {["All", "In Progress", "Completed"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border ${
                filter === f ? "bg-gold text-navy border-gold" : "border-panelBorder text-[#C7CDD6] hover:bg-white/5"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <button className="flex items-center gap-1.5 bg-gold text-navy font-bold text-sm px-4 py-2 rounded-lg hover:opacity-90">
          <Plus size={16} /> New Trip
        </button>
      </div>

      <Panel>
        <Table columns={["Trip ID", "Truck", "Driver", "Destination", "Start Date", "Mileage", "Status", "Cost", "Revenue", "Profit"]}>
          {filtered.map((t) => (
            <tr key={t.id} className="border-b border-panelBorder last:border-0 hover:bg-white/[0.02]">
              <td className="px-4 py-2.5 font-semibold text-white">{t.id}</td>
              <td className="px-4 py-2.5 text-[#C7CDD6]">{t.truck}</td>
              <td className="px-4 py-2.5 text-[#C7CDD6]">{t.driver}</td>
              <td className="px-4 py-2.5 text-[#C7CDD6]">{t.destination}</td>
              <td className="px-4 py-2.5 text-[#C7CDD6]">{t.startDate}</td>
              <td className="px-4 py-2.5 text-[#C7CDD6]">{t.mileage.toLocaleString()} km</td>
              <td className="px-4 py-2.5"><StatusPill status={t.status} /></td>
              <td className="px-4 py-2.5 text-[#C7CDD6]">${t.cost.toLocaleString()}</td>
              <td className="px-4 py-2.5 text-[#C7CDD6]">{t.revenue ? `$${t.revenue.toLocaleString()}` : "—"}</td>
              <td className={`px-4 py-2.5 font-bold ${t.revenue ? (t.revenue - t.cost >= 0 ? "text-greenAccent" : "text-redAccent") : "text-muted"}`}>
                {t.revenue ? `$${(t.revenue - t.cost).toLocaleString()}` : "—"}
              </td>
            </tr>
          ))}
        </Table>
      </Panel>
    </Layout>
  );
}
