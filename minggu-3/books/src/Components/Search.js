import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: 50,
    backgroundColor: "white",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: 99,
    width: "100%",
    height: 96,
    boxShadow: `0px 4px 15px #bfbfbf`
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    color: "#A0A0A0",
    marginTop: "5%",
    marginLeft: "5%",
    fontWeight: "bold",
    fontSize: 30,
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
  }
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar>
        <div className={classes.search}>
          <InputBase
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
