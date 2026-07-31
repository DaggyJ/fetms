import React from "react";
import { Plus, Fuel as FuelIcon } from "lucide-react";
import Layout from "../components/Layout.jsx";
import { Panel, Table, DarkStatCard } from "../components/ui.jsx";
import { fuelLogs, fuelStations } from "../data/mockData.js";

export default function Fuel() {
  const totalLitres = fuelLogs.reduce((s, f) => s + f.litres, 0);
  const totalCost = fuelLogs.reduce((s, f) => s + f.total, 0);

  return (
    <Layout title="Fuel Log" subtitle={`Refueling stops tracked at: ${fuelStations.join(", ")}.`}>
      <div className="grid grid-cols-3 gap-3.5 max-w-2xl">
        <DarkStatCard label="TOTAL LITRES" value={`${totalLitres.toLocaleString()} L`} icon={FuelIcon} color="#4A9EFF" />
        <DarkStatCard label="TOTAL FUEL COST" value={`$${totalCost.toFixed(2)}`} icon={FuelIcon} color="#F5B921" />
        <DarkStatCard label="AVG COST / LITRE" value={`$${(totalCost / totalLitres).toFixed(2)}`} icon={FuelIcon} color="#2ECC71" />
      </div>

      <div className="flex justify-end">
        <button className="flex items-center gap-1.5 bg-gold text-navy font-bold text-sm px-4 py-2 rounded-lg hover:opacity-90">
          <Plus size={16} /> Log Fuel Purchase
        </button>
      </div>

      <Panel>
        <Table columns={["Trip ID", "Station", "Date", "Litres", "Cost/Litre", "Total"]}>
          {fuelLogs.map((f, i) => (
            <tr key={i} className="border-b border-panelBorder last:border-0">
              <td className="px-4 py-2.5 font-semibold text-white">{f.trip}</td>
              <td className="px-4 py-2.5 text-[#C7CDD6]">{f.station}</td>
              <td className="px-4 py-2.5 text-[#C7CDD6]">{f.date}</td>
              <td className="px-4 py-2.5 text-[#C7CDD6]">{f.litres} L</td>
              <td className="px-4 py-2.5 text-[#C7CDD6]">${f.costPerLitre.toFixed(2)}</td>
              <td className="px-4 py-2.5 font-bold text-white">${f.total.toFixed(2)}</td>
            </tr>
          ))}
        </Table>
      </Panel>
    </Layout>
  );
}
