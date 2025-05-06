import { Link } from "react-router";
import { Menu } from "lucide-react";
import Navigation from "./Navigation";
import Phone from "./Phone";
import SideBar from "./SideBar";
import { FormEvent, useState } from "react";
import SearchBar from "../SearchBar";
import { useFetchMenu } from "../../hooks/useFetchMenu";
import { PizzaData } from "../../types/PizzaDataType";
import { useDispatch } from "react-redux";
import { updateActivePizzaDetail } from "../../features/menu/menuSlice";
import CartIcon from "./CartIcon";
import { errorToast } from "../../utils/toastFunctions";

type HeaderProps = {
  type: string;
};

function Header({ type }: HeaderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [inputSeach, setInputSerach] = useState("");

  const { menu } = useFetchMenu();
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputSeach) return;
    const searchedPizza = menu.find(
      (pizza: PizzaData) =>
        pizza.name.toLocaleLowerCase() === inputSeach.toLocaleLowerCase()
    );
    if (searchedPizza)
      dispatch(
        updateActivePizzaDetail({ ...searchedPizza, size: "", toppings: [] })
      );
    else errorToast("Couldn't find pizza");
  };

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

        {/* Navigation */}
        <Navigation placedOn={"header"} setIsSidebarOpen={setIsSidebarOpen} />

        {/* Search-Bar */}
        {type === headerOnMenuPage && (
          <form onSubmit={(e) => handleSubmit(e)}>
            <SearchBar
              placeholder="Search"
              value={inputSeach}
              onChange={(e) => setInputSerach(e.target.value)}
            />
          </form>
        )}

        <div className="flex items-center gap-6 sm:gap-10">
          {/* Phone Number */}
          {type === headerOnOtherPage && <Phone placedOn={"header"} />}

          {/* Cart */}
          <CartIcon type={type} headerOnMenuPage={headerOnMenuPage} />

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
