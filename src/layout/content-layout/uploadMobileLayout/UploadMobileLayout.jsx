import React from "react";
import BaseLoadData from "../../../components/Base/BaseLoadData";
import VerticalDevider from "../../../components/ui-kit/VerticalDevider";
import helper from "../../../general/helper";
import { I3Div } from "../../../importer";

export default class UploadMobileLayout extends BaseLoadData {
    constructor(props) {
        super(props);
        this.state.speedDial = {
            open: false,
        };
        this.actionButtons = [];
        let title = this.getPageTitle();
        window.document.title = title ? 'Ehealth - ' + title : 'Ehealth';
        this._heightTitle = "62px";
    }

    renderSubHeader() {
        return null;
    }
    shouldComponentUpdate() {
        return true;
    }
    getPageTitle() {
        return null;
    }
    renderHeader() {
        let subHeader = this.renderSubHeader();
        let rightAdornment = this.renderRightAdornment();
        return (
            <I3Div
                height={this._heightTitle}
                padding={[, "lg", , "lg"]}
                boxSizing="border-box"
                display="flex"
                alignItems="center"
                border={[false, false, true, false]}
                borderColor="lighterGray"
                backgroundColor="primary"
            >
                <I3Div fontFamily="font2" variant="h4" letterSpacing="-0.84px">
                    {this.getPageTitle()}
                </I3Div>
                {subHeader != null
                    ? <>
                        <VerticalDevider
                            margin={[, "md", , "md"]}
                            flexItem
                            width="2px"
                            height="30px"
                        />
                        {subHeader}
                    </>
                    : null
                }
            </I3Div>
        )
    }
    renderRightAdornment() {
        return null;
    }

    renderBody() {
        throw "Not implemented renderBody in PageLayout";
    }
    consumerContent() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <I3Div display="flex" height="100%" flexDirection="column">
                    <I3Div>
                        {this.renderHeader()}
                    </I3Div>
                    <I3Div flexGrow={1} height={`calc(${helper.innerHeight()} - ${this._heightTitle}`}>
                        {this.renderBody()}
                    </I3Div>
                </I3Div>

            </React.Fragment>
        );
    }
}

let pageLayoutStyle = {
    container: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
    }
};

export { UploadMobileLayout };
UploadMobileLayout.displayName = "UploadMobileLayout";
