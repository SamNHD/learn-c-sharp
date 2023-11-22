import { withStyles } from "@mui/styles";
import React from "react";
import ZoomableView from "../../components/doctor-side/General/ZoomableView";
import EHealthIconButton from "../../components/ui-kit/button/EHealthIconButton";
import EHealthPanel from "../../components/ui-kit/EHealthPanel";
import { I3Div } from "../../importer";
import PageLayout, { pageLayoutStyle } from "./PageLayout";

class ZoomablePageLayout extends PageLayout {
    constructor(props) {
        super(props);
        this.canZoomableView = true;
        this.state.minimalValue = 1;
        this.state.isLoading = false;
        this.state.lazyLoad = false;
        this.state.minimized = false;
    }
    hasReload() {
        return false;
    }
    _onMinimizeLeft = (window) => {
        const { addWindowToSubMenu } = this.props.sharedFunctions;
        const newState = this.canZoomableView
            ? { minimalValue: 1, lazyLoad: true, minimized: true }
            : { lazyLoad: true, minimized: true };
        this.setState(newState, () => {
            typeof addWindowToSubMenu === "function" && addWindowToSubMenu(window);
        });
    };

    _onMinimizeRight = (window) => {
        const { addWindowToSubMenu } = this.props.sharedFunctions;
        const newState = this.canZoomableView
            ? { minimalValue: 2, lazyLoad: true, minimized: true }
            : { lazyLoad: true, minimized: true };
        this.setState(newState, () => {
            typeof addWindowToSubMenu === "function" && addWindowToSubMenu(window);
        });
    };

    _onMaximizeLeft = (window) => {
        const { removeWindowFromSubMenu } = this.props.sharedFunctions;
        const newState = this.canZoomableView ? { lazyLoad: true, minimized: false } : { lazyLoad: true, minimized: false };
        this.setState(newState, () => {
            typeof removeWindowFromSubMenu === "function" && removeWindowFromSubMenu(window);
        });
    };

    _onMaximizeRight = (window) => {
        const { removeWindowFromSubMenu } = this.props.sharedFunctions;
        const newState = this.canZoomableView ? { lazyLoad: true, minimized: false } : { lazyLoad: true, minimized: false };
        this.setState(newState, () => {
            typeof removeWindowFromSubMenu === "function" && removeWindowFromSubMenu(window);
        });
    };
    isCanZoomableView() {
        return true;
    }
    //hiển thị biểu tượng load bệnh án khi bắn ajax chưa xong
    setLoading = (isLoading, callback) => {
        this.setState({ isLoading: isLoading }, callback);
    };
    getLoading = () => {
        return this.state.isLoading;
    };

    _changeMinimalValue = (value) => {
        this.setState({ minimalValue: value }, this.callBackChangeMinimalValue);
    };
    callBackChangeMinimalValue = () => {

    }

    //Render title bên phải khi bình thường
    getTitleForNormalLeftContent() {
        return null;
    }
    //Render nội dung bên trái khi bình thường
    _normalLeftContent = (onMinimize) => {
        return (
            <EHealthPanel
                margin={["no", "lg1", "no", "no"]}
                title={this.getTitleForNormalLeftContent()}
                onClickTitle={
                    !this.state.minimized
                        ? () => {
                            this._changeMinimalValue(1);
                        }
                        : null
                }
                rightAdornment={
                    !this.state.minimized ? (
                        <EHealthIconButton
                            iconClassName="far fa-compress-alt"
                            color="grey7"
                            colorInherit={true}
                            size="md"
                            onClick={() => {
                                this._changeMinimalValue(1);
                            }}
                        />
                    ) : null
                }
                onMinimize={onMinimize}
                canMinimize={this.canMinimizeLeft() && !this.state.minimized}
            >
                {this.renderNormalLeftContent()}
            </EHealthPanel>
        );
    };
    //Render nội dung bên trái khi bình thường
    renderNormalLeftContent = () => {
        return <></>;
    }
    //Render title bên trái khi thu nhỏ
    getTitleMinimalLeftContent = () => {
        return this.getTitleForNormalLeftContent();
    }
    //Render nội dung bên trái khi thu nhỏ
    renderMinimalLeftContent = () => {
        return <></>;
    }
    //Render nội dung bên trái khi thu nhỏ
    _renderMinimalLeftContent = (onMinimize) => {
        return (
            <EHealthPanel
                margin={["no", "lg1", "no", "no"]}
                title={this.getTitleMinimalLeftContent()}
                fixTitle={false}
                onClickTitle={
                    this.canZoomableView && !this.state.minimized
                        ? () => {
                            this._changeMinimalValue(2);
                        }
                        : null
                }
                rightAdornment={
                    this.canZoomableView && !this.state.minimized ? (
                        <EHealthIconButton
                            iconClassName="far fa-expand-alt"
                            color="grey7"
                            colorInherit={true}
                            size="md"
                            onClick={() => {
                                this._changeMinimalValue(2);
                            }}
                        />
                    ) : null
                }
                onMinimize={onMinimize}
                canMinimize={this.canMinimizeLeft() && !this.state.minimized}
            >

                {this.renderMinimalLeftContent()}

            </EHealthPanel>
        );
    };






