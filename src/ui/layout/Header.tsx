import { Link } from "react-router";
import { ShoppingCart, Menu } from "lucide-react";
import Navigation from "./Navigation";
import Profile from "../Profile";
import Phone from "../Phone";
import SideBar from "./SideBar";
import { useState } from "react";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <>
      <header className="sticky z-10 top-0 bg-white/90 backdrop-blur-md shadow-sm w-full flex justify-between items-center !p-2.5 sm:!px-5 sm:!py-2.5">
        <Link to="/" className="font-bold text-2xl cursor-pointer">
          <span className="text-[var(--color-red)]">Pizza</span>
          <span className="text-[var(--color-olive)]">Delight</span>
        </Link>
        <Navigation placedOn={"header"} setIsSidebarOpen={setIsSidebarOpen} />

        <div className="flex items-center gap-6 sm:gap-10">
          {/* Phone Number */}
          <Phone placedOn={"header"} />
          {/* Cart */}
          <div className="hover:bg-[var(--color-hover)] !p-2 !mt-2 rounded-lg cursor-pointer">
            <ShoppingCart className="absolute" />
            <div className="font-(family-name:--font-default) text-[10px] text-white rounded-full bg-[var(--color-red)] !px-1.5 !py-0.5 text-center relative -top-3.5 -right-4 md:text-xs md:!px-2 md:!py-1 md:-top-4">
              3
            </div>
          </div>
          {/* Profile */}
          <Profile placedOn={"header"} setIsSidebarOpen={setIsSidebarOpen} />
          {/* Hamburger */}
          <div
            className="md:hidden hover:bg-[var(--color-hover)] !p-2 rounded-lg cursor-pointer sm:!-ml-3"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu />
          </div>
        </div>
      </header>

      {/* SideBar */}
      <SideBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  );
}

export default Header;
