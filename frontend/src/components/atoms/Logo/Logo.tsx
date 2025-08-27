import { Box, Typography, styled } from "@mui/material";
import Icon from "../../../assets/icon.svg";
import theme from "../../../theme";

const StyledImage = styled("img")(() => ({
    width: 32,
    height: 32
}))

const Logo: React.FC = () => {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <StyledImage src={Icon} alt="Seeder logo"/>
      <Typography variant="h6" fontWeight={600} color={theme.palette.text.primary}>
        Seeder
      </Typography>
    </Box>
  );
};

export default Logo;
