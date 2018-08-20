import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Gavel from "@material-ui/icons/Gavel";
import Toolbar from "@material-ui/core/Toolbar";

class Header extends Component {
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#2f2f2f",
          boxShadow: "none",
          padding: "10px 0px"
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_name">Moose Hormat</div>
            <div className="header_logo_title">Personal Trainer</div>
          </div>

          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => console.log("open")}
          >
            <Gavel />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
