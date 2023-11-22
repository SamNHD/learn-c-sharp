import { ButtonBase } from "@mui/material";
import { withStyles } from "@mui/styles";
import React from 'react';
import RoomSelect from '../../../components/General/RoomSelect';
import EHealthIconButton from '../../../components/ui-kit/button/EHealthIconButton';
import UserCard from '../../../components/User/UserCard';
import { LoginPaths } from '../../../general/paths';
import { headerHeight, underHeaderHeight } from '../../../general/sizeConfig';
import { BaseConsumer, I3Component, I3Div, I3DivCenter, I3Icon } from '../../../importer';
import { FontWeight } from '../../../themeStyles/Color';
import HeaderNotification from './HeaderNotification';
import Enum, { getSeriousChatType, getNormalChatType } from "../../../general/enum";
import helper from '../../../general/helper';
import HeaderSummary from './HeaderSummary';



class Header extends BaseConsumer {
    constructor(props) {
        super(props);
        this.state = {
            lostSignalR: false,
            headerNotificationModel: {
                totalUnseenSeriousChatContact: null,
                totalUnseenChatContact: null
            }
        };
        this._stillHaveSignalR = true;
    }

    _testSignalR = () => {
        this._stillHaveSignalR = false;
        let url = '/api/signalR/test';
        this.registerIntervalUrl(url);
        this.ajaxPost({
            url: url,
            data: {
                connectionId: this.getLocalConnectionId()
            },
            success: (ack) => {
                setTimeout(() => {
                    if (this._stillHaveSignalR == false) {
                        console.log("lost SignalR");
                        this.setState({ lostSignalR: true });
                    }
                    else {
                        this.setState({ lostSignalR: false });
                    }
                    setTimeout(this._testSignalR, 5 * 60 * 1000);
                }, 5000);
            },
            error: () => {
                this.setState({ lostSignalR: true });
                setTimeout(this._testSignalR, 5 * 60 * 1000);
            }
        })
    }

    test(callback) {
        this._stillHaveSignalR = true;
        callback && callback();
    }

    _onClick = (item) => {
        if (item.path) {
            this.goTo(item.path);
        }
        let index = this.props.menu.indexOf(item);
        this.props.onClick(index);
    }


    componentDidMount() {
        this.registerNeed(
            [
                {
                    need: Enum.ESignalRNeed.Test,
                    id: 0
                }
            ],
            this
        );

        this.ajaxGet({
            url: "/api/Chat/GetNotificationModel",
            success: (ack) => {
                this.updateLocalObject(this.state.headerNotificationModel, {
                    totalUnseenChatContact: ack.data.totalUnseenChatContact,
                    totalUnseenSeriousChatContact: ack.data.totalUnseenSeriousChatContact
                })
            }
        })

        setTimeout(this._testSignalR, 5000);
    }

    _getTotalUnseenSeriousChatContact = (chatMessage, disableChatgroup, cb) => {
        let types = getSeriousChatType();
        if (types.includes(chatMessage.chatGroupType) && !disableChatgroup) {
            this.ajaxGet({
                url: "/api/Chat/GetNotificationModel",
                success: (ack) => {
                    this.updateLocalObject(this.state.headerNotificationModel, {
                        totalUnseenSeriousChatContact: ack.data.totalUnseenSeriousChatContact
                    }, cb)
                }
            })
        } else {
            typeof cb == "function" && cb();
        }
    }

    _getTotalUnseenChatContact = (chatMessage, disableChatgroup, cb) => {
        let types = getNormalChatType();
        if (types.includes(chatMessage.chatGroupType) && !disableChatgroup) {
            this.ajaxGet({
                url: "/api/Chat/GetNotificationModel",
                success: (ack) => {
                    this.updateLocalObject(this.state.headerNotificationModel, {
                        totalUnseenChatContact: ack.data.totalUnseenChatContact,
                    }, cb)
                }
            })
        } else {
            typeof cb == "function" && cb();
        }

    }

    setUnseenChatSerious = (amount) => {
        this.updateLocalObject(this.state.headerNotificationModel, { totalUnseenSeriousChatContact: amount });
    }

    setUnseenChatContact = (amount) => {
        this.updateLocalObject(this.state.headerNotificationModel, { totalUnseenChatContact: amount });
    }

    readAllChatSerious = () => {
        this.setUnseenChatSerious(0);
    }
    _getPathUrl = item => {
        if (item.path) {
            return item.path;
        }
        else {
            return this._getPathUrl(item.views[0]);
        }
    }
    _openNewTab = menuItem => {
        let linkPath = this._getPathUrl(menuItem);
        window.open(linkPath, "_blank");
        window.focus();
    }

    _renderWarningConnectData = () => {
        const { isDataLive, isProductionMode } = this.props;
        if (!isProductionMode) {
            let backgroundColor = isDataLive ? "red5" : "white";
            let textColor = isDataLive ? "white" : "yellow5";
            let content = `Bạn đang kết nối với ${isDataLive ? 'DataLive' : 'DataLocal'}`;
            return (
                <I3Div height="100%" flex="1" backgroundColor={backgroundColor} display="flex" alignItems="center" justifyContent="center">
                    <I3Component color={textColor} variant="h6" fontWeight={FontWeight.bold}>{content}</I3Component>
                </I3Div>
            )
        }
        return null;
    }

