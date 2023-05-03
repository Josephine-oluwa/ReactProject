import React from "react";
import Footer from "./Footer";
import styled from "styled-components";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <MyOutlet />
      <Footer />
    </div>
  );
};

export default Layout;

const MyOutlet = styled(Outlet)`
  min-height: 60vh;
  width: 100%;
  background-color: teal;
`;
