import { FormLabel } from "@mui/material";
import { withStyles } from "@mui/styles";
import { BasePage } from "BaseComponent/BasePage";
import Button from "components/CustomButtons/Button";
import I3Select from "components/I3Select/I3Select";
import $ from "jquery";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import AlignLeftAndRight from "../components/general/AlignLeftAndRight";
import LoginInput from "../components/general/Login/LoginInput";
import TMSButton from "../components/ui_kit/TMSButton";
import Colors from "../general/color";
import { ELoginStatus, eUserLocationType } from "../general/enum";

const style = {
    button: {
        backgroundColor: Colors.blue,
        borderRadius: "3px",
        width: "226px !important",
        height: "42px",
        fontFamily: "roboto",
        fontSize: "16px",
        lineHeight: "19px",
        padding: "0",
        "&:hover": {
            backgroundColor: Colors.blue,
        },
        "&:focus": {
            backgroundColor: Colors.blue,
        },
        display: "flex",
        alignItems: "center",
    },
    loginButtonText: {
        position: "relative",
        width: "116px",
        textAlign: "left",
        paddingTop: "2px",
    },
    loginButtonIcon: {
        position: "absolute",
        fontSize: "32px",
        top: "50%",
        right: "0px",
        transform: "translateY(-50%)",
    },
    divContent: {
        position: "absolute",
        top: "130px",
        left: "0",
        right: "0",
    },
    iconLock: {
        fontSize: "50px",
        color: Colors.blue,
    },
    divError: {
        height: "20px",
        position: "absolute",
        top: "98px",
        left: "0",
        color: Colors.red_error,
        fontFamily: "roboto",
        lineHeight: "17px",
        fontWeight: "normal",
        letterSpacing: "0px",
    },
    iconError: {
        fontSize: "20px",
        marginRight: "12px",
        float: "left",
    },
    divTextError: {
        padding: "2px 0 1px 0",
        fontSize: "14px",
        float: "left",
    },
    divButton: {
        position: "absolute",
        top: "406px",
        left: "0",
        right: "0",
        textAlign: "center",
    },
    divLogin: {
        width: "994px",
        height: "548px",
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        boxShadow: "0px 20px 20px #000000B0",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
        zIndex: "2",
    },
    divLeftInLogin: {
        width: "574px",
        height: "548px",
        backgroundImage: "url(" + "../dist/Contents/img/login_img.png" + ")",
        float: "left",
        position: "relative",
    },
    divRightInLogin: {
        float: "left",
        padding: "40px",
    },
    wrapperRight: {
        width: "340px",
        position: "relative",
    },
    divTMSLabel: {
        top: "370px",
        left: "31px",
        width: "174px",
        height: "96px",
        color: Colors.white,
        fontFamily: "roboto",
        letterSpacing: "3.2px",
        fontSize: "80px",
        lineHeight: "96px",
        position: "absolute",
        fontWeight: "500",
    },
    divTMSDetailLabel: {
        top: "478px",
        left: "31px",
        width: "464px",
        height: "46px",
        color: Colors.white,
        fontFamily: "roboto",
        latterSpacing: "1.52px",
        fontSize: "38px",
        lineHeight: "46px",
        position: "absolute",
        fontWeight: "lighter",
    },
    divI3Solution: {
        width: "994px",
        height: "32px",
        bottom: "24px",
        left: "50%",
        transform: "translate(-50%, 0)",
        position: "absolute",
        fontSize: "26px",
        lineHeight: "32px",
        color: Colors.darkGray,
        fontWeight: "lighter",
        fontFamily: "roboto",
        zIndex: "1",
        "@media ( max-height: 860px )": {
            bottom: "5px",
        },
        "@media ( max-height: 820px )": {
            display: "none",
        },
    },
};

