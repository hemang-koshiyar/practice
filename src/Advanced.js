import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, ThemeButton } from "./App.styled";

const Advanced = () => {
  return (
    <>
      <ThemeButton>Normal Button</ThemeButton>
      <ThemeProvider theme={theme}>
        <ThemeButton>Themed Button</ThemeButton>
      </ThemeProvider>
    </>
  );
};

export default Advanced;
