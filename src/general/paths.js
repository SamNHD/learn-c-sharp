import { EActionPoint } from "./enum";
import WithRouter from "../components/Base/WithRouter";
export function createRoute({ path, actionPoint }, component) {
    return {
        path,
        actionPoint,
        component: WithRouter(component),
    };
}
function createPath(path, actionPoint = null) {
    return { path, actionPoint };
}
function processPaths(paths, repairPath) {
    Object.keys(paths).forEach((key) => {
        let { path, actionPoint } = paths[key];
        paths[key] = createPath(repairPath(path), actionPoint);
    });
}
const medicationPaths = {
    consumableTransactionReceive: createPath("/consumableTransactionReceive", EActionPoint.NhapKho),
    consumableTransactionExport: createPath("/consumableTransactionExport", EActionPoint.XuatKho),
    importExportInventory: createPath("/importExportInventory", EActionPoint.ConsumableBalancePage),

    assetTransactionReceive: createPath("/assetTransactionReceive", EActionPoint.NhapKhoTTB),
    assetTransactionExport: createPath("/assetTransactionExport", EActionPoint.XuatKhoTTB),
    assetImportExportInventory: createPath("/assetImportExportInventory", EActionPoint.NhapXuatTonTTB),

    //Dược sĩ
    medicinePackageDistribution: createPath("/medicinePackageDistribution", EActionPoint.PhatThuocNgoaiTru),
    dispenseMedicationQueue: createPath("/DispenseMedicationQueue", EActionPoint.PhatThuocNgoaiTru),
    medicineAllocate: createPath("/MedicineAllocate", EActionPoint.PhatThuocNoiTru),
    emergencyDispenseMedication: createPath("/emergencyDispenseMedication", EActionPoint.PhatThuocNoiTru),
    saleExternalPatient: createPath("/SaleExternalPatient", EActionPoint.BanThuocVangLai),
    medicinePackage: createPath("/medicinePackage", EActionPoint.DongGoiBenhNhan),
    medicineTemplatePackage: createPath("/medicineTemplatePackage", EActionPoint.QuanLyGoiSoanSan),
    returnMedicineCover: createPath("/returnMedicineCover", EActionPoint.TraVoNgoaiTru),

    supplyContract: createPath("/SupplyContract", EActionPoint.QuanLyHopDongThau),
    consumableList: createPath("/ConsumableList", EActionPoint.DanhMucDuoc),
    //Gói bệnh nhân
    managePackagedBatch: createPath("/ManagePackagedBatch", EActionPoint.QuanLyGoiBenhNhan),

    //Mua sắm kho dược
    consumablePlan: createPath("/consumablePlan", EActionPoint.KeHoachMuaSamDuoc),
    consumablePlanDetail: createPath("/ConsumablePlanDetail", EActionPoint.TaoDonDatHangDuoc),
    consumableOrder: createPath("/ConsumableOrder", EActionPoint.XacNhanDonDatHangDuoc),
    consumableOrderDetail: createPath("/ConsumableOrderDetail", EActionPoint.NhanHangNCCDuoc),
    tempReceiveWareHouse: createPath("/TempReceiveWareHouse", EActionPoint.ChoDuyetNhapKhoDuoc),
    preparationPlan: createPath("/PreparationPlan", EActionPoint.QuanLiKeHoachDuTruMuaSam),
    preparationPlanDetail: createPath("/PreparationPlanDetail", EActionPoint.QuanLiKeHoachDuTruMuaSam),
    goodReceipt: createPath("/goodReceipt", EActionPoint.TrangQuanLyGR),
    createConsumablePlan: createPath("/CreateShoppingPlan", EActionPoint.KeHoachMuaSamDuoc),
    //Kiểm kê kho dược
    consumableInventoryPlan: createPath("/consumableInventoryPlan", EActionPoint.KeHoachKiemKeDuoc),
    balanceWarehouse: createPath("/balanceWarehouse", EActionPoint.XuLyKiemKeDuoc),
    consumableResolveTicket: createPath("/consumableResolveTicket", EActionPoint.LichSuXuLyKiemKeDuoc),
    //Thanh lý kho dược
    liquidationRequest: createPath("/LiquidationRequest", EActionPoint.DuyetThanhLyDuoc),
    liquidationHandling: createPath("/LiquidationHandling", EActionPoint.XuLyThanhLyDuoc),
    liquidationHistory: createPath("/LiquidationHistory", EActionPoint.LichSuThanhLyDuoc),

    //Khoa phòng
    //Danh mục khoa phòng
    consumableListDepartment: createPath("/ConsumableListDepartment", EActionPoint.DanhMucDuocKhoa),
    //Gói bệnh nhân
    managePackagedBatchDepartment: createPath("/ManagePackagedBatchDepartment", EActionPoint.QuanLyGoiBenhNhanKhoa),
    //Kiểm kê khoa phòng
    consumableInventoryPlanDepartment: createPath("/consumableInventoryPlanDepartment", EActionPoint.KeHoachKiemKeDuocKhoa),
    balanceWarehouseDepartment: createPath("/balanceWarehouseDepartment", EActionPoint.XuLyKiemKeDuocKhoa),
    consumableResolveTicketDepartment: createPath("/consumableResolveTicketDepartment", EActionPoint.LichSuXuLyKiemKeDuocKhoa),

    //Thanh lý kho phòng
    liquidationRequestDepartment: createPath("/liquidationRequestDepartment", EActionPoint.DuyetThanhLyDuocKhoa),
    liquidationHandlingDepartment: createPath("/liquidationHandlingDepartment", EActionPoint.XuLyThanhLyDuocKhoa),
    liquidationHistoryDepartment: createPath("/liquidationHistoryDepartment", EActionPoint.LichSuThanhLyDuocKhoa),

    //điều phối dược khi kho chính hết hàng
    emergencyMedicationSupply: createPath("/MedicationSupply", EActionPoint.DanhMucDuoc), //tạm

    //Kiểm soát nhiễm khuẩn
    //Danh mục Kiểm soát nhiễm khuẩn
    consumableListInfectionControl: createPath("/consumableListInfectionControl", EActionPoint.DanhMucDuocKiemSoatNhiemKhuan),
    //Vật tư bền
    lastingConsumableList: createPath("/lastingConsumableList", EActionPoint.XuLyVatTuBen),
    collectLastingConsumable: createPath("/CollectLastingConsumable", EActionPoint.ThuHoiVatTuBen),
    //Kiểm kê Kiểm soát nhiễm khuẩn
    consumableInventoryPlanInfectionControl: createPath(
        "/consumableInventoryPlanInfectionControl",
        EActionPoint.KeHoachKiemKeKiemSoatNhiemKhuan
    ),
    balanceWarehouseInfectionControl: createPath("/balanceWarehouseInfectionControl", EActionPoint.XuLyKiemKeKiemSoatNhiemKhuan),
    consumableResolveTicketInfectionControl: createPath(
        "/consumableResolveTicketInfectionControl",
        EActionPoint.LichSuXuLyKiemKeKiemSoatNhiemKhuan
    ),
    //Thanh lý Kiểm soát nhiễm khuẩn
    liquidationRequestInfectionControl: createPath("/liquidationRequestInfectionControl", EActionPoint.DuyetThanhLyNhiemKhuan),
    liquidationHandlingInfectionControl: createPath("/liquidationHandlingInfectionControl", EActionPoint.XuLyThanhLyNhiemKhuan),
    liquidationHistoryInfectionControl: createPath("/liquidationHistoryInfectionControl", EActionPoint.LichSuThanhLyNhiemKhuan),

    warehouseQuota: createPath("/WarehouseQuota", EActionPoint.WareHouseQuotaPage),
    suggestWareHouseQuota: createPath("/SuggestWareHouseQuota", EActionPoint.WareHouseQuotaPage),
    autoPreparation: createPath("/AutoPreparation", EActionPoint.QuanLiKeHoachDuTruMuaSam),
    TransferToOtherHospitalPage: createPath("/TransferToOtherHospitalPage", EActionPoint.BanDuocNoiBo),

    receiveTransaction: createPath("/ReceiveTransaction", EActionPoint.QuanLyHoaDon),
    bizziMappingInvoice: createPath("/BizziInvoiceMappingInfo", EActionPoint.QuanLyHoaDon),
    returnVendor: createPath("/ReturnVendor", EActionPoint.TraHangNCC),
    //Danh mục thiết bị
    assetsList: createPath("/AssetsList", EActionPoint.DanhMucThietBi),
    //Thanh lý thiết bị
    liquidationAssetHandling: createPath("/liquidationAssetHandling", EActionPoint.XuLyThanhLyThietBi),
    liquidationAssetRequest: createPath("/liquidationAssetRequest", EActionPoint.DuyetThanhLyThietBi),
    liquidationAssetHistory: createPath("/LiquidationAssetHistory", EActionPoint.LichSuThanhLyThietBi),
    //Kiểm kê thiết bị
    assetInventory: createPath("/assetInventory", EActionPoint.KeHoachKiemKeThietBi),
    assetBalanceWarehouse: createPath("/assetBalanceWarehouse", EActionPoint.XuLyKiemKeThietBi),
    assetResolveTicket: createPath("/assetResolveTicket", EActionPoint.LichSuXuLyKiemKeThietBi),
    //Mua sắm thiết bị
    assetPlan: createPath("/AssetPlan", EActionPoint.KeHoachMuaSamThietBi),
    assetPlanDetail: createPath("/AssetPlanDetail", EActionPoint.TaoDonDatHangThietBi),
    assetOrder: createPath("/AssetOrder", EActionPoint.XacNhanDonDatHangThietBi),
    assetOrderDetail: createPath("/AssetOrderDetail", EActionPoint.NhanHangNCCThietBi),
    assetTempReceiveWareHouse: createPath("/AssetTempReceiveWareHouse", EActionPoint.ChoDuyetNhapKhoThietBi),

    bloodList: createPath("/BloodList"),
    liquidationBloodBagHandling: createPath("/liquidationBloodBagHandling"),
    liquidationBloodBagRequest: createPath("/liquidationBloodBagRequest"),
    liquidationBloodBagHistory: createPath("/liquidationBloodBagHistory"),
    bloodBagPlanDetail: createPath("/BloodBagPlanDetail"),
    bloodBagOrder: createPath("/BloodBagOrder"),
    bloodBagOrderDetail: createPath("/BloodBagOrderDetail"),
    bloodBagTempReceiveWareHouse: createPath("/BloodBagTempReceiveWareHouse"),
    bloodInventory: createPath("/BloodInventory"),
    bloodBalanceWarehouse: createPath("/BloodBalanceWarehouse"),
    bloodBagResolveTicket: createPath("/BloodBagResolveTicket"),
    NonePrepayUsingTransactionPage: createPath("/NonePrepayUsingTransactionPage", EActionPoint.QuanLyHoaDon),
    NationalPharmacyPage: createPath("/NationalPharmacyPage", EActionPoint.SendGPP),
    NationalPrescriptionPage: createPath("/NationalPrescriptionPage", EActionPoint.SendGPP)
};
const voucherPaths = {
    VoucherCampaignManagement: createPath("/VoucherCampaignManagement", EActionPoint.VoucherCampaignManagementPage),
};

const reportPaths = {
    businessReport: createPath("/SSRS", null),
    BaoCaoGiaoBan: createPath("/BaoCaoGiaoBan", EActionPoint.BaoCaoGiaoBan),
}

processPaths(medicationPaths, (path) => `/Medication${path}`);
processPaths(voucherPaths, (path) => `/Voucher${path}`);
processPaths(reportPaths, (path) => `/Report${path}`);

const mobilePath = {
    mobile: createPath("/Mobile"),
    uploadFileMobile: createPath("/Mobile/Upload"),
    signaturePad: createPath("/Mobile/SignaturePad"),
    tranTest: createPath("/Mobile/TranTest"),
}

export const Paths = {
    ...voucherPaths,
    ...medicationPaths,
    ...mobilePath,
    ...reportPaths,
    VoucherCampaignManagement: createPath("/VoucherCampaignManagement", EActionPoint.VoucherCampaignManagementPage),
    sendInsurranceHistory: createPath("/SendInsurranceHistory", EActionPoint.SendInsurranceHistoryPage),
    sendInsurranceMonthlyReport: createPath("/SendInsurranceMonthlyReport", EActionPoint.SendInsurranceMonthlyReportPage),
    homePage: createPath("/"),
    patientQueue: createPath("/PatientQueue"),
    medicalReport: createPath("/MedicalReport"),
    standbyScreen: createPath("/StandByscreen", EActionPoint.standbyScreenPage),
    ReceivePatient: createPath("/NhanBenh", EActionPoint.ReceivePatientPage),
    emergencyDashboard: createPath("/EmergencyDashboard", EActionPoint.emergencyDashboardPage),
    boardingDashboard: createPath("/BoardingDashboard", EActionPoint.boardingDashboardPage),
    patientQueueDashBoard: createPath("/PatientQueueDashBoard", EActionPoint.patientQueueDashBoardPage),
    bloodBank: createPath("/BloodBank", EActionPoint.bloodBankPage),
    approvePrescription: createPath("/ApprovePrescription", EActionPoint.approvePrescriptionPage),
    SignalRTestPage: createPath("/SignalRTestPage"),
    searchMedicalRecord: createPath("/SearchMedicalRecord", EActionPoint.searchMedicalRecordPage),
    standBy: createPath("/standby", EActionPoint.standByPage),
    screen: createPath("/standby/screen"),
    doctorScreen: createPath("/doctorscreen", EActionPoint.doctorScreenPage),
    medicalRecord: createPath("/medicalRecord", EActionPoint.medicalRecordPage),
    formPage: createPath("/FormPage"),
    ServiceConsultationTeamPage: createPath("/ServiceConsultationTeamPage"),
    cashier: createPath("/Cashier", EActionPoint.cashierPage),
    VoucherSale: createPath("/VoucherSale", EActionPoint.cashierPage),
    cashierQueue: createPath("/CashierQueue", EActionPoint.cashierPage),
    privateInsuranceSubmit: createPath("/SubmitPrivateInsurance", EActionPoint.SubmitPrivateInsurancePage),
    manageCashier: createPath("/CashierManager", EActionPoint.manageCashierPage),
    bookingManager: createPath("/bookingManager", EActionPoint.bookingManagerPage),
    bookingOnline: createPath("/bookingOnline", EActionPoint.bookingOnlinePage),
    bedBookingManager: createPath("/bedBookingManager", EActionPoint.bedBookingManagerPage),
    RoomManagerPage: createPath("/RoomManager", EActionPoint.RoomManagerPagePage),
    ServiceExecutionPage: createPath("/ServiceExecutionPage", EActionPoint.ServiceExecutionPagePage),
    SurgeryExecutionPage: createPath("/SurgeryExecutionPage", EActionPoint.SurgeryExecutionPagePage),
    //dataTableManagement: createPath("/DataTableManagement", EActionPoint.dataTableManagementPage),
    incomingPatient: createPath("/TransferList", EActionPoint.IncomingPatient),
    departmentDashboard: createPath("/DepartmentDashboard", EActionPoint.departmentDashboardPage),


    waitingRoom: createPath("/standby/waitingRoom/:queueId"),
    waitingRoomLog: createPath("/standby/waitingRoom/:queueId/:log"),
    dispenseMedication: createPath("/standby/dispenseMedication/:wareHouseId"),
    paymentTV: createPath("/standby/paymentTV/:hospitalId"),
    checkInCounter: createPath("/standby/checkInCounter/:queueId"),
    searchInfo: createPath("/standby/searchInfo"),

    waitingRoomPage: createPath("/QMS", EActionPoint.waitingRoomPage),
    checkInCounterPage: createPath("/checkInCounterPage", EActionPoint.checkInCounterPage),


    autoTextDictionary: createPath("/AutoTextDictionary", EActionPoint.autoTextDictionaryPage),
    ExaminationContractPage: createPath("/ExaminationContractPage", EActionPoint.ExaminationContractPage),
    invoiceManagement: createPath("/InvoiceManagement", EActionPoint.invoiceManagementPage),
    ehealthDocument: createPath("/EhealthDocument"),
    bloodTransfusionPatientOut: createPath("/BloodTransfusionPatientOut", EActionPoint.bloodTransfusionPatientOutPage),
    accountStatement: createPath("/accountStatement", EActionPoint.accountStatementPage),
    hospitalAccountStatement: createPath("/hospitalAccountStatement", EActionPoint.hospitalAccountStatementPage),
    // locationCheckIn: createPath("/locationCheckIn", EActionPoint.locationCheckInPage),
    privateInsurance: createPath("/privateInsurance", EActionPoint.privateInsurancePage),
    lineList: createPath("/DSQuyTrinh", EActionPoint.lineListPage),
    allocateBalance: createPath("/allocateBalance", EActionPoint.allocateBalancePage),
    Unauthorized: createPath("/Unauthorized"),
    refPos: createPath("/refPos", EActionPoint.refPosPage),
    bank: createPath("/bank", EActionPoint.bankPage),
    examinationDashboard: createPath("/examinationDashboard", EActionPoint.examinationDashboardPage),
    timeManagementDashboard: createPath("/timeManagementDashboard", EActionPoint.TimeManagementDashboardPage),
    inPatientDashboardPage: createPath("/inPatientDashboard", EActionPoint.InPatientDashboardPage),
    SubmissionManager: createPath("/SubmissionManager", EActionPoint.SubmissionManagerPage),
    getCheckInCounter: (queueId) => "/standby/checkInCounter/" + queueId,
    getWaitingRoom: (queueId) => "/standby/waitingRoom/" + queueId,
    InPatientDepartmentPage: createPath("/InPatientDepartmentPage", EActionPoint.InPatientDepartmentPagePage),
    EmergecyDepartmentPage: createPath("/EmergecyDepartmentPage", EActionPoint.ReceivePatient),
    userManager: createPath("/userManager", EActionPoint.userManagerPage),
    masterData: createPath("/MasterData", EActionPoint.masterDataPage),
    changePassword: createPath("/ChangePassword", null),
    userAutoSign: createPath("/UserAutoSign", null),
    patientManagement: createPath("/PatientManagement", EActionPoint.QuanLiVangLai),

    CoordinationPatient: createPath("/CoordinationPatient", EActionPoint.CoordinationPatient),

    cameraDemo: createPath("/CameraDemo"),

    fisMasterData: createPath("/FISMasterData", EActionPoint.masterDataPage),
    fisChungTu: createPath("/FisChungtu", EActionPoint.masterDataPage),
    postFisData: createPath("/postFisData"),
    memLog: createPath("/memLog", null),
    AdminToolsPage: createPath("/DevTools", null),
    Enum: createPath("/Enum", null),



    CombinedMedicalTest: createPath("/CombinedMedicalTest", null),
    PatientLevelHistory: createPath("/PatientLevelManagement", EActionPoint.PatientLevelHistory),

    DCForwarders: createPath("/DCForwarders", null),
    DiagnosticImagingUtility: createPath("/DiagnosticImagingUtility", null),
    ExternalExecutionPage: createPath("/ExternalExecution", EActionPoint.ExternalExecutionPage),
    SearchPatientInQueuePage: createPath("/SearchPatientInQueuePage", EActionPoint.ServiceExecutionPagePage),
    CreateServiceExecutionPage: createPath("/CreateServiceExecutionPage", EActionPoint.ServiceExecutionPagePage),
    WaitingQueueTV: createPath("/TV/Queue/:queueId"),
    PatientLastChangeLocationRecordInfo: createPath("/PatientLastChangeLocationRecordInfo"),
    CloseRoom: createPath("/closeroom", EActionPoint.CloseRoomPage),
    PatientLastChangeLocationRecordInfo: createPath("/PatientLastChangeLocationRecordInfo", EActionPoint.PatientLastChangeLocationInfo),
    PatientAutoRedirectedPage: createPath("/PatientAutoRedirected"),
    InsuranceTool: createPath("/InsuranceTool", EActionPoint.InsuranceTool),
};

export const LoginPaths = {
    login: createPath("/login", null),
};

export const LockScreenPaths = {
    lockScreen: createPath("/LockScreen/Lock"),
};
