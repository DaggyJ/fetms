import React from "react";
import Layout from "../components/Layout.jsx";

const roles = ["Administrator", "Fleet Manager", "Dispatcher", "Finance Officer"];

export default function Settings() {
  return (
    <Layout title="Settings" subtitle="System preferences and user roles (prototype placeholder).">
      <div className="bg-panel border border-panelBorder rounded-2xl p-6 max-w-xl flex flex-col gap-4">
        <div>
          <div className="text-sm font-bold text-white mb-1">Currency</div>
          <div className="text-muted text-sm">USD — all amounts recorded and reported in US Dollars.</div>
        </div>
        <div>
          <div className="text-sm font-bold text-white mb-1">User Roles</div>
          <div className="flex flex-wrap gap-2 mt-1">
            {roles.map((r) => (
              <span key={r} className="text-xs bg-bg border border-panelBorder rounded-full px-3 py-1 text-[#C7CDD6]">
                {r}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm font-bold text-white mb-1">Note</div>
          <div className="text-muted text-sm">
            This is a static prototype for client review. Authentication, role permissions, and data persistence
            will be wired up to the Django REST API in the full build.
          </div>
        </div>
      </div>
    </Layout>
  );
}
