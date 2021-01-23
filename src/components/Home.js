import React from "react";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export const Home = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <Fade in={true} timeout={2000}>
        <Grid container style={{ alignItems: "center" }}>
          <Grid
            item
            xs={12}
            sm={4}
            style={{
              textAlign: matches ? "end" : "center",
              padding: matches ? 10 : 5,
            }}
          >
            <Typography variant="h1">Hi!</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              maxWidth: matches ? "50%" : "100%",
              textAlign: matches ? "start" : "center",
              padding: matches ? 10 : 5,
              paddingRight: matches ? 20 : 5,
            }}
          >
            <Typography variant="h5" style={{ align: "justify" }}>
              thanks for taking some time to visit my personal website, in here
              you will find some information about who i am, what i've done and
              what i like to do
            </Typography>
          </Grid>
        </Grid>
      </Fade>
    </>
  );
};
