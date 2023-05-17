import { Outlet } from "react-router-dom";
import { Theme } from "@carbon/react";
import Header from "../components/Header";

const Layout = () => {
  return (
    <Theme theme="g100">
      <Header />
      <Outlet />
    </Theme>
  );
};

export default Layout;
