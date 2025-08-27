import { SIGNUP_TEXTS } from "../../utils/constants";
import LogInButton from "../atoms/Button/LogInButton";
import Input from "../atoms/Input/Input";
import DividerWithText from "../molecules/DividerWithText/DividerWithText";
import SocialLoginButton from "../molecules/SocialLoginButton/SocialLoginButton";
import GoogleIcon from "../../assets/google.svg";
import StripeIcon from "../../assets/stripe.svg";
import XeroIcon from "../../assets/xero.svg";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import api from "../../utils/api";
import { Box, Typography, Link } from "@mui/material";

const SignupForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      setError(null);

      // GET request, to check if email already exist
      const existed = await api.get(`/users?email=${email}`);

      if ((await existed).data.length > 0) {
        setError("Email already in use.");
        return;
      }

      // POST request, to add new data
      await api.post("/users", { name, email, password });

      alert("Account created successfully! Please login.");
      navigate("/");
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.log(err);
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Box>
        <Typography variant="h5" fontWeight={700} color="text.primary" mb={1}>
          {SIGNUP_TEXTS.title}
        </Typography>
      </Box>

      <Input value={name} placeholder="Your Name" onChange={setName} />
      <Input
        type="email"
        value={email}
        placeholder="Email Address"
        onChange={setEmail}
      />
      <Input
        type="password"
        value={password}
        placeholder="Password"
        onChange={setPassword}
      />
      {error && <Typography color="error">{error}</Typography>}

      <LogInButton
        label={SIGNUP_TEXTS.signUpButton}
        color="primary"
        onClick={handleSignUp}
        disabled={!name || !email || !password}
      />

      <DividerWithText text="Or" />

      <Box display="flex" gap={3}>
        <SocialLoginButton
          icon={GoogleIcon}
          label="Google"
          onClick={() => alert("Google Signup")}
        />
        <SocialLoginButton
          icon={StripeIcon}
          label="Stripe"
          onClick={() => alert("Stripe Signup")}
        />
        <SocialLoginButton
          icon={XeroIcon}
          label="Xero"
          onClick={() => alert("Xero Signup")}
        />
      </Box>

      <Typography variant="body2" color="text.secondary">
        {SIGNUP_TEXTS.isAccount}{" "}
        <Link component={RouterLink} to={"/"}>
          {SIGNUP_TEXTS.logIn}
        </Link>
      </Typography>
    </Box>
  );
};

export default SignupForm;
