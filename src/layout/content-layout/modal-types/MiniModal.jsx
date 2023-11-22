import { withStyles } from "@mui/styles";
import BaseConsumer from "BaseComponent/BaseConsumer";
import React from "react";
import helper from "../../../general/helper";
import { I3Div, I3Icon } from "../../../importer";
import { FontWeight } from "../../../themeStyles/Color";

class MiniModal extends BaseConsumer {
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
            rightFooter,
            leftFooter,
            fixedWidth,
            iconClassName,
            rightTitleAdornment,
        } = this.props;

        const hasFooter = leftFooter != null || rightFooter != null;

        return (
            <I3Div
                width={fixedWidth}
                className={helper.cx({
                    [classes.popupContainer]: true,
                })}
                display="flex"
                flexDirection="column"
                backgroundColor="white"
                {...bodyProps}
            >
                <I3Div display="flex" alignItems="center">
                    <I3Div color="grey9" fontWeight={FontWeight.bold}>
                        {iconClassName ?
                            <I3Icon
                                size="xl"
                                className={iconClassName}
                                margin={[, "lg", ,]}
                            />
                            : null
                        }
                        {title}
                    </I3Div>
                    <I3Div flexGrow="1" align="right">
                        {rightTitleAdornment}
                    </I3Div>
                </I3Div>
                <I3Div flexGrow={1} className={classes.popupBody} padding={["md", , hasFooter ? "lg4" : null]}>
                    {modalBody}
                </I3Div>
                {
                    hasFooter
                        ?
                        <I3Div height="30px" display="flex" alignItems="center">
                            <div style={{ flexGrow: 1, textAlign: "left" }}>{leftFooter}</div>
                            <div style={{ flexGrow: 1, textAlign: "right" }}>{rightFooter}</div>
                        </I3Div>
                        : null
                }
            </I3Div>
        );
    }
}

export default withStyles({
    popupContainer: {
        minHeight: "50rem",
        minWidth: "114rem",
        position: "absolute",
        top: "18rem",
        maxHeight: 'calc(100% - 36rem)',
        borderRadius: "4px",
    },
    popupBody: {
        borderRadius: "0 !important",
        overflowY: "auto",
    },
})(MiniModal);
