import { TextField, styled } from "@mui/material";
import React from "react";
import { LOGININPUT } from "../../../utils/constants";

interface InputProps {
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const StyledInput = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: LOGININPUT.BORDER_RADIUS,
    backgroundColor: LOGININPUT.BACKGROUND_COLOR,
    color: LOGININPUT.COLOR,
  },
  "& .MuiInputBase-input": {
    padding: LOGININPUT.PADDING,
    fontSize: LOGININPUT.FONT_SIZE,
  }
}));

const Input: React.FC<InputProps> = ({ type = "text", value, placeholder = "", onChange }) => {
  return (
    <StyledInput
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      fullWidth
    />
  );
};

export default Input;
