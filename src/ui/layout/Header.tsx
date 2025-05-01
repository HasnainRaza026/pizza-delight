import { Link } from "react-router";
import { ShoppingCart, Menu } from "lucide-react";
import Navigation from "./Navigation";
import Phone from "./Phone";
import SideBar from "./SideBar";
import { useState } from "react";
import SearchBar from "../SearchBar";

type HeaderProps = {
  type: string;
};

function Header({ type }: HeaderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const headerOnMenuPage = "withSearch";
  const headerOnOtherPage = "default";

  return (
    <>
      <header className="sticky z-20 top-0 bg-white/90 backdrop-blur-md shadow-sm w-full flex justify-between items-center !p-2.5 sm:!px-5 sm:!py-2.5">
        {/* Logo */}
        <Link
          to="/"
          className={`${type === headerOnMenuPage ? "hidden sm:block" : ""} font-bold text-2xl cursor-pointer`}
        >
          <span className="text-[var(--color-red)]">Pizza</span>
          <span className="text-[var(--color-olive)]">Delight</span>
        </Link>
        <Navigation placedOn={"header"} setIsSidebarOpen={setIsSidebarOpen} />

        {type === headerOnMenuPage && <SearchBar placeholder="Search" />}

        <div className="flex items-center gap-6 sm:gap-10">
          {/* Phone Number */}
          {type === headerOnOtherPage && <Phone placedOn={"header"} />}

          {/* Cart */}
          <div
            className={`${type === headerOnMenuPage ? "hidden sm:block" : ""} hover:bg-[var(--color-hover)] !p-2 !mt-2 rounded-lg cursor-pointer`}
          >
            <Link to="/cart">
              <ShoppingCart className="absolute" />
              <div className="font-(family-name:--font-default) text-[10px] text-white rounded-full bg-[var(--color-red)] !px-1.5 !py-0.5 text-center relative -top-3.5 -right-4 md:text-xs md:!px-2 md:!py-1 md:-top-4">
                3
              </div>
            </Link>
          </div>
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
