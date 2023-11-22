import React from "react";
import ZoomableView from "../../components/doctor-side/General/ZoomableView";
import SearchPatientInQueue from "../../components/doctorScreen/SearchPatientInQueue/SearchPatientInQueue";
import Queue from "../../components/Queue/Queue";
import EHealthIconButton from "../../components/ui-kit/button/EHealthIconButton";
import EHealthPanel from "../../components/ui-kit/EHealthPanel";
import { EQueueItemStatus, EQueueListType } from "../../general/enum";
import { I3Div, I3Icon } from "../../importer";
import { tagColorCombos } from "../../page-components/Cashier/CashierMedicalRecordList";
import CashierPageLayout from "../../page-components/Cashier/CashierPageLayout";
import { FontWeight } from "../../themeStyles/Color";
import { pageLayoutStyle } from "./PageLayout";

const MINIMAL_LEFT = 1;
const MINIMAL_RIGHT = 2;

export default class AssignPageLayout extends CashierPageLayout {
    constructor(props) {
        super(props);
        this.state.minimalValue = MINIMAL_LEFT;
        this.state.isLoading = false;
        this.state.minimized = false;
        this._queueManager = React.createRef();
        this._queueSearch = React.createRef();
        this.onFinishExamniation = this.onFinishExamniation.bind(this);
        this.state.selectedPatient = null;
        this.state.errorMessage = [];
    }
    getCashierModel() {
        return null;
    }
    //hiển thị biểu tượng load bệnh án khi bắn ajax chưa xong
    setLoading = (isLoading, callback) => {
        this.setState({ isLoading: isLoading }, callback);
    };

    getLoading = () => {
        return this.state.isLoading;
    };
    //Hàm này dùng để refresh lại hàng đợi, callback của nó sẽ nhận được 1 parameter là object patientInfo
    refreshQueue = (callback) => {
        this._queueManager.current && this._queueManager.current.refreshQueue(callback);
    };
    //Hàm này dùng để gọi một người mới trong hàng đợi, callback của nó sẽ nhận được 1 parameter là object patientInfo
    callNew = (callback) => {
        this._queueManager.current && this._queueManager.current.callNew(callback);
    };

    _changeMinimalValue = (value, callback) => {
        this.setState({ minimalValue: value }, () => {
            typeof callback == 'function' && callback();
            if (value == MINIMAL_RIGHT) {
                this._queueSearch.current && this._queueSearch.current.reload(false);
            }
        });
    };

    _onClickQueueItem = (patient, isManualClick, isDoubleClick) => {
        if (patient == null) {
            this.setState({ selectedPatient: patient });
        }
        else {
            const { selectedPatient } = this.state;
            let nowEmpty = selectedPatient == null;
            let isDifferentItem = nowEmpty || patient.reactKey != selectedPatient.reactKey;
            let doSelect = () => {
                this.setState({ selectedPatient: patient }, () => {
                    this.onSelectPatientInQueueForAssign(patient, isDifferentItem);
                });
            }
            if (isDoubleClick) {
                doSelect();
            }
            else if (isDifferentItem || patient.status != selectedPatient.status) {
                // chủ đọng click HOẶC không có ai trong phòng thì tự động select
                if (isManualClick || selectedPatient == null) {
                    doSelect();
                }
            }
        }
    };

    onFinishExamniation() { }

    isItemInRoom = () => {
        return this.state.selectedPatient && this.state.selectedPatient.status == EQueueItemStatus.InRoom.value;
    };
    getSelectedItem = () => this.state.selectedPatient;

    onReload() {
        this.refreshQueue();
    }

    _onClickTitleNormalQueue = () => {
        if (!this.state.minimized) {
            this._changeMinimalValue(MINIMAL_LEFT);
        }
    }

    _renderNormalQueueContent = (onMinimize) => {
        if (!this.isCanZoomableView()) {
            return null;
        }
        return (
            <EHealthPanel
                margin={["no", "lg1", "no", "no"]}
                title={this.getTitleForNormalLeftContent()}
                onClickTitle={this._onClickTitleNormalQueue}
                rightAdornment={
                    !this.state.minimized ? (
                        <EHealthIconButton
                            iconClassName="far fa-compress-alt"
                            color="primary6"
                            size="sm"
                            iconSize="md"
                            onClick={() => {
                                this._changeMinimalValue(MINIMAL_LEFT);
                            }}
                        />
                    ) : null
                }
                onMinimize={onMinimize}
                canMinimize={this.canMinimizeLeft() && !this.state.minimized}
            >
                <I3Div>
                    <SearchPatientInQueue
                        fixedLocation={true}
                        ref={this._queueSearch}
                        queueId={this.getCurrentRoom()}
                        queueListType={this.getQueueListType()}
                        expand={this._expand}
                        onClickViewInfo={item => this._onClickQueueItem(item, true, true)}
                        changeMinimalValue={this._changeMinimalValue}
                    />
                </I3Div>
            </EHealthPanel>
        );
    }

