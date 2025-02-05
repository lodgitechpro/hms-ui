import React from "react";
import "./App.css";
import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Home } from "./pages";

const theme = createTheme({
  colorSchemes: {
    dark: false,
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home/>
    </ThemeProvider>
  );
}

export default App;
