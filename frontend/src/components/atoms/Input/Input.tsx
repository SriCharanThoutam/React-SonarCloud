import { TextField } from "@mui/material";
import React from "react";

interface InputProps {
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ type = "text", value, placeholder = "", onChange }) => {
  return (
    <TextField
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      fullWidth
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: 2,
          backgroundColor: "#262529",
          color: "white",
        },
        "& .MuiInputBase-input": {
          padding: "16px 15px",
          fontSize: "16px",
        },
      }}
    />
  );
};

export default Input;
