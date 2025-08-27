import { Button, styled } from "@mui/material";
import React from "react";
import { LOGINBUTTON } from "../../../utils/constants";
import theme from "../../../theme";

interface LogInButtonProps {
  label?: string;
  color?: "primary" | "secondary";
  onClick: () => void;
  disabled?: boolean;
}

const StyledButton = styled(Button)(() => ({
  height: LOGINBUTTON.HEIGHT,
  borderRadius: LOGINBUTTON.BORDER_RADIUS,
  fontWeight: LOGINBUTTON.FONT_SIZE,
  fontSize: LOGINBUTTON.FONT_SIZE,
  "&.Mui-disabled": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.secondary,
  },
}));

const LogInButton: React.FC<LogInButtonProps> = ({ label = "Continue", color = "primary", onClick, disabled }) => {
  return (
    <StyledButton
      variant="contained"
      color={color}
      fullWidth
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </StyledButton>
  );
};

export default LogInButton;
