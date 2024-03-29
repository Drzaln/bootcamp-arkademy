import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  typo: {
    fontWeight: "bold",
    fontSize: 32,
    marginLeft: 128,
    marginTop: 16,
    marginBottom: 16,
  }
});

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="white" style={{boxShadow: `0px 4px 15px #bfbfbf`, width: "100%"}}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.typo}>
            BOOKS
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
