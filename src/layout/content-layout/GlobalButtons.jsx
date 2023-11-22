import React, { Fragment } from "react";
import { withStyles } from "@mui/styles";
import ModalLayout from "./ModalLayout";
import { I3Div, I3Icon } from "../../importer";
import { FontWeight } from "../../themeStyles/Color";

class GlobalButtons extends ModalLayout {
    constructor(props) {
        super(props);
    }
    static propTypes = {};
    hasHeader() {
        return false;
    }
    hasFooter() {
        return false;
    }
    getRightModalWidth() {
        return "330px";
    }
    hasDefaultPadding() {
        return false;
    }
    getBackgroundColor() {
        return null;
    }
    getBackDropStyle() {
        return {
            backgroundColor: "unset !important",
        };
    }
    onClose(close) {
        this.props.onClose(close);
    }
    static propTypes = {
        // name: PropTypes.string.isRequired,
        // iconClass: PropTypes.string.isRequired,
        // renderFunction: PropTypes.func.isRequired, // nhan vao 1 function co ...
    };

    _onClickFunc = (onClick, isAuthorized) => {
        const { onClose } = this.props;
        if (isAuthorized) {
            this.closeThisModal(onClick);
        } else {
            this.error("Bạn không có quyền thực hiện chức năng này");
        }

    };

    modalBody() {
        const { classes, actionButtons, onClose } = this.props;
        return (
            <Fragment>
                <I3Div className={classes.background}>
                    {actionButtons.map((i) => {
                        return (
                            <Fragment key={i.name}>
                                {i.renderFunction((_onClick, _isAuthorized) => {
                                    return (
                                        <I3Div
                                            cursor="pointer"
                                            alignItems="center"
                                            display="flex"
                                            onClick={() => {
                                                this._onClickFunc(_onClick, _isAuthorized);
                                            }}
                                            key={i.name}
                                            className={classes.buttonItem}
                                        >
                                            <I3Div variant="body2" flexGrow="1" align="right" fontWeight={FontWeight.bold}>
                                                {i.name}
                                            </I3Div>
                                            <I3Div
                                                height="40px"
                                                width="40px"
                                                margin={[, , , "lg"]}
                                                backgroundColor="primary"
                                                className={classes.icon}
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center"
                                            >
                                                <I3Icon className={i.iconClass} size="lg" color="white" />
                                            </I3Div>
                                        </I3Div>
                                    );
                                })}
                            </Fragment>
                        );
                    })}
                </I3Div>
            </Fragment>
        );
    }
}

export default withStyles({
    buttonItem: {
        minHeight: "40px",
        marginTop: "3rem",
    },
    icon: {
        borderRadius: "50%",
    },
    background: {
        background: "#7B9DA450",
        backdropFilter: "blur(4px)",
        // opacity: '.5',
        padding: "9rem 9rem 28rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        height: "100%",
        overflow: "auto"
    },
})(GlobalButtons);
