import {createGlobalStyle} from "styled-components";
import Header from "../src/common/Header";
import React from "react";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Calibri;
  }
`;

const BasicLayout = ({children}: { children: any }) => {
    return (
        <>
            <GlobalStyle/>
            <Header/>
            {children}
        </>
    );
};

export default BasicLayout;
