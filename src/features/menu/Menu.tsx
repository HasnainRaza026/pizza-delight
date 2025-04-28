import { Outlet } from "react-router";
import { pizzaMenu } from "../../data/pizzaMenu";
import PizzaMenuCard from "../../ui/layout/PizzaMenuCard";
import { useMenu } from "./MenuContext";

function Menu() {
  const { isPizzaDetailModalOpen, toggleModal } = useMenu();
  console.log(isPizzaDetailModalOpen);
  return (
    <div className="flex justify-center !pt-7">
      <div className="flex flex-col items-center gap-6 !px-2.5 md:!px-5 lg:!px-10">
        {pizzaMenu.map((pizza) => (
          <div key={pizza.id} onClick={toggleModal}>
            <PizzaMenuCard pizza={pizza} placedOn="menu" />
          </div>
        ))}
      </div>

      {isPizzaDetailModalOpen && <Outlet />}
    </div>
  );
}

export default Menu;
