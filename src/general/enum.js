export const EActionPoint = {
    Test: 1,
    CanPacked: 2,
    Print: 3,
    EnterRealReceive: 4,
    Edit: 5,
    Delete: 6,
    CancelByVendor: 7,
    ConfirmByVendor: 8,
    Unbox: 9,
    CancelTransaction: 10,
    RealReceiveTransaction: 11,
    // CreateTransaction: 12,
    // ReturnPackage: 13,
    AddReportToWareHouseBalance: 14,
    ReCheck: 15,
    CreateOrder: 16,
    EditPlan: 17,
    DeletePlan: 18,
    AddToShoppingPlan: 19,
    AddToInventoryDetail: 20,
    // RemoveConsumablePrepareOrder: 21,
    CancelPackage: 22,
    AddToInventoryPlan: 23,
    AddToAssetShoppingCart: 24,
    ChangeWareHouse: 25,
    // SendToVendor: 26,
    CanAllocate: 27,
    CreateInventoryPlan: 28,
    RemoveConsumableFromCartList: 29,
    DeleteATC: 30,
    CreateRequestLiquidate: 31,
    AcceptLiquidationRequest: 32,
    RefuseLiquidationRequest: 33,
    // ConfirmInventoryPlan: 34,
    CreatePlanLiquidate: 35,
    ExecuteInventory: 36,
    CreatePlan: 37,
    ConfirmShoppingPlan: 39,
    DeleteInventoryPlan: 40,
    HandleLiquidation: 41, // xử lý thanh lý
    CanUpdatePackage: 42,
    ConfirmFailedShoppingPlan: 43,
    CompleteSterilization: 44,
    Sterilize: 45,
    // TransferTempWareHouse: 46,
    CollectLastingConsumable: 47,
    DeliveryMedicineAllocate: 48,
    CancelService: 49,
    CreateReExamination: 50,
    TransferToBatch: 51,
    DeleteTemplatePackage: 52, //Xóa gói soạn sẵn
    CreatePackage: 53, //Tạo gói theo gói soạn sẵn
    DeleteAutoText: 54,
    AddToBloodBagShoppingCart: 55,
    EditAutoText: 56,
    CancelLiquidation: 57,
    SubmissionConfirmed1: 58,
    SubmissionConfirmed2: 59,
    SubmissionConfirmed3: 60,
    SaleToExternalPatient: 61,
    DisableContract: 62,
    ExportTempInvoice: 63,
    PrintTempInvoice: 64,
    PrintFInvoice: 65,
    // LiquidationHistory: 66,
    ChooseTemplateButton: 67,
    PreviewTemplateButton: 68,
    // TransactionOfResolveTicket: 71,
    SubmissionInventory: 72,
    TransferToUser: 73,
    SubmissionConsumablePlan: 74,
    ConfirmSubmissionReceiveFromVendor: 75,
    UpdateInvoice: 76,
    SubmissionLiquidation: 78,
    VendorReceive: 79,
    SubmissionReturnToVendor: 80,
    SignReturnToVendor: 81,
    OrderService: 100,
    OrderMedical: 101,

    // NhanBenh: 116,
    // KhamBenh: 117,
    // KhamHopDong: 118,
    // DuyetDonThuoc: 119,
    // CheckinKhuKhamBenh: 120,
    // CheckinKhuCLS: 121,
    // ThuNgan: 122,
    // Voucher: 123,
    // DichVu: 124,
    // PhauThuat: 125,
    ConfirmByDirector: 126,
    ConfirmByAudit: 127,
    Diagnostic: 128, //cho chẩn đoán
    VitalSign: 129, //Ghi nhận sinh hiệu
    CreateExaminationReport: 130, //Tạo phiếu khám
    MedicalSpeciality: 131, //Cho chuyên khoa
    TreatAssignment: 132, //Cho chỉ định chăm sóc
    Allergy: 133, //  Ghi nhận dị ứng
    BloodIndication: 134, //Cho chỉ định truyền máu
    AirIndication: 135, //Cho chỉ định khí
    FollowPatientStatus: 136, //Theo dõi diễn biến
    ReExamination: 137, //Hẹn tái khám
    ChangeDepartment: 138, //Nhập viện/Chuyển khoa
    ChangeBed: 139, //Chuyển giường
    CloseMedicalRecord: 140, //Đóng bệnh án,
    ViewMedicalRecord: 144, //Xem hồ sơ bệnh án
    ViewDepartmentDashboard: 149, //Xem màn hình dashBoard
    InputBHYT: 150,

    CancelPrescription: 157, //Hủy đơn thuốc chưa thực hiện
    StopPrescription: 158, //Dừng đơn thuốc bệnh nhân nội trú
    ApprovePrescriptionAndIntervention: 159,

    PlanSurgery: 161, //Lên lịch phẫu thuật
    Presurgery: 162, //Khám nội,
    Preanesthetic: 163, //Khám tiền mê
    AdviseBOM: 164, //Tư vấn vật tư
    ChangeBOMInSurgeryPlan: 200000,
    CommitSurgery: 165,
    ProcessSurgery: 166, //Lên lịch phẫu thuật
    CreateTreatmentRecord: 167, // Thực hiện chăm sóc
    ReceivePatientToInDepartment: 170, //Tiếp nhận bệnh nhân vào khoa nội trú
    AskDoctorToService: 173, //Thông báo Bác sĩ bệnh nhân chốt bảng kê trước khi thực hiện dịch vụ
    RefuseServiceByPatient: 174, //Ghi nhận bệnh nhân từ chối thực hiện dịch vụ
    ClosingPayment: 177, //Chốt thanh toán
    CreateExemptionRequest: 179, //Đề xuất miễn giảm
    ReceiveOrExpendMoneyFromCashier: 184, //Thu chi tiền thu ngân
    CancelRevenue: 368,

    CreatePatient: 141,
    EditPatientInfo: 142,
    ViewPatientInfo: 143,
    PatientReceiption: 145,
    EmergencyPatient: 148,
    PredictionCard: 171, //Thu/trả tạm ứng
    ApplyVoucher: 172,
    CanAllocateInPatient: 231,

    ConfirmPrivateInsurance: 85,
    ReJectPrivateInsurance: 86,
    ClearPos: 88,
    GetXML: 89,
    SendInsurrence: 90,

    EditPlanDetail: 91, // Tạo hoặc sửa kế hoạch mua sắm chi tiết
    DeletePlanDetail: 92,
    GetExcel: 94,
    ReportLost: 95,
    ReturnMedicineCover: 96,
    InputCloseMedicalRecordReportInfo: 227,
    //Phân quyền trang
    VoucherCampaignManagementPage: 258,
    homePagePage: 259,
    medicalReportPage: 260,
    standbyScreenPage: 261,
    ReceivePatientPage: 262,
    emergencyDashboardPage: 263,
    boardingDashboardPage: 264,
    patientQueueDashBoardPage: 265,
    bloodBankPage: 266,
    approvePrescriptionPage: 267,
    nursingTabletPage: 268,
    searchMedicalRecordPage: 269,
    standByPage: 270,
    screenPage: 271,
    doctorScreenPage: 272,
    medicalRecordPage: 273,
    formPagePage: 274,
    cashierPage: 275,
    manageCashierPage: 276,
    bookingManagerPage: 277,
    bookingOnlinePage: 278,
    bedBookingManagerPage: 279,
    RoomManagerPagePage: 280,
    ServiceExecutionPagePage: 281,
    SurgeryExecutionPagePage: 282,
    dataTableManagementPage: 283,
    IncomingPatient: 284,
    mobilePage: 285,
    waitingRoomPage: 286,
    checkInCounterPage: 287,
    uploadFileMobilePage: 288,
    autoTextDictionaryPage: 289,
    ExaminationContractPagePage: 290,
    invoiceManagementPage: 291,
    ehealthDocumentPage: 292,
    bloodTransfusionPatientOutPage: 293,
    accountStatementPage: 294,
    locationCheckInPage: 295,
    privateInsurancePage: 296,
    lineListPage: 297,
    allocateBalancePage: 298,
    UnauthorizedPage: 299,
    refPosPage: 300,
    bankPage: 301,
    examinationDashboardPage: 302,
    SubmissionManagerPage: 303,
    SendInsurranceHistoryPage: 304,
    getCheckInCounterPage: 305,
    getWaitingRoomPage: 306,
    InPatientDepartmentPagePage: 307,
    userManagerPage: 308,
    masterDataPage: 309,
    //Hợp đồng thầu
    QuanLyHopDongThau: 310,

    //Phân quyền trang dược
    PhatThuocNgoaiTru: 311,
    PhatThuocNoiTru: 312,
    BanThuocVangLai: 313,
    TraVoNgoaiTru: 314,
    DongGoiBenhNhan: 315,
    QuanLyGoiSoanSan: 316,
    //Biệt dược + vật tư tiêu hao + vật tư bền (Kho) ===========>
    // + Mua sam
    KeHoachMuaSamDuoc: 317,
    TaoDonDatHangDuoc: 318,
    XacNhanDonDatHangDuoc: 319,
    NhanHangNCCDuoc: 320,
    ChoDuyetNhapKhoDuoc: 321,

    //+ Danh mục dược
    DanhMucDuoc: 322,
    QuanLyGoiBenhNhan: 323,

    //+ Kiểm kê dược

    KeHoachKiemKeDuoc: 324,
    XuLyKiemKeDuoc: 325,
    LichSuXuLyKiemKeDuoc: 326,
    //====================>

    // Hóa đơn
    QuanLyHoaDon: 327,

    //Vật tư bền
    ThuHoiVatTuBen: 328,
    XuLyVatTuBen: 329,

    //Tất cả của dược
    NhapKho: 330,
    XuatKho: 331,
    //Thiết bị
    DanhMucThietBi: 332,

    // + Thanh lý thiết bị
    DuyetThanhLyThietBi: 333,
    XuLyThanhLyThietBi: 334,
    LichSuThanhLyThietBi: 335,

    // + Mua sắm thiết bị
    KeHoachMuaSamThietBi: 336,
    TaoDonDatHangThietBi: 337,
    XacNhanDonDatHangThietBi: 338,
    NhanHangNCCThietBi: 339,
    ChoDuyetNhapKhoThietBi: 340,

    // + Kiểm kê thiết bị
    KeHoachKiemKeThietBi: 341,
    XuLyKiemKeThietBi: 342,
    LichSuXuLyKiemKeThietBi: 343,

    //Biệt dược + vật tư tiêu hao + vật tư bền (Khoa phòng) ===========>

    //+ Danh mục khoa phòng
    DanhMucDuocKhoa: 344,
    QuanLyGoiBenhNhanKhoa: 345,

    //+ Kiểm kê khoa phòng

    KeHoachKiemKeDuocKhoa: 346,
    XuLyKiemKeDuocKhoa: 347,
    LichSuXuLyKiemKeDuocKhoa: 348,
    //====================>
    // + Thanh lý  Kho dược
    DuyetThanhLyDuoc: 349,
    XuLyThanhLyDuoc: 350,
    LichSuThanhLyDuoc: 351,

    //Trả hàng NCC
    TraHangNCC: 352,

    // + Thanh lý  Kho phòng
    DuyetThanhLyDuocKhoa: 353,
    XuLyThanhLyDuocKhoa: 354,
    LichSuThanhLyDuocKhoa: 355,
    //================> Kiểm soát nhiễm khuẩn
    DanhMucDuocKiemSoatNhiemKhuan: 356,
    //Kiểm kê nhiễm khuẩn
    KeHoachKiemKeKiemSoatNhiemKhuan: 357,
    XuLyKiemKeKiemSoatNhiemKhuan: 358,
    LichSuXuLyKiemKeKiemSoatNhiemKhuan: 359,
    // + Thanh lý  Kiểm soát nhiễm khuẩn
    DuyetThanhLyNhiemKhuan: 360,
    XuLyThanhLyNhiemKhuan: 361,
    LichSuThanhLyNhiemKhuan: 362,

    ConfirmAdjustWareHouseQuotaRequest: 363,
    RequestAdjustWareHouseQuota: 364,
    CanAllocateOutPatient: 365,

    CoordinationPatient: 366,
    CoordinationPatientPage: 367,

    RevertTransactionButton: 369,
    SendInsurranceMonthlyReportPage: 370,
    WareHouseQuotaPage: 371,
    ConsumableBalancePage: 372,

    EditInventoryPlan: 373,
    SubmitPrivateInsurancePage: 376,
    SubmitPrivateInsurance: 374,

    departmentDashboardPage: 377,
    hospitalAccountStatementPage: 380,
    TransferToUsing: 384,
    DeleteSystemAutoText: 385,
    EditSystemAutoText: 386,
    TransferToOtherHospital: 387,
    BanDuocNoiBo: 401,
    ConfirmTransferToOtherHospital: 402,
    CancelTransferToOtherHospital: 403,
    NhapKhoTTB: 404,
    XuatKhoTTB: 405,
    NhapXuatTonTTB: 406,
    CanEditInvoiceIssue: 407,
    ConfirmContractPatient: 408,
    ExportManualInvoiceIssue: 409,

    ChangeDoctor: 410,
    DoctorRemoveExecution: 430,

    ManualSentXML: 411,
    CancelToRequestSentXML: 412,

    QuanLiVangLai: 418,
    TimeManagementDashboardPage: 420,
    HandleTmpReceive: 421,
    CancelInventoryReport: 423,
    CreatePreparationPlan: 424,
    InPatientDashboardPage: 425,
    CreateSubmissionPreparationPlan: 426,
    CancelPreparationPlan: 427,
    QuanLiKeHoachDuTruMuaSam: 428,
    EditPreparationPlan: 429,
    PatientLevelHistory: 431,
    ReceivePatient: 432,
    ReSendPOEmailVendor: 433,
    EditContract: 434,
    EditGoodReceipt: 435,
    CreateSupplyContract: 436,
    ApproveSkipAdvance: 437,
    ExportGroupInvoice: 438,
    ViewGPPResult: 439,
    SendGPP: 440,
    TrangQuanLyGR: 441,
    ExportAnonymousInvoiceIssue: 442,
    Examination: 443,
    DisablePrivateServiceContract: 444,
    LiquidateTmpReceive: 445,
    ExternalExecutionPage: 447,
    BaoCaoGiaoBan: 448,
    ExaminationContractPage: 449,
    DebManagement: 450,
    BulkPrescribeFromPattern: 451,
    BulkPrescriptionFromDoctorRx: 452,
    ServiceConsultationTeamPage: 453,
    ChotThanhToanCongNo: 454,
    ReceiveEmergency: 455,
    EditMedicalRecordCollaborator: 456,
    CloseRoomPage: 457,
    PatientLastChangeLocationInfo: 458,
    ChangeDoctor: 459,
    InsuranceTool: 460,
};
export const EGPPType = {
    Undefined: 0,
    NoneGPP: 1,
    GPP: 2,
}