    _expand = (callback) => {
        if (this.autoExpandIfNotHasQueue()) {
            this._changeMinimalValue(MINIMAL_RIGHT, callback);
        }
        else {
            typeof callback == "function" && callback();
        }
    }

    loadData(finish) {
        this.ajaxPost({
            url: "/api/doctor/CheckHasQueue",
            data: {
                queueId: this.getCurrentRoom(),
                fixedLocation: true,
                isExaminationQueue: this.isExaminationQueue(),
                checkExaminationRoom: this.checkExaminationRoom()
            },
            success: ({ data }) => {
                if (!data) {
                    this._expand(finish);
                }
                else {
                    finish();
                }
            },
            unsuccess: (ack) => {
                this.sweetAlertErrorListError(ack.errorMessage);
                this.setState({ errorMessage: ack.errorMessage }, finish)
            }
        });
    }
    autoExpandIfNotHasQueue = () => {
        return false;
    }
    getQueueListType = () => {
        return EQueueListType.ActiveRecord;
    };
    renderBeforeQueue() {
        return null;
    }

    getPropsForQueue() {
        return {};
    }
    renderMinimalQueueContent = (onMinimize) => {
        let room = this.getCurrentRoom();
        if (room == null) {
            this.error("Chọn phòng hợp lệ");
            return null;
        }
        return (
            <EHealthPanel
                margin={["no", "lg1", "no", "no"]}
                title={this.getTitleForMinimalLeftContent()}
                fixTitle={false}
                onClickTitle={
                    this.isCanZoomableView() && !this.state.minimized
                        ? () => {
                            this._changeMinimalValue(MINIMAL_RIGHT);
                        }
                        : null
                }
                rightAdornment={
                    this.isCanZoomableView() && !this.state.minimized ? (
                        <EHealthIconButton
                            iconClassName="far fa-expand-alt"
                            color="primary6"
                            size="sm"
                            iconSize="md"
                            onClick={() => {
                                this._changeMinimalValue(MINIMAL_RIGHT);
                            }}
                        />
                    ) : null
                }
                onMinimize={onMinimize}
                canMinimize={this.canMinimizeLeft() && !this.state.minimized}
            >
                {this.renderBeforeQueue()}
                <Queue
                    ref={this._queueManager}
                    {...this.getPropsForQueue()}
                    isExaminationQueue={this.isExaminationQueue()}
                    onClickQueueItem={this._onClickQueueItem}
                    onFinishExamniation={this.onFinishExamniation}
                    roomId={room}
                    hasQueueRightLabel={this.hasQueueRightLabel()}
                />
            </EHealthPanel>
        );
    }

    isExaminationQueue = () => {
        return false;
    }
    hasQueueRightLabel = () => {
        return false;
    }
    checkExaminationRoom = () => {
        return false;
    }

    onSelectPatientInQueueForAssign = (patient, isDifferentItem) => {
        throw "Not implemented onSelectPatientInQueue in AssignPageLayout";
    };

    getTitleForNormalRightContent() {
        return null;
    }
    getTitleForMinimalRightContent() {
        return null;
    }
    getTitleForNormalLeftContent() {
        return null;
    }
    getTitleForMinimalLeftContent() {
        return null;
    }
    renderNormalRightContent() {
        return null;
    }

    isCanZoomableView() {
        //có thể thay đổi trạng thái zoom hay không
        return true;
    }
    isRightContentFixTitle = () => {
        return true;
    };
    rightContentHasPaddingChildren = () => {
        return true;
    };
    _normalRightContent = (onMinimize) => {
        return (
            <EHealthPanel
                title={this.getTitleForNormalRightContent()}
                onClickTitle={() => {
                    if (this.isCanZoomableView() && !this.state.minimized) this._changeMinimalValue(2);
                }}
                fixTitle={this.isRightContentFixTitle()}
                hasPaddingChildren={this.rightContentHasPaddingChildren()}
                rightAdornment={
                    this.isCanZoomableView() && !this.state.minimized ? (
                        <EHealthIconButton
                            iconClassName="far fa-compress-alt"
                            color="primary6"
                            size="sm"
                            iconSize="md"
                            onClick={() => {
                                this._changeMinimalValue(MINIMAL_RIGHT);
                            }}
                        />
                    ) : null
                }
                onMinimize={onMinimize}
                canMinimize={this.canMinimizeRight() && !this.state.minimized}
            >
                <>{this.renderNormalRightContent()}</>
            </EHealthPanel>
        );
    };

