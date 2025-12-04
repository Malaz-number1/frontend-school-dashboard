import TopNavbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div dir="rtl" className="flex h-screen bg-[#ffef9f]/50">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto bg-[#ffef9f]/50">
        <TopNavbar />
        <Outlet />
      </main>
    </div>
  );
}
