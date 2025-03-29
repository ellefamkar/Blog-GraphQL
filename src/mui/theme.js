import { createTheme } from "@mui/material";

const theme = createTheme({
    typography :{
        fontFamily: `'FiraCode', Courier, monospace`,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        fontWeightHeavy: 800,
    },
    palette: {
        primary: {
          main: "#3f7672",
          contrastText: "#ffffff",
          light: "#afd6d9",
          dark: "#123937",
        },
        secondary: {
          main: "#f1eae9",
          light: "#4f3134",
          dark: "#d9caca",
          contrastText: "#000000",
        },
      },
});

export default theme;