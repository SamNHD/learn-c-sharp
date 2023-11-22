import CheckInCounterWrapper from "../page-components/WaitingRoom/CheckInCounterWrapper";
import DispenseMedicationTVWrapper from "../page-components/WaitingRoom/DispenseMedicationTVWrapper";
import PaymentTVWrapper from "../page-components/WaitingRoom/PaymentTVWrapper";
import SearchInfoWrapper from "../page-components/SearchingPatientInfo/SearchInfoWrapper";
//import StandbyScreenPageWrapper from "../page-components/standby-screen/StandbyScreenPageWrapper";
//import UploadFileMobilePageWrapper from "../page-components/UploadFileMobile/UploadFileMobilePageWrapper";
import WaitingRoomWrapper from "../page-components/WaitingRoom/WaitingRoomWrapper";
import { createRoute, Paths } from "./paths";
export const StandBy = [
    //createRoute(Paths.standBy, StandbyScreenPageWrapper),
    createRoute(Paths.waitingRoom, WaitingRoomWrapper),
    createRoute(Paths.waitingRoomLog, WaitingRoomWrapper),
    createRoute(Paths.paymentTV, PaymentTVWrapper),
    createRoute(Paths.checkInCounter, CheckInCounterWrapper),
    createRoute(Paths.dispenseMedication, DispenseMedicationTVWrapper),
    createRoute(Paths.searchInfo, SearchInfoWrapper),
];