    //Render title bên phải khi bình thường
    getTitleForNormalRightContent() {
        return null;
    }
    //Render nội dung bên phải khi bình thường
    renderNormalRightContent() {
        return <></>;
    }
    //Render nội dung bên phải khi bình thường
    _normalRightContent = (onMinimize) => {
        return (
            <EHealthPanel
                title={this.getTitleForNormalRightContent()}
                onClickTitle={() => {
                    if (this.isCanZoomableView() && !this.state.minimized)
                        this._changeMinimalValue(2);
                }}
                fixTitle
                rightAdornment={
                    this.isCanZoomableView() && !this.state.minimized ? (
                        <EHealthIconButton
                            iconClassName="far fa-compress-alt"
                            color="grey7"
                            colorInherit={true}
                            size="md"
                            onClick={() => {
                                this._changeMinimalValue(2);
                            }}
                        />
                    ) : null
                }
                onMinimize={onMinimize}
                canMinimize={this.canMinimizeRight() && !this.state.minimized}
            >
                <>
                    {this.renderNormalRightContent()}
                </>
            </EHealthPanel>
        );
    };

    //Render title bên phải khi thu nhỏ
    getTitleMinimalRightContent = () => {
        return this.getTitleForNormalRightContent();
    }

    //Render nội dung bên phải khi thu nhỏ
    renderMinimalRightContent = () => {
        return <></>;
    }
    //Render nội dung bên phải khi thu nhỏ
    _renderMinimalRightContent = (onMinimize) => {
        return (
            <EHealthPanel
                title={this.getTitleMinimalRightContent()}
                onClickTitle={() => {
                    this._changeMinimalValue(1);
                }}
                rightAdornment={
                    !this.state.minimized ? (
                        <EHealthIconButton
                            iconClassName="far fa-expand-alt"
                            color="grey7"
                            colorInherit={true}
                            size="md"
                            onClick={() => {
                                this._changeMinimalValue(1);
                            }}
                        />
                    ) : null
                }
                onMinimize={onMinimize}
                canMinimize={this.canMinimizeRight() && !this.state.minimized}
            >
                <>
                    {this.renderMinimalRightContent()}
                </>
            </EHealthPanel>
        );
    };

    //zoombale bên trái có thể thu nhỏ ko
    canMinimizeLeft = () => {
        return true;
    };

    //zoombale bên phải có thể thu nhỏ ko
    canMinimizeRight = () => {
        return true;
    };
    setMinimalWidth = () => {
        return "380px";
    }
    setMaximalWidth = () => {
        return "881px";
    }
    renderBody() {
        const { minimalValue } = this.state;
        return (
            <I3Div display="flex" height="100%">
                <ZoomableView
                    modeNoneRender={true}
                    minimal={minimalValue == 1}
                    normalContent={this._normalLeftContent}
                    minimalContent={this._renderMinimalLeftContent}
                    minimalWidth={this.setMinimalWidth()}
                    maximalWidth={this.setMaximalWidth()}
                    onMinimize={this._onMinimizeLeft}
                    onMaximize={this._onMaximizeLeft}
                    fullWhenMaximal
                />
                <ZoomableView
                    modeNoneRender={true}
                    minimal={minimalValue == 2}
                    normalContent={this._normalRightContent}
                    minimalContent={this._renderMinimalRightContent}
                    minimalWidth={this.setMinimalWidth()}
                    maximalWidth={this.setMaximalWidth()}
                    onMinimize={this._onMinimizeRight}
                    onMaximize={this._onMaximizeRight}
                    fullWhenMaximal
                />
            </I3Div>
        );
    }
}

let zoomablePageLayoutStyles = {
    ...pageLayoutStyle,
};
export default withStyles(zoomablePageLayoutStyles)(ZoomablePageLayout)
export { ZoomablePageLayout, zoomablePageLayoutStyles };

