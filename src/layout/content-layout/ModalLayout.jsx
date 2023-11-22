import PressEscapeListener from "components/Utilities/PressEscapeListener";
import React from "react";
import BaseLoadData from "../../components/Base/BaseLoadData";
import { EModalType } from "../../general/enum";
import helper from "../../general/helper";
import { modalSizes } from "../../general/sizeConfig";
import FullModal from "./modal-types/FullModal";
import MiniModal from "./modal-types/MiniModal";
import PopupModal from "./modal-types/PopupModal";
import RightModal from "./modal-types/RightModal";

export default class ModalLayout extends BaseLoadData {
    // static layoutNumber = 0;
    constructor(props) {
        super(props);
        this.__defaultPaddingMap = new Map([
            [EModalType.Right, ["lg", "lg", "lg", "lg"]],
            [EModalType.Popup, ["md", "lg", "md", "lg"]],
            [EModalType.Full, ["lg", "lg", "no", "lg"]],
            [EModalType.Mini, ["lg2", "lg1", "lg1", "lg1"]]
        ]); // nếu thay đỏi ở đây, check map tương tự ở ModalHeader
        this.closeThisModal = this.closeThisModal.bind(this);
        this._firstRender = true;
        this._consumerContentOverride = false;
        this.__rootStyle = {
            position: "fixed",
            bottom: 0,
            top: 0,
            right: 0,
            left: props.type === EModalType.Right ? "-100vw" : 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        };
        this.__backDropStyle = {
            position: "absolute",
            bottom: 0,
            top: 0,
            right: 0,
            left: 0,
            zIndex: "-1",
        };
        // console.log('number====================================');
        // console.log(ModalLayout.layoutNumber);
        // console.log('====================================');
        // if (ModalLayout.layoutNumber == 0) {
        // 	// this.__backDropStyle.background = 'rgba(0, 0, 0, 0.3)';
        // }
        // ModalLayout.layoutNumber++;
    }
    // componentWillUnmount() {
    // 	ModalLayout.layoutNumber--;
    // 	super.componentWillUnmount();
    // }
    shouldComponentUpdate() {
        return true;
    }
    modalBody() {
        throw "Not implemented `modalBody` method in ModalLayout";
    }
    closeValidate = () => {
        this._close();
    };

    hasRefreshDataToCompare() {
        return false;
    }

    refreshData(callback) {
        return null;
    }

    confirmDataChange() {
        let currentData = this.dataToCompare();
        if (currentData == null) {
            this.closeThisModal();
        } else {
            if (this.hasDataChange()) {
                this.confirm("Thay đổi của bạn sẽ bị mất, bạn có chắc chắn thoát?", {
                    okay: {
                        title: "Thoát",
                        handle: () => {
                            this.closeThisModal();
                        },
                    },
                    cancel: {
                        title: "Hủy",
                    },
                });
            } else {
                this.closeThisModal();
            }
        }
    }

    _close = () => {

        if (this.hasRefreshDataToCompare()) {
            this.refreshData(() => {
                this.confirmDataChange();
            });
        }
        else {
            this.confirmDataChange();
        }
    };

    hasFullHeight() {
        return false;
    }

    rightTitleContent() {
        return null;
    }

    getFixedPopupWidth() {
        return null;
    }

    leftFooter() {
        return null;
    }
    rightFooter() {
        return null;
    }
    // componentDidMount() {
    // 	if (this._consumerContentOverride == false) {
    // 		throw "How dare you override my consumerContent?";
    // 	}
    // }

    onClose() {
    }
    onBeforeClose = (callback) => {

    }
    hasActionBeforeClose = () => {
        return false;
    }
    closeThisModal(callback) {
        const _action = () => {
            const { modalId } = this.props;
            this.closeModal(modalId, () => {
                typeof callback === "function" && callback();
                this.onClose();
            });
        }
        if (this.hasActionBeforeClose()) {
            this.onBeforeClose(_action);
        }
        else {
            _action();
        }
    }

    _onClickAway = () => {
        if (this.closeModalIfClickAway()) {
            this._close();
        }
    };
    getRightModalWidth() {
        return "480px";
    }
    getBodyProps() {
        return null;
    }
    hasDefaultPadding() {
        return true;
    }
    getFooterProps() {
        return null;
    }
    hasFooter() {
        return true;
    }
    hasHeader() {
        return true;
    }
    closeModalIfClickAway() {
        return true;
    }
    closeModalIfPressEscape() {
        return this.closeModalIfClickAway();
    }
    getBackgroundColor() {
        const { type } = this.props;
        if (type == EModalType.Right) {
            return "white";
        }
        return "background";
    };
    getBackDropStyle() {
        return {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        };
    }

