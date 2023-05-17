import { Outlet } from "react-router-dom";
import { Theme } from "@carbon/react";

const Layout = () => {
  return (
    <Theme theme="g100">
      <Outlet />
    </Theme>
  );
};

export default Layout;
