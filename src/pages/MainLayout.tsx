import { Outlet, useMatch } from "react-router-dom";
import Header from "../ui/layout/Header";
import Footer from "../ui/layout/Footer";

function MainLayout() {
  // this will match /menu, /menu/123, etc.
  const isMenuRoute = useMatch({ path: "/menu/*", end: false });

  return (
    <>
      <Header type={isMenuRoute ? "withSearch" : "default"} />
      <Outlet />
      {!isMenuRoute && <Footer />}
    </>
  );
}

export default MainLayout;
