export const tokens = {
  grey: {
    100: "#d4d4d4",
    200: "#a9a9a9",
    300: "#7f7f7f",
    400: "#545454",
    500: "#292929",
    600: "#212121",
    700: "#191919",
    800: "#101010",
    900: "#080808"
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
    100: "#e7f8ff",
    200: "#d0f1ff",
    300: "#b8ebff",
    400: "#a1e4ff",
    500: "#89ddff",
    600: "#6eb1cc",
    700: "#528599",
    800: "#375866",
    900: "#1b2c33"
  },
  tertiary: {
    // purple
    500: "#8884d8",
  },
  background: {
    light: "#ffffff",
    main: "#2D2A2E",
  },
  contrast:{
    primary: 'white'
  }
};

// mui theme settings
export const themeSettings = {
  palette: {
    primary: {
      ...tokens.primary,
      main: tokens.primary[500],
      light: tokens.primary[400],
      contrastText: tokens.contrast.primary
    },
    secondary: {
      ...tokens.secondary,
      main: tokens.secondary[600],
      dark: tokens.secondary[700],
    },
    tertiary: {
      ...tokens.tertiary,
    },
    grey: {
      ...tokens.grey,
      main: tokens.grey[500],
    },
    background: {
      default: tokens.background.main,
      light: tokens.background.light,
      dark: tokens.background.main,
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
    }
  }
};