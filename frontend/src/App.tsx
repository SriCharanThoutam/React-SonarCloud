import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
