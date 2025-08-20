import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import LoginPage from "./components/atoms/pages/LogInPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoginPage />
    </ThemeProvider>
  );
}

export default App;
