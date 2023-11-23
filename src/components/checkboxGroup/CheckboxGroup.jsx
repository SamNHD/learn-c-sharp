import BaseConsumer from "BaseComponent/BaseConsumer";
import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import classNames from "classnames";
import TitleInput from "../titleInput/TitleInput";

class CheckboxGroup extends BaseConsumer {
  constructor(props) {
    super(props);
  }

  consumerContent() {
    const {
      options,
      value,
      label,
      required,
      className,
      titleClassName,
      vertical,
      ...others
    } = this.props;
    return (
      <div className={classNames("checkbox-group", className)}>
        {label && (
          <TitleInput
            label={label}
            required={required}
            className={titleClassName}
          />
        )}
        <div style={vertical ? { display: "grid" } : {}}>
          {options.map((option) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.props.value.includes(option.value) || false}
                  name={option.value}
                  color="primary"
                  {...others}
                />
              }
              label={option.label}
              key={option.value}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CheckboxGroup;
