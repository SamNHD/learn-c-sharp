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
    value: 111,
    label: "Male",
  },
  {
    value: 112,
    label: "Female",
  },
  {
    value: 113,
    label: "Other",
  },
];

const ETHNICITY_OPTIONS = [
  {
    value: 121,
    label: "Kinh",
  },
  {
    value: 122,
    label: "Khmer",
  },
  {
    value: 123,
    label: "None",
  },
];

const CODE_LANGUAGES = [
  {
    value: 131,
    label: "C#",
  },
  {
    value: 132,
    label: "C++",
  },
  {
    value: 133,
    label: "Java",
  },
];

class RegisterForm extends BaseConsumer {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
    };
  }

  _onChangeUsername = (e) => {
    this.updateObject(this.props.registerForm, { username: e.target.value });
  };

  _onChangeName = (e) => {
    this.updateObject(this.props.registerForm, { name: e.target.value });
  };

  _onChangeGender = (e) => {
    this.updateObject(this.props.registerForm, { gender: +e.target.value });
  };

  _onChangeEthnicity = (e) => {
    this.updateObject(this.props.registerForm, { ethnicity: e.target.value });
  };

  _onChangePassword = (e) => {
    this.updateObject(this.props.registerForm, { password: e.target.value });
  };

  _onChangeConfirmPassword = (e) => {
    this.updateObject(this.props.registerForm, {
      confirmPassword: e.target.value,
    });
  };

  _onChangeCodeLanguages = (e) => {
    const { codeLanguages } = this.props.registerForm;
    if (e.target.checked) {
      this.addElement(codeLanguages, +e.target.name);
    } else {
      this.removeElement(
        codeLanguages,
        codeLanguages.find((item) => item === +e.target.name)
      );
    }
  };

  _onChangeEmail = (e) => {
    this.updateObject(this.props.registerForm, { email: e.target.value });
  };

  _onChangeNotes = (e) => {
    this.updateObject(this.props.registerForm, { notes: e.target.value });
  };

  _onSubmit = () => {
    const { username, name, gender, password, confirmPassword } =
      this.props.registerForm;
    if (!username || !name || !gender || !password) {
      this.setState({ error: "Please fill all required fields" });
      return;
    }
    if (password.length < 6) {
      this.setState({ error: "Password at least 6 characters" });
      return;
    }
    if (confirmPassword !== password) {
      this.setState({ error: "Password not match" });
      return;
    }

    this.setState({ error: "" });
    console.log("submit", this.props.registerForm);
  };

  _getOnChangeFunc = () => {
    let f = () => {};
    return f;
  };

  consumerContent() {
    const {
      username,
      name,
      gender,
      ethnicity,
      password,
      confirmPassword,
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
              onChange={this._onChangeUsername}
            />
          </div>
          <div className="register-from-item">
            <TitleInput label="Name" required />
            <TextField
              classes={{
                root: "register-from-item-input",
              }}
              value={name}
              onChange={this._onChangeName}
            />
          </div>
          <div className="register-from-item">
            <TitleInput label="Gender" required />
            <RadioGroup row value={gender} onChange={this._onChangeGender}>
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
              onChange={this._onChangeEthnicity}
              displayEmpty={true}
            >
              {ETHNICITY_OPTIONS.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  label={option.label}
                >
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
              onChange={this._onChangePassword}
            />
          </div>
          <div className="register-from-item">
            <TitleInput label="Confirm password" required />
            <TextField
              classes={{
                root: "register-from-item-input",
              }}
              type="password"
              value={confirmPassword}
              onChange={this._onChangeConfirmPassword}
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
              onChange={this._onChangeEmail}
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
              onChange={this._onChangeNotes}
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
