import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  mode: "light",
  fontFamily:
    "-apple - system, BlinkMacSystemFont, 'Raleway', 'Segoe UI',  'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',  'Helvetica Neue', sans- serif",
  primaryColor: "#ffffff",
  secondaryColor: "#f2f6ff",
  primaryAccentColor: "#d3d9f3",
  secondaryAccentColor: "#F093FB",
  tertiaryAccentColor: "#F5576C",
  primaryTextColor: "#1B213C",
  secondaryTextColor: "#ffffff",
  primaryGradient: "linear-gradient(108.43deg, #f093fb 0%, #f5576c 100%)",
  secondaryGradient: "linear-gradient(111.01deg, #f093fb 0%, #ffffff 100%)",
  primaryGradientShadow: "0px 1px 10px #f093fb",
};

export const darkTheme: DefaultTheme = {
  mode: "dark",
  fontFamily:
    "-apple - system, BlinkMacSystemFont, 'Raleway', 'Segoe UI',  'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',  'Helvetica Neue', sans- serif",
  primaryColor: "#18192F",
  secondaryColor: "#f2f6ff",
  primaryAccentColor: "#d3d9f3",
  secondaryAccentColor: "#4FACFE",
  tertiaryAccentColor: "#00F2FE",
  primaryTextColor: "#ffffff",
  secondaryTextColor: "#1B213C",
  primaryGradient: "linear-gradient(108.43deg, #4facfe 0%, #00f2fe 100%)",
  secondaryGradient:
    "linear-gradient(111.01deg, #bce6f8 0%, rgba(85, 73, 222, 0) 100%)",
  primaryGradientShadow: "0px 1px 10px #1453ac",
};