class LoginWebPage extends BasePage {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            isLoginError: false,
            loginStatus: null,
            locationId: null,
            locationType: null,
            locationTypeOptions: [],
            locationManagementOptions: [],
        };
    }
    _onChangeInput = (e) => {
        let { value, name } = e.target;
        this.setState({
            [name]: value,
        });
    };
    _handleKeyDown = (e) => {
        if (e.key === "Enter") {
            this._login();
        }
    };

    _renderFirstRightContent = () => {};

    _login = (loginModel) => {
        let _url = "/Login/Login";
        let _data = {
            userName: this.state.username,
            passwords: this.state.password,
        };

        if (loginModel) {
            _data = loginModel;
        }

        $.ajax({
            url: _url,
            method: "POST",
            data: JSON.stringify(_data),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: (model) => {
                if (model.status == true) {
                    this.success(model.message);
                    window.open(model.url, "_self");
                } else {
                    if (
                        model.data.LoginStatus ==
                            ELoginStatus.LocationRequired ||
                        model.data.LoginStatus ==
                            ELoginStatus.LocationTypeRequired
                    ) {
                        this.setState({
                            loginStatus: model.data.LoginStatus,
                            locationTypeOptions: model.data.LocationTypeOptions,
                            locationManagementOptions:
                                model.data.LocationManagementOptions,
                        });
                    } else {
                        this.error(model.message);
                        this.setState({ isLoginError: true });
                    }
                }
            },
            error: () => {},
        });
    };

    _backToLogin = () => {
        this.setState({
            loginStatus: null,
            locationType: null,
            locationId: null,
        });
    };

    _renderLeftBanner = () => {
        const { classes } = this.props;
        return (
            <div className={classes.divLeftInLogin}>
                <div className={classes.divTMSLabel}>
                    <label>TMS</label>
                </div>
                <div className={classes.divTMSDetailLabel}>
                    <label>Phần mềm quản lý vận tải</label>
                </div>
            </div>
        );
    };

    _loginWithModel = () => {
        let {
            isLoginError,
            loginStatus,
            locationTypeOptions,
            password,
            locationManagementOptions,
            ...other
        } = this.state;
        //sida
        other.passwords = password;
        this._login(other);
    };

    _renderLoginForm = () => {
        const { classes } = this.props;
        let { username, password, isLoginError } = this.state;
        return (
            <React.Fragment>
                {this.state.loginStatus == ELoginStatus.Failed ? (
                    <div className={classes.divError}>
                        <i
                            className={
                                "far fa-exclamation-triangle " +
                                classes.iconError
                            }
                        ></i>
                        <div className={classes.divTextError}>
                            Tên đăng nhập hoặc mật khẩu không đúng
                        </div>
                    </div>
                ) : null}
                <div className={classes.divContent}>
                    <div
                        style={{
                            marginBottom: "20px",
                        }}
                    >
                        <LoginInput
                            error={isLoginError}
                            label={"Tên đăng nhập"}
                            type="text"
                            variant="outlined"
                            value={!username ? "" : username}
                            onChange={this._onChangeInput}
                            name="username"
                        />
                    </div>
                    <div>
                        <LoginInput
                            error={isLoginError}
                            label={"Mật khẩu"}
                            type="password"
                            variant="outlined"
                            value={!password ? "" : password}
                            onChange={this._onChangeInput}
                            onKeyDown={this._handleKeyDown}
                            name="password"
                        />
                    </div>
                </div>
                <div className={classes.divButton}>
                    <Button
                        onClick={() => {
                            this._login();
                        }}
                        className={classes.button}
                    >
                        <span className={classes.loginButtonText}>
                            Đăng nhập
                            <i
                                className={
                                    "fad fa-angle-right " +
                                    classes.loginButtonIcon
                                }
                                style={{ fontSize: "32px" }}
                            ></i>
                        </span>
                    </Button>
                </div>
            </React.Fragment>
        );
    };

    _onTypeSelect = (e) => {
        this.setState({ locationType: parseInt(e.Id) });
    };

    _onLocationSelect = (e) => {
        this.setState({ locationId: parseInt(e.Id) });
    };

    _renderSelectManagementForm = () => {
        let { locationManagementOptions, locationId } = this.state;
        return (
            <Fragment>
                <span
                    style={{
                        fontSize: "26px",
                        fontWeight: "bold",
                        color: Colors.black,
                    }}
                >
                    Chọn kho quản lý
                </span>
                <div style={{ marginTop: "62px", height: "162px" }}>
                    <div style={{ marginTop: "16px" }}>
                        <div
                            style={{
                                height: "19px",
                                marginBottom: "8px",
                            }}
                        >
                            <FormLabel
                                style={{
                                    fontSize: "16px",
                                    lineHeight: "19px",
                                    // 'font-weight': '500',
                                    color: Colors.blue,
                                    letterSpacing: "0px",
                                    color: Colors.blue,
                                }}
                            >
                                Kho
                            </FormLabel>
                        </div>
                        <I3Select
                            value={locationManagementOptions.find(
                                (i) => i.Id == locationId
                            )}
                            onChange={this._onLocationSelect}
                            getOptionLabel={(option) => option.Name}
                            getOptionValue={(option) => option.Id}
                            options={locationManagementOptions}
                            placeholder="Chọn kho"
                        />
                    </div>
                </div>
                <AlignLeftAndRight
                    marginTop="180px"
                    left={
                        <TMSButton
                            onClick={this._backToLogin}
                            variant={"textFocus"}
                        >
                            Trở lại
                        </TMSButton>
                    }
                    right={
                        <TMSButton onClick={this._loginWithModel}>
                            Tiếp tục{" "}
                            <i
                                style={{ marginLeft: "8px" }}
                                className="far fa-long-arrow-alt-right"
                            ></i>
                        </TMSButton>
                    }
                />
            </Fragment>
        );
    };

    _renderSelectTypeForm = () => {
        let {
            locationTypeOptions,
            locationType,
            locationManagementOptions,
            locationId,
        } = this.state;
        return (
            <div>
                <span
                    style={{
                        fontSize: "26px",
                        fontWeight: "bold",
                        color: Colors.black,
                    }}
                >
                    Chọn đơn vị quản lý
                </span>
                <div>
                    <div
                        style={{
                            height: "19px",
                            marginTop: "32px",
                            marginBottom: "8px",
                        }}
                    >
                        <FormLabel
                            style={{
                                fontSize: "16px",
                                lineSeight: "19px",
                                fontFamily: "Roboto",
                                // 'font-weight': '500',
                                color: Colors.blue,
                                letterSpacing: "0px",
                                color: Colors.blue,
                            }}
                        >
                            Siêu thị hoặc kho
                        </FormLabel>
                    </div>

                    <I3Select
                        value={locationTypeOptions.find(
                            (i) => i.Id == locationType
                        )}
                        onChange={this._onTypeSelect}
                        options={locationTypeOptions}
                        getOptionLabel={(option) => option.Name}
                        getOptionValue={(option) => option.Id}
                        placeholder="Chọn siêu thị hoặc kho"
                    />
                </div>
                <div style={{ marginTop: "8px", height: "170px" }}>
                    {locationType == eUserLocationType.warehouse ? (
                        <Fragment>
                            <div style={{ marginTop: "16px" }}>
                                <div
                                    style={{
                                        height: "19px",
                                        marginBottom: "8px",
                                    }}
                                >
                                    <FormLabel
                                        style={{
                                            fontSize: "16px",
                                            lineHeight: "19px",
                                            // 'font-weight': '500',
                                            color: Colors.blue,
                                            letterSpacing: "0px",
                                            color: Colors.blue,
                                        }}
                                    >
                                        Kho
                                    </FormLabel>
                                </div>
                                <I3Select
                                    value={locationManagementOptions.find(
                                        (i) => i.Id == locationId
                                    )}
                                    onChange={this._onLocationSelect}
                                    getOptionLabel={(option) => option.Name}
                                    getOptionValue={(option) => option.Id}
                                    options={locationManagementOptions}
                                    placeholder="Chọn kho"
                                />
                            </div>
                        </Fragment>
                    ) : null}
                </div>
                <AlignLeftAndRight
                    marginTop="88px"
                    left={
                        <TMSButton
                            onClick={this._backToLogin}
                            variant={"textFocus"}
                        >
                            Trở lại
                        </TMSButton>
                    }
                    right={
                        <TMSButton onClick={this._loginWithModel}>
                            Tiếp tục{" "}
                            <i
                                style={{ marginLeft: "8px" }}
                                className="far fa-long-arrow-alt-right"
                            ></i>
                        </TMSButton>
                    }
                />
            </div>
        );
    };

    _renderSelectRoleForm = () => {
        let { loginStatus } = this.state;
        if (loginStatus == ELoginStatus.LocationTypeRequired)
            return this._renderSelectTypeForm();
        if (loginStatus == ELoginStatus.LocationRequired)
            return this._renderSelectManagementForm();
    };

    childrenRender() {
        const { classes } = this.props;
        let { loginStatus } = this.state;
        return (
            <Fragment>
                <div className={classes.divLogin}>
                    {this._renderLeftBanner()}
                    <div className={classes.divRightInLogin}>
                        <div className={classes.wrapperRight}>
                            {/* Neu la 2 trang thai sau login thi render select form */}
                            {loginStatus == ELoginStatus.LocationRequired ||
                            loginStatus == ELoginStatus.LocationTypeRequired ? (
                                this._renderSelectRoleForm()
                            ) : (
                                <Fragment>
                                    <i
                                        className={
                                            "far fa-lock-alt " +
                                            classes.iconLock
                                        }
                                    />
                                    {this._renderLoginForm()}
                                </Fragment>
                            )}
                        </div>
                    </div>
                </div>
                <div className={classes.divI3Solution}>
                    <label>Một sản phẩm của I3 Solution Australia</label>
                </div>
            </Fragment>
        );
    }
}

export default withStyles(style)(LoginWebPage);
window.renderPage = (dom) => {
    ReactDOM.render(React.createElement(withStyles(style)(LoginWebPage)), dom);
};
