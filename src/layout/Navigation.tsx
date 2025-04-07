import { NavLink } from "react-router";
import { SidebarProps } from "../types/PlacedProp";

function Navigation({ placedOn, setIsSidebarOpen }: SidebarProps) {
  let placedOnDirectionCSS: string = "";
  let placedOnDisplayCSS: string = "";
  if (placedOn === "header") {
    placedOnDirectionCSS = "flex-row gap-6";
    placedOnDisplayCSS = "hidden md:block";
  } else if (placedOn === "sidebar") {
    placedOnDirectionCSS = "flex-col gap-4";
    placedOnDisplayCSS = "block";
  }

  return (
    <nav className={`${placedOnDisplayCSS}`}>
      <ul className={`flex ${placedOnDirectionCSS}`}>
        <NavLink to="/">
          <li className="text-xl font-medium cursor-pointer hover:text-[var(--color-tomato)]">
            Home
          </li>
        </NavLink>
        <NavLink to="/menu">
          <li className="text-xl font-medium cursor-pointer hover:text-[var(--color-tomato)]">
            Menu
          </li>
        </NavLink>
        <NavLink to="/about">
          <li className="text-xl font-medium cursor-pointer hover:text-[var(--color-tomato)]">
            About
          </li>
        </NavLink>
        <NavLink to="/contact">
          <li className="text-xl font-medium cursor-pointer hover:text-[var(--color-tomato)]">
            Contact
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navigation;
