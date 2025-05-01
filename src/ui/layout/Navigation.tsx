import { NavLink, useLocation } from "react-router";
import { SidebarProps } from "../../types/PlacedPropType";
import { useDispatch } from "react-redux";
import { useFetchMenu } from "../../hooks/useFetchMenu";
import { updateActivePizzaDetail } from "../../features/menu/menuSlice";

function Navigation({ placedOn, setIsSidebarOpen }: SidebarProps) {
  const location = useLocation();
  const dispatch = useDispatch();
  const { menu } = useFetchMenu();

  let placedOnDirectionCSS: string = "";
  let placedOnDisplayCSS: string = "";
  if (placedOn === "header") {
    placedOnDirectionCSS = "flex-row gap-6";
    placedOnDisplayCSS = `hidden ${location.pathname === "/menu" ? "lg:block" : "md:block"}`;
  } else if (placedOn === "sidebar") {
    placedOnDirectionCSS = "flex-col gap-4";
    placedOnDisplayCSS = "block";
  }

  return (
    <nav className={`${placedOnDisplayCSS}`}>
      <ul className={`flex ${placedOnDirectionCSS}`}>
        <li className="text-lg font-medium cursor-pointer hover:text-[var(--color-tomato)]">
          <NavLink to="/" onClick={() => setIsSidebarOpen(false)}>
            Home
          </NavLink>
        </li>
        {/* For Mobile */}
        <li className="text-lg font-medium cursor-pointer hover:text-[var(--color-tomato)] block sm:hidden">
          <NavLink to="/menu" onClick={() => setIsSidebarOpen(false)}>
            Menu
          </NavLink>
        </li>
        {/* For Large Sreens */}
        <li className="text-lg font-medium cursor-pointer hover:text-[var(--color-tomato)] hidden sm:block">
          <NavLink
            to="/menu/1"
            onClick={() => {
              dispatch(updateActivePizzaDetail(menu[0]));
              setIsSidebarOpen(false);
            }}
          >
            Menu
          </NavLink>
        </li>
        <li className="text-lg font-medium cursor-pointer hover:text-[var(--color-tomato)]">
          <NavLink to="/about" onClick={() => setIsSidebarOpen(false)}>
            About
          </NavLink>
        </li>
        <li className="text-lg font-medium cursor-pointer hover:text-[var(--color-tomato)]">
          <NavLink to="/contact" onClick={() => setIsSidebarOpen(false)}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
