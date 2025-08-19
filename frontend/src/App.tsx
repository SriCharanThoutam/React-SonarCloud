import Button from "./components/atoms/Button/Button";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";

function App() {
  const handleClick = () => alert("Clicked");

  return (
    <ThemeProvider theme={theme}>
      <Button label="Press Me" color="secondary" onClick={handleClick} />
    </ThemeProvider>
    
  );
}

export default App;
