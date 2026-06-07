import { NavLink } from "react-router-dom";
import { navigationItems } from "../../constants/navigation";

function Sidebar() {
  return (
    <aside className="w-64 border-r border-slate-200 bg-white px-2 py-4">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-slate-900" />

          <h1 className="text-xl font-semibold text-slate-900">TaskFlow</h1>
        </div>
      </div>

      <nav className="px-3">
        {navigationItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `
                mb-1 block rounded-lg px-4 py-3 transition
                ${
                  isActive
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-600 hover:bg-slate-50"
                }
                `
              }
            >
              <div className="flex items-center gap-3">
                <IconComponent size={18} />
                <span>{item.label}</span>
              </div>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
