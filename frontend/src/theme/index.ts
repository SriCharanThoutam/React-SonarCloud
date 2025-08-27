import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#6C5DD3"
        },
        secondary: {
            main: "#393552"
        },
        text: {
            primary: "#E8E7F0",
            secondary: "#A5A5A6"
        },
        background: {
            default: "#18181C"
        }
    },
    typography: {
        fontFamily: "Gilroy, sans-serif",
        button: {
            textTransform: 'none'
        }
    },
    shape: {
        borderRadius: 8
    },
})

export default theme;