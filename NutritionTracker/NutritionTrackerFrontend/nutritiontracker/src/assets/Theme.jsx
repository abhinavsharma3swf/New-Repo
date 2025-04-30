import { createTheme, ThemeProvider } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#00b894", // green accent
        },
        secondary: {
            main: "#0984e3", // blue
        },
    },
    typography: {
        fontFamily: "Roboto, sans-serif",
    },
});
