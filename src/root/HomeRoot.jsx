import { withStyles } from "@mui/styles";
import { BasePage } from "BaseComponent/BasePage";
import ReactDOM from "react-dom";
import HomePage from "../pages/HomePage";
import React from "react";
class HomeRoot extends BasePage {
  constructor(props) {
    super(props);
    this.state = {
      registerForm: {
        username: "",
        password: "",
        confirmPassword: "",
        name: "",
        gender: 111,
        ethnicity: null,
        codeLanguages: [],
        email: "",
        notes: "",
      },
    };
  }

  getSignalRHub() {
    return null;
  }

  childrenRender() {
    const { registerForm } = this.state;
    return <HomePage registerForm={registerForm} />;
  }
}

const C = withStyles({})(HomeRoot);

window.renderPage = (dom, props) => {
  ReactDOM.render(<C {...props} />, dom);
};
HomeRoot.displayName = "HomeRoot";
