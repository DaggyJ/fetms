import React from "react";
import { Plus } from "lucide-react";
import Layout from "../components/Layout.jsx";
import { Panel, Table } from "../components/ui.jsx";
import { tyres } from "../data/mockData.js";

export default function Tyres() {
  return (
    <Layout title="Tyre Purchases" subtitle="Tyre replacements tracked separately given their cost and frequency.">
      <div className="flex justify-end">
        <button className="flex items-center gap-1.5 bg-gold text-navy font-bold text-sm px-4 py-2 rounded-lg hover:opacity-90">
          <Plus size={16} /> Log Tyre Purchase
        </button>
      </div>
      <Panel>
        <Table columns={["Truck", "Date", "Qty", "Cost / Tyre", "Total", "Supplier"]}>
          {tyres.map((t, i) => (
            <tr key={i} className="border-b border-panelBorder last:border-0">
              <td className="px-4 py-2.5 font-semibold text-white">{t.truck}</td>
              <td className="px-4 py-2.5 text-[#C7CDD6]">{t.date}</td>
              <td className="px-4 py-2.5 text-[#C7CDD6]">{t.qty}</td>
              <td className="px-4 py-2.5 text-[#C7CDD6]">${t.costPerTyre}</td>
              <td className="px-4 py-2.5 font-bold text-white">${(t.qty * t.costPerTyre).toLocaleString()}</td>
              <td className="px-4 py-2.5 text-[#C7CDD6]">{t.supplier}</td>
            </tr>
          ))}
        </Table>
      </Panel>
    </Layout>
  );
}