    getFixedHeight() {
        return null;
    }
    rightTitleAdornment = () => {
        return null;
    }
    _getContent = () => {
        if (this.isLoaded() == false) {
            return null;
        }
        const { type, title } = this.props;
        this._consumerContentOverride = true;
        let bodyProps = {};
        if (this.getBodyProps()) {
            bodyProps = { ...this.getBodyProps() };
        }
        if (this.hasDefaultPadding()) bodyProps.padding = this.__defaultPaddingMap.get(type);
        let backgroundColor = this.getBackgroundColor();
        let topAndBot = 0;
        let leftFooterr = this.leftFooter();
        let rightFooterr = this.rightFooter();
        if (leftFooterr != null || rightFooterr != null) {
            topAndBot += modalSizes.footerHeight;
        }
        let footerProps = {};
        if (this.getFooterProps()) {
            footerProps = { ...this.getFooterProps() };
        }
        if (this.hasHeader()) {
            topAndBot += modalSizes.headerHeight;
        }
        let marginFooter = 0;
        if (this.hasFooter()) {
            marginFooter = 2;
        }
        let bodyHeight = `calc(${helper.innerHeight()} - ${topAndBot}rem - ${marginFooter}px)`; //footer margin-top 2px
        switch (type) {
            case EModalType.Full:
                return (
                    <FullModal
                        backgroundColor={backgroundColor}
                        modalBody={this.modalBody()}
                        leftFooter={leftFooterr}
                        rightFooter={rightFooterr}
                        rightTitleContent={this.rightTitleContent()}
                        hasFooter={this.hasFooter()}
                        hasHeader={this.hasHeader()}
                        title={title}
                        bodyProps={bodyProps}
                        footerProps={footerProps}
                        onClose={this._close}
                        bodyHeight={bodyHeight}
                    />
                );
            case EModalType.Popup:
                return (
                    <PopupModal
                        backgroundColor={backgroundColor}
                        modalBody={this.modalBody()}
                        leftFooter={leftFooterr}
                        rightFooter={rightFooterr}
                        rightTitleContent={this.rightTitleContent()}
                        hasFooter={this.hasFooter()}
                        hasHeader={this.hasHeader()}
                        title={title}
                        fullHeight={this.hasFullHeight()}
                        fixedWidth={this.getFixedPopupWidth()}
                        fixedHeight={this.getFixedHeight()}
                        bodyProps={bodyProps}
                        footerProps={footerProps}
                        onClose={this._close}
                        bodyHeight={bodyHeight}
                    />
                );
            case EModalType.Right:
                return (
                    <RightModal
                        backgroundColor={backgroundColor}
                        modalBody={this.modalBody()}
                        leftFooter={leftFooterr}
                        rightFooter={rightFooterr}
                        rightTitleContent={this.rightTitleContent()}
                        hasFooter={this.hasFooter()}
                        hasHeader={this.hasHeader()}
                        title={title}
                        bodyProps={bodyProps}
                        footerProps={footerProps}
                        onClose={this._close}
                        bodyHeight={bodyHeight}
                        fixedWidth={this.getRightModalWidth()}
                    />
                );
            case EModalType.Mini:
                return (
                    <MiniModal
                        rightTitleAdornment={this.rightTitleAdornment()}
                        backgroundColor={backgroundColor}
                        modalBody={this.modalBody()}
                        leftFooter={leftFooterr}
                        rightFooter={rightFooterr}
                        rightTitleContent={this.rightTitleContent()}
                        hasFooter={this.hasFooter()}
                        hasHeader={this.hasHeader()}
                        title={title}
                        bodyProps={bodyProps}
                        footerProps={footerProps}
                        onClose={this._close}
                        bodyHeight={bodyHeight}
                        fixedWidth={this.getFixedPopupWidth()}
                    />
                );
            default:
                throw "Unsupported modal type " + type;
        }
    };
    renderBody() {
        let content = (
            <div style={this.__rootStyle}>
                <div onClick={this._onClickAway} style={{ ... this.__backDropStyle, ...this.getBackDropStyle() }} role="back-drop"></div>
                {this._getContent()}
            </div>
        );
        if (this.closeModalIfPressEscape()) {
            content = <PressEscapeListener onPressEscape={this._close}>{content}</PressEscapeListener>;
        }
        return content;
    }
}
// position: fixed;
// width: 100vw;
// height: 100vh;
// left: 0;
// top: 0;
// background: #0000001f;
