import React from "react";
import { Plus, Phone, Truck as TruckIcon } from "lucide-react";
import Layout from "../components/Layout.jsx";
import { drivers, trips } from "../data/mockData.js";

export default function Drivers() {
  return (
    <Layout title="Drivers" subtitle="Registered drivers and their assigned trucks.">
      <div className="flex justify-end">
        <button className="flex items-center gap-1.5 bg-gold text-navy font-bold text-sm px-4 py-2 rounded-lg hover:opacity-90">
          <Plus size={16} /> Register Driver
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {drivers.map((d) => {
          const driverTrips = trips.filter((t) => t.driver === d.name.split(" ").slice(0, 2).join(" "));
          return (
            <div key={d.id} className="bg-panel border border-panelBorder rounded-2xl p-5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gold flex items-center justify-center font-extrabold text-navy">
                  {d.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{d.name}</div>
                  <div className="text-muted text-xs">ID: {d.id}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[#C7CDD6] text-xs">
                <Phone size={13} /> {d.phone}
              </div>
              <div className="flex items-center gap-2 text-[#C7CDD6] text-xs">
                <TruckIcon size={13} /> {d.truck}
              </div>
              <div className="text-xs text-muted pt-1 border-t border-panelBorder mt-1">
                {driverTrips.length} recorded trip{driverTrips.length !== 1 ? "s" : ""}
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
