import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  primaryColor: "blue",
  defaultRadius: "md",
  fontFamily: "Montserrat, sans-serif",
  headings: {
    fontFamily: "Verdana, sans-serif",
  },
  breakpoints: {
    xs: "400px",
    sm: "580px",
    md: "62em",
    lg: "75em",
    xl: "88em",
  },
  colors: {
    blue: [
      "#e6f3ff",
      "#cce7ff",
      "#99ceff",
      "#66b5ff",
      "#339cff",
      "#0084ff",
      "#0066cc",
      "#004d99",
      "#003366",
      "#001a33",
    ],
  },
});
root.render(
  <MantineProvider theme={theme}>
    <App />
  </MantineProvider>
);
