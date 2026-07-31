import React from "react";
import { Plus } from "lucide-react";
import Layout from "../components/Layout.jsx";
import { Panel, Table } from "../components/ui.jsx";
import { repairs } from "../data/mockData.js";

export default function Repairs() {
  return (
    <Layout title="Repairs & Servicing" subtitle="Mechanical work and routine maintenance across the fleet.">
      <div className="flex justify-end">
        <button className="flex items-center gap-1.5 bg-gold text-navy font-bold text-sm px-4 py-2 rounded-lg hover:opacity-90">
          <Plus size={16} /> Log Repair / Service
        </button>
      </div>
      <Panel>
        <Table columns={["Truck", "Date", "Type", "Description", "Cost", "Garage / Mechanic"]}>
          {repairs.map((r, i) => (
            <tr key={i} className="border-b border-panelBorder last:border-0">
              <td className="px-4 py-2.5 font-semibold text-white">{r.truck}</td>
              <td className="px-4 py-2.5 text-[#C7CDD6]">{r.date}</td>
              <td className="px-4 py-2.5 text-[#C7CDD6]">{r.type}</td>
              <td className="px-4 py-2.5 text-[#C7CDD6]">{r.description}</td>
              <td className="px-4 py-2.5 font-bold text-white">${r.cost.toLocaleString()}</td>
              <td className="px-4 py-2.5 text-[#C7CDD6]">{r.garage}</td>
            </tr>
          ))}
        </Table>
      </Panel>
    </Layout>
  );
}