export const ERevenueStatus = {
    Active: 1,
    Cancel: 2
}

export const EWaitingImportStatus = {
    Undefined: 0,
    None: 1,
    PendingSubmissionImport: 2,
    PendingSubmissionReturnToVendor: 3,
    Rejected: 4

}
export const EReturnToVendorType =
{
    Undefined: 0,
    Liquidation: 1,
    TmpReceive: 2,
}
export const EConsumablePreparationPlanStatus =
{
    Undefined: 0,
    New: 1,
    WaitingConfirmed: 2,
    Confirmed: 3,
    Rejected: 4,
    Done: 5,
    Deleted: 6
}
export const EPatientType = {
    Emergency: 1,
    CLSEmergency: 2,
    BookingOnline: 3,
    CLS: 4,
    Elder: 5,
    Normal: 6,
};
export const ESergeonRole = {
    Undefined: 0,
    Primary: 1,
    Secondary: 2,
    AnesthesiologyAndRecovery: 3,
};

// export const ESurgeryPlanStatus = {
//     Undefined: 0,
//     CanProcess: 1,
//     UnKnown: 2,
//     CannotProcess: 3,
//     UnPlanned: 4,
// };
export const ESurgeryPlanStatus = {
    New: 1,
    Executing: 4,
    Executed: 5,
    Unscheduled: 6,
};

export const EMedicalDepartmentType = {
    Undefined: 0,
    Inpatient: 1,
    Outpatient: 2,
    Emergency: 3,
};

export const EMedicalHistoryType = {
    Patient: 1,
    Family: 2,
};

export const EValidateActionResult = {
    // [Display(Description = "Không có quyền thực hiện")]
    Invalid: 1,
    // [Display(Description = "Cần nhập lại mật khẩu")]
    NeedReconfirm: 2,
    // [Display(Description = "Thành công")]
    NoNeedReconfirm: 3,
};

export const ETempInvoiceType = {
    NoneFInvoice: 1,
    FInvoice: 2,
};

export const EInvoiceIssueTaxType = {
    Personal: 1,
    Company: 2,
};

export const EInvoiceIssueExportType = {
    Single: 1,
    Group: 2,
    Manual: 3,
    Anonymous: 4,
    Different: 5,
    BHYT: 6,
}
export const EInvoiceIssueType = {
    Undefinde: 0,
    Revenue: 1,
    ReturnToVendor: 2
}
export const EUserAndCurrentLocationRaw = {
    Username: "Username",
    LocationName: "LocationName",
    StatusName: "StatusName",
    IsReceivingPatients: 'IsReceivingPatients',
}

export const EHotKey = {
    Ctrl_S: (e) => {
        return e.ctrlKey && (e.key == "s" || e.keyCode == 83);
    },
    Ctrl_I: (e) => {
        return e.ctrlKey && e.key == "i";
    },
    Ctrl_A: (e) => {
        return e.ctrlKey && (e.key == "a" || e.keyCode == 65);
    },
    ENTER: (e) => {
        return e.keyCode == 13 || e.key == "Enter";
    },
    ENTER_SENDMESSAGE: (e) => {
        return !e.shiftKey && (e.keyCode == 13 || e.key == "Enter");
    },
};
export const EModalType = {
    Full: 1,
    Popup: 2,
    Blank: 3,
    Right: 4,
    Mini: 5,
};

export const EEHealthUploadType = {
    OnlyClick: 1,
    OnlyDrop: 2,
    ClickAndDrop: 3,
};

