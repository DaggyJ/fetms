import React from "react";
import { Plus } from "lucide-react";
import Layout from "../components/Layout.jsx";
import { Panel, Table } from "../components/ui.jsx";
import { spareParts } from "../data/mockData.js";

export default function Spares() {
  return (
    <Layout title="Spare Parts" subtitle="Parts purchased and fitted across the fleet.">
      <div className="flex justify-end">
        <button className="flex items-center gap-1.5 bg-gold text-navy font-bold text-sm px-4 py-2 rounded-lg hover:opacity-90">
          <Plus size={16} /> Log Spare Part
        </button>
      </div>
      <Panel>
        <Table columns={["Truck", "Date", "Part", "Qty", "Cost", "Supplier"]}>
          {spareParts.map((s, i) => (
            <tr key={i} className="border-b border-panelBorder last:border-0">
              <td className="px-4 py-2.5 font-semibold text-white">{s.truck}</td>
              <td className="px-4 py-2.5 text-[#C7CDD6]">{s.date}</td>
              <td className="px-4 py-2.5 text-[#C7CDD6]">{s.part}</td>
              <td className="px-4 py-2.5 text-[#C7CDD6]">{s.qty}</td>
              <td className="px-4 py-2.5 font-bold text-white">${s.cost.toLocaleString()}</td>
              <td className="px-4 py-2.5 text-[#C7CDD6]">{s.supplier}</td>
            </tr>
          ))}
        </Table>
      </Panel>
    </Layout>
  );
}
