import {UserButton} from "@/app/(home)/_components/user-button";
import {Navigation} from "@/app/(home)/_components/navigation";

export const Navbar = () => {
  return (
    <nav className="pl-6 h-20 flex border-b justify-between font-medium bg-white">
      <Navigation />

      <div className="hidden lg:flex">
        <UserButton/>
      </div>
    </nav>
  );
};