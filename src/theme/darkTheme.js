export const darkTheme = {
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  typography: {
    fontFamily: ["Catamaran", "sans-serif"].join(","),
  },
  overrides: {
    MuiButton: {
      root: {
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
    },
    MuiIconButton: {
      root: {
        color: "white",
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
    },
    MuiTypography: {
      root: {
        color: "white",
      },
    },
    MuiPopover: {
      paper: {
        backgroundColor: "transparent",
        boxShadow: "none",
      },
    },
  },
  custom: {
    grid: {
      flexDirection: "column",
      minHeight: "100%",
      margin: "0px",
      background: "linear-gradient(135deg, #000000, #2D3436 )",
    },
    gridEnds: {
      height: "15%",
      padding: "25px",
      display: "inline-flex",
      justifyContent: "space-evenly",
    },
    gridContent: {
      height: "70%",
      padding: "10px",
      display: "inline-flex",
      justifyContent: "center",
    },
    gridFluid: {
      flexGrow: 3,
      padding: "10px",
      alignContent: "center",
      textAlign: "center",
      display: "grid",
      justifyContent: "center",
    },
    small: {
      width: "100px",
      height: "100px",
    },
    large: {
      width: "10000px",
      height: "10000px",
    },
  },
};
