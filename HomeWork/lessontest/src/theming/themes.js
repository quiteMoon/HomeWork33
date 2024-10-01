import { grey, green, red } from "@mui/material/colors";
import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        primary: {
            light: grey[500],
            main: grey[700],
            dark: grey[900],
        },
        secondary: {
            light: green[200],
            main: "#798897",
            dark: green[800],
        }
    },
});

export const lightTheme = createTheme({
    palette: {
        primary: {
            light: red[100],
            main: red[300],
            dark: red[600],
        },
        secondary: {
            light: green[200],
            main: "#798897",
            dark: green[800],
        }
    },
});