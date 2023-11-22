import React from 'react';
import BaseConsumer from 'BaseComponent/BaseConsumer';
import { withStyles } from "@mui/styles";
import EHealthIconButton from '../../../components/ui-kit/button/EHealthIconButton';
import VerticalDevider from '../../../components/ui-kit/VerticalDevider';
import { I3Div } from '../../../importer';
import { pageTitleHeight } from '../../../general/sizeConfig';

class DrawerLayoutCss extends BaseConsumer {
    constructor(props) {
        super(props);
    }
    static propTypes = {

    }
    shouldComponentUpdate() {
        return true;
    }
    consumerContent() {
        const { classes, content, closeDrawer, title, buttons, description, onReload, hasReload } = this.props;
        return (
            <div className={classes.root}>
                <I3Div minHeight={pageTitleHeight + "rem"} className={classes.header} boxShadow="style1" fontFamily="font2">
                    <EHealthIconButton
                        color="primary"
                        size="md"
                        onClick={closeDrawer}
                        iconClassName="fas fa-chevron-left"
                        margin={[, "sm", ,]}
                    />
                    <I3Div fontFamily="font2" fontWeight="regular" color="grey9" variant="h4">
                        {title}
                    </I3Div>
                    <VerticalDevider
                        height="30px"
                        color="grey2"
                        margin={[, "md", , "md"]}
                    />
                    <I3Div fontFamily="font2" fontWeight="light" color="grey9" variant="h4">
                        {description}
                    </I3Div>
                    {hasReload
                        ? <EHealthIconButton
                            color="grey9"
                            onClick={onReload}
                            iconClassName="fal fa-redo"
                        />
                        : null}
                    <div className={classes.headerRightButtons}>
                        {buttons}
                    </div>
                </I3Div>
                <div className={classes.body}>
                    {content}
                </div>
            </div>
        )
    }
}

export default withStyles({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        padding: '0 4rem 0 2rem',
        display: 'flex',
        alignItems: 'center',
        fontSize: '28px',
        lineHeight: '44px',
        background: "white",
        zIndex: "1",
    },
    body: {
        flexGrow: 1,
        overflow: 'auto',
        // padding: '12px 20px 0 12px',
    },
    headerRightButtons: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
})(DrawerLayoutCss)