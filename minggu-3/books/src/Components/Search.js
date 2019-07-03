import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  search: {
    position: "relative",
    borderRadius: 32,
    backgroundColor: "white",
    marginTop: 64,
    width: "100%",
    height: 64,
    boxShadow: `0px 4px 15px #bfbfbf`,
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    color: "#A0A0A0",
    marginTop: "0.5%",
    fontWeight: "bold",
    fontSize: 32,
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width")
  }
}));

export default function Search() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar>
        <div className={classes.search}>
          <InputBase
            fullWidth={true}
            placeholder="Search Book..."
            classes={{
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "Search" }}
          />
        </div>
      </Toolbar>
    </div>
  );
}
