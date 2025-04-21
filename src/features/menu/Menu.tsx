import { Outlet } from "react-router";
// import { pizzaMenu } from "../../data/pizzaMenu";
// import PizzaMenuCard from "../../ui/layout/PizzaMenuCard";

function Menu() {
  return (
    <div className="flex flex-col items-center gap-6 !pt-7">
      {/* {pizzaMenu.map((pizza) => (
        <PizzaMenuCard key={pizza.id} pizza={pizza} placedOn="menu" />
      ))} */}

      <Outlet />
    </div>
  );
}

export default Menu;
