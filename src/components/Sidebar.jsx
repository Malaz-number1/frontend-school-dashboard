import { NavLink } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Home,
  User,
  MessageCircle,
  Bell,
  Settings,
  ClipboardList,
} from "lucide-react";

const menu = [
  { name: "الرئيسية", icon: <Home size={18} />, path: "/dashboard" },
  { name: "الطلاب", icon: <User size={18} />, path: "/children" },
  { name: "التنبيهات", icon: <Bell size={18} />, path: "/alerts" },
  { name: "الأجهزة", icon: <ClipboardList size={18} />, path: "/insights" },

  { name: "الإعدادات", icon: <Settings size={18} />, path: "/settings" },
];

export default function Sidebar() {
  return (
    <aside
      dir="rtl"
      className="w-64 h-screen bg-white border-r rounded-l-4xl  flex flex-col"
    >
      {/* Logo */}
      <div className="p-6 flex justify-center flex-col items-center">
        <img src="./logo2.png" alt="logo" className="w-40 h-40" />
      </div>

      {/* Scroll Area for menu */}
      <ScrollArea className="flex-1 py-4">
        <nav className="flex flex-col gap-1 px-4">
          {menu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg  text-sm transition
                ${
                  isActive
                    ? "bg-[#ca5310] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </ScrollArea>

      <Separator />

      {/* Footer */}
      <div className="p-4 text-sm text-center text-gray-500">© 2025 ملاذ</div>
    </aside>
  );
}
