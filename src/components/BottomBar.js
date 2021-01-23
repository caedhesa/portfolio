import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  IconButton,
  SvgIcon,
} from "@material-ui/core";
import TranslateIcon from "@material-ui/icons/Translate";
import Popover from "@material-ui/core/Popover";

import { useTheme } from "@material-ui/core/styles";

export const BottomBar = (props) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Grid
      item
      style={{
        justifyContent: "center",
        display: "inline-flex",
        padding: "10px",
      }}
      xs={12}
    >
      <IconButton
        onClick={() => props.switchTheme()}
        style={theme.custom.AppBar}
        target="_blank"
        disableFocusRipple
        disableRipple
      >
        <SvgIcon>
          <path d="M 4 2 C 2.9 2 2 2.9 2 4 L 2 12 C 2 13.1 2.9 14 4 14 L 5 14 L 5 12 L 4 12 L 4 6 L 16 6 L 16 9 L 18 9 L 18 4 C 18 2.9 17.1 2 16 2 L 4 2 z M 6 7 L 6 9.78125 C 6.532 9.30225 7.229 9 8 9 L 8.65625 9 L 9 9 L 9 7 L 6 7 z M 11 7 L 11 9 L 14 9 L 14 7 L 11 7 z M 8 10 C 6.9 10 6 10.9 6 12 L 6 20 C 6 21.1 6.9 22 8 22 L 20 22 C 21.1 22 22 21.1 22 20 L 22 12 C 22 10.9 21.1 10 20 10 L 8 10 z M 8 12 L 20 12 L 20 14 L 8 14 L 8 12 z M 10 16 L 13 16 L 13 19 L 10 19 L 10 16 z M 15 16 L 18 16 L 18 19 L 15 19 L 15 16 z" />
        </SvgIcon>
      </IconButton>
      <IconButton
        onClick={handleClick}
        style={theme.custom.AppBar}
        target="_blank"
        disableFocusRipple
        disableRipple
      >
        <TranslateIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemText primary="DE" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="EN" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="ES" />
          </ListItem>
        </List>
      </Popover>
    </Grid>
  );
};
