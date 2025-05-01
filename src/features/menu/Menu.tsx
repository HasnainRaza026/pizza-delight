import { Outlet } from "react-router";
import PizzaMenuCard from "../../ui/layout/PizzaMenuCard";
import { useFetchMenu } from "../../hooks/useFetchMenu";
import PageLoader from "../../ui/layout/PageLoader";
import { PizzaData } from "../../types/PizzaDataType";

function Menu() {
  const { menu, error, isPending } = useFetchMenu();

  if (isPending) return <PageLoader />;
  if (error) return <h1>Error...!</h1>;

  return (
    <div className="flex justify-center !pt-7">
      <div className="flex flex-col items-center gap-6 select-none !px-2.5 md:!px-5 lg:!px-10">
        {menu.map((pizza: PizzaData) => (
          <div key={pizza.id}>
            <PizzaMenuCard pizza={pizza} placedOn="menu" />
          </div>
        ))}
      </div>

      <Outlet />
    </div>
  );
}

export default Menu;
