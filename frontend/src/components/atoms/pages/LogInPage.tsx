import { useState } from "react";
import { Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Input from "../Input/Input";
import LogInButton from "../Button/LogInButton";
import { LOGINPAGE } from "../../../utils/constants";

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  justifyContent: "center",
  alignItems: "center",
  minHeight: LOGINPAGE.LAYOUT.minHeight,
  backgroundColor: LOGINPAGE.COLORS.background,
  color: LOGINPAGE.COLORS.textPrimary,
}));

const Heading = styled(Typography)(() => ({
  fontWeight: LOGINPAGE.FONT.headingWeight
}));

const Subtitle = styled(Typography)(() => ({
  color: LOGINPAGE.COLORS.textSecondary,
}));

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert("Login success!");
    console.log(`Email: ${email} \nPassword: ${password}`);
  };

  return (
    <StyledContainer maxWidth="sm">
      <Heading variant="h3" fontWeight="800">
        Login to Seeder✨
      </Heading>
      <Subtitle variant="subtitle1">
        Enter your mail id and password to login
      </Subtitle>

      <Input
        type="email"
        value={email}
        placeholder="Enter your email id"
        onChange={setEmail}
      />
      <Input
        type="password"
        value={password}
        placeholder="Enter your password"
        onChange={setPassword}
      />
      <LogInButton onClick={handleLogin} />
    </StyledContainer>
  );
}

export default LoginPage;