const Enum = {
    EReceiptStatus: {
        Signed: 1,
    },
    ENoteParentType: {
        CLS: 1,
        Surgery: 2,
    },
    EMedicalUnit: {
        Vien: 1,
        Lo: 2,
        Chai: 3,
    },
    EOptionKey: {
        BloodType: 1,
        BloodRhType: 2,
        BloodBagVolume: 3,
        BloodBagStatus: 4,
        BloodOrderUrgentType: 5,
        DiagnosticType: 6,
        DiagnosticStatus: 7,
        ServiceForBloodIndication: 8,
        VitalSign: 9,
    },
    // Blood
    EBloodBagCheckStatus: {
        Success: 1,
        UnSuccess: 2,
        UnChecked: 3,
    },
    EBloodOrderStatus: {
        New: 1,
        Completed: 2,
        Canceled: 3,
    },
    BloodBagStatus: {
        Available: 1,
        Used: 2,
        Canceled: 3,
    },
    EEmergencyStatus: {
        Upcoming: {
            value: 1,
            color: "info",
            status: "sắp đến",
        },
        Treating: {
            value: 2,
            color: "blue",
            status: "đang điều trị",
        },
        Urgent: {
            value: 3,
            color: "lightOrange",
            status: "cần thăm khám gấp",
        },
    },
    EBoardingStatus: {
        Upcoming: {
            value: 1,
            color: "info",
            status: "sắp đến",
        },
        Treating: {
            value: 2,
            color: "blue",
            status: "đang điều trị",
        },
        Urgent: {
            value: 3,
            color: "lightOrange",
            status: "cần thăm khám gấp",
        },
    },
    EServiceStatus: {
        New: {
            value: 1,
            color: "primary",
            status: "Mới tạo",
        },
        Done: {
            value: 2,
            color: "success",
            status: "Đã xong",
        },
        Cancel: {
            value: 3,
            color: "danger",
            status: "Đã hủy",
        },
    },
    EEmergencyOptionKey: {
        Patient: 1,
        Doctor: 2,
        PriorityLevel: 3,
    },
    EBoardingOptionKey: {
        Patient: 1,
        Doctor: 2,
        PriorityLevel: 3,
        Bed: 4,
    },
    EMedicalRecordField: {
        CreatedDate: 1,
        PatientName: 2,
        DepartmentName: 3,
        Status: 4,
    },
    ESignalRNeed: {
        Test: 0,
        PatientsInQueueChanged: 1,
        OnChangeInventoryActualQuantity: 2,
        ReceiveChatMessage: 3,
        PhotoNotification: 4,
        UpdateChatConversation: 5,
        UpdateUserOnline: 6,
        RemoveFromChatGroup: 7,
        NotifyChatToDoctor: 8,
        UpdatePatientQueue: 9,
        OnModifySurgeryPlan: 10,
        DistributePatientCheckIn: 11, //khi có patient check in hàng đợi phát thuốc
        DistributedMedication: 12, //Phát thuốc
        Notification: 13,
        ReloadWhenBalanceChange: 14,
        UpdateStatusInventoryReport: 15,
        MedicalReportStatusChanged: 16,
        OnLoadPatientInterventionList: 17, //Load danh sách cần duyệt ở màn hình duyệt đơn
        ConfirmSignature: 18, // confirm phiếu với chữ kí
        OnloadSubmissionPage: 19, // reload submissionPage
        OnloadChatSubmissionSurgeryPlan: 20, // reload ChatSubmissionSurgeryPlan 
        OnAddNewConsumableInventory: 21,//Thêm vật tư trong khi kiểm kê
        RemoveChatGroup: 22, // xóa chatGroup đi 
        ExecutionStatusChanged: 23,
        OnMergeResultForm: 24, // cập nhật formResult khi máy trả kết quả,
        PushPrintPaymentSummary: 25,
        SystemUpdate: 26, // cap nhat he thong
        MonthlyReportBuildReady: 27,

        // New Chat
        NewChatSeriousGroup: 28,
        EditChatSeriousGroup: 29,
        NewChatContact: 30,

        PatientCallIn: 31,
        BroadcastPatientOptimalQueuePath: 32,
        OnInsuranceOptimizationSucceed: 33,
        OnAutoKickoutWhenExecutionCompleted: 34,
    },
    ETemplatePackageStatus: {
        New: {
            value: 1,
            color: "green",
            status: "Mới tạo",
        },
        Using: {
            value: 2,
            color: "yellow6",
            status: "Đang lưu hành",
        },
    },
};
//-----------------Doctor - START----------------//
export const EPatientTransactionTab = {
    PatientInfo: 1,
    AdvancePayment: 2,
    Catalog: 3,
};

export const ETransferMoneyType = {
    Manager: 1,
    Cashier: 2,
};

export const EPatientTransactionAdFilter = {
    Filter: "0",
    Name: "1",
    Service: "2",
};

export const EPatientTransactionAdType = {
    AdvancePayment: 1,
    Service: 2,
};

export const EPatientTransactionCatalog = {
    Filter: "0",
    Name: "1",
    Service: "2",
};

export const EPatientTransactionStatus = {
    Completed: "Đã thực hiện",
    UnCompleted: "Chưa thực hiện",
    Cancelled: "Đã hủy",
};

export const ECashierSearchFilter = {
    Filter: 1,
    Name: 2,
    PatientCode: 3,
    Id: 4,
};

export const ECashierHistorySearchType = {
    Filter: 1,
    Name: 2,
};

export const ECashierHistoryType = {
    TransferMoney: 1,
    ReceiveAdvancePayment: 2,
    PayAdvancePayment: 3,
};

export const EDiagnosicType = {
    Primary: 1, //chẩn đoán chính
    Secondary: 2, // Bệnh kèm theo
    Negative: 3, //Chẩn đoán phân biệt
};

export const ECloseMedicalRecordMethod = {
    Discharge: 1,
    TransferHospital: 2,
    Escape: 3,
    Petition: 4
};

export const EDiagnosticStatus = {
    Confirm: 1, // Xác nhận
    Rudiment: 2, // Sơ bộ
    Cancel: 3, //Đã hủy
};

export const EHistoryTimelineType = {
    CLS: {
        id: 5,
        color: "primary5",
        iconName: "fas fa-atom",
    },
    Diagnostic: {
        id: 1,
        color: "blue5",
        iconName: "fas fa-stethoscope",
    },
    Allergy: {
        id: 3,
        color: "primary5",
        iconName: "fas fa-allergies",
    },
    Medicine: {
        id: 4,
        color: "primary5",
        iconName: "fas fa-capsules",
    },
    VitalSign: {
        id: 2,
        color: "primary5",
        iconName: "fas fa-wave-square",
    },
    DepartmentChange: {
        id: 6,
        color: "primary5",
        iconName: "fas fa-exchange-alt",
    },
    ExecutionReport: {
        id: 8,
        color: "primary5",
    },
    ExamRequest: {
        id: 9,
        color: "primary5",
        iconName: "",
    },
    TreatAssignment: {
        id: 10,
        color: "primary5",
        iconName: "",
    },
    BloodOrder: {
        id: 11,
        color: "primary5",
        iconName: "",
    },
    AirOrder: {
        id: 12,
        color: "primary5",
        iconName: "",
    },
    Intervention: {
        id: 13,
        color: "primary5",
    },
    ExaminationReport: {
        id: 14,
        color: "primary5",
    },
    PatientTransfer: {
        id: 15,
        color: "primary5",
        iconName: "far fa-ambulance",
    },
    Speciality: {
        id: 16,
        color: "primary5",
        iconName: "far fa-exchange",
    },
    MedicalHistory: {
        id: 17,
        color: "primary5"
    },
    Newsfeed: {
        id: 18,
        color: "primary5",
        iconName: "far fa-hand-holding-medical"
    },
    PrescriptionDispatch: {
        id: 19,
        color: "primary5",
        iconName: "far fa-prescription-bottle-alt"
    },
    ServiceConsultation: {
        id: 20,
        color: "primary5",
        iconName: "far fa-file-check"
    },
};

export const EQueuePatientType = {
    New: {
        id: 1,
        name: "Khám mới",
    },
    Returned: {
        id: 2,
        name: "Tái khám",
    },
};

export const EQueueReady = {
    NeedPayment: 0,
    Ready: 1,
    Redirected: 2,
    NeedFinalizedPayment: 3,
    WaitingForServiceResult: 4,
};
export const EVitalSignType = {
    BloodPressure: 1,
    Heartbeat: 2,
    Temperature: 3,
    Sp02: 4,
    Breathing: 5,
    Height: 6,
    Weight: 7,
};

export const EMedicalRecordStatus = {
    New: 1,
    Close: 2,
    Cancel: 3,
};

export const EMedicalReportStatus = {
    Undefined: 0,
    New: 1,
    Confirmed: 2,
    Cancel: 3
};

export const EPatientNoteStatus = {
    New: 1,
    Cancel: 2
}

//-----------------Doctor - END----------------//
export default Enum;

export const EGender = {
    Male: { value: 1, label: "Nam" },
    Female: { value: 2, label: "Nữ" },
    Other: { value: 3, label: "Khác" },
};

export const ETypePatientInfoOption = {
    PatientIndenficationInfo: 1,
    PatientOrtherInfo: 2,
    PriorityInfo: 3,
};

export const ETypeRegion = {
    Undefined: 0,
    Nationality: 1,
    City: 2,
    District: 3,
    Ward: 4,
};

//-----------------ConsumableOrder----------------//
export const EOrderStatus = {
    New: 1,
    Processing: 2,
};
export const EConsumablePlanDetailStatus = {
    Undefined: 0,
    WaitingConfirm: 1,
    Confirmed: 2,
    ConfirmFailed: 3,
    WaitingOrder: 4,
    Completed: 5,
    Cancelled: 6,
    SendToVendor: 7,
};
export const EConsumablePlanDetailType = {
    Auto: 1,
    Hand: 2,
};
export const ECheckConsumablePlanStatus =
{
    Undefined: 0,
    NotEnoughMinQuantityConsumable: 1,
    CeilingQuantityConsumable: 2,
    OutOfOrderSupplyContract: 3,
    OverQuantityConsumable: 4
}

