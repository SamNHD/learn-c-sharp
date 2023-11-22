import { withStyles } from "@mui/styles";
import BaseConsumer from "BaseComponent/BaseConsumer";
import React, { Fragment } from "react";
import { EModalType } from "../../../general/enum";
import { I3Div } from "../../../importer";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";
import helper from "../../../general/helper";

class RightModal extends BaseConsumer {
    constructor(props) {
        super(props);
    }
    consumerContent() {
        const {
            title,
            classes,
            modalBody,
            bodyHeight,
            bodyProps,
            onClose,
            rightFooter,
            leftFooter,
            backgroundColor,
            rightTitleContent,
            fixedWidth,
            hasFooter,
            hasHeader,
            footerProps
        } = this.props;
        var cls = helper.cx({
            [classes.container]: true,
            // [classes.noBackground]: backgroundColor == null
        })
        return (
            <Fragment>
                <I3Div backgroundColor={backgroundColor} className={cls} width={fixedWidth}>
                    {hasHeader ? <ModalHeader type={EModalType.Right} title={title} onClose={onClose} rightTitleContent={rightTitleContent} /> : null}
                    <I3Div height={bodyHeight} className={classes.body} {...bodyProps}>
                        {modalBody}
                    </I3Div>
                    {hasFooter ? <ModalFooter footerProps={footerProps} type={EModalType.Right} rightFooter={rightFooter} leftFooter={leftFooter} /> : null}
                </I3Div>
            </Fragment>
        );
    }
}

export default withStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        // height: "100vh",
        overflow: "hidden",
        //backgroundColor: helper.getColorFromName("background"),
        right: "0px",
        position: "absolute",
        maxWidth: '100%'
    },
    noBackground: {
        background: 'none !important'
    },
    body: {
        borderRadius: "0 !important",
        overflow: "overlay",
    },
})(RightModal);
