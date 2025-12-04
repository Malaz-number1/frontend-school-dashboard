import { Bell, User } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import Logout from "@/pages/auth/Logout";
import Profile from "@/pages/auth/Profile";
import { useAuth0 } from "@auth0/auth0-react";

export default function TopNavbar() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <header
      dir="rtl"
      className="w-full bg-white border-b shadow-sm rounded-2xl px-6 py-4 flex items-center justify-between"
    >
      {/* Right: Page title (RTL) */}
      <div className="text-xl font-semibold text-[#354f52]">
        اهلا بك <Profile />
      </div>

      {/* Left: Alerts + User */}
      <div className="flex items-center gap-4">
        {/* Alerts */}
        <NavLink to="/alerts">
          <Button variant="ghost" className="relative hover:cursor-pointer">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500"></span>
          </Button>
        </NavLink>

        {/* User Avatar */}
        <Avatar>
          {isAuthenticated && user.picture ? (
            <AvatarImage src={user.picture} alt="صورة المستخدم" />
          ) : (
            <AvatarFallback>م</AvatarFallback>
          )}
        </Avatar>

        <Logout />
      </div>
    </header>
  );
}
