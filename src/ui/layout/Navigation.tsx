import { NavLink } from "react-router";
import { SidebarProps } from "../../types/PlacedPropType";

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
        <li className="text-xl font-medium cursor-pointer hover:text-[var(--color-tomato)]">
          <NavLink to="/" onClick={() => setIsSidebarOpen(false)}>
            Home
          </NavLink>
        </li>
        <li className="text-xl font-medium cursor-pointer hover:text-[var(--color-tomato)]">
          <NavLink to="/menu" onClick={() => setIsSidebarOpen(false)}>
            Menu
          </NavLink>
        </li>
        <li className="text-xl font-medium cursor-pointer hover:text-[var(--color-tomato)]">
          <NavLink to="/about" onClick={() => setIsSidebarOpen(false)}>
            About
          </NavLink>
        </li>
        <li className="text-xl font-medium cursor-pointer hover:text-[var(--color-tomato)]">
          <NavLink to="/contact" onClick={() => setIsSidebarOpen(false)}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
