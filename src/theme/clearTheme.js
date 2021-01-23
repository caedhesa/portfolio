export const clearTheme = {
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
        color: "black",
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
    },
    MuiTypography: {
      root: {
        color: "black",
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
      background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
    },
    gridEnds: {
      height: "15%",
      padding: "25px",
      display: "inline-flex",
      justifyContent: "space-evenly",
    },
    gridContent: {
      padding: "10px",
      justifyContent: "start",
    },
    gridFluid: {
      flexGrow: 3,
      padding: "10px",
      alignItems: "center",
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
