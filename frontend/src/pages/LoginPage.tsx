import { Box } from "@mui/material";
import LeftHero from "../components/organisms/LeftHero";
import LoginForm from "../components/organisms/LoginForm";
import LoginIllustration from "../assets/LogIn-Illustration.svg"

const LoginPage = () => {
  return (
    <Box display="flex" height="100vh" width="100%">
      <Box flex={1} display={{ xs: "none", md: "flex" }}>
        <LeftHero Illustration={LoginIllustration}/>
      </Box>
      <Box
        flex={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor="background.default"
      >
        <LoginForm />
      </Box>
    </Box>
  );
};

export default LoginPage;
