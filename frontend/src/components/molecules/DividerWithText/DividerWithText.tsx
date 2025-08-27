import { Divider, Typography, Box, styled } from "@mui/material";

interface DividerProps {
  text: string;
}

const StyledDivider = styled(Divider)(() => ({
  flex: 1,
  borderColor: "#413F4D",
}));

const DividerWithText: React.FC<DividerProps> = ({ text }) => {
  return (
    <Box display="flex" alignItems="center">
      <StyledDivider />
      <Typography
      sx={{
        p: 2,
        color: 'text.secondary',
        fontSize: '14px'
      }}
      >
        {text}
      </Typography>
      <StyledDivider />
    </Box>
  );
};

export default DividerWithText;
