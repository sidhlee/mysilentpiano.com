import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../styles";
import Header from "./header";

const StyledLayout = styled("main")`
  width: 100%;
  min-height: 100vh;
  padding-top: calc(var(--header-height) + 2em);
`;

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledLayout>{children}</StyledLayout>
    </>
  );
};

export default Layout;
