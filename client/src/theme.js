import { darkScrollbar } from "@mui/material";

export const tokens = {
  grey: {
    100: "#d5d4d5",
    200: "#abaaab",
    300: "#817f82",
    400: "#575558",
    500: "#2d2a2e",
    600: "#242225",
    700: "#1b191c",
    800: "#121112",
    900: "#090809"
  },
  primary: {
    // purple
    100: "#fdeae0",
    200: "#fbd5c0",
    300: "#f9c1a1",
    400: "#f7ac81",
    500: "#f59762",
    600: "#c4794e",
    700: "#935b3b",
    800: "#623c27",
    900: "#311e14"
  },
  secondary: {
    // yellow
    100: "#dfe5e8",
    200: "#bfcbd1",
    300: "#a0b1b9",
    400: "#8097a2",
    500: "#607D8B",
    600: "#4d646f",
    700: "#3a4b53",
    800: "#263238",
    900: "#13191c"
  },
  tertiary: {
    // purple
    500: "#a9dc76",
  },
  background: {
    light: "#ffffff",
    main: "#212121",
  },
  contrast:{
    primary: 'white'
  }
};

// mui theme settings
export const themeSettings = {
  palette: {
    mode:'dark',
    primary: {
      ...tokens.primary,
      main: tokens.primary[500],
      light: tokens.primary[400],
      contrastText: tokens.contrast.primary
    },
    secondary: {
      ...tokens.secondary,
      main: tokens.secondary[500],
      dark: tokens.secondary[600],
    },
    tertiary: {
      ...tokens.tertiary,
      main: tokens.tertiary[500]
    },
    grey: {
      ...tokens.grey,
      main: tokens.grey[500],
    },
    background: {
      default: tokens.background.main,
      light: tokens.background.main,
      dark: tokens.background.main,
      paper: tokens.grey[500],
    },
    text:{
      primary:'#ffffff',
    },
    contrast:{
      primary: 'black'
    }
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 32,
      fontWeight:'bold'
    },
    h2: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 24,
    },
    h3: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 20,
      fontWeight: 800,
      color: tokens.grey[200],
    },
    h4: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 600,
      color: tokens.grey[300],
    },
    h5: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      fontWeight: 400,
      color: tokens.grey[100],
    },
    h6: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 10,
      color: tokens.grey[700],
    },
  },
  components:{
    MuiInputLabel:{
      styleOverrides: {
        root : {
          color: 'white'
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides:{
        body: darkScrollbar(),
      }
    },
  },
};