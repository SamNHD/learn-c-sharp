import { withStyles } from "@mui/styles";
import BaseConsumer from "BaseComponent/BaseConsumer";
import React, { Fragment } from "react";
import { EModalType } from "../../../general/enum";
import { I3Div } from "../../../importer";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";
import helper from "../../../general/helper";

class PopupModal extends BaseConsumer {
    constructor(props) {
        super(props);
    }
    consumerContent() {
        const {
            title,
            backgroundColor,
            classes,
            modalBody,
            bodyProps,
            onClose,
            rightFooter,
            bodyHeight,
            leftFooter,
            fullHeight,
            fixedWidth,
            fixedHeight,
            rightTitleContent,
            hasFooter,
            footerProps,
            hasHeader,
        } = this.props;
        let _fullHeight = fullHeight ? helper.innerHeight() : fixedHeight;
        return (
            <Fragment>
                <I3Div
                    width={fixedWidth}
                    height={_fullHeight}
                    // height={fixedHeight}
                    className={helper.cx({
                        [classes.popupContainer]: true,
                    })}
                    display="flex"
                    flexDirection="column"
                    backgroundColor={backgroundColor}
                >
                    {hasHeader ? <ModalHeader type={EModalType.Popup} title={title} onClose={onClose} rightTitleContent={rightTitleContent} /> : null}

                    <I3Div flexGrow={1} height={bodyHeight} className={classes.popupBody} {...bodyProps}>
                        {modalBody}
                    </I3Div>

                    {hasFooter ? <ModalFooter footerProps={footerProps} type={EModalType.Popup} rightFooter={rightFooter} leftFooter={leftFooter} /> : null}
                </I3Div>
            </Fragment>
        );
    }
}

export default withStyles({
    popupContainer: {
        // minHeight: "640px",

        maxWidth: "1280px",
    },
    // fullWidth: {
    //     width: "960px !important",
    // },
    popupBody: {
        borderRadius: "0 !important",
        overflowY: "auto",
    },
})(PopupModal);