//-------------ConsumableInventory-------------//
export const EConsumableInventory = {
    RatioMatch: 1,
    StartTimeEndTime: 2,
};
export const EConsumableInventoryStatus = {
    New: 1,
    Confirmed: 2,
    Happening: 3,
    Completed: 4,
    Submission: 5,
    Cancelinventory: 6,
};
export const EConsumableInventoryDetailStatus = {
    New: 1,
    WaittingConfirm: 2,
    ConfirmAll: 3,
};
export const EConsumableInventoryType = {
    MissingConsumable: 1,
    RedundantConsumable: 2,
};
export const EConsumableInventoryResolveStatus = {
    None: 1,
    PendingResolve: 2,
};
export const EConsumableHashTag = {
    Undefined: 0,
    NearDate: 1,
    NonePrepay: 2,
    OutOfDate: 3,
    IsSocialInsurance: 4,
    NearOutOfDateInsurance: 5,
    OutOfDateInsurance: 6,
}
export const EConsumable = {
    EConsumableAction: {
        Unbox: 1,
        Destroy: 2,
        IncreaseBaseQuantity: 3, // tăng cơ số tủ trực
    },
    EConsumableField: {
        Name: 1,
        GroupName: 2,
        TotalQuantity: 3,
    },
    EConsumableType: {
        Medication: 1,
        SupplyConsumable: 2,
        Box: 3,
        Package: 4,
        Assets: 5,
        BloodBag: 6,
        WareHouseTransferPackage: 7,
        Chemistry: 8,
        Gas: 9
    },
    EConsumableSupplyContract: {
        VendorName: 1,
        TotalQuantity: 2,
        MinPercent: 3,
        MinOrderQuantity: 4,
        Price: 5,
        DeliveryDate: 6,
        StartDate: 7,
        EndDate: 8,
        OrderUnitName: 9,
        OrderedQuantity: 10,
    },
    EConsumableTransactionHistory: {
        BatchNumber: 1,
        TypeTransaction: 2,
        TypeWareHouseName: 3,
        ToWareHouseName: 4,
        LoDate: 5,
        ImportQuantity: 6,
        ExportQuantity: 7,
        ImplementerName: 8,
    },
    EConsumableBatch: {
        BatchNumber: 1,
        Date: 2,
        ManufactorName: 3,
        Quantity: 4,
        UnitPrice: 5,
        lLastUpdatedDate: 6,
    },
    EConsumablePriceAdjustHistory: {
        AdjustDate: 1,
        ImportPrice: 2,
        Quantity: 3,
        ImportBHYTPrice: 4,
    },
};
export const ESupplyContract = {
    ESupplyContractField: {
        Name: 1, //Consumable Name
        EstimateQuantity: 2,
        OrderedPercent: 3,
        MinQuantityWrapperDelivery: 4,
        Price: 5,
        DeliveryDate: 6,
        UnitWrapperName: 7,
        OrderedQuantity: 8,
        FromDate: 9,
        ToDate: 10,
        VendorName: 11,
        UnitPriceName: 12,
    },
};

export const ECartType = {
    ShoppingPlan: 1,
    Inventory: 2,
    AssestShopping: 3,
    BloodShopping: 4,
};
export const EConsumableOverviewType = {
    Expired: 1,
    NearExpired: 2,
    LessThanQuota: 3,
};

export const EPageType = {
    Test: 1,
    Test2: 2,
    Consumable: 3,
    ConsumableSupplyContract: 4,
    ConsumableTransactionsHistory: 5,
    ConsumableBatch: 6,
    SuggestPlanShopping: 7,
    ShoppingPlan: 8,
    ShoppingOrder: 9,
    PriceAdjustmentHistory: 10,
    SupplyContract: 11,
    PatientInQueue: 12,
    SupplyContractDetail: 13,
    TempReceiveWareHouse: 23,
    CollectLastingConsumable: 24,
};
export const ETableColumnId = {
    Test: {
        ConsumableId: 1,
        Status: 2,
        Quantity: 3,
        ConsumableOrderId: 4,
    },
    SupplyContract: {
        Name: 1, //Consumable Name
        FromDate: 2, //Ngày bắt đầu hợp đồng
        ToDate: 3, //Ngày hết hạn hợp đồng
        VendorName: 4, // Nhà cung cấp
        //SerialNumber:5,// Mã hợp đồng
        OrderedPercent: 6, // Phần trăm đã đặt
    },
    Consumable: {
        Name: 1,
        UsageQuantity: 2,
        UnitName: 3,
        Quantity: 4,
        VendorName: 5,
        Cost: 6,
        BatchNumber: 7,
        Date: 8,
        WareHouseName: 9,
        Min: 10,
        Max: 11,
        OriginalDate: 12
    },
};

export const ETypePatient = {
    Normal: 1,
    CLS: 2,
    Prority: 3,
    Emergency: 4,
};


export const EQueueItemStatus = {
    InQueue: {
        value: 1,
        name: "Đang đợi",
    },
    IsCalling: {
        value: 2,
        name: "Đang gọi",
    },
    InRoom: {
        value: 3,
        name: "Đang khám",
    },
    IsNext: {
        value: 5,
    },
    Returning: {
        value: 6,
    },
    Search: {
        value: 7,
    },
    Executing: {
        value: 8,
    },
    Finished: {
        value: 9,
    },
    Removed: {
        value: 10,
    },
    Submitting: {
        value: 11,
    },
};

export const EQueueItemStatusColor = {
    [EQueueItemStatus.InQueue.value]: "primary",
    [EQueueItemStatus.IsCalling.value]: "primary",
    [EQueueItemStatus.InRoom.value]: "primary",
    [EQueueItemStatus.IsNext.value]: "primary",
    [EQueueItemStatus.Returning.value]: "primary",
    [EQueueItemStatus.Search.value]: "primary",
    [EQueueItemStatus.Executing.value]: "primary",
    [EQueueItemStatus.Finished.value]: "green5",
    [EQueueItemStatus.Removed.value]: "orange5",
    [EQueueItemStatus.Submitting.value]: "blue5",
}

export const EPatientQueueItem = {
    Status: "Status",
    StatusName: "StatusName",
    RegTime: "RegTime",
    Room: "Room",
    Code: "Code",
    Name: "Name",
    Birthday: "Birthday",
};

export const EInterventionItemType = {
    Problems: 1,
    Recommendation: 2,
};

export const EMedicalPrescriptionStatus = {
    Undefined: 0,
    New: 1,
    Approved: 2,
    CancelByIntervented: 4,
    Intervented: 5,
    CanceledByDepartmentChange: 6,
    Combinated: 7,
    Cancel: 8,
    Stop: 9
};

//Các mode của form kê đơn
export const EOrderMedicalMode = {
    Normal: 1,
    Edit: 2,
    Intervention: 3,
    Pattern: 4,
    OnlyView: 5,
};

export const EOrderServiceMode = {
    Undefined: 0,
    Normal: 1,
    Pattern: 2,
    Examination: 3,
};

export const EChangeDepartmentRecordStatus = {
    New: 1,
    Confirm: 2,
    Cancel: 3,
};

export const EPrescriptionDetailInInterventionType = {
    Undefined: 0,
    New: 1,
    Update: 2,
    UpdateMerge: 3,
    Delete: 4,
    DeleteMerge: 5,
    NoChange: 6,
    NoChangeMerge: 7,
};

export const EPatientSearchQueueItem = {
    All: 1,
    Code: 2,
    Name: 3,
    CMND: 4,
};

export const EMedicalRecordSearchItem = {
    All: 1,
    PatientCode: 2,
    MedicalRecordCode: 3,
};

export const EMedicalServiceType = {
    Undefined: 0,
    CLS: 1,
    DiagnosticImage: 2,
    FunctionalExploration: 3,
    ThuocTrongDanhMucBHYT: 5,
    ThuocNgoaiDanhMucBHYT: 6,
    ThuocThanhToanTheoTiLe: 7,
    Surgery: 21,
    DVKTThanhToanTheoTiLe: 9,
    VTYTTrongDMBHYT: 10,
    VTYTThanhToanTheoTyLe: 11,
    Transport: 12,
    Examination: 13,
    NgayGiuongBenhBanNgay: 14,
    NgayGiuongBenhNoiTru: 15,
    ExternalConsulting: 16,
    BloodTransfusion: 17,
    AirTransfusion: 18,
    TreatmentAssignment: 19,
    ServiceGroup: 20,
    Procedure: 8,
    DependenceService: 22,
};

//------------------InteractionErrorType-------------------//
export const EErrorType = {
    duplicateTherapy: { value: 11, color: "i3DrugDarkOrange", text: "Trùng dược tính" },
    drugInteraction: { value: 0, color: "i3DrugRed", text: "Tương tác thuốc - thuốc" },
    unsuitable: { value: 18, color: "blue5", text: "Không phù hợp" },
    allergy: { value: 8, color: "i3DrugGrey", text: "Dị ứng" },
    pregnancies: { value: 10, color: "i3DrugPink", text: "Mang thai" },
    overdose: { value: 14, color: "primary5", text: "Quá liểu" },
    drug2DiseaseInteraction: { value: 7, color: "i3DrugGreen", text: "Tương tác thuốc - bệnh" },
    ivNoSuitableSolvent: { value: 16, color: "yellow5", text: "Dung môi không phù hợp" },
};
export const EStatusInventory = {
    New: { value: 1, label: "Mới" },
    Happening: { value: 2, label: "Đang kiểm kê" },
    Completed: { value: 3, label: "Hoàn thành" },
};
export const EStatusShoppingOrder = {
    New: { value: 1, text: "Mới" },
    WaitProviderConfirm: { value: 2, text: "Chờ NCC xác nhận" },
    Delivering: { value: 3, text: "Đang giao" },
    Canceled: { value: 4, text: "Đã hủy" },
    Completed: { value: 5, text: "Hoàn thành" },
};

