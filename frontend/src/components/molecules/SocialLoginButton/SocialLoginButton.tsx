import { Button, Box, Typography, styled } from "@mui/material";

interface SocialLoginButtonProps {
  icon: string;
  label: string;
  onClick: () => void;
}

const StyledSocialButton = styled(Button)(() => ({
  display: "flex",
  padding: "50px",
  height: 100,
  borderColor: "#201F24",
  color: "white",
  backgroundColor: "#1F1E25",
}))

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({ icon, label, onClick }) => {
  return (
    <StyledSocialButton
      onClick={onClick}
      variant="outlined"
    >
      <Box display="flex" alignItems="center" gap={2} flexDirection="column">
        <img src={icon} alt={label} width={24} height={24} />
        <Typography>{label}</Typography>
      </Box>
    </StyledSocialButton>
  );
};

export default SocialLoginButton;
