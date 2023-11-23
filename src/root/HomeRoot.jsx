import { withStyles } from "@mui/styles";
import { BasePage } from "BaseComponent/BasePage";
import ReactDOM from "react-dom";
// import HomePage from "../pages/HomePage";
import React from "react";
import ShopPage from "../pages/ShopPage";
import { PRODUCTS } from "../constant";
import GlobalStyles from "@mui/material/GlobalStyles";
import Navbar from "../components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
  },
});
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
        types: [],
        brands: [],
        price: 200,
        productsFilter: [],
        products: [],
      },
    };
  }

  getSignalRHub() {
    return null;
  }

  childrenRender() {
    const { registerForm, shopPage } = this.state;
    // return <HomePage registerForm={registerForm} />;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles
          styles={{
            "*": {
              fontFamily: "cursive !important",
              margin: 0,
              padding: 0,
              boxSizing: "border-box",
            },
          }}
        />
        <Navbar products={shopPage.products} />
        <ShopPage data={shopPage} />
      </ThemeProvider>
    );
  }
}

const C = withStyles({})(HomeRoot);

window.renderPage = (dom, props) => {
  ReactDOM.render(<C {...props} />, dom);
};
HomeRoot.displayName = "HomeRoot";
