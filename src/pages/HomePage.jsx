import BaseConsumer from "BaseComponent/BaseConsumer";
import React from "react";
import RegisterForm from "../components/form/registerForm/RegisterForm";
import Navbar from "../components/Navbar";
import { withStyles } from "@mui/styles";
class HomePage extends BaseConsumer {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }

  // renderContent = () => {
  //   switch (this.state.activeTab) {
  //     case 0:
  //       return <RegisterForm registerForm={registerForm} />;
  //     case 1:
  //       return <div>hello</div>;
  //     default:
  //       return <RegisterForm registerForm={registerForm} />;
  //   }
  // };

  consumerContent() {
    const { classes, registerForm } = this.props;
    return (
      <div style={classes.homePage}>
        {/* <Navbar /> */}
        <div className={classes.content}>
          {/* <RegisterForm registerForm={registerForm} /> */}
        </div>
      </div>
    );
  }
}

const styles = {
  homePage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
};

export default withStyles(styles)(HomePage);
