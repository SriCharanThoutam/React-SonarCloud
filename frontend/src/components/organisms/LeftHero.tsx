import { Box } from "@mui/material";
import Logo from "../atoms/Logo/Logo";
import theme from "../../theme";

interface LeftHeroProps {
  Illustration: string;
}

const LeftHero: React.FC<LeftHeroProps> = ({ Illustration }) => {
  return (
    <Box
      flex={1}
      display="flex"
      bgcolor={theme.palette.secondary.main}
      p={4}
    >
      <Box alignSelf="flex-start" mb={4}>
        <Logo />
      </Box>
      <img src={Illustration} alt="Illustration" style={{ maxWidth: "70%"}} />
    </Box>
  );
};

export default LeftHero;
