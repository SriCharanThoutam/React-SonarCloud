import { Button, styled } from "@mui/material";
import React from "react";
import { LOGINBUTTON } from "../../../utils/constants";

interface LogInButtonProps {
  label?: string;
  color?: "primary" | "secondary";
  onClick: () => void;
}

const StyledButton = styled(Button)(() => ({
  height: LOGINBUTTON.HEIGHT,
  borderRadius: LOGINBUTTON.BORDER_RADIUS,
  fontWeight: LOGINBUTTON.FONT_SIZE,
  fontSize: LOGINBUTTON.FONT_SIZE,
}));

const LogInButton: React.FC<LogInButtonProps> = ({ label = "Continue", color = "primary", onClick }) => {
  return (
    <StyledButton
      variant="contained"
      color={color}
      fullWidth
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};

export default LogInButton;
