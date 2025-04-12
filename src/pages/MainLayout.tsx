import { Outlet } from "react-router";
import Header from "../ui/layout/Header";
import Footer from "../ui/layout/Footer";

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
