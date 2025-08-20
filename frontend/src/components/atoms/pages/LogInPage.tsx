import { useState } from "react";
import { Typography, Container } from "@mui/material";
import Input from "../Input/Input";
import LogInButton from "../Button/LogInButton";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert("Login success!");
    console.log(`Email: ${email} \nPassword: ${password}`);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#1C1B23",
        color: "#E8E7F0",
      }}
    >
      <Typography variant="h3" fontWeight="800">
        Login to Seeder✨
      </Typography>
      <Typography variant="subtitle1" color="#A5A5A6">
        Enter your mail id and password to login
      </Typography>

      <Input type="email" value={email} placeholder="Enter your email id" onChange={setEmail} />
      <Input type="password" value={password} placeholder="Enter your password" onChange={setPassword} />
      <LogInButton onClick={handleLogin} />
    </Container>
  );
}

export default LoginPage;
