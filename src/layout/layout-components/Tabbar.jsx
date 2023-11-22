import { withStyles } from "@mui/styles";
import BaseConsumer from "BaseComponent/BaseConsumer";
import cx from "classnames";
import PropTypes from "prop-types";
import React from "react";
import Colors from "../../general/color";
import Enum from "../../general/enum";
import { MainTabs } from "../../general/routes";
import { I3Component, I3Div } from "../../importer";

class Tabbar extends BaseConsumer {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    classes: PropTypes.object,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
  };
  _getTab = (tab, active, noti) => {
    const { classes, onChange } = this.props;
    return (
      <React.Fragment key={tab.value}>
        {tab.type == Enum.TabType.Notification ? (
          <I3Div
            borderRadius="superStrong"
            display="flex"
            alignItems="center"
            padding={["md", "lg", "md", "lg"]}
            className={cx({
              [classes.root]: true,
              [classes.active]: active
            })}
            onClick={() => {
              onChange(tab);
            }}
          >
            {!active ? (
              <I3Div key={tab.value}>
                <I3Div
                  color="grey2"
                  fontSize="150%"
                  position="relative"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  {noti > 0 ? (
                    <I3Component
                      className={classes.notiBadgeCustom}
                      position="absolute"
                      component="p"
                      width="8px"
                      height="8px"
                      borderRadius="maximum"
                      backgroundColor="danger"
                    />
                  ) : null}
                  {tab.icon}
                </I3Div>
              </I3Div>
            ) : (
                <I3Div
                  color="grey2"
                  fontSize="150%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  {tab.icon}
                </I3Div>
              )}
            <I3Div className={classes.title}>
              <nobr>
                <I3Component variant="h6" color="primary">
                  {active
                    ? `${tab.title} (${noti < 100 ? noti : "99+"})`
                    : null}
                </I3Component>
              </nobr>
            </I3Div>
          </I3Div>
        ) 
        // 
        : 
        // 
        (
            <I3Div
              borderRadius="superStrong"
              display="flex"
              alignItems="center"
              padding={["md", "lg", "md", "lg"]}
              className={cx({
                [classes.root]: true,
                [classes.active]: active
              })}
              onClick={() => {
                onChange(tab);
              }}
            >
              <I3Div
                color="grey2"
                fontSize="150%"
                display="flex"
                justifyContent="center"
                alignItems="center">
                {tab.icon}
              </I3Div>
              <I3Div className={classes.title}>
                <nobr>
                  <I3Component variant="h6" color="primary">
                    {active ? tab.title : null}
                  </I3Component>
                </nobr>
              </I3Div>
            </I3Div>
          )}
      </React.Fragment>
    );
  };

  consumerContent() {
    const { classes, value, notificationCount } = this.props;
    return (
      <React.Fragment>
        <I3Div
          backgroundColor="white"
          display="flex"
          alignItems="center"
          padding="lg"
          className={classes.container}
        >
          {MainTabs.map(tab => {
            return this._getTab(tab, value === tab.value, notificationCount);
          })}
        </I3Div>
      </React.Fragment>
    );
  }
}

export default withStyles({
  notiBadgeCustom: {
    top: "-4px",
    right: "-7px"
  },
  container: {
    boxShadow: "0px -2px 7px #0000003b",
    borderRadius: "30px 30px 0px 0px"
  },
  icon: {
    color: Colors.grey,
    fontSize: "150%"
  },
  title: {
    flex: 1,
    overflow: "hidden",
    textAlign: "center"
  },
  root: {
    transitionDuration: "500ms",
    width: "20px",
    cursor: "pointer",
    flexGrow: 1
  },
  active: {
    width: "95px",
    flexGrow: 2,
    background: `${Colors.lightgreen3} !important`,
    color: Colors.darkgreen,
    "& *": {
      color: Colors.darkgreen
    },
    overflow: "hidden"
  }
})(Tabbar);

Tabbar.displayName = 'Tabbar';
