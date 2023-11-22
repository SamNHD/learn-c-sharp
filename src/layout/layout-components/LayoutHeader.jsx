import React, { Fragment } from 'react';
import BaseConsumer from 'BaseComponent/BaseConsumer';
import { withStyles } from "@mui/styles";
import PropTypes from 'prop-types';
import { I3Div } from '../../importer';


class LayoutHeader extends BaseConsumer {
    constructor(props) {
        super(props);
    }
    consumerContent() {
        return (
            <Fragment>
                <I3Div>
                    Đây là header
                </I3Div>
            </Fragment>
        )
    }
}

export default withStyles({
    
})(LayoutHeader)   
LayoutHeader.propTypes = {
    classes: PropTypes.object,
    pageTitle: PropTypes.string,
}
LayoutHeader.displayName = 'LayoutHeader';
