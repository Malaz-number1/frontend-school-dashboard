import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
export default function Logout() {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <Button
        onClick={() => logout()}
        variant="outline"
        size="icon"
        className="hover:bg-red-600 hover:text-white hover:cursor-pointer"
      >
        <LogOut />
      </Button>
    )
  );
}