    renderMinimalRightContent = (onMinimize) => {
        return (
            <EHealthPanel
                title={this.getTitleForMinimalRightContent()}
                onClickTitle={() => {
                    this._changeMinimalValue(MINIMAL_LEFT);
                }}
                rightAdornment={
                    !this.state.minimized ? (
                        <EHealthIconButton
                            iconClassName="far fa-expand-alt"
                            color="primary6"
                            size="sm"
                            iconSize="md"
                            onClick={() => {
                                this._changeMinimalValue(MINIMAL_LEFT);
                            }}
                        />
                    ) : null
                }
                onMinimize={onMinimize}
                canMinimize={this.canMinimizeRight() && !this.state.minimized}
            >
                <I3Div align="center" padding={["lg5", , ,]}>
                    <img
                        src="/dist/assets/image/doctor/medicalRecord.png"
                        style={{ imageRendering: "-webkit-optimize-contrast" }}
                    />
                </I3Div>
            </EHealthPanel>
        );
    };

    _onMinimizeLeft = (window) => {
        const { addWindowToSubMenu } = this.props.sharedFunctions;
        const newState = this.isCanZoomableView() ? { minimalValue: MINIMAL_LEFT, minimized: true } : { minimized: true };
        this.setState(newState, () => {
            typeof addWindowToSubMenu === "function" && addWindowToSubMenu(window);
        });
    };

    _onMinimizeRight = (window) => {
        const { addWindowToSubMenu } = this.props.sharedFunctions;
        const newState = this.isCanZoomableView() ? { minimalValue: MINIMAL_RIGHT, minimized: true } : { minimized: true };
        this.setState(newState, () => {
            typeof addWindowToSubMenu === "function" && addWindowToSubMenu(window);
        });
    };

    _onMaximizeLeft = (window) => {
        const { removeWindowFromSubMenu } = this.props.sharedFunctions;
        const newState = this.isCanZoomableView() ? { minimized: false } : { minimized: false };
        this.setState(newState, () => {
            typeof removeWindowFromSubMenu === "function" && removeWindowFromSubMenu(window);
        });
    };

    _onMaximizeRight = (window) => {
        const { removeWindowFromSubMenu } = this.props.sharedFunctions;
        const newState = this.isCanZoomableView() ? { minimized: false } : { minimized: false };
        this.setState(newState, () => {
            typeof removeWindowFromSubMenu === "function" && removeWindowFromSubMenu(window);
        });
    };

    //zoombale bên trái có thể thu nhỏ ko
    canMinimizeLeft = () => {
        return true;
    };

    //zoombale bên phải có thể thu nhỏ ko
    canMinimizeRight = () => {
        return true;
    };
    renderBody() {
        const { minimalValue, errorMessage } = this.state;
        if (errorMessage.length > 0) {
            return errorMessage.map(i => {
                return (
                    <I3Div
                        key={i}
                        fontStyle="italic"
                        padding="lg"
                        variant="h5"
                        fontWeight={FontWeight.bold}
                    >
                        {i}
                    </I3Div>
                )
            })
        }
        return (
            <I3Div display="flex" height="100%">
                <ZoomableView
                    minimal={minimalValue == MINIMAL_LEFT}
                    normalContent={this._renderNormalQueueContent}
                    minimalContent={this.renderMinimalQueueContent}
                    minimalWidth="87rem"
                    maximalWidth="227rem"
                    onMinimize={this._onMinimizeLeft}
                    onMaximize={this._onMaximizeLeft}
                    fullWhenMaximal
                />
                <ZoomableView
                    minimal={minimalValue == MINIMAL_RIGHT}
                    normalContent={this._normalRightContent}
                    minimalContent={this.renderMinimalRightContent}
                    minimalWidth="87rem"
                    maximalWidth="227rem"
                    onMinimize={this._onMinimizeRight}
                    onMaximize={this._onMaximizeRight}
                    fullWhenMaximal
                />
            </I3Div>
        );
    }
}

let assignPageLayoutStyles = {
    ...pageLayoutStyle,
};

export { AssignPageLayout, assignPageLayoutStyles };

