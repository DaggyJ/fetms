import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutGrid, Truck, Fuel, Wrench, CircleDollarSign, Users, BarChart3,
  Settings, ChevronDown, ChevronRight, Search, Menu, Bell, Package, Circle,
} from "lucide-react";

const navGroups = [
  { type: "link", to: "/", icon: LayoutGrid, label: "Dashboard" },
  {
    type: "group", icon: Package, label: "Trips",
    children: [
      { to: "/trips", label: "All Trips" },
      { to: "/drivers", label: "Drivers" },
    ],
  },
  {
    type: "group", icon: CircleDollarSign, label: "Expenses",
    children: [
      { to: "/fuel", label: "Fuel Log" },
      { to: "/repairs", label: "Repairs & Servicing" },
      { to: "/tyres", label: "Tyre Purchases" },
      { to: "/spares", label: "Spare Parts" },
    ],
  },
  { type: "link", to: "/reports", icon: BarChart3, label: "Reports" },
  { type: "link", to: "/settings", icon: Settings, label: "Settings" },
];

function NavGroup({ group }) {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium text-[#C7CDD6] hover:bg-white/5 transition-colors"
      >
        <group.icon size={17} />
        <span className="flex-1 text-left">{group.label}</span>
        {open ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
      </button>
      {open && (
        <div className="pl-8 pb-1">
          {group.children.map((c) => (
            <NavLink
              key={c.to}
              to={c.to}
              className={({ isActive }) =>
                `block text-[13px] py-1.5 px-2 rounded ${
                  isActive ? "text-gold font-semibold" : "text-[#9AA3B0] hover:text-white"
                }`
              }
            >
              {c.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

function NavSingle({ item }) {
  return (
    <NavLink
      to={item.to}
      end={item.to === "/"}
      className={({ isActive }) =>
        `w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
          isActive ? "bg-gold text-navy font-bold" : "text-[#C7CDD6] hover:bg-white/5"
        }`
      }
    >
      <item.icon size={17} />
      <span>{item.label}</span>
    </NavLink>
  );
}

export default function Layout({ children, title, subtitle }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen flex bg-bg font-inter text-white">
      {/* Sidebar */}
      {sidebarOpen && (
        <div className="w-[250px] bg-navy flex flex-col p-3 shrink-0">
          <div className="flex items-center gap-2.5 px-2 py-2 mb-4">
            <div className="w-9 h-9 rounded-[9px] bg-gold flex items-center justify-center shrink-0">
              <Truck size={18} className="text-navy" strokeWidth={2.5} />
            </div>
            <div>
              <div className="font-sora font-extrabold text-[15px] leading-tight">FETMS</div>
              <div className="text-[#7C8697] text-[11px]">Fleet Platform</div>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            {navGroups.map((g, i) =>
              g.type === "link" ? <NavSingle key={i} item={g} /> : <NavGroup key={i} group={g} />
            )}
          </div>

          <div className="flex-1" />
          <div className="text-[10.5px] text-[#5C6675] px-3 pb-1">
            Prototype v0.1 — Demo Data
          </div>
        </div>
      )}

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Topbar */}
        <div className="h-[62px] bg-panel border-b border-panelBorder flex items-center px-6 gap-4 shrink-0">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white/80 hover:text-white">
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-2 bg-bg rounded-lg px-3 py-2 w-80">
            <Search size={15} className="text-muted" />
            <input
              placeholder="Search trips, drivers, trucks..."
              className="bg-transparent outline-none text-sm w-full placeholder:text-muted"
            />
          </div>
          <div className="flex-1" />
          <div className="flex items-center gap-1.5 text-[11px] text-greenAccent">
            <Circle size={7} fill="#2ECC71" strokeWidth={0} /> Demo Mode
          </div>
          <Bell size={19} className="text-[#C7CDD6] cursor-pointer" />
          <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center font-extrabold text-navy text-[13px]">
            FM
          </div>
        </div>

        {/* Page content */}
        <div className="p-6 flex flex-col gap-5 overflow-y-auto">
          {(title || subtitle) && (
            <div>
              {title && <h1 className="font-sora text-xl font-extrabold m-0">{title}</h1>}
              {subtitle && <p className="text-muted text-sm mt-1 m-0">{subtitle}</p>}
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
