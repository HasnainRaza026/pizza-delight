import Menu from "../features/menu/Menu";
import { MenuProvider } from "../features/menu/MenuContext";

function MenuPage() {
  return (
    <>
      <MenuProvider>
        <Menu />
      </MenuProvider>
    </>
  );
}

export default MenuPage;
