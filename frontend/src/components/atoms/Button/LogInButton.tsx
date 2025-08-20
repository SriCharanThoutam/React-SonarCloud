import { Button } from "@mui/material";
import React from "react";

interface LogInButtonProps {
    label?: string;
    color?: "primary" | "secondary";
    onClick: () => void;
}

const LogInButton: React.FC<LogInButtonProps> = ({ label = "Continue", color="primary", onClick }) => {
  return (
    <Button
      variant="contained"
      color={color}
      fullWidth
      sx={{
        height: 60,
        borderRadius: 2,
        fontWeight: 600,
        fontSize: "16px",
        textTransform: "none",
      }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default LogInButton;
