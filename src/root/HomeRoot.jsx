import { withStyles } from "@mui/styles";
import { BasePage } from "BaseComponent/BasePage";
import ReactDOM from "react-dom";
// import HomePage from "../pages/HomePage";
import React from "react";
import ShopPage from "../pages/ShopPage";
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
      shopPage: {
        searchValue: "",
        productTypes: [],
        brands: [],
        price: 200,
      },
    };
  }

  getSignalRHub() {
    return null;
  }

  childrenRender() {
    const { registerForm, shopPage } = this.state;
    // return <HomePage registerForm={registerForm} />;
    return <ShopPage data={shopPage} />;
  }
}

const C = withStyles({})(HomeRoot);

window.renderPage = (dom, props) => {
  ReactDOM.render(<C {...props} />, dom);
};
HomeRoot.displayName = "HomeRoot";
