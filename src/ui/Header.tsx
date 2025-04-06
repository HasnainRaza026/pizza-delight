import { Link } from "react-router";
import { PhoneCall, ShoppingCart, Menu } from "lucide-react";
import Navigation from "./Navigation";
import Profile from "./Profile";

function Header() {
  return (
    <header className="w-full flex justify-between items-center !p-2.5 sm:!px-5 sm:!py-2.5">
      <Link to="/" className="font-bold text-2xl cursor-pointer">
        <span className="text-[var(--color-red)]">Pizza</span>
        <span className="text-[var(--color-olive)]">Delight</span>
      </Link>
      <Navigation />

      <div className="flex items-center gap-10">
        {/* Phone Number */}
        <div className="hidden lg:block cursor-pointer">
          <div className="flex gap-2 !p-2 rounded-lg bg-[var(--color-tomato)] text-white">
            <div className="flex justify-center items-center">
              <PhoneCall size={28} />
            </div>
            <div className="!pl-2.5 border-l-2">
              <p className="font-medium text-center">Call us now</p>
              <p className="text-xs text-center">123-456-7890</p>
            </div>
          </div>
        </div>
        {/* Cart */}
        <div className="hover:bg-[var(--color-hover)] !p-2 rounded-lg cursor-pointer">
          <ShoppingCart className="absolute" />
          <div className="font-(family-name:--font-default) text-xs text-white rounded-full bg-[var(--color-red)] !px-2 !py-1 text-center relative -top-4 -right-4">
            3
          </div>
        </div>
        {/* Profile */}
        <Profile />
        {/* Hamburger */}
        <div className="md:hidden hover:bg-[var(--color-hover)] !p-2 rounded-lg cursor-pointer">
          <Menu />
        </div>
      </div>
    </header>
  );
}

export default Header;
