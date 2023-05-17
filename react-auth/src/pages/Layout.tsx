import { Outlet } from "react-router-dom";
import { Theme } from "@carbon/react";
import Header from "../components/Header";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 70%;
  margin: auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = () => {
  return (
    <Theme theme="g100">
      <Header />
      <AppContainer>
        <Outlet />
      </AppContainer>
    </Theme>
  );
};

export default Layout;
