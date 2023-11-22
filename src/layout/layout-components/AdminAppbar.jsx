import BaseConsumer from "BaseComponent/BaseConsumer";
import React from "react";
import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  Grid,
  Divider,
  Tooltip
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import clsx from "clsx";
import { ColorObject } from "../../themeStyles/StyleConfig";

class AdminAppbar extends BaseConsumer {
  constructor(props) {
    super(props);
  }
  _handleOpenMenu = () => {
    this.updateObject(this.props.isOpenMenu, { value: true });
  };

  _handleCloseMenu = () => {
    this.updateObject(this.props.isOpenMenu, { value: false });
  };

  _onClickSignIn = isSignIn => {};

  componentDidMount() {
    this.props.setPageTitle("Admin");
  }

  consumerContent() {
    const { classes, menuList, isMobile, pageTitle, isOpenMenu } = this.props;
    let isSignIn = window.isAdminLogin ? window.isAdminLogin : false;
    return (
      <React.Fragment>
        <AppBar
          classes={{ positionFixed: classes.positionFixed }}
          // style={{ background: "linear - gradient(-45deg, #23a6d5, #23d5ab)" }} //"#3f8cb5"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: isMobile == true ? false : isOpenMenu.value //false //isOpenMenu.value,
          })}
        >
          <Toolbar style={{ paddingLeft: "0px" }} id="back-to-top-anchor">
            <IconButton
              className={clsx(
                classes.menuButton,
                isMobile == true ? false : isOpenMenu.value && classes.hide
              )}
              color="inherit"
              aria-label="open drawer"
              onClick={this._handleOpenMenu}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {pageTitle}
            </Typography>
            <Tooltip title={isSignIn == true ? "Đăng xuất" : "Đăng nhập"}>
              <IconButton
                onClick={() => {
                  this._onClickSignIn(isSignIn);
                }}
              >
                {isSignIn == true ? (
                  <i className="fas fa-sign-out-alt"></i>
                ) : (
                  <i className="fas fa-sign-in-alt"></i>
                )}
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant={isMobile == true ? "temporary" : "persistent"}
          anchor="left"
          open={isOpenMenu.value}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={isMobile == false ? () => {} : this._handleCloseMenu}
        >
          <div className={classes.drawerBackgroundImage}>
            <div className={classes.drawerBackground}>
              <div className={classes.drawerHeader}>
                <Grid style={{ color: "white", textAlign: "right" }}>
                  <IconButton color="inherit" onClick={this._handleCloseMenu}>
                    <ChevronLeftIcon />
                  </IconButton>
                </Grid>
              </div>
              <Divider className={classes.divider} />
            </div>
          </div>
        </Drawer>
      </React.Fragment>
    );
  }
}

var drawerWidth = 280;

const styles = theme => ({
  positionFixed: {
    position: "unset"
  },
  root: {
    flexGrow: 1
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    color: ColorObject.primary.textColorWithBackground,
    background: ColorObject.primary.color
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    color: ColorObject.primary.textColorWithBackground,
    background: ColorObject.primary.color
  },

  menuButton: {
    marginRight: "0px"
  },
  hide: {
    display: "none"
  },
  title: {
    textAlign: "center",
    width: "100%"
  },
  drawer: {
    // width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    // width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  drawerBackgroundImage: {
    backgroundImage: "url(/dist/assets/img/sidebar-2.jpg)",
    height: "100%",
    backgroundSize: "cover"
  },
  drawerBackground: {
    height: "100%",
    width: drawerWidth,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    overflowY: "auto !important"
  },

  divider: {
    backgroundColor: "#999999"
  }
});

export default withStyles(styles)(AdminAppbar);
