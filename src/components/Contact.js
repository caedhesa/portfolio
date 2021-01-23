import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { SocialBar } from "./SocialBar";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
export const Contact = () => {
  const theme = useTheme();
  const classes = useStyles();
  console.log(theme);
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const { t } = useTranslation();

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
            <Typography variant="h1">{t("contact.title")}</Typography>
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
              {t(`contact.description.part1`)}
            </Typography>
            <SocialBar />
          </Grid>
        </Grid>
      </Fade>
    </>
  );
};
