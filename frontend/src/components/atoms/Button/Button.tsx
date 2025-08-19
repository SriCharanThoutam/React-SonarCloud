import React from "react";
import { Button as MUIButton } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../theme";

interface ButtonProps {
  label: string;
  color?: "primary" | "secondary";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, color = "primary", onClick }) => {
  return (
    <ThemeProvider theme={theme}>
      <MUIButton variant="contained" color={color} onClick={onClick}>
        {label}
      </MUIButton>
    </ThemeProvider>
  );
};

export default Button;
