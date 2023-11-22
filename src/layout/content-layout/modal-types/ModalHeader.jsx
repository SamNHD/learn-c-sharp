import React, { Fragment } from "react";
import BaseConsumer from "BaseComponent/BaseConsumer";
import { withStyles } from "@mui/styles";
import { I3Div, I3Icon } from "../../../importer";
import { FontWeight } from "../../../themeStyles/Color";
import { EModalType } from "../../../general/enum";
import { modalSizes } from "../../../general/sizeConfig";

class ModalHeader extends BaseConsumer {
    constructor(props) {
        super(props);
        this.__paddingMap = new Map([
            [EModalType.Right, ["no", "lg2", "no", "lg2"]],
            [EModalType.Popup, ["no", "lg1", "no", "lg1"]],
            [EModalType.Full, ["no", "lg3", "no", "lg3"]],
        ]);
    }
    consumerContent() {
        const { classes, title, onClose, type, rightTitleContent } = this.props;
        if (!title) return null;
        let _padding = this.__paddingMap.get(type);
        return (
            <Fragment>
                <I3Div
                    height={modalSizes.headerHeight + "rem"}
                    padding={_padding}
                    alignItems="center"
                    display="flex"
                    borderColor="primary"
                    border={[false, false, true, false]}
                    borderWidth="strong"
                    backgroundColor="white"

                >
                    <I3Div flexGrow={1} display="flex" alignItems="center">
                        <I3Div flexGrow={1} variant="h5" color="grey9" fontWeight={FontWeight.medium} fontFamily="font2">
                            {title}
                        </I3Div>
                        {rightTitleContent ? <I3Div>{rightTitleContent}</I3Div> : null}
                    </I3Div>

                    <div style={{ textAlign: "right" }}>
                        <span onClick={onClose}>
                            <I3Icon size="xl" cursor="pointer" title="Đóng" className="fal fa-times" color="primary" />
                        </span>
                    </div>
                </I3Div>
            </Fragment>
        );
    }
}

export default withStyles({})(ModalHeader);
