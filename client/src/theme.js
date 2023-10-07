import { darkScrollbar } from "@mui/material";

export const tokens = {
  indigo: {
    100: "#d5d9f8",
    200: "#abb3f0",
    300: "#808de9",
    400: "#5667e1",
    500: "#2c41da",
    600: "#2334ae",
    700: "#1a2783",
    800: "#121a57",
    900: "#090d2c"
  },
  grey:{
    100: "#bbc4d4",
    200: "#afb7ca",
    300: "#7491ad"
  },
  black: "#232639",
  cream: "#cabaaa",
  
  background: {
    dark: "#212121",
    light: "#f9fafd",
  },
  contrast:{
    primary: 'white'
  }
};

// mui theme settings
export const themeSettings = {
  palette: {
    mode:'light',
    primary: {
      ...tokens.indigo,
      main: tokens.indigo[500],
      light: tokens.indigo[400],
    },
    grey: {
      ...tokens.grey,
      main: tokens.grey[200],
    },
    cream: tokens.cream,
    black: tokens.black,
    background: {
      light: tokens.background.light,
      dark: tokens.background.dark,
      paper: tokens.grey[500],
    },
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
      color: tokens.grey[300],
    },
    navLink: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 13,
      color: tokens.grey[300],
      fontWeight:'bold' 
    },
    chartTitle: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 18,
      color: tokens.black,
      fontWeight: 'bold',
    },
    smallBold: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      color: tokens.black,
      fontWeight: 'bold',
    },
    mediumBold: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 14,
      color: tokens.black,
      fontWeight: 'bold',
    },
    largeBold: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 18,
      color: tokens.black,
      fontWeight: 'bold',
    }
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
    MuiPaper: {
      variants: [
        {
          props: { variant: 'chartBox' },
          style: {
            width:'100%',
            height:'100%',
            padding:'20px', 
            background:'#d9d9d9',
            boxShadow:'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            textAlign:'left'
          }     
        },
      ],
    },
  },
};