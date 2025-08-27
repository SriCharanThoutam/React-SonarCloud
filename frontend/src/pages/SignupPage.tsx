import { Box } from "@mui/material";
import LeftHero from "../components/organisms/LeftHero";
import SignupForm from "../components/organisms/SignupForm";
import SignupIllustration from "../assets/SignUp-Illustration.svg";

const SignupPage = () => {
  return (
    <Box display="flex" height="100vh" width="100%">
      <Box flex={1} display={{ xs: "none", md: "flex" }}>
        <LeftHero Illustration={SignupIllustration} />
      </Box>

      <Box
        flex={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="background.default"
      >
        <SignupForm />
      </Box>
    </Box>
  );
};

export default SignupPage;