export const EConsumableOrderDetailStatus = {
    New: 1,
    WaitingVendorConfirm: 2,
    Delivering: 3,
    CanceledByHospital: 4,
    CanceledByVendor: 5,
    Completed: 6,
};
export const EReferenceSource = {
    test: 1,
    medicinesComplete: 12,
    bachmai: 17,
};

export const ETimeInDay = {
    morning: 1,
    noon: 2,
    afferNoon: 3,
    night: 4,
};

//-----------Transaction-------------------//
export const EStatusMatchPrescription = {
    NotYetPrepare: 1,
    Prepared: 2,
    NeedToCancel: 3,
};
export const ETransactionStatus = {
    Cancel: { value: 1, label: "Hủy" },
    New: { value: 2, label: "Mới" },
    Completed: { value: 3, label: "Hoàn thành" },
};
//---------Color Table------------//
export const EColorTable = {
    1: "orange1",
    2: "blue1",
    3: "yellow1",
    4: "green1",
};
//----------TodoType--------------//
export const ETodoType = {
    undefined: 1,
    test: 2,
};

//----------MeasurementValidatorType------//
export const EMeasurementValidatorType = {
    minMax: 1,
    list: 2,
    value: 3,
};

//----------- EMeasurementRole ------------//
export const EMeasurementRole = {
    Measurement: 1,
    FormDefinition: 2,
};

//------------FORM------------//
export const EMeasurementLayout = {
    ByCol: 1,
    Continuation: 2,
};

export const ETypeMeasurement = {
    MeasurementText: 1,
    MeasurementCheckbox: 2,
    MeasurementCanvasDrawer: 3,
    MainFormMeasurement: 4,
    ChildFormMeasurement: 5,
};

//-----------EAllergyType-------// loại dị ứng thuốc hoặc thức ăn
export const EAllergyType = {
    medicine: 1,
    other: 2,
    personal: 3,
    family: 4,
};

//----------EMaterialType-----//
export const EMaterialType = {
    Medicine: 1,
    Material: 2,
};

//---------Enum đơn vị consumable--------//
export const EMaterialUnit = {
    Undefined: 0,
    Lo: 1,
    Vien: 2,
    Tam: 3,
    Chai: 4,
    Mgl: 5,
    mmHg: 6,
    Goi: 7,
};

//----------EBookingStatus-----//
export const EBookingStatus = {
    Undefined: 0,
    New: 1,
    Confirmed: 2,
    Received: 3,
    Cancel: 4,
};

//-----------EBookingType-------//
export const EBookingType = {
    Undefined: 0,
    New: 1,
    ReExamination: 2,
};

export const ERoomType = {
    VIP: 1,
    Normal: 2,
};

export const EBedStatus = {
    Undefined: 0,
    All: 1,
    Available: 2,
    Reserved: 3,
};

export const EVoucherCampaignValidStatus = {
    valid: 1,
    invalid: 2,
    used: 3,
};

//-----------CANLENDAR---------// loại dịch vụ của chỉ định được xếp lịch
export const EServiceTypeLabel = {
    0: "Không xác định",
    1: "Cận lâm sàng",
    2: "Thủ thuật, phẫu thuật",
    3: "Tất cả dịch vụ",
};

export const EServiceStatus = {
    Undefined: 0,
    New: 1,
    Done: 2,
    Cancel: 3,
    CancelledByPatient: 5
};

export const ESurgeryScheduleStatus = {
    Modified: 1,
    Confirmed: 2,
};

//Tình trạng của bệnh nhân khi đóng bệnh án
export const EStatusPatient = {
    Undefined: 0,
    Cured: 1,
    Decrease: 2,
    NoChange: 3,
    Increase: 4,
    Dead: 5,
    DeadInHospital: 6
};

//------------ Trạng thái của phiếu can thiệp dược ------------//
export const EInterventionStatus = {
    New: { value: 1, color: "yellow5", text: "Chờ Bác sĩ phản hồi" },
    Agree: { value: 2, color: "green5", text: "Bác sĩ đồng ý" },
    Refuse: { value: 3, color: "red5", text: "Bác sĩ từ chối" },
};
//------------ Trạng thái của đơn can thiệp dược ------------//
export const EInterventionSearchMode = {
    NeedToApproved: 1, //"Cần duyệt"
    WaitingConfirmed: 2, //Chờ XN
    Responsed: 3, //Đã phản hồi
    Approved: 4, //Đã duyệt
};
//------------------START - PackageBatch-------------------//
export const EPackageBatchDateType = {
    FromCreatePrescriptionDate: 1,
    ToCreatePrescriptionDate: 2,
    FromUsageDate: 3,
    ToUsageDate: 4,
};
export const EMedicinePackage = {
    PreparePackage: 1,
    AllocatePackage: 2,
    ManagePackaged: 3,
};
export const EPackageEmergencyType = {
    Normal: 1,
    Urgent: 2,
    Extreme: 3,
};
export const EShoppingPlanItemCartType = {
    SystemSuggest: 1,
    AddByUser: 2,
};
//------------------END - PackageBatch-------------------//

//-----------Mode tạo biên bảo kiểm kê từ kế hoạch KK----------//
export const EModeCreateInventoryReport = {
    CreateNewInventory: 1,
    AddInventoryExisted: 2,
};
export const ECreateInventoryType = {
    Undefined: 0,
    PlanInventory: 1,
    SelfInventory: 2,
};
export const EPackageType = {
    PatientPackage: {
        value: 1,
        label: "Bệnh nhân",
    },
    WareHousePackage: {
        value: 2,
        label: "Bù tủ trực",
    },
    PurchaseAdditionalPackage: {
        value: 3,
        label: "Gói mua thêm",
    },
    Deliveried: {
        value: 4,
        label: "Gói đã phát",
    },
    Preparing: {
        value: 5,
        label: "Gói chưa đóng",
    },
    1: "Bệnh nhân",
    2: "Bù tủ trực",
    3: "Gói mua thêm",
};

export const EConsumableInventoryDetailConfirmMode = {
    CanNotConfirm: 1,
    CanConfirm: 2,
    Confirmed: 3,
};
export const ELiquidationStatus = {
    WaitingForLiquidation: 1,
    PlanedLiquidation: 2,
};

export const ETransferToHospitalStatus = {
    Undefine: 0,
    PendingSign: 1,
    Signed: 2,
    Reject: 3,
    Transfered: 4,
    Cancel: 5
}
// ----------------------- ServiceExecution ------------------//


export const ERenderMeasurement = {
    TextField: 1,
    Checkbox: 2,
    ImageList: 3,
    DisplayCanvasDrawer: 4,
};

export const EExecutionStepType = {
    Undefined: 0,
    FormDefinition: 1,
    ReactComponent: 2,
    ParentStep: 3,
};

export const ETypeFilter = {
    DropdownSingle: 1,
    DropdownMultiple: 2,
    AsyncDropdown: 3,
    DatePicker: 4,
    DateRangePicker: 5,
    AsyncDropdownSingle: 6,
    Custom: 7,
    ScanBarcode: 8,
    Switch: 9,
    Textbox: 10,
    NumberTextbox: 11,
    PatientSearch: 12,
    DateTimePicker: 13,
    ConsumableSearch: 14,
    TimePicker: 15,
    PatientInformationSearch: 16
};
// ------------------------- MASTER DATATABLE ---------------------------------
export const EColumnTableModel = {
    Undefined: 0,
    String: 1,
    Navigation: 2,
    Bool: 3,
    DateTime: 4,
    Number: 5,
};

export const ETypeMedicinePatient = {
    Package: 1,
    AllQuota: 2,
    PackageAndQuota: 3,
    NoMedicine: 4
};

export const ETypeMedicinePrescription = {
    FromQuota: 1,
    FromPrescription: 2,
    BuyMore: 3,
};
export const EFileAttachmentType = {
    Undefined: 0,
    Default: 1,
    Canvas: 2,
    DoctorUpload: 3,
    CKEditor: 4,
    AnatomyAtlas: 5,
    SurgeryContract: 6,
    PersonalGallery: 7,
    BizziFile: 8,
    InsuranceOptimizationResult: 9,
    ManualInsuranceOptimizationResult: 10,
};
// ----------------------------- LASTING CONSUMABLE ------------------------
export const ELastingConsumableStatus = {
    // Availability: 1,
    // Sterilizing: 2,
    // UnAvailability: 3,
    // NeedSterilize:4
    NeedHandled: 1,
    Handling: 2,
    Handled: 3,
};

// -------------------------------- CHART MEASUREMNET -----------------------------------

export const ELineChart = {
    NormalRangeMax: 1,
    NormalRangeMin: 2,
    Normal: 3,
};

export const EStatusMedicinePatient = {
    Deliveried: 1,
    NotYetDelivery: 2,
    All: 3,
};

export const EChartUnit = {
    Undefined: 0,
    YLeft: 1,
    YRight: 2,
};

export const EMedicalRecordType = {
    Undefined: 0,
    Inpatient: 1,
    Outpatient: 2,
    Emergency: 3,
};

/// ============================== RECEIVE PATIENT ======================================
export const EConfirmReceivePatient = {
    Create: 1,
    Edit: 2,
};
// ------------------------------ WAITING ROOM && CHECK IN------------------------------------------
export const EPatienWaitingRoom = {
    Ready: 1,
    Waiting: 2,
};

export const EModeManagement = {
    Medicine: 1,
    Assets: 2,
    BloodBag: 3,
};

export const EAction = {
    Undefined: 0,
    Create: 1,
    Edit: 2,
    Cancel: 3,
};
export const ECheckInResultStatus = {
    Undefinde: 0,
    Success: 1,
    WrongArea: 2,
    NotExist: 3,
    NotEnoughBalance: 4,
    Unsuccess: 5,
};
export const EQueueType = {
    Examination: 1,
    MedicinePackageDistribution: 2,
    SurgeryWaitingRoom: 3
};
// ============================= AUTOTEXT =============================
export const EAutoTextType = {
    System: 1,
    Personal: 2,
};
// ============================= PatientDistribution =============================
export const EPatientDistributionStatus = {
    NotEnoughMedicationPackage: 1,
    EnoughMedicationPackage: 2,
};

