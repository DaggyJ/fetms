import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

export function StatCard({ label, value, delta, deltaGood, icon: Icon, accent }) {
  return (
    <div className="bg-white rounded-2xl p-5 flex-1 min-w-[180px] shadow-sm border border-[#EDEFF2] flex flex-col gap-2 text-[#141F30] cursor-pointer hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center">
        <span className="text-[12.5px] text-[#8891A0] font-semibold tracking-wide">{label}</span>
        <div
          className="w-[30px] h-[30px] rounded-lg flex items-center justify-center"
          style={{ background: accent + "1A" }}
        >
          <Icon size={15} color={accent} />
        </div>
      </div>
      <div className="text-[26px] font-extrabold font-sora">{value}</div>
      {delta && (
        <div className={`flex items-center gap-1 text-xs font-semibold ${deltaGood ? "text-greenAccent" : "text-redAccent"}`}>
          {deltaGood ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {delta}
        </div>
      )}
    </div>
  );
}

export function DarkStatCard({ label, value, icon: Icon, color }) {
  return (
    <div className="bg-panel border border-panelBorder rounded-2xl p-4 flex flex-col gap-2.5 min-h-[90px]">
      <div className="flex justify-between items-start">
        <span className="text-muted text-xs font-medium">{label}</span>
        <div className="w-[30px] h-[30px] rounded-[9px] flex items-center justify-center shrink-0" style={{ background: color + "26" }}>
          <Icon size={15} color={color} />
        </div>
      </div>
      <div className="text-white text-xl font-extrabold">{value}</div>
    </div>
  );
}

export function Panel({ title, action, children }) {
  return (
    <div className="bg-panel border border-panelBorder rounded-2xl overflow-hidden">
      {title && (
        <div className="px-4 py-3.5 border-b border-panelBorder flex justify-between items-center">
          <span className="font-bold text-white text-[14.5px]">{title}</span>
          {action}
        </div>
      )}
      {children}
    </div>
  );
}

export function StatusPill({ status }) {
  const isCompleted = status === "Completed";
  return (
    <span
      className="px-2.5 py-[3px] rounded-full text-[11.5px] font-bold"
      style={{
        background: isCompleted ? "#1E3A2C" : "#3D3110",
        color: isCompleted ? "#5FD98A" : "#F5B921",
      }}
    >
      {status}
    </span>
  );
}

export function Table({ columns, children }) {
  return (
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c} className="text-left px-4 py-2.5 text-[11.5px] uppercase tracking-wide font-semibold text-muted border-b border-panelBorder">
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
