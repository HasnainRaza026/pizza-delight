import { Outlet } from "react-router";
import Header from "../layout/Header";

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default MainLayout;