// ============================= SearchPatientInfoResult =====================
export const ESearchPatientInfoResult = {
    NotHavePatientInfo: 0,
    HavePatientInfo_NotHaveMedicalRecord: 1,
    HavePatientInfo_HaveActiveMedicalRecord: 2,
    HavePatientInfo_HaveInactiveInsurranceMedicalRecord: 3,
    HavePatientInfo_HaveInactiveServiceMedicalRecord: 4,
    HavePatientInfo_HaveMedicalRecordNotInHospital: 5,
    HavePatientInfo_HaveActiveContractMedicalRecord: 6
};

// ============================ Cashier ============================
export const EPaymentForType = {
    Undefined: 0,
    ReceiveAdvancePayment: 2,
    PayAdvancePayment: 3,
};

export const EPaymentInCashierMode = {
    Undefined: 0,
    Cash: 1,
    POS: 2,
    OnlineBanking: 3,
};
export const ESpecialCurrency = {
    Cash: 1,
    eWallet: 2,
    HospitalCurrency: 4,
};
// =========================== CHAT STATUS ========================
export const EChatGroupStatus = {
    Open: 1,
    Close: 2,
};
export const EChatGroupType = {
    Normal: 1,
    InterventionMedicine: 2,
    Submission: 3,
    Notification: 4,
    NotifyDoctorWhenChangeMedicine: 5,
    NotifyDoctorCancelService: 6,
    NotifyServiceConsultation: 7
};
export const EChatStatus = {
    Mini: 2,
    Normal: 3,
    Maiximum: 4,
};
export const EChatMessageContentType = {
    Undefined: 0,
    Text: 1,
    Html: 2,
    File: 3,
    AskDoctorToService: 4,
    NotifyDoctorToIntervention: 5,
    Submission: 6,
    NotifyDoctorWhenChangeMedicine: 7,
    ServiceConsultation: 8
};
export const EOwnerType = {
    Patient: 1,
    ExternalPatient: 2,
    Staff: 3,
    Company: 4,
    Hospital: 5,
};
// =========================== Submissiion ========================
export const ESubmissionAction = {
    Undefined: 0,
    CannotCreate: 1,
    Create: 2,
    Sign: 3,
    CannotSign: 4,
    NoNeedSign: 5,
    Completed: 6,
    Signed: 7,
    Reject: 8,
    Rejected: 9,
    ReSign: 10,
    Cancelled: 11,
    CancelledReport: 12
};
export const ESubmissionSignType = {
    Undefined: 0,
    Sign: 1,
    Reject: 2,
};
export const ESubmissionStatus = {
    Incomplete: 1,
    Completed: 2,
    Rejected: 3,
    AutoCancelWhenCloseRecord: 4
};

export const ESubmissionType = {
    Undefined: 0,
    ServiceAssignmentReport: 1,
    Exemption: 2,
    Inventory: 3,
    ConsumablePlan: 4,
    ReceiveFromVendor: 5,
    Liquidation: 6,
    ResolveInventoryResult: 7,
    PrescriptionReport: 9,
    UpdateMasterData: 10,
    ReturnToVendor: 11,
    SurgeryPlan: 12,
    AdjustWarehouseQuota: 13,
    CancelRevenue: 14,
    PatientInfoChange: 15,
    TransferToOtherHospital: 16,
    CancelTransactionSubmission: 17,
    CancelReport: 18,
    HandleTmpReceiveSubmission: 19,
    CloseMedicalRecordReport: 20,
    ConsumablePreparationPlan: 21,
    ServiceExecution: 22,
    PatientAdmission: 23,
    ExternalDeduct: 24,
    MedicalRecordPaymentDebt: 25,
    RevertFinancialTransaction: 26,
};

//------------------Google API-------------------------
export const EGoogleType = {
    Country: 1,
    City: 2,
    District: 3,
    Village: 4,
};

export const EGoogleSearchType = {
    District: "(regions)",
    Village: "(cities)",
};

// ----------------- EAddAnatomyMode ----------------------
export const EAddAnatomyMode = {
    Empty: 1,
    FullMeasurement: 2,
    AllDescendant: 3,
    Reload: 4
};

// ---------------- EModeCanvas ---------------------------
export const EModeCanvas = {
    DrawingImage: 1,
    BackgroundImage: 2,
    CanvasImage: 3,
};

// -----------------
export const EBookingService = {
    Undefined: 0,
    Service: 1,
    GroupService: 2,
    Contract: 3,
};
// ================================= Examination Contract ==================================
export const EExaminationContractStatus = {
    Undefined: 0,
    Active: 1,
    Disabled: 2,
};
export const EExaminationStatus = {
    Undefined: 0,
    NotReceivedYet: 1,
    NotStarted: 2,
    Started: 3,
    AllServiceRequestHaveResult: 4,
    Done: 5
}

//------------TransactionType-----------------
export const ETransactionType = {
    Receive: 1,
    Export: 2,
};

export const EFormTemplateType = {
    Undefined: 0,
    Examination: 1,
    BlankForm: 2,
    PrefillTemplate: 3,
};
// =============================== Voucher ======================
export const EVoucherType = {
    EVoucher: 1,
    PVoucher: 2,
};
export const EVoucherConditionClass = {
    ScopeApplication: 1,
    MinRevenue: 2,
    ExecuteService: 3,
    NumberPatient: 4,
    SpecificTime: 5,
};
export const EVoucherTimeCondition = {
    FollowBirthDay: 1,
    ConfigTime: 2,
};
export const EStatusVoucher = {
    Undefined: 0,
    Processing: 1,
    Finished: 2,
    Upcoming: 3,
    Canceled: 4
};
export const EVoucherCodeStatus = {
    New: 1,
    Used: 2,
};
export const EVoucherExpirationType = {
    ApplyWithCompaignEffectiveDate: 1,
    StartWithIssueDate: 2,
    NoneExpire: 3,
};
export const EVoucherValueOptions = {
    DiscountWithPercent: 1,
    DiscountWithPrice: 2,
    PatientFixedPayment: 4,
    OfferService: 3,
};

/// --------------------- PatientInfo Type  ------------------------
export const EPatientInfoType = {
    Undefined: 0,
    Service: 1,
    Insurance: 2,
    Contract: 3,
    Inpatient: 4,
    Outpatient: 5,
    Emergency: 6,
    BLVP: 7
};

export const EDiscountType = {
    Cash: 1,
    Percent: 2,
};
/// =========================== Submission =========================
export const ETransactionToVendorStatus = {
    New: { label: "Chờ duyệt", value: 1 },
    Confirmed: { label: "Đã duyệt", value: 2 },
    Rejected: { label: "Từ chối duyệt", value: 3 },
};
/// =========================== ManageInvoice =========================

export const EBatchTransactionFileType = {
    Undefine: 0,
    MainDocument: 1,
    SubDocument: 2,
    Invoice: 3,
};
export const ERenderType = {
    Edit: 1,
    Modify: 2,
};
export const EShowInvoiceMode = {
    FlatInfo: 1,
    HideInfo: 2,
};

export const EInvoiceGroupType = {
    TempInvoice: { label: 'Tạm tính', value: 1 },
    DifferentInvoice: { label: 'Chênh lệch', value: 2 },
    ViettelInvoice: { label: 'Đã xuất', value: 3 }
}
// ======================= Allocate Balance =====================
export const EAllocateBalanceStatus = {
    NoPatient: 1,
    HasPatient: 2,
    Unconfirmed: 3,
    Canceled: 4,
};
// ======================= SendInsurrance =====================

export const EPrivateInsuranceStatus = {
    New: 1,
    Verified: 2,
    VerifiedPayment: 3,
}

export const EPrivateInsurancePaymentStatus = {
    Undefined: 0,
    NotVerified: 1,
    Verified: 2,
}

export const ESendInsurranceStatus = {
    New: 1,
    ElectronicSent: 2,
    ManualSent: 3,
    Canceled: 4
};
export const EExportReceiptionTypeOption = {
    HasInsurance: 1,
    NotInsurance: 2,
    All: 3
}
export const EFileExtension = {
    XML: 1,
    EXCEL: 2,
};

// ===================== SUMMARY CHANGE MASTERDATA ==============
export const ESummaryChangeType = {
    New: {
        label: "Thêm mới",
        value: "NewData",
        iconClassName: "fas fa-stars",
        color: "green5",
    },
    Edit: {
        label: "Chỉnh sửa",
        value: "EditData",
        iconClassName: "fas fa-pencil-alt",
        color: "primary5",
    },
    Delete: {
        label: "Xóa",
        value: "DeleteData",
        iconClassName: "fas fa-trash-alt",
        color: "grey5",
    },
    Illegal: {
        label: "Không hợp lệ",
        value: "IllegalData",
        iconClassName: "fas fa-exclamation-triangle",
        color: "red5",
    },
    Another: {
        label: "Danh mục khác",
        value: "AnotherData",
    },
};

// ------------------ Booking -------------------
export const EEntryType = {
    Online: 1,
    ReExamination: 2,
    Walkin: 3,
    Emergency: 4,
    Contract: 5,
};

export const EQueueListType = {
    ActiveRecord: 1,
    HadResultService: 2,
};
// ================== Return medicine cover =============
export const EReturnMedicineCoverStatus = {
    NearlyExpired: 1,
    Expired: 2,
};
// ================== Consumable =============
export const EDispenseMedicationWay = {
    InPatient: "Sử dụng thuốc",
    OutPatient: "Phát thuốc",
};

// ================== EServiceClass =============
export const EServiceClass = {
    Pathology: 1,
    Surgery: 2,
    ImageDiagnosis: 3,
    Dependence: 4,
};
export const EDateFormat = {
    StandardDate: {
        format: "DD/MM/YYYY",
        pattern: /^\d{2}\/\d{2}\/\d{4}$/,
    },
    StandardDateTime: {
        format: "DD/MM/YYYY HH:mm",
        pattern: /^\d{2}\/\d{2}\/\d{4} \d{2}\:\d{2}$/,
    },
};

export const ERecordPaymentStatus = {
    CanProcess: 1,
    UnpackedMedicaltion: 2,
    IsProcessed: 3,
    UnexecutedService: 4,
    UnapprovedInsurance: 5,
    InsuranceApproved: 6,
    UnapprovedPrescription: 7,
    UndoneExaminationExisting: 8
};

export const EPatientTransactionType = {
    Out: 1,
    In: 2,
};
//=========== SUPPLYCONTRACT ===========
export const ESupplyContractSatus = {
    NotStart: 1,
    IsActive: 2,
    InActive: 3,
    OutOfOrderQuantity: 4,
    NearlyExpired: 5,
    Expired: 4,
};

export const EPosStatus = {
    Waiting: 1,
    Confirm: 2,
};
export const EMonthInsuranceReportType = {
    E7980: 7980,
    E19: 19,
    E20: 20,
    E21: 21,
    E79HD: 79,
};

export const EChangeDepartmentRequestSatus = {
    New: 1,
    Confirm: 2,
};

export const EFinancialOperatorType = {
    AddMoneyToWallet: 1,
    WithdrawMoneyFromWallet: 2,
    ProcessInvoice: 3,
    InternalStaffTransfer: 4,
    RetailPaid: 5,
    ClearPosBalanceFromBank: 6,
    ReceiveDepositFromBank: 7,
    AllocateFund: 8,
    TransferCashToBank: 9,
    CancelInvoice: 10,
};

export const EEnterReason = {
    //Đúng tuyến
    ApplicableRoute: 1,
    //Cấp cứu
    Emergency: 2,
    //Trái tuyến
    UnapplicableRoute: 3,
    //Thông tuyến
    InterconnectionRoute: 4,
};

export const EInsuranceType = {
    Social: 1,
    Private: 2,
};

export const ETypeExtension = {
    Undefined: 0,
    Image: 1,
    Video: 2,
    Pdf: 3,
    Excel: 4,
    Word: 5,
};

export const EPersonType = {
    Patient: 1,
    Doctor: 2,
};

export const EConfrontTime = {
    Time: 1,
    Date: 2,
};

export const EContextType = {
    Master: 1,
    Transactional: 2
}

export const EPaymentSummaryType =
{
    Insurance: 1,
    Hospital: 2
}
export const EPrescriptionCreationMode = {
    Inpatient: 1,
    BringHome: 2,
    ClearWarehouse: 3,
    Outpatient: 4,
}
export const EPrescriptionCreationModeTitle = {
    [EPrescriptionCreationMode.Inpatient]: "Đơn nội trú",
    [EPrescriptionCreationMode.BringHome]: "Đơn ra viện",
    [EPrescriptionCreationMode.ClearWarehouse]: "Đơn xử lý thuốc đa liều",
    [EPrescriptionCreationMode.Outpatient]: "Đơn ngoại trú",
}

export const EPatientNoteType = {
    Other: 1,
    Clinical: 2
}

export const EGetExportInvoiceType = {
    Single: 1,
    Group: 2
}

export const ESignalRType = {
    Local: 1,
    DC: 2
}

export const EMedicalReportType = {
    Undefined: 0,
    VitalSign: 2,
    ServiceAssignment: 3,
    Prescription: 4,
    Allergy: 5,
    ServiceExecution: 6,
    ExaminationReport: 7,
    TreatmentAssignment: 8,
    InterventionReport: 9,
    BloodTransfusionRequest: 10,
    AirTransfusionRequest: 11,
    Consultation: 12,
    Submission: 13,
    CloseMedicalRecord: 14,
    ChangeDeparment: 15,
    MedicalHistory: 16,
}

export const ETransactionReceivedType = {
    Undefined: 0,
    WareHouse: 1,
    Employee: 2,
    Prescription: 3,
    Vendor: 5,
    Patient: 6,
    ExternalPatient: 7,
    Batch: 8,
    DispatchReport: 9,
}

export const EMedicalPrescriptionUsageType = {
    Undefined: 0,
    Outpatient: 1,
    Inpatient: 2,
    BringHome: 3,
    ClearWarehouse: 4
}

export const UsageTypeName = {
    [EMedicalPrescriptionUsageType.Outpatient]: "Ngoại trú",
    [EMedicalPrescriptionUsageType.Inpatient]: "Nội trú",
    [EMedicalPrescriptionUsageType.BringHome]: "Ra viện",
    [EMedicalPrescriptionUsageType.ClearWarehouse]: "Xử lý thuốc đa liều",
}

export const EReportName = {
    VatTuSuDungPhauThuat: 'BaoCao_VatTuSuDungPhauThuat',
    PhieuCongKhaiThuoc: 'PhieuCongKhaiThuoc',
    PhieuCongKhaiDichVuKCBNoiTru: 'PhieuCongKhaiDichVu',
    PhieuNhapKhoWeb: 'W_PhieuNhapKho',
    TransactionProcessToWarehouse: 'TransactionProcessToWarehouse',
    W_BienBanKiemNhap: 'W_BienBanKiemNhap',
    TongHopKetQuaCHC: 'BaoCao_TongHopKetQuaCHC',
    KetQuaXetNghiemCHC: 'BaoCao_KetQuaXetNghiemCHC',
    BaoCao_7980: 'BaoCao_7980',
    BaoCao_79HD: 'BaoCao_79HD',
    BaoCao_19BHYT: 'BaoCao_19',
    BaoCao_20BHYT: 'BaoCao_20',
    BaoCao_21BHYT: 'BaoCao_21',
    W_PhieuGayMeHoiSuc: 'W_PhieuGayMeHoiSuc',
    W_PhieuTheoDoiChucNangSong: 'W_PhieuTheoDoiChucNangSong',
    W_PhieuKhaiThacTienSuDiUng: 'W_PhieuKhaiThacTienSuDiUng'
}
export const ESummaryLackConsumableWhenPackageStatus =
{
    Packaged: 1,
    NotPackaged: 2,
    Ordered: 3,
    NeedOrder: 4,
    NeedRecollectList: 5
}
export const EStorageConditionCSS =
{
    LightGrey: 1,
    DarkBlue: 2,
    LightBlue: 3,
    LightOrange: 4,
    LightGreen: 5
}

export const EServiceStatusInTimeline = {
    Scheduled: 1,
    Finish: 2,
    Started: 3,
    NotStarted: 4,
    PatientUnableExecuted: 5
}

export const EReceiptionType = {
    Service: 1,
    Insurance: 2,
    Contract: 3
}

export const ECustomReceiptionType = {
    Undefined: 0,
    Contract: 1,
    SocialInsurance: 2,
    PrivateInsurance: 3,
    Service: 5,
}

export const ECashierMedicalRecordItemStatus = {
    Ready: 1,
    NeedToPay: 2,
    UndoneServiceExisting: 3,
    PrescriptionNotReady: 4,
}
export const ECashierMedicalRecordTypeOption = {
    All: 1,
    Outpatient: 2,
    InpatientOrOutPatientHasSurgery: 3,
}

export const EPatientStatusRecordStatus = {
    Avaiable: 1,
    Cancel: 2
}
export const EReceiveFromVendorType = {
    Normal: 1,
    GiftGoods: 2,
    PatientReturn: 3,
    StartingBatch: 4,
    ReceiveEmergency: 5
}

export const ETimeInfoType = {
    OtherLocation: 1,
    DrugDistribution: 2,
    Discharge: 3,
    ReturningExecutionResult: 4,
    FirstAdvance: 5
}

export const ESignificantConsumable = {
    Enough: 1,
    NotEnough: 2,
    NotSelected: 3
}

export const EPrintType = {
    Pdf: {
        value: 1,
        type: "pdf"
    },
    Html: {
        value: 2,
        type: "html"
    },
    Image: {
        value: 3,
        type: "image"
    },
    Json: {
        value: 4,
        type: "json"
    },
    RawHtml: {
        value: 5,
        type: "raw-html"
    }
}

export const EWaitingForTreatingDetailProgressGroupType = {
    SurgeryInProgress: 0,
    SurgeryNotStarted: 1,
    SubclinicalNotStarted: 2,
    SubclinialInProgress: 3

}

export const EMedicalRecordHistoryType = {
    Undefined: 0,
    Diagnostic: 1,
    VitalSign: 2,
    Allergy: 3,
    Medicine: 4,
    CLS: 5,
    DepartmentChange: 6,
    ExecutionReport: 8,
    ExamRequest: 9,
    TreatmentAssignment: 10,
    BloodTransfusionRequest: 11,
    AirTransfusionRequest: 12,
    Intervention: 13,
    ExaminationReport: 14,
    CloseMedicalRecord: 15,
    Speciality: 16,
    MedicalHistory: 17,
    Newsfeed: 18,
    PrescriptionDispatch: 19
}

export const ESearchingPatientInfoCounterStatus = {
    Error: 0,
    Success: 1
}

export const EWareHouseLocationSupplyType = {
    Consumable: 1,
    Asset: 2,
}

