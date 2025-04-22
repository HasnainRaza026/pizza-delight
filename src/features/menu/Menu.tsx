import { Outlet } from "react-router";
import { pizzaMenu } from "../../data/pizzaMenu";
import PizzaMenuCard from "../../ui/layout/PizzaMenuCard";
import { useMenu } from "./MenuContext";

function Menu() {
  const { isPizzaDetailModalOpen, toggleModal } = useMenu();
  return (
    <>
      <div className="overflow-scroll flex flex-col items-center gap-6 !pt-7">
        {pizzaMenu.map((pizza) => (
          <div key={pizza.id} onClick={toggleModal}>
            <PizzaMenuCard pizza={pizza} placedOn="menu" />
          </div>
        ))}
      </div>

      <div className="block sm:hidden">
        {isPizzaDetailModalOpen && <Outlet />}
      </div>
    </>
  );
}

export default Menu;