    consumerContent() {
        let { menu, color, selectedIndex,
            openChatContainer, totalUnseenChatContact,
            totalUnseenSeriousChatContact, openSeriousChatContainer,
            classes
        } = this.props;
        const { lostSignalR } = this.state;
        const isPageTest = helper.checkPageTest();
        let backgroundColorHeader = "primary";
        if (isPageTest) {
            backgroundColorHeader = "orange5";
        }
        return (
            <I3DivCenter className={classes.root}>
                <I3Div backgroundColor={backgroundColorHeader} display="flex" height={headerHeight + "rem"}>
                    <I3DivCenter fontFamily="font2" color="white" minWidth="100px" height="100%">
                        EHEALTH
                    </I3DivCenter>
                    {menu.map((m, index) => {
                        let backgroundColor = selectedIndex == index ? "white" : backgroundColorHeader;
                        let textColor = selectedIndex == index ? "primary" : "primary2";
                        if (isPageTest) {
                            textColor = selectedIndex == index ? "orange" : "white";
                        }
                        let textWeight = selectedIndex == index ? FontWeight.bold : FontWeight.medium;
                        return (
                            <I3DivCenter
                                key={index}
                                backgroundColor={backgroundColor}
                                // minWidth="160px"
                                height="100%"
                                cursor="pointer"
                                onClick={(e) => {
                                    if (e.ctrlKey) {
                                        this._openNewTab(m);
                                    }
                                    else {
                                        this._onClick(m);
                                    }
                                }}
                                onMouseDown={e => {
                                    if (e.button === 1) {
                                        this._openNewTab(m);
                                    }
                                }}
                            >
                                <ButtonBase className={classes.buttonBase}>
                                    <I3Div
                                        width="100%"
                                        height="100%"
                                        color={textColor}
                                        fontWeight={textWeight}
                                        fontFamily="font2"
                                        display="flex"
                                        alignItems="center"
                                        padding={[, "md", , "md"]}
                                    >
                                        {m.name}
                                    </I3Div>
                                </ButtonBase>
                            </I3DivCenter>
                        );
                    })}
                </I3Div>
                <I3Div
                    height={underHeaderHeight + "rem"}
                    width="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-end"
                >
                    {lostSignalR
                        ?
                        <img
                            onClick={window.getLogHistory}
                            style={{ maxHeight: "12rem", imageRendering: "-webkit-optimize-contrast" }}
                            src="/dist/assets/SignalR.png"
                        />
                        : null
                    }

                    <I3Div flexGrow={1} display="flex" alignItems="center" justifyContent="flex-end" height="100%">
                        {this._renderWarningConnectData()}
                        <I3Div height="100%">
                            <HeaderSummary />
                        </I3Div>
                        {
                            this.getCurrentUser() ?
                                <RoomSelect
                                    autoSelect={false}
                                    redirectUrl="self"
                                    renderContent={(_onClick) => {
                                        const { currentLocationParentName, currentLocationName } = this.getCurrentLocationInfor();
                                        return (
                                            <I3Div cursor="pointer" onClick={_onClick} backgroundColor="grey1"
                                                alignItems="center" display="flex"
                                                margin={[, "lg2", ,]} height="100%"
                                            ><I3Div
                                                borderRadius="maximum"
                                                boxShadow="style1"
                                                display="flex"
                                                width="8rem"
                                                height="8rem"
                                                alignItems="center"
                                                justifyContent="center"
                                                backgroundColor="white"
                                                margin={[, "md", , "sm"]}>
                                                    <I3Icon
                                                        color="primary3"
                                                        className="fas fa-map-marker-alt"
                                                    />
                                                </I3Div>
                                                <I3Div align="left">
                                                    <I3Div width="58rem" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" fontWeight={FontWeight.bold}>
                                                        {currentLocationName}
                                                    </I3Div>
                                                    {currentLocationParentName
                                                        ? <I3Div color="grey5" variant="subtitle1">
                                                            {currentLocationParentName}
                                                        </I3Div>
                                                        : null}
                                                </I3Div>
                                                <I3Div align="right">
                                                    <I3Icon
                                                        margin="lg"
                                                        className="far fa-chevron-down"
                                                        color="primary5"
                                                    />
                                                </I3Div>
                                            </I3Div>
                                        )
                                    }}
                                />
                                : null
                        }
                    </I3Div>
                    <I3Div
                        display="flex"
                        alignItems="center"
                    >
                        {this.getCurrentUser() ? (<React.Fragment>
                            <HeaderNotification
                                totalUnseenChatContact={this.state.headerNotificationModel.totalUnseenChatContact}
                                totalUnseenSeriousChatContact={this.state.headerNotificationModel.totalUnseenSeriousChatContact}
                                openChatContainer={openChatContainer}
                                getTotalUnseenChatContact={this._getTotalUnseenChatContact}
                                getTotalUnseenSeriousChatContact={this._getTotalUnseenSeriousChatContact}
                                openSeriousChatContainer={openSeriousChatContainer}
                            />
                            <UserCard userInfo={this.getCurrentUser()} />
                        </React.Fragment>) : (<React.Fragment>
                            <EHealthIconButton
                                iconClassName="fas fa-user"
                                title="Đăng nhập"
                                color="primary"
                                onClick={() => {
                                    this.goTo(LoginPaths.login.path);
                                }}
                            />
                        </React.Fragment>)}
                    </I3Div>
                </I3Div>
            </I3DivCenter>
        );
    }
}



Header.displayName = "Header";
export default withStyles({
    buttonBase: {
        width: '100%',
        height: '100%'
    },
    root: {
        position: "relative",
        "&:after": {
            display: "block",
            position: "absolute",
            left: 0,
            bottom: 0,
            content: "''",
            width: "100%",
            background: 'transparent linear-gradient(180deg, #FFFFFF03 0%, #AAA9A960 100%) 0% 0% no-repeat padding-box',
            height: "1rem"
        }
    },
})(Header);