import React from "react";
import EHealthBaseConsumer from "../../../components/Base/EHealthBaseConsumer";
import IconWithDot from "../../../components/PatientTransaction/IconWithDot";
import NotificationContainer from "../../../components/ui-kit/notifications/NotificationContainer";
import Enum from "../../../general/enum";
import { I3Div } from "../../../importer";
export default class HeaderNotification extends EHealthBaseConsumer {
    constructor(props) {
        super(props);
        this.state = {
            notifications: [],
            checkNotification: false,
            hasMore: false,
            notificationGroupId: null,
        };
    }

    _updateHasSeenToDb = (callback) => {
        const { notificationGroupId, notifications } = this.state;
        if (notificationGroupId) {
            this.ajaxPost({
                url: `/api/chat/ReadLastMessage?chatGroupId=${notificationGroupId}`,
                success: (ack) => {
                    let _noti = $.extend(true, [], notifications);
                    _noti.forEach((i) => {
                        i.hasSeen = true;
                    });
                    this.setState({ checkNotification: true, notifications: _noti }, () => {
                        typeof callback == "function" && callback();
                    });
                },
            });
        }
    };

    _openNotificationPopup = (e) => {
        const { notifications, hasMore } = this.state;

        this.setState({ checkNotification: true });

        let popupId = null;
        let onClose = (callback) => {
            this.closePopup(popupId, () => {
                this._updateHasSeenToDb(callback);
            });
        };
        let target = e.currentTarget;
        popupId = this.openPopup(() => ({
            body: (
                <NotificationContainer
                    onClosePopup={onClose}
                    notifications={notifications}
                    hasMore={hasMore}
                    getData={this._getData}
                />
            ),
            anchorEl: target,
            anchorOrigin: {
                vertical: "bottom",
                horizontal: "right",
            },
            transformOrigin: {
                vertical: "top",
                horizontal: "right",
            },
            callbackWhenOnClose: this._updateHasSeenToDb,
        }));
    };

    componentDidMount() {
        this.registerNeed(
            [
                {
                    need: Enum.ESignalRNeed.Notification,
                    id: 0,
                },
            ],
            this
        );
        this._getData();
    }
    receiveChatMessage = () => {

    }
    _getData = (lazyLoadPagination, callback) => {
        this.ajaxPost({
            url: `/api/chat/GetNotificationsOfUser`,
            data: lazyLoadPagination,
            success: ({ data }) => {
                let _notifications = [];

                if (data != null) {
                    if (data.listChatMessages && data.listChatMessages.dataList.length > 0) {
                        _notifications = data.listChatMessages.dataList;
                    }
                    this.mergeLocalList(
                        this.state.notifications,
                        _notifications,
                        (a, b) => a.id == b.id,
                        () => {
                            this.setState(
                                {
                                    hasMore: data.listChatMessages.hasMore,
                                    checkNotification: data.hasSeen,
                                    notificationGroupId: data.id,
                                },
                                () => {
                                    typeof callback == "function" && callback(this.state.notifications, this.state.hasMore);
                                }
                            );
                        },
                        false
                    );
                }
            },
        });
    };

    pushNotificationToUsers = (message, callback) => {
        const { notifications } = this.state;

        this.addLocalElement(notifications, message, 0, () => {
            this.setState({ checkNotification: false, notificationGroupId: message.groupId }, callback);
        });
    };

    _openSeriousChatContainerPopup = (e, c) => {
        this.props.openSeriousChatContainer(e);
        this.unregisterNeed(c)
    };
    _openChatContainerPopup = (e, c) => {
        this.props.openChatContainer(e);
        this.unregisterNeed(c);
    }

    _recieveSeriousChatMessage = (m, cb) => {
        this.props.getTotalUnseenSeriousChatContact(m, cb);
    }

    _recieveChatMessage = (m, cb) => {
        this.props.getTotalUnseenChatContact(m, cb);
    }

    consumerContent() {
        let { openChatContainer, totalUnseenSeriousChatContact, totalUnseenChatContact } = this.props;
        const { notifications, checkNotification } = this.state;
        return (
            <I3Div margin={[, "lg2", ,]} display="flex" alignItems="center">
                <I3Div margin={[, "md", ,]}>
                    <IconWithDot
                        isShowDot={totalUnseenSeriousChatContact > 0}
                        contentInDot={totalUnseenSeriousChatContact > 99 ? '99+' : totalUnseenSeriousChatContact}
                        border={totalUnseenSeriousChatContact > 0}
                        title="Biên bản"
                        display="flex"
                        iconSize="lg"
                        size="md"
                        top="2px"
                        right="0px"
                        iconColor={totalUnseenSeriousChatContact > 0 ? "primary9" : "grey8"}
                        iconClassName="far fa-file-contract"
                        needs={[{
                            need: Enum.ESignalRNeed.ReceiveChatMessage,
                            id: 0,
                        }]}
                        receiveChatMessage={this._recieveSeriousChatMessage}
                        onClick={this._openSeriousChatContainerPopup}
                    />
                </I3Div>
                {this.isDisableNormalChat()
                    ? null
                    : <I3Div margin={[, "md", ,]}>
                        <IconWithDot
                            margin={[, "sm", , "sm"]}
                            isShowDot={totalUnseenChatContact > 0}
                            contentInDot={totalUnseenChatContact}
                            title="Cuộc hội thoại"
                            display="flex"
                            iconSize="lg"
                            top="2px"
                            right="0px"
                            iconColor="grey8"
                            iconClassName="far fa-comments-alt"
                            size="md"
                            onClick={this._openChatContainerPopup}
                            needs={[{
                                need: Enum.ESignalRNeed.ReceiveChatMessage,
                                id: 0,
                                types: types
                            }]}
                            receiveChatMessage={this._recieveChatMessage}
                        />
                    </I3Div>}

                <IconWithDot
                    isShowDot={!checkNotification && notifications.length > 0}
                    display="flex"
                    iconSize="lg"
                    title="Thông báo"
                    size="md"
                    top="2px"
                    right="0px"
                    iconColor="grey8"
                    iconClassName="far fa-bell"
                    onClick={this._openNotificationPopup}
                />
            </I3Div>
        );
    }
}
