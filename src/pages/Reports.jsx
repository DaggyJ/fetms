import React from "react";
import { FileDown } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import Layout from "../components/Layout.jsx";
import { Panel, Table } from "../components/ui.jsx";
import { trips, routeProfit } from "../data/mockData.js";

export default function Reports() {
  const totalCost = trips.reduce((s, t) => s + t.cost, 0);
  const totalRevenue = trips.reduce((s, t) => s + t.revenue, 0);
  const totalMileage = trips.reduce((s, t) => s + t.mileage, 0);
  const costPerKm = (totalCost / totalMileage).toFixed(2);

  return (
    <Layout title="Reports" subtitle="Trip profitability, cost per kilometre, and route comparisons.">
      <div className="flex justify-end gap-2">
        <button className="flex items-center gap-1.5 border border-panelBorder text-[#C7CDD6] text-sm px-4 py-2 rounded-lg hover:bg-white/5">
          <FileDown size={15} /> Export PDF
        </button>
        <button className="flex items-center gap-1.5 border border-panelBorder text-[#C7CDD6] text-sm px-4 py-2 rounded-lg hover:bg-white/5">
          <FileDown size={15} /> Export Excel
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
        <div className="bg-panel border border-panelBorder rounded-2xl p-4">
          <div className="text-muted text-xs mb-1">Total Cost</div>
          <div className="text-white text-xl font-extrabold">${totalCost.toLocaleString()}</div>
        </div>
        <div className="bg-panel border border-panelBorder rounded-2xl p-4">
          <div className="text-muted text-xs mb-1">Total Revenue</div>
          <div className="text-white text-xl font-extrabold">${totalRevenue.toLocaleString()}</div>
        </div>
        <div className="bg-panel border border-panelBorder rounded-2xl p-4">
          <div className="text-muted text-xs mb-1">Cost per Km</div>
          <div className="text-white text-xl font-extrabold">${costPerKm}</div>
        </div>
        <div className="bg-panel border border-panelBorder rounded-2xl p-4">
          <div className="text-muted text-xs mb-1">Net Profit</div>
          <div className="text-greenAccent text-xl font-extrabold">${(totalRevenue - totalCost).toLocaleString()}</div>
        </div>
      </div>

      <div className="bg-panel border border-panelBorder rounded-2xl p-4">
        <div className="font-bold text-sm mb-3">Route Comparison — Profit ($)</div>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={routeProfit}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2A3345" />
            <XAxis dataKey="route" tick={{ fontSize: 11, fill: "#8A93A3" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "#8A93A3" }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: "#1A2230", border: "1px solid #2A3345", borderRadius: 8 }} />
            <Bar dataKey="profit" fill="#F5B921" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <Panel title="Trip Profitability Detail">
        <Table columns={["Trip ID", "Destination", "Cost", "Revenue", "Profit", "Margin"]}>
          {trips.filter((t) => t.revenue > 0).map((t) => {
            const profit = t.revenue - t.cost;
            const margin = ((profit / t.revenue) * 100).toFixed(1);
            return (
              <tr key={t.id} className="border-b border-panelBorder last:border-0">
                <td className="px-4 py-2.5 font-semibold text-white">{t.id}</td>
                <td className="px-4 py-2.5 text-[#C7CDD6]">{t.destination}</td>
                <td className="px-4 py-2.5 text-[#C7CDD6]">${t.cost.toLocaleString()}</td>
                <td className="px-4 py-2.5 text-[#C7CDD6]">${t.revenue.toLocaleString()}</td>
                <td className={`px-4 py-2.5 font-bold ${profit >= 0 ? "text-greenAccent" : "text-redAccent"}`}>${profit.toLocaleString()}</td>
                <td className="px-4 py-2.5 text-[#C7CDD6]">{margin}%</td>
              </tr>
            );
          })}
        </Table>
      </Panel>
    </Layout>
  );
}
