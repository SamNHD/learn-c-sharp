import { HubManager, HubManagerNeed, SignalConnection } from "general/HubManager";
import Enum, { ESignalRType } from "./enum";
import { processWithJwt } from "./helper";
const $ = window.dollar;
export default class EHealthHubManager extends HubManager {
    constructor(jwtRequied) {
        super(jwtRequied);
    }

    getConnectionList() {
        let hasDiffDC = window.dcBaseUrl && window.dcBaseUrl != window.baseSignalRServer;

        let connections = [
            new SignalConnection(
                window.baseSignalRServer,
                "eHealthHub",
                `${window.baseSignalRServer}/api/SignalR/UpdateNeed`,
                `${window.baseSignalRServer}/api/SignalR/RemoveNeed`,
                (need) => {
                    return hasDiffDC == false || !need.types || need.types.indexOf(ESignalRType.Local) >= 0
                },
                this.generateDataToUpdateNeed,
                window.dollar,
            ),
        ];

        if (hasDiffDC) {
            connections.push(new SignalConnection(
                window.dcBaseUrl,
                "eHealthHub",
                `${window.dcBaseUrl}/api/SignalR/UpdateNeed`,
                `${window.dcBaseUrl}/api/SignalR/RemoveNeed`,
                (need) => {
                    return need.types && need.types.indexOf(ESignalRType.DC) >= 0
                },
                this.generateDataToUpdateNeed,
                window.dollar
            ));
        }


        return connections;
    }


    getNeedList() {
        return [
            new HubManagerNeed("Test", Enum.ESignalRNeed.Test, "test"),
            new HubManagerNeed("PatientsInQueueChanged", Enum.ESignalRNeed.PatientsInQueueChanged, "onPatientsInRoomChanged"),
            new HubManagerNeed("OnPatientCallIn", Enum.ESignalRNeed.PatientCallIn, "onPatientCallIn"),
            new HubManagerNeed("OnChangeInventoryActualQuantity", Enum.ESignalRNeed.OnChangeInventoryActualQuantity, "onChangeInventoryActualQuantity"),
            new HubManagerNeed("PushDataPhotoNotification", Enum.ESignalRNeed.PhotoNotification, "pushDataPhotoNotification"),
            new HubManagerNeed("ReceiveChatMessage", Enum.ESignalRNeed.ReceiveChatMessage, "receiveChatMessage"),
            new HubManagerNeed("UpdateChatConversation", Enum.ESignalRNeed.UpdateChatConversation, "updateChatConversation"),
            // new HubManagerNeed("UpdateUserOnline", Enum.ESignalRNeed.UpdateUserOnline, "updateUserOnline"),
            new HubManagerNeed("RemoveFromChatGroup", Enum.ESignalRNeed.RemoveFromChatGroup, "removeFromChatGroup"),
            new HubManagerNeed("UpdateInterventionReportInChat", Enum.ESignalRNeed.NotifyChatToDoctor, "updateInterventionReportInChat"),
            new HubManagerNeed("UpdatePatientQueue", Enum.ESignalRNeed.UpdatePatientQueue, "updatePatientQueue"),
            new HubManagerNeed("OnModifySurgeryPlan", Enum.ESignalRNeed.OnModifySurgeryPlan, "onModifySurgeryPlan"),
            new HubManagerNeed("DistributePatientCheckIn", Enum.ESignalRNeed.DistributePatientCheckIn, "distributePatientCheckIn"),
            new HubManagerNeed("DistributedMedication", Enum.ESignalRNeed.DistributedMedication, "distributedMedication"),
            new HubManagerNeed("PushNotificationToUsers", Enum.ESignalRNeed.Notification, "pushNotificationToUsers"),
            new HubManagerNeed("ReloadWhenBalanceChange", Enum.ESignalRNeed.ReloadWhenBalanceChange, "reloadWhenBalanceChange"),
            new HubManagerNeed("UpdateStatusInventoryReport", Enum.ESignalRNeed.UpdateStatusInventoryReport, "updateStatusInventoryReport"),
            new HubManagerNeed("MedicalReportStatusChanged", Enum.ESignalRNeed.MedicalReportStatusChanged, "onMedicalReportStatusChanged"),
            new HubManagerNeed("OnLoadPatientInterventionList", Enum.ESignalRNeed.OnLoadPatientInterventionList, "onLoadPatientInterventionList"),
            new HubManagerNeed("ConfirmSignature", Enum.ESignalRNeed.ConfirmSignature, "confirmSignature"),
            new HubManagerNeed("OnloadSubmissionPage", Enum.ESignalRNeed.OnloadSubmissionPage, "onloadSubmissionPage"),
            new HubManagerNeed("OnloadChatSubmissionSurgeryPlan", Enum.ESignalRNeed.OnloadChatSubmissionSurgeryPlan, "onloadChatSubmissionSurgeryPlan"),
            new HubManagerNeed("OnAddNewConsumableInventory", Enum.ESignalRNeed.OnAddNewConsumableInventory, "onAddNewConsumableInventory"),
            new HubManagerNeed("RemoveChatGroup", Enum.ESignalRNeed.RemoveChatGroup, "removeChatGroup"),
            new HubManagerNeed("ExecutionStatusChanged", Enum.ESignalRNeed.ExecutionStatusChanged, "onExecutionStatusChanged"),
            new HubManagerNeed("OnMergeResultForm", Enum.ESignalRNeed.OnMergeResultForm, "onMergeResultForm"),
            new HubManagerNeed("PushPrintPaymentSummary", Enum.ESignalRNeed.PushPrintPaymentSummary, "pushPrintPaymentSummary"),
            new HubManagerNeed("onSystemUpdate", Enum.ESignalRNeed.SystemUpdate, "onSystemUpdate"),
            new HubManagerNeed("OnMonthlyReportBuildReady", Enum.ESignalRNeed.MonthlyReportBuildReady, "onMonthlyReportBuildReady"),
            new HubManagerNeed("BroadcastPatientOptimalQueuePath", Enum.ESignalRNeed.BroadcastPatientOptimalQueuePath, "broadcastPatientOptimalQueuePath"),
            new HubManagerNeed("OnInsuranceOptimizationSucceed", Enum.ESignalRNeed.OnInsuranceOptimizationSucceed, "onInsuranceOptimizationSucceed"),
            new HubManagerNeed("OnAutoKickoutWhenExecutionCompleted", Enum.ESignalRNeed.OnAutoKickoutWhenExecutionCompleted, "onAutoKickoutWhenExecutionCompleted"),
        ]
    }

    getLocalJwt(callback) {
        processWithJwt(callback);
    }

    getSignalRConnection() {
        return window.dollar.connection;
    }
    generateDataToUpdateNeed(needs, connectionId) {
        let data = {
            connectionId: connectionId,
            signalRNeeds: needs
        };
        return data;
    }

    needKey(need) {
        return need.need;
    }

    getFullUrl(url) {
        return (window.applicationBaseUrl ? window.applicationBaseUrl : "") + url;
    }
    getUpdateNeedUrl() {
        return this.getFullUrl(`/api/SignalR/UpdateNeed`);
    }
    getUnregisterNeedUrl() {
        return this.getFullUrl(`/api/SignalR/RemoveNeed`);
    }
    getApplicationHubName() {
        return "eHealthHub";
    }

}