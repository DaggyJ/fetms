import React from "react";
import {
  Truck, CircleDollarSign, Package, TrendingUp, MapPin,
} from "lucide-react";
import {
  PieChart, Pie, Cell, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import Layout from "../components/Layout.jsx";
import { StatCard, Panel, StatusPill, Table } from "../components/ui.jsx";
import { trips, routeStops, costBreakdown, routeProfit, monthlyTrend } from "../data/mockData.js";

export default function Dashboard() {
  const recentTrips = trips.slice(0, 6);

  return (
    <Layout title="Karibu, Fleet Manager 👋" subtitle="Here's how your fleet is performing this month.">
      {/* Stat cards */}
      <div className="flex gap-3.5 flex-wrap">
        <StatCard label="ACTIVE TRIPS" value="4" delta="2 in progress" deltaGood icon={Truck} accent="#2ECC71" />
        <StatCard label="TOTAL EXPENSES" value="$12,450" delta="+6.2% vs last mo." deltaGood={false} icon={CircleDollarSign} accent="#E74C3C" />
        <StatCard label="CARGO REVENUE" value="$21,300" delta="+11.4% vs last mo." deltaGood icon={Package} accent="#4A9EFF" />
        <StatCard label="NET PROFIT" value="$8,850" delta="+18.9% vs last mo." deltaGood icon={TrendingUp} accent="#F5B921" />
      </div>

      {/* Route strip */}
      <div className="bg-navyLight rounded-2xl px-6 py-4 overflow-x-auto">
        <div className="text-[#C7CDD6] text-xs font-bold mb-3.5 flex items-center gap-1.5">
          <MapPin size={13} className="text-gold" /> ACTIVE ROUTE NETWORK — MOMBASA CORRIDOR
        </div>
        <div className="flex items-center min-w-[780px]">
          {routeStops.map((stop, i) => (
            <React.Fragment key={stop.name}>
              <div className="flex flex-col items-center gap-1.5 min-w-[86px]">
                <div
                  className={`rounded-full ${stop.origin ? "w-3.5 h-3.5 bg-gold" : "w-2.5 h-2.5 bg-transparent border-2 border-[#5C6C82]"}`}
                />
                <span className={`text-xs whitespace-nowrap ${stop.origin ? "text-white font-bold" : "text-[#9AA3B0] font-medium"}`}>
                  {stop.name}
                </span>
              </div>
              {i < routeStops.length - 1 && <div className="flex-1 h-0.5 bg-[#3E4E63] min-w-[24px] mb-5" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Recent trips */}
      <Panel title="Recent Trips" action={<span className="text-gold text-xs font-bold cursor-pointer">View all →</span>}>
        <Table columns={["Trip ID", "Truck", "Driver", "Destination", "Status", "Cost", "Revenue", "Profit"]}>
          {recentTrips.map((t) => (
            <tr key={t.id} className="border-b border-panelBorder last:border-0">
              <td className="px-4 py-2.5 font-semibold text-white">{t.id}</td>
              <td className="px-4 py-2.5 text-[#C7CDD6]">{t.truck}</td>
              <td className="px-4 py-2.5 text-[#C7CDD6]">{t.driver}</td>
              <td className="px-4 py-2.5 text-[#C7CDD6]">{t.destination}</td>
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

      {/* Charts */}
      <div className="flex gap-4 flex-wrap">
        <div className="flex-1 min-w-[320px] bg-panel border border-panelBorder rounded-2xl p-4">
          <div className="font-bold text-sm mb-3">Cost Breakdown by Category</div>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={costBreakdown} dataKey="value" nameKey="name" innerRadius={55} outerRadius={85} paddingAngle={2}>
                {costBreakdown.map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Pie>
              <Tooltip contentStyle={{ background: "#1A2230", border: "1px solid #2A3345", borderRadius: 8 }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-2.5 mt-1.5 justify-center">
            {costBreakdown.map((c) => (
              <div key={c.name} className="flex items-center gap-1.5 text-[11.5px] text-[#C7CDD6]">
                <span className="w-2 h-2 rounded-full" style={{ background: c.color }} />
                {c.name} ({c.value}%)
              </div>
            ))}
          </div>
        </div>

        <div className="flex-[1.2] min-w-[380px] bg-panel border border-panelBorder rounded-2xl p-4">
          <div className="font-bold text-sm mb-3">Profit by Route ($)</div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={routeProfit}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2A3345" />
              <XAxis dataKey="route" tick={{ fontSize: 10.5, fill: "#8A93A3" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10.5, fill: "#8A93A3" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "#1A2230", border: "1px solid #2A3345", borderRadius: 8 }} />
              <Bar dataKey="profit" fill="#F5B921" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="flex-[1.2] min-w-[380px] bg-panel border border-panelBorder rounded-2xl p-4">
          <div className="font-bold text-sm mb-3">Monthly Profit Trend</div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={monthlyTrend}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2A3345" />
              <XAxis dataKey="month" tick={{ fontSize: 10.5, fill: "#8A93A3" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10.5, fill: "#8A93A3" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "#1A2230", border: "1px solid #2A3345", borderRadius: 8 }} />
              <Line type="monotone" dataKey="profit" stroke="#2ECC71" strokeWidth={2.5} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Layout>
  );
}
