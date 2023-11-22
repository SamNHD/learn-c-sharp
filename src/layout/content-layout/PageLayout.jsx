import { getColorFromName } from "general/CleanNodeHelper";
import React from "react";
import BaseLoadData from "../../components/Base/BaseLoadData";
import EHealthIconButton from "../../components/ui-kit/button/EHealthIconButton";
import VerticalDevider from "../../components/ui-kit/VerticalDevider";
import { pageTitleHeight } from "../../general/sizeConfig";
import { I3Div } from "../../importer";
import ehealth from "general/i3app";

export function getActionButtonObj(name, iconClass, renderFuncion) {
    return {
        name: name,
        iconClass: iconClass,
        renderFunction: renderFuncion,
    };
}
export default class PageLayout extends BaseLoadData {
    constructor(props) {
        super(props);
        this.state.bodyGuid = ehealth.guid.get();
        this.state.reloading = false;
        let title = this.getPageTitle();
        window.document.title = title ? "Ehealth - " + title : "Ehealth";

        let noLockScreen = this.noLockScreen();
        if (noLockScreen == true) {
            window.noLockScreen = true;
        }
    }

    noLockScreen() {
        return false;
    }

    getActionPoint = () => {
        if (this.props.sharedFunctions != null) {
            const { getPageActionPoint } = this.props.sharedFunctions;
            return getPageActionPoint();
        }
        return null;
    }
    renderSubHeader() {
        return null;
    }
    shouldComponentUpdate() {
        return true;
    }

    createVertialDevider = (margin = [, "md", , "md"]) => {
        return (
            <VerticalDevider margin={margin} flexItem width="2px" height="30px" />
        )
    }

    renderHeader() {
        const { classes } = this.props;
        let subHeader = this.renderSubHeader();
        let rightAdornment = this.renderRightAdornment();
        const { reloading } = this.state;
        let title = this.getPageTitle();
        return (
            <I3Div
                height={`${pageTitleHeight}rem`}
                margin={[, , , "lg1"]}
                boxSizing="border-box"
                display="flex"
                alignItems="center"
                border={[false, false, true, false]}
                borderWidth="default"
                borderColor="grey3"
                // boxShadow="style1"
                className={classes.pageHeader}
            >
                <I3Div letterSpacing="-0.6px" fontFamily="font2" variant="h4">
                    {title}
                </I3Div>
                {subHeader != null ? (
                    <>
                        {this.createVertialDevider()}
                        {subHeader}
                    </>
                ) : null}
                {this.hasReload() ? (
                    <>
                        {title ? this.createVertialDevider([, "xs", , "md"]) : null}
                        <EHealthIconButton
                            title="Tải lại trang"
                            size="md"
                            iconClassName={reloading ? "far fa-redo fa-spin" : "far fa-redo"}
                            onClick={() => {
                                this.onReload();
                            }}
                        />
                    </>
                ) : null}
                {rightAdornment ? (
                    <I3Div flexGrow={1} display="flex" justifyContent="flex-end" alignItems="center" height="100%">
                        {rightAdornment}
                    </I3Div>
                ) : null}
            </I3Div>
        );
    }
    renderRightAdornment() {
        return null;
    }
    hasReload() {
        return true;
    }
    onReload() {
        this.setState({ bodyGuid: ehealth.guid.get() });
    }
    getPageTitle() {
        return null;
    }

    renderBody() {
        throw "Not implemented renderBody in PageLayout";
    }
    getBackgroundColor() {
        return null;
    }
    getContainerOverflow() {
        return "overlay";
    }

    renderEmpty() {
        return <span>Loading...</span>;
    }

    consumerContent() {
        const { usingWithoutLayout, classes, bottomDiv, noPadding } = this.props;
        let { bodyGuid } = this.state;
        let header = null;
        header = usingWithoutLayout === true ? null : this.renderHeader();
        return (
            <React.Fragment>
                <I3Div height="100%" className={classes.container} backgroundColor={this.getBackgroundColor()}>
                    {header ? header : null}
                    {this.isLoaded() ? (
                        <I3Div
                            key={bodyGuid}
                            flexGrow={1}
                            overflow={this.getContainerOverflow()}
                            padding={noPadding === true ? null : ["sm", , , "lg1"]}
                            height={header ? `calc(100% - ${pageTitleHeight}rem)` : "100%"}
                        >
                            {this.renderBody()}

                            {bottomDiv
                                ? bottomDiv.map((b, index) => {
                                    return <I3Div height={b.height} width="100%" key={`${b.name}_${index}`}></I3Div>;
                                })
                                : null}
                        </I3Div>
                    ) : this.renderEmpty()}
                </I3Div>
            </React.Fragment>
        );
    }

    componentWillUnmount() {
        window.noLockScreen = false;
        super.componentWillUnmount();
    }
}

let pageLayoutStyle = {
    pageHeader: {
        clipPath: "inset(0 0 -2px 0)",
    },
    container: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
    },
    speedDialAction: {
        "& i": {
            color: `${getColorFromName("primary")} !important`,
        },
        fontSize: "12px",
    },
    tooltipTitle: {
        fontSize: "12px",
    },
};

export { PageLayout, pageLayoutStyle };
PageLayout.displayName = "PageLayout";
