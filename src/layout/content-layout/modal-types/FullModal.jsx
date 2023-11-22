import React from "react";
import BaseConsumer from "BaseComponent/BaseConsumer";
import { withStyles } from "@mui/styles";
import { I3Div } from "../../../importer";
import ModalHeader from "./ModalHeader";
import { EModalType } from "../../../general/enum";
import ModalFooter from "./ModalFooter";
import helper from "../../../general/helper";

class FullModal extends BaseConsumer {
    constructor(props) {
        super(props);
    }
    consumerContent() {
        const {
            title,
            classes,
            modalBody,
            bodyProps,
            onClose,
            rightFooter,
            bodyHeight,
            leftFooter,
            backgroundColor,
            rightTitleContent,
            hasFooter,
            hasHeader,
            footerProps
        } = this.props;
        return (
            <I3Div display="flex" flexDirection="column" height={helper.innerHeight()} width="100vw" backgroundColor={backgroundColor}>
                {hasHeader ? <ModalHeader type={EModalType.Full} title={title} onClose={onClose} rightTitleContent={rightTitleContent} /> : null}
                <div className={classes.body}>
                    <I3Div height={bodyHeight} {...bodyProps}>
                        {modalBody}
                    </I3Div>
                </div>
                {hasFooter ?
                    <ModalFooter footerProps={footerProps} type={EModalType.Full} rightFooter={rightFooter} leftFooter={leftFooter} /> : null}
            </I3Div>
        );
    }
}

export default withStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        //height: helper.innerHeight(),
        //overflow: "hidden",
    },
    body: {
        borderRadius: "0 !important",
        flexGrow: 1,
        overflowY: "auto",
    },
})(FullModal);
