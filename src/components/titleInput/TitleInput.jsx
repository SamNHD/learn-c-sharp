import BaseConsumer from "BaseComponent/BaseConsumer";
import React from "react";
import "./TitleInput.css";
import classNames from "classnames";

class TitleInput extends BaseConsumer {
  constructor(props) {
    super(props);
  }

  consumerContent() {
    const { label, required, className } = this.props || {};
    return (
      <div className={classNames("title-input", className)}>
        <div className="title-input-label">{label}</div>
        {required && <div className="title-input-require">*</div>}
      </div>
    );
  }
}

export default TitleInput;
