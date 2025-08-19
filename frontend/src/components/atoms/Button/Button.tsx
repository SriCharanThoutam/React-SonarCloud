import React from "react";
import { Button as MUIButton } from "@mui/material";

interface ButtonProps {
  label: string;
  color?: "primary" | "secondary";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, color = "primary", onClick }) => {
  return (
    <MUIButton variant="contained" color={color} onClick={onClick}>
      {label}
    </MUIButton>
  );
};

export default Button;