export const EMedicalReportPrintType = {
    MedicalReport: 1,
    TreatmentCare: 2,
    SummaryPrescriptionDispatch: 3,
    TreatmentReport: 4
}

export const ECombinationType = {
    Combination: 1,
    ExternalExecution: 2,
}

export const EExternalExecutingStatus = {
    //[Display(Description = "Đang gửi mẫu")]
    Waiting: 1,
    //[Display(Description = "Đang nhập kết quả")]
    Inputting: 2,
    //[Display(Description = "Đã hoàn thành")]
    Finished: 3,
}
export const EExternalExecutingStatusColor = {
    //[Display(Description = "Đang gửi mẫu")]
    [EExternalExecutingStatus.Waiting]: "orange5",
    //[Display(Description = "Đang nhập kết quả")]
    [EExternalExecutingStatus.Inputting]: "primary",
    //[Display(Description = "Đã hoàn thành")]
    [EExternalExecutingStatus.Finished]: "green5",
}

export const EUserStatus = {
    Offline: 0,
    Online: 1
}

export const EUserStatusColor = {
    [EUserStatus.Offline]: "grey3",
    [EUserStatus.Online]: "green5"
}

export const EModeCreateConsumablePlanType = {
    CreateNew: 1,
    AddExisted: 2,
}

export const EIconQueueType = {
    Contract: 1,
    GroupService: 2
}

export const EChangeDepartmentTypeOpt = {
    ChangeDepartment: 1,
    PatientAdmission: 2
}

export const ESummaryPreparationConsumable = {
    Undefined: 0,
    Preparation: 1,
    ConsumablePlan: 2,
    CancelPreparation: -1,
    CancelConsumablePlan: -2
}

export const EMedicalRecordInSearchPageModel = {
    ReceiptionCode: "ReceiptionCode",
    PatientCode: "PatientCode",
    PrimaryICDName: "PrimaryICDName",
    DepartmentName: "DepartmentName",
    ReceiptionType: "ReceiptionType",
    PatientName: "PatientName",
    AgeDisplay: "AgeDisplay",
    GenderDisplay: "GenderDisplay",
    PhoneNumber: "PhoneNumber",
    Address: "Address",
    CreatedDate: "CreatedDate",
    EndDate: "EndDate",
    TreatmentResult: "TreatmentResult",
    CloseMedicalRecordMethod: "CloseMedicalRecordMethod",
    DischargeDepartmentName: "DischargeDepartmentName",
    AdmissionDepartmentName: "AdmissionDepartmentName"
}

export const EExaminationContractStatusColor = {
    [EExaminationContractStatus.Active]: "yellow6",
    [EExaminationContractStatus.Disabled]: "red5",
    [EExaminationContractStatus.Undefined]: "grey2",
}

export const EMedicalRecordInsuranceStatus = {
    InActive: 1,
    Active: 2,
    Expired: 3
}

export const EAdjustServicePrice = {
    New: 1,
    Edit: 2
}
export const EUpdateStatus = {
    NoChange: 0,
    Deleted: 1,
    Updated: 2,
}

export function getSeriousChatType() {
    return [EChatGroupType.InterventionMedicine, EChatGroupType.Submission, EChatGroupType.NotifyDoctorWhenChangeMedicine, EChatGroupType.NotifyServiceConsultation]
}


export function getNormalChatType() {
    return [EChatGroupType.Normal];
}

export const EInstructionChangeType = {
    Undefined: 0,
    QuickInput: 1,
    TherapyDateRange: 2,
    Continuousness: 3,
    DetailUsage: 4,
}

export const ESpecialAlign = {
    Right: 1,
    Left: 2
}

export const EServiceConsultationStatus = {
    New: 1,
    Canceled: 2,
    Reject: 3,
    Completed: 4,
    Submission: 5,
    CancelSign: 6
}

export const EConsultationMemberRole = {
    Normal: 1,
    Preside: 2,
    Secretary: 3
}

export const EWaitingForTreatingDetailType = {
    Surgery: 0,
    SubClinical: 1
}
export const ETransactionProcessType = {
    Undefined: 0,
    PackPatientPackage: 1,
    JustRemovePatientPackage: 2,
    DispenseMedicationOutPatient: 3,
    UseInService: 4,
    Unbox: 5,
    WareHouseTransfer: 6,
    PackTemplatePackage: 7,
    TransferToHospital: 8,
    TransferToBatch: 9,
    ConfirmInventoryReport: 10,
    ReturnToVendor: 11,
    ReceiveFromVendor: 12,
    ReceiveBoxFromPatient: 13,
    DispenseMedicationInPatient: 14,
}

export const ERecordHashTagType = {
    Collaborator: 1,
    Others: 2,
}

export const EPatientVoucherType = {
    Deduct: 1,
    Payment: 2,
}
export const ETaxRate = {
    KCT: -1
}
export const EUnitSpecial = {
    DVDGNN: 748
}

export const EImageSource = {
    Undefined: 0,
    Master: 1,
    Transaction: 2
}


export const EFormPageOption = {
    FormTemplate: 1,
    ImportantMeasurement: 2
}

export const EScanCodeType = {
    EmptyInput: 8
}


export const EInPatientDashboardStaticNumberType =
{
    Undefined: 0,
    TreatingTotal: 5,
    TreatingSubclinicalInProgress: 6,
    TreatingSurgeryInProgress: 7,
    TreatingSubclinicalNotStarted: 8,
    TreatingSurgeryNotStarted: 9,
    WaitingForTransferTotal: 10,
    Surgery: 11,
    WaitingForDepartmentDischargeTotal: 12,
    WaitingForTransferToOtherHospital: 13,
    WaitingDischarge: 14,
    SubmissionTotal: 15,
    EmptyRoomTotal: 16,
    NumberOfRoomPartiallyEmpty: 17,
    FullRoomTotal: 18
}

export const EViewCalendar = {
    Month: 'month',
    Week: 'week',
    Day: 'day',
    Agenda: 'agenda'
}

export const EContractServicePackageStatus = {
    Undefined: 0,
    NotDone: 1,
    Done: 2
}

export const EWorkType = {
    Undefined: 0,
    StartExamination: 1,
    ReturnExamination: 2,
    FinishExamination: 3,
    DiagnosticImage: 4,
    FunctionalExploration: 5,
    Surgery: 6,
    Procedure: 7,
    MedicalTest: 8,
    CollectSample: 9,
    Anesthetic: 10,
    Other: 11,
    Hospitalize: 12,
    Prescription: 13,
    Consultation: 14,
    PatientStatus: 15,
    Diagnostic: 16,
    Vitalsign: 17,
    Allergy: 18,
    ServiceAssignment: 19,
    ServiceOrder: 20,
    TreatmentAssignment: 21,
    CloseMedicalRecordAssignment: 22,
    PrescriptionDispatch: 23,
}

const workColors = {
    [EWorkType.Undefined]: "grey1",

    [EWorkType.StartExamination]: "primary3",
    [EWorkType.ReturnExamination]: "primary2",
    [EWorkType.FinishExamination]: "primary5",

    [EWorkType.Diagnostic]: "brown3",
    [EWorkType.Allergy]: "brown3",
    [EWorkType.Vitalsign]: "brown3",
    [EWorkType.Prescription]: "brown5",

    [EWorkType.ServiceAssignment]: "lightGreen9",
    [EWorkType.ServiceOrder]: "lightGreen7",
    [EWorkType.TreatmentAssignment]: "pink7",
    [EWorkType.CloseMedicalRecordAssignment]: "brown9",
    [EWorkType.PrescriptionDispatch]: "purple5",

    [EWorkType.DiagnosticImage]: "green1",
    [EWorkType.FunctionalExploration]: "green1",

    [EWorkType.Anesthetic]: "orange1",
    [EWorkType.Surgery]: "orange2",

    [EWorkType.Procedure]: "orange1",

    [EWorkType.CollectSample]: "blue1",
    [EWorkType.MedicalTest]: "blue2",

    [EWorkType.Hospitalize]: "yellow3",

    [EWorkType.Consultation]: "orange2",

    [EWorkType.PatientStatus]: "orange2",

    [EWorkType.Other]: "grey2",
}

export function getWorkColor(workType) {
    return workColors[workType] ?? "red3";
}

export const EWorkPeriod = {
    BeforeHospitalization: 1,
    AfterHospitalization: 2,
}

export const EGroupChatReadType = {
    Unread: 1,
    Read: 2
}

export const EGetNotEnoughConsumableModel = {
    OnlySpecial: 1,
    OnlyNormal: 2
}


export const EOutPatientDashboardDataType = {
    Undefined: 0,
    WaitingForFirstAdvance: 1,
    WaitingTimeDetailForOtherLocation: 2,
    WaitingTimeDetailForReturningResult: 3,
    MedicalRecordTotalTimeDetail: 4,
    WaitingForDischarge: 5,
    WaitingForDrugDistribution: 6
}

export const EWaitingStatus = {
    Undefined: 0,
    Waiting: 1,
    Completed: 2
}

export const EContractPatientMappingStatus = {
    Undefined: '0',
    AutoMapped: '1',
    Mapped: '2',
    NotMapped: '3'
}

export const EImportContractPatientType = {
    Undefined: 0,
    BulkInsert: 1,
    Overwrite: 2
}

export const ECashierAdditionalReportType = {
    Prescription: 1,
    PhieuKQDoThiLuc: 2
}

export const EExecutionType = {
    /// <summary>
    /// Thực hiện tại viện
    /// </summary>
    Internal: 1,
    /// <summary>
    /// Gửi mẫu ngoại viện
    /// </summary>
    External: 2,
}

export const ECampaignTypeStatus = {
    Active: 1,
    Inactive: 2
}