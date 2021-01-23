import React from "react";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { useTranslation } from "react-i18next";

export const Home = () => {
  const theme = useTheme();
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
            <Typography variant="h1">{t("home.title")}</Typography>
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
              {t(`home.description.part1`)}
            </Typography>
          </Grid>
        </Grid>
      </Fade>
    </>
  );
};
