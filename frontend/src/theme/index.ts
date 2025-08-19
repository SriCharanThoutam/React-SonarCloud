import { createTheme } from "@mui/material";
import { COLORS, FONT, SHAPE } from '../utils/constants'

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.PRIMARY_700,
    },
    secondary: {
      main: COLORS.SECONDARY_500,
    },
  },
  typography: {
    fontFamily: FONT.FAMILY_ROBOTO,
    button: {
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: SHAPE.BORDER_RADIUS,
  },
});

export default theme;
