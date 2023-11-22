import { withStyles } from "@mui/styles";
import BaseConsumer from 'BaseComponent/BaseConsumer';
import React from 'react';
import { I3Div } from '../../../importer';
import { modalSizes } from '../../../general/sizeConfig';

class ModalFooter extends BaseConsumer {
    constructor(props) {
        super(props);
    }
    consumerContent() {
        const { classes, rightFooter, leftFooter, type, footerProps } = this.props;
        if (rightFooter == null && leftFooter == null) return null;
        //let padding;
        // if (type == EModalType.Right) {
        //     padding = ["sm", "lg1", "sm", "lg1"];
        // } else {
        //     padding = ["sm", "lg1", ,]
        // }
        return (
            <I3Div
                //borderWidth="thin" 
                //borderColor="primary" border={[true, false, false, false]}
                padding={[, "lg1", , "lg1"]}
                height={modalSizes.footerHeight + "rem"} display="flex" alignItems="center"
                boxSizing="border-box"
                backgroundColor="white"
                className={classes.shadow}
                {...footerProps}
            >
                <div style={{ flexGrow: 1, textAlign: 'left' }}>
                    {leftFooter}
                </div>
                <div style={{ flexGrow: 1, textAlign: 'right' }}>
                    {rightFooter}
                </div>
            </I3Div>
        )
    }
}

export default withStyles({
    shadow: {
        marginTop: "2px",
        boxShadow: "0 -2px 2px #00000030"
    }

})(ModalFooter)