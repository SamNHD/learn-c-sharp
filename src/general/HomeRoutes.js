import React from 'react';
import BedBookingManagerWrapper from "../components/Booking/BedBookingManager/BedBookingManagerWrapper";
import BookingManagerWrapper from "../components/Booking/BookingManager/BookingManagerWrapper";
import BookingOnlineWrapper from "../components/Booking/BookingOnline/BookingOnlineWrapper";
import AccountStatementPageWrapper from "../page-components/AccountStatement/AccountStatementPageWrapper";
import HospitalAccountStatementPageWrapper from "../page-components/AccountStatement/HospitalAccountStatementPageWrapper";
import AdminToolsPageWrapper from "../page-components/admin-tool/AdminToolsPageWrapper";
import AllocateBalancePageWrapper from "../page-components/AllocateBalance/AllocateBalancePageWrapper";
import ApproveMedicalPrescriptionWrapper from "../page-components/ApproveMedicalPrescription/ApproveMedicalPrescriptionWrapper";
import AutoTextDictionaryPageWrapper from "../page-components/AutoTextDictionary/AutoTextDictionaryPageWrapper";
import BankPageWrapper from "../page-components/Bank/BankPageWrapper";
//import ApproveShoppingPlanPageWrapper from "../page-components/ApproveShoppingPlan/ApproveShoppingPlanPageWrapper";
import BloodBankWrapper from "../page-components/BloodBank/BloodBankWrapper";
import CameraDemoPageWrapper from "../page-components/CameraDemo/CameraDemoPageWrapper";
import CashierQueuePageWrapper from "../page-components/Cashier/cashier-queue/CashierQueuePageWrapper";
import CashierPageWrapper from "../page-components/Cashier/CashierPageWrapper";
import PrivateInsuranceSubmitPageWrapper from "../page-components/Cashier/PrivateInsuranceSubmitPageWrapper";
import ManageCashierPageWrapper from "../page-components/CashierManager/ManageCashierPageWrapper";
import ChangePasswordPageWrapper from "../page-components/ChangePassword/ChangePasswordPageWrapper";
import CheckInLocationPageWrapper from "../page-components/CheckInLocation/CheckInLocationPageWrapper";
import QueueTVPageWrapper from "../page-components/CheckInLocation/QueueTVPageWrapper";
import CloseRoomPageWrapper from '../page-components/CloseRoom/CloseRoomPageWrapper';
import CoordinationPatientPageWrapper from "../page-components/CoordinationPatient/CoordinationPatientPageWrapper";
import BoardingDashboardPageWrapper from "../page-components/Dashboard/BoardingDashboardPageWrapper";
import EmergencyDashboardPageWrapper from "../page-components/Dashboard/EmergencyDashboardPageWrapper";
import ExaminationQueueDashboardPageWrapper from "../page-components/Dashboard/ExaminationQueue/ExaminationQueueDashboardPageWrapper";
import InPatientDashboardPageWrapper from "../page-components/Dashboard/InPatientDashboard/InPatientDashboardPageWrapper";
import PatientQueueDashBoardPageWrapper from "../page-components/Dashboard/PatientQueueDashBoardPageWrapper";
import TimeManagementDashboardPageWrapper from "../page-components/Dashboard/TimeManagement/TimeManagementDashboardPageWrapper";
import DiagnosticImagingUtilityPageWrapper from "../page-components/DiagnosticImagingUtility/DiagnosticImagingUtilityPageWrapper";
import CreateServiceExecutionReportPageWrapper from "../page-components/DoctorScreen/CreateServiceExecutionReportPageWrapper";
import DoctorScreenPageWrapper from "../page-components/DoctorScreen/DoctorScreenPageWrapper";
import SearchPatientInQueuePageWrapper from "../page-components/DoctorScreen/SearchPatientInQueuePageWrapper";
import EHealthDocumentPage from "../page-components/EHealthDocument/EHealthDocumentPage";
import EmergencyPatientDepartmentPageWrapper from "../page-components/EmergencyPatientDepartment/EmergencyPatientDepartmentPageWrapper";
import EnumPageWrapper from "../page-components/Enum/EnumPageWrapper";
import ExaminationContractPageWrapper from "../page-components/ExaminationContract/ExaminationContractPageWrapper";
import ExternalExecutionPageWrapper from "../page-components/external-execution/ExternalExecutionPageWrapper";
import FisChungTuPageWrapper from "../page-components/Fis/FisChungTuPageWrapper";
import FISMasterDataPageWrapper from "../page-components/FISMasterData/FISMasterDataPageWrapper";
import PostFISDataPageWrapper from "../page-components/FISMasterData/PostFISDataPageWrapper";
import FormPageWrapper from "../page-components/FormPage/FormPageWrapper";
import HomePageWrapper from "../page-components/HomePage/HomePageWrapper";
import IncomingPatientDashboardWrapper from "../page-components/IncomingPatient/IncomingPatientDashboardWrapper";
import InPatientDepartmentPageWrapper from "../page-components/InPatientDepartment/InPatientDepartmentPageWrapper";
import InsuranceToolWrapper from '../page-components/InsuranceDataModify/InsuranceToolWrapper';
import InvoiceManagementWrapper from "../page-components/InvoiceManagement/InvoiceManagementWrapper";
import MemLogPageWrapper from '../page-components/Log/MemLogStateWrapper';
import MasterDataPageWrapper from "../page-components/MasterData/MasterDataPageWrapper";
import PatientLevelHistoryPageWrapper from "../page-components/patient-level/PatientLevelHistoryPageWrapper";
import ReceivePatientPageWrapper from "../page-components/Patient/ReceivePatientPageWrapper";
import PatientAutoRedirectedPageWrapper from '../page-components/PatientAutoRedirected/PatientAutoRedirectedPageWrapper';
import PatientLastChangeLocationRecordPageWrapper from '../page-components/PatientLastChangeLocationRecord/PatientLastChangeLocationRecordPageWrapper';
import PatientManagementPageWrapper from "../page-components/PatientManagement/PatientManagementPageWrapper";
import PatientQueuePageWrapper from "../page-components/PatientQueue/PatientQueuePageWrapper";
import PrivateInsuranceWrapper from "../page-components/PrivateInsuranceManager/PrivateInsuranceWrapper";
import RefPosPageWrapper from "../page-components/RefPos/RefPosPageWrapper";
import RemoveServiceCallLogPageWrapper from "../page-components/RemoteServiceCallLog/RemoveServiceCallLogPageWrapper";
import RoomManagerPageWrapper from "../page-components/RoomManagerPage/RoomManagerPageWrapper";
import SearchMedicalRecordWrapper from "../page-components/SearchMedicalRecord/SearchMedicalRecordWrapper";
import SendInsurrancePageWrapper from "../page-components/SendInsurrance/SendInsurrancePageWrapper";
import SendInsurranceMonthlyReportPageWrapper from "../page-components/SendInsurranceMonthlyReport/SendInsurranceMonthlyReportPageWrapper";
import ServiceConsultationTeamPageWrapper from '../page-components/ServiceConsultationTeamPage/ServiceConsultationTeamPageWrapper';
import ServiceExecutionPageWrapper from "../page-components/ServiceExecution/ServiceExecutionPageWrapper";
import SurgeryExecutionPageWrapper from "../page-components/ServiceExecution/SurgeryExecutionPageWrapper";
import SignalRTestPageWrapper from "../page-components/SignalRTestPage/SignalRTestPageWrapper";
import SubmissionPageWrapper from "../page-components/SubmissionPage/SubmissionPageWrapper";
import TestAjax from "../page-components/test-ui-kit/TestAjax";
import TestUIKitWrapper from "../page-components/test-ui-kit/TestUIKitWrapper";
import UnauthorizedPageWrapper from "../page-components/Unauthorized/UnauthorizedPageWrapper";
import UserAutoSignManagementPageWrapper from "../page-components/UserAutoSign/UserAutoSignManagementPageWrapper";
import UserManagerPageWrapper from "../page-components/UserManager/UserManagerPageWrapper";
import VoucherCampaignManagementPageWrapper from "../page-components/Voucher/VoucherCampaignManagementPageWrapper";
import VoucherPageWrapper from '../page-components/Voucher/VoucherPageWrapper';
import DispenseMedicationTVWrapper from "../page-components/WaitingRoom/DispenseMedicationTVWrapper";
import { createRoute, Paths } from "./paths";
export const HomeRoutes = [
    createRoute(Paths.homePage, () => <div></div>),
    createRoute(Paths.sendInsurranceHistory, SendInsurrancePageWrapper),
    createRoute(Paths.sendInsurranceMonthlyReport, SendInsurranceMonthlyReportPageWrapper),
    createRoute(Paths.patientQueue, PatientQueuePageWrapper),
    createRoute(Paths.medicalReport, HomePageWrapper),
    createRoute(Paths.lineList, TestAjax),
    createRoute(Paths.emergencyDashboard, EmergencyDashboardPageWrapper),
    createRoute(Paths.boardingDashboard, BoardingDashboardPageWrapper),
    createRoute(Paths.ReceivePatient, ReceivePatientPageWrapper),
    createRoute(Paths.SignalRTestPage, SignalRTestPageWrapper),
    createRoute(Paths.bloodBank, BloodBankWrapper),
    createRoute(Paths.searchMedicalRecord, SearchMedicalRecordWrapper),
    createRoute(Paths.doctorScreen, DoctorScreenPageWrapper),
    createRoute(Paths.approvePrescription, ApproveMedicalPrescriptionWrapper),
    createRoute(Paths.patientQueueDashBoard, PatientQueueDashBoardPageWrapper),
    createRoute(Paths.formPage, FormPageWrapper),
    createRoute(Paths.ServiceConsultationTeamPage, ServiceConsultationTeamPageWrapper),
    createRoute(Paths.cashier, CashierPageWrapper),
    createRoute(Paths.VoucherSale, VoucherPageWrapper),
    createRoute(Paths.cashierQueue, CashierQueuePageWrapper),
    createRoute(Paths.privateInsuranceSubmit, PrivateInsuranceSubmitPageWrapper),
    createRoute(Paths.manageCashier, ManageCashierPageWrapper),
    createRoute(Paths.bookingManager, BookingManagerWrapper),
    createRoute(Paths.bookingOnline, BookingOnlineWrapper),
    createRoute(Paths.RoomManagerPage, RoomManagerPageWrapper),
    createRoute(Paths.bedBookingManager, BedBookingManagerWrapper),
    createRoute(Paths.ServiceExecutionPage, ServiceExecutionPageWrapper),
    createRoute(Paths.SurgeryExecutionPage, SurgeryExecutionPageWrapper),
    //createRoute(Paths.dataTableManagement, DataTableManagementWrapper),
    createRoute(Paths.incomingPatient, IncomingPatientDashboardWrapper),
    createRoute(Paths.autoTextDictionary, AutoTextDictionaryPageWrapper),
    createRoute(Paths.ExaminationContractPage, ExaminationContractPageWrapper),
    createRoute(Paths.InPatientDepartmentPage, InPatientDepartmentPageWrapper),
    createRoute(Paths.EmergecyDepartmentPage, EmergencyPatientDepartmentPageWrapper),
    createRoute(Paths.userManager, UserManagerPageWrapper),
    createRoute(Paths.departmentDashboard, InPatientDashboardPageWrapper),

    createRoute(Paths.invoiceManagement, InvoiceManagementWrapper),
    createRoute(Paths.accountStatement, AccountStatementPageWrapper),
    createRoute(Paths.hospitalAccountStatement, HospitalAccountStatementPageWrapper),
    // createRoute(Paths.locationCheckIn, CheckInLocationPageWrapper),

    createRoute(Paths.waitingRoomPage, QueueTVPageWrapper),
    createRoute(Paths.dispenseMedication, DispenseMedicationTVWrapper),
    createRoute(Paths.checkInCounterPage, CheckInLocationPageWrapper),
    createRoute(Paths.privateInsurance, PrivateInsuranceWrapper),
    createRoute(Paths.allocateBalance, AllocateBalancePageWrapper),
    createRoute(Paths.refPos, RefPosPageWrapper),
    createRoute(Paths.Unauthorized, UnauthorizedPageWrapper),
    createRoute(Paths.ehealthDocument, EHealthDocumentPage),
    createRoute(Paths.bank, BankPageWrapper),
    createRoute(Paths.examinationDashboard, ExaminationQueueDashboardPageWrapper),
    createRoute(Paths.timeManagementDashboard, TimeManagementDashboardPageWrapper),
    // createRoute(Paths.inPatientDashboardPage, InPatientDashboardPageWrapper),

    createRoute(Paths.SubmissionManager, SubmissionPageWrapper),
    createRoute({ path: "/TestUIKit" }, TestUIKitWrapper),
    createRoute(Paths.CoordinationPatient, CoordinationPatientPageWrapper),
    createRoute(Paths.masterData, MasterDataPageWrapper),
    createRoute(Paths.changePassword, ChangePasswordPageWrapper),
    createRoute(Paths.userAutoSign, UserAutoSignManagementPageWrapper),
    createRoute(Paths.patientManagement, PatientManagementPageWrapper),

    createRoute(Paths.cameraDemo, CameraDemoPageWrapper),
    createRoute(Paths.fisMasterData, FISMasterDataPageWrapper),
    createRoute(Paths.postFisData, PostFISDataPageWrapper),
    createRoute(Paths.AdminToolsPage, AdminToolsPageWrapper),
    createRoute(Paths.memLog, MemLogPageWrapper),
    createRoute(Paths.Enum, EnumPageWrapper),
    createRoute(Paths.VoucherCampaignManagement, VoucherCampaignManagementPageWrapper),
    createRoute(Paths.PatientLevelHistory, PatientLevelHistoryPageWrapper),
    // createRoute(Paths.CombinedMedicalTest, CombinedMedicalTestPageWrapper), EH-2575 : tạm ẩn trang mẫu gộp
    createRoute(Paths.DCForwarders, RemoveServiceCallLogPageWrapper),
    createRoute(Paths.DiagnosticImagingUtility, DiagnosticImagingUtilityPageWrapper),
    createRoute(Paths.ExternalExecutionPage, ExternalExecutionPageWrapper),

    createRoute(Paths.SearchPatientInQueuePage, SearchPatientInQueuePageWrapper),
    createRoute(Paths.CreateServiceExecutionPage, CreateServiceExecutionReportPageWrapper),

    createRoute(Paths.fisChungTu, FisChungTuPageWrapper),
    createRoute(Paths.PatientLastChangeLocationRecordInfo, PatientLastChangeLocationRecordPageWrapper),
    createRoute(Paths.CloseRoom, CloseRoomPageWrapper),
    createRoute(Paths.PatientAutoRedirectedPage, PatientAutoRedirectedPageWrapper),
    createRoute(Paths.InsuranceTool, InsuranceToolWrapper),
];