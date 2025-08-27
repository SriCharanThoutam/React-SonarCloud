import { Box, Typography, Link } from "@mui/material";
import Input from "../atoms/Input/Input";
import LogInButton from "../atoms/Button/LogInButton";
import DividerWithText from "../molecules/DividerWithText/DividerWithText";
import SocialLoginButton from "../molecules/SocialLoginButton/SocialLoginButton";
import GoogleIcon from "../../assets/google.svg";
import StripeIcon from "../../assets/stripe.svg";
import XeroIcon from "../../assets/xero.svg";
import { LOGIN_TEXTS } from "../../utils/constants";
import { useState } from "react";
import api from "../../utils/api";
import { Link as RouterLink } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      setError(null);

      // GET request
      const res = await api.get(`/users?email=${email}&password=${password}`);

      if (res.data.length > 0) {
        alert(`Welcome ${res.data[0].name}!`);
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.log(err);
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Box>
        <Typography variant="h5" fontWeight={700} color="text.primary" mb={1}>
          {LOGIN_TEXTS.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {LOGIN_TEXTS.subtitle}
        </Typography>
      </Box>

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

      {error && <Typography color="error">{error}</Typography>}

      <Link href="#" variant="body2" underline="hover" color="primary">
        {LOGIN_TEXTS.forgotPassword}
      </Link>

      <LogInButton
        label={LOGIN_TEXTS.continueButton}
        color="primary"
        onClick={handleLogin}
        disabled={!email || !password}
      />

      <DividerWithText text="Or" />

      <Box display="flex" gap={3}>
        <SocialLoginButton
          icon={GoogleIcon}
          label="Google"
          onClick={() => alert("Google login")}
        />
        <SocialLoginButton
          icon={StripeIcon}
          label="Stripe"
          onClick={() => alert("Stripe login")}
        />
        <SocialLoginButton
          icon={XeroIcon}
          label="Xero"
          onClick={() => alert("Xero login")}
        />
      </Box>

      <Typography variant="body2" color="textSecondary">
        {LOGIN_TEXTS.noAccount}{" "}
        <Link component={RouterLink} to={"/signup"}>
          {LOGIN_TEXTS.signUp}
        </Link>
      </Typography>
    </Box>
  );
};

export default LoginForm;
