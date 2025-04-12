import { Outlet } from "react-router";
import Header from "../ui/layout/Header";

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default MainLayout;
