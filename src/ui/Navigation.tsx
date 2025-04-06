import { NavLink } from "react-router";

function Navigation() {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-6">
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
