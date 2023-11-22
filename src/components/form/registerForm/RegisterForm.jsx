import BaseConsumer from "BaseComponent/BaseConsumer";
import React from "react";
import Button from "@mui/material/Button";
import TitleInput from "../../titleInput/TitleInput";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./RegisterForm.css";
import CheckboxGroup from "../../checkboxGroup/CheckboxGroup";

const GENDER_OPTIONS = [
  {
    value: "male",
    label: "Male",
  },
  {
    value: "female",
    label: "Female",
  },
  {
    value: "other",
    label: "Other",
  },
];

const ETHNICITY_OPTIONS = [
  {
    value: "kinh",
    label: "Kinh",
  },
  {
    value: "khmer",
    label: "Khmer",
  },
  {
    value: "none",
    label: "None",
  },
];

const CODE_LANGUAGES = [
  {
    value: "c#",
    label: "C#",
  },
  {
    value: "c++",
    label: "C++",
  },
  {
    value: "java",
    label: "Java",
  },
];

class RegisterForm extends BaseConsumer {
  constructor(props) {
    super(props);
    this.state = {
      confirmPassword: "",
      error: "",
    };
    this.setConfirmPassword = this.setConfirmPassword.bind(this);
  }
  _onChangeValue(name, e) {
    this.updateObject(this.props.registerForm, { [name]: e.target.value });
  }
  setConfirmPassword(e) {
    this.setState({ confirmPassword: e.target.value });
  }

  _onChangeCodeLanguages = (e) => {
    this.updateObject(this.props.registerForm.codeLanguages, {
      [e.target.name]: e.target.checked,
    });
  };

  _onSubmit = () => {
    const { username, name, gender, password } = this.props.registerForm;
    if (!username || !name || !gender || !password) {
      this.setState({ error: "Please fill all required fields" });
      return;
    }
    if (password.length < 6) {
      this.setState({ error: "Password at least 6 characters" });
      return;
    }
    if (this.state.confirmPassword !== password) {
      this.setState({ error: "Password not match" });
      return;
    }

    this.setState({ error: "" });
    console.log("submit", this.props.registerForm);
  };

  consumerContent() {
    const {
      username,
      name,
      gender,
      ethnicity,
      password,
      codeLanguages,
      email,
      notes,
    } = this.props.registerForm || {};
    return (
      <div className="register">
        <h1 className="register-title">Register</h1>
        <div className="register-form">
          <div className="register-from-item">
            <TitleInput label="Username" required />
            <TextField
              classes={{
                root: "register-from-item-input",
              }}
              value={username}
              onChange={(e) => this._onChangeValue("username", e)}
            />
          </div>
          <div className="register-from-item">
            <TitleInput label="Name" required />
            <TextField
              classes={{
                root: "register-from-item-input",
              }}
              value={name}
              onChange={(e) => this._onChangeValue("name", e)}
            />
          </div>
          <div className="register-from-item">
            <TitleInput label="Gender" required />
            <RadioGroup
              row
              value={gender}
              onChange={(e) => this._onChangeValue("gender", e)}
            >
              {GENDER_OPTIONS.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio />}
                  label={option.label}
                />
              ))}
            </RadioGroup>
          </div>
          <div className="register-from-item">
            <TitleInput label="Ethnicity" />
            <Select
              value={ethnicity}
              onChange={(e) => this._onChangeValue("ethnicity", e)}
              displayEmpty={true}
              renderValue={(selected) => {
                if (!selected) {
                  return <em>Select Ethnicity</em>;
                }

                return selected;
              }}
            >
              {ETHNICITY_OPTIONS.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div className="register-from-item">
            <TitleInput label="Password" required />
            <TextField
              classes={{
                root: "register-from-item-input",
              }}
              type="password"
              value={password}
              onChange={(e) => this._onChangeValue("password", e)}
            />
          </div>
          <div className="register-from-item">
            <TitleInput label="Confirm password" required />
            <TextField
              classes={{
                root: "register-from-item-input",
              }}
              type="password"
              value={this.state.confirmPassword}
              onChange={this.setConfirmPassword}
            />
          </div>
          <CheckboxGroup
            className="register-from-item"
            label="Code languages"
            type="checkbox"
            value={codeLanguages}
            options={CODE_LANGUAGES}
            onChange={this._onChangeCodeLanguages}
          />
          <div className="register-from-item">
            <TitleInput label="Email" />
            <TextField
              classes={{
                root: "register-from-item-input",
              }}
              value={email}
              onChange={(e) => this._onChangeValue("email", e)}
            />
          </div>
          <div className="register-from-item">
            <TitleInput label="Notes" />
            <TextField
              classes={{
                root: "register-from-item-input",
              }}
              multiline
              minRows={2}
              value={notes}
              onChange={(e) => this._onChangeValue("notes", e)}
            />
          </div>
        </div>
        {this.state.error && (
          <div className="register-error">{this.state.error}</div>
        )}
        <Button
          className="register-submit"
          variant="contained"
          onClick={this._onSubmit}
        >
          Save
        </Button>
      </div>
    );
  }
}

export default RegisterForm;
