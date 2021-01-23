import React from "react";
import { IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedinIcon from "@material-ui/icons/LinkedIn";

export const SocialBar = () => {
  return (
    <>
      <IconButton
        style={{ color: "#0072b1" }}
        target="_blank"
        href="https://www.linkedin.com/in/carloshzs/"
      >
        <LinkedinIcon fontSize="large" />
      </IconButton>
      <IconButton
        // style={{ color: "black", backgroundColor: "transparent" }}
        target="_blank"
        href="https://github.com/caedhesa"
      >
        <GitHubIcon fontSize="large" />
      </IconButton>
    </>
  );
};
