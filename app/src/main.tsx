import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { themeOne, themeTwo, themeThree } from "@felipesanchezsoberanis/library/themes";

const themes = [themeOne, themeTwo, themeThree];
const theme = themes[Math.floor(Math.random() * themes.length)];

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>
);
