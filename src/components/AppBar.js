import React from "react";

import { Button } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";

export const AppBar = () => {
  return (
    <>
      <Button component={RouterLink} to="/">
        <Typography variant="h5">Home</Typography>
      </Button>

      <Button component={RouterLink} to="/works">
        <Typography variant="h5">Works</Typography>
      </Button>

      <Button component={RouterLink} to="/about">
        <Typography variant="h5">About</Typography>
      </Button>

      <Button component={RouterLink} to="/contact">
        <Typography variant="h5">Contact</Typography>
      </Button>
    </>
  );
};
