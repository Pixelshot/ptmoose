import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Gavel from "@material-ui/icons/Gavel";
import Toolbar from "@material-ui/core/Toolbar";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import amber from "@material-ui/core/colors/amber";

import SideDrawer from "./SideDrawer";
const theme = createMuiTheme({
  palette: {
    primary: amber
  }
});
class Header extends Component {
  state = {
    drawerOpen: false,
    headerShow: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        headerShow: true
      });
    } else {
      this.setState({
        headerShow: false
      });
    }
  };

  toggleDrawer = value => {
    this.setState({
      drawerOpen: value
    });
  };

  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.headerShow ? "#2f2f2f" : "transparent",
          boxShadow: "none",
          padding: "10px 0px"
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_name">Moose Hormat</div>
            <div className="header_logo_title">Personal Trainer</div>
          </div>
          <MuiThemeProvider theme={theme}>
            <IconButton
              aria-label="Menu"
              color="inherit"
              onClick={() => this.toggleDrawer(true)}
            >
              <Gavel color="primary" />
            </IconButton>
          </MuiThemeProvider>

          <SideDrawer
            open={this.state.drawerOpen}
            onClose={value => this.toggleDrawer(value)}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
