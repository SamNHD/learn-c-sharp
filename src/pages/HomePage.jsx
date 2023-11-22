import BaseConsumer from "BaseComponent/BaseConsumer";
import React from "react";
import RegisterForm from "../components/form/registerForm/RegisterForm";

const styles = {
  homePage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
};
class HomePage extends BaseConsumer {
  constructor(props) {
    super(props);
  }

  consumerContent() {
    const { registerForm } = this.props;
    return (
      <div style={styles.homePage}>
        <RegisterForm registerForm={registerForm} />
      </div>
    );
  }
}

export default HomePage;
