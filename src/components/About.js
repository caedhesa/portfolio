import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SocialBar } from "./SocialBar";
import Avatar from "@material-ui/core/Avatar";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(24),
    height: theme.spacing(24),
  },
}));

export const About = () => {
  const classes = useStyles();
  console.log(classes);
  return (
    <Grid item xs={12}>
      <Avatar
        alt="Carlos H"
        src="../images/profilepic.jpg"
        className={classes.large}
      />
      <Typography variant="h5">Please hire me im hungry</Typography>
      <SocialBar />
    </Grid>
  );
};
