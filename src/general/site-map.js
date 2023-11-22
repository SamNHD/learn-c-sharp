import { Paths } from "./paths";

function createRoot(name, icon, views) {
    return {
        name,
        icon,
        views,
    };
}
function createSite(name, icon, path, views) {
    let isObj = typeof path === "object" && path != null;
    return {
        name,
        icon,
        path: isObj ? path.path : path,
        views,
        actionPoint: isObj ? path.actionPoint : null,
    };
}

let rootMenu = [
    createRoot("Tiếp nhận", "fal fa-address-card", [
        createSite("Nhận bệnh", "fal fa-address-card", Paths.ReceivePatient, []),
    ]),
    createRoot("Bảo hiểm tư nhân", "fal fa-address-card", [
        createSite("Quản lý BLVP", "fal fa-user-shield", Paths.privateInsurance, []),
        createSite("Xác nhận thanh toán", "fal fa-cash-register", Paths.privateInsuranceSubmit, []),
    ]),
    createRoot("Khám hợp đồng", "fal fa-address-card", [
        createSite("Khám hợp đồng", "fal fa-folders", Paths.ExaminationContractPage, [])
    ]),
    createRoot("Quản lý hàng đợi", "fal fa-sack-dollar", [
        createSite("Danh sách check-in", "fal fa-map-marker-check", Paths.checkInCounterPage),
        createSite("Danh sách hàng đợi", "fal fa-tv", Paths.waitingRoomPage),
        createSite("Dashboard", "fal fa-tv", Paths.examinationDashboard),
        createSite("Bệnh nhân đợi lâu hoặc không ở đâu", "fal fa-location", Paths.PatientLastChangeLocationRecordInfo),
        createSite("Thời gian", "far fa-user-clock", Paths.timeManagementDashboard),
        createSite("Tự động chuyển khu", "far fa-exchange", Paths.PatientAutoRedirectedPage),
        createSite("Đóng/mở phòng", "far fa-user-unlock", Paths.CloseRoom),
        // createSite("Điều phối bệnh nhân", "fal fa-home", Paths.CoordinationPatient, []) // TẠM ẨN VÌ KO SUPPORT PHÒNG ĐIỀU PHỐI NỮA
    ]),
    createRoot("Lâm sàng", "fal fa-home", [
        createSite("Khám bệnh ngoại trú", "fal fa-users-class", Paths.doctorScreen, []),
        createSite("Thực hiện dịch vụ", "fal fa-briefcase-medical", Paths.ServiceExecutionPage),
        createSite("Trả kết quả", "fal fa-sticky-note", Paths.SearchPatientInQueuePage),
        createSite("Tạo nhanh kết quả", "fal fa-sticky-note", Paths.CreateServiceExecutionPage),
        createSite("Điều trị nội trú", "fal fa-bed-bunk", null, [
            createSite("Phòng bệnh", "fal fa-bed-bunk", Paths.InPatientDepartmentPage), // trang chinh cua khoa phong
            createSite("Bệnh nhân chuyển đến", "fal fa-walking", Paths.incomingPatient),
            createSite("Thực hiện thuốc", "fal fa-capsules", Paths.medicineAllocate),
        ]),
        createSite("Cấp cứu", "far fa-hospital-symbol", null, [
            createSite("Phòng cấp cứu", "far fa-hospital-symbol", Paths.EmergecyDepartmentPage),
            createSite("Bệnh nhân chuyển đến", "fal fa-walking", Paths.incomingPatient),
            createSite("Thực hiện thuốc cấp cứu", "fal fa-capsules", Paths.emergencyDispenseMedication),
        ]),
        createSite("Phẫu thuật", "fal fa-scalpel-path", Paths.SurgeryExecutionPage, []),
        createSite("Mẫu xét nghiệm", "fal fa-vials", null, [
            // createSite("Mẫu gộp", "fal fa-vials", Paths.CombinedMedicalTest, []), EH-2575 : tạm ẩn trang mẫu gộp
            createSite("Gửi mẫu ngoài", "fal fa-external-link", Paths.ExternalExecutionPage, []),
        ]),
        createSite("Tra cứu bệnh án", "fal fa-file-search", Paths.searchMedicalRecord),
        createSite("Khoa", "far fa-window-alt", Paths.departmentDashboard),
    ]),
    createRoot("Dược lâm sàng", "fal fa-home", [
        createSite("Duyệt đơn thuốc", "fal fa-file-prescription", Paths.approvePrescription, []),
        //createSite("Can thiệp dược", "fal fa-capsules", Paths.doctorInterventionMedicine)
    ]),
    createRoot("Dược chính", "fal fa-home", [
        createSite("Danh mục D&C", "fal fa-inventory", Paths.consumableList),
        createSite("Gói bệnh nhân", "fal fa-prescription-bottle-alt", Paths.managePackagedBatch),
        createSite("Min/Max tồn kho", "fal fa-warehouse-alt", null, [
            createSite("Điều chỉnh thủ công", "fal fa-hand-paper", Paths.warehouseQuota),
            createSite("Gợi ý điều chỉnh", "fal fa-wand-magic", Paths.suggestWareHouseQuota),
        ]),
        createSite("Đóng gói", "fas fa-cubes", null, [
            createSite("Gói cấp phát", "fal fa-prescription-bottle-alt", Paths.medicinePackage),
            createSite("Gói soạn trước", "fal fa-prescription-bottle", Paths.medicineTemplatePackage),
        ]),
        createSite("Điều phối D&C", "fal fa-boxes", Paths.emergencyMedicationSupply),
        createSite("Nhập/xuất", "fal fa-sort-alt", null, [
            createSite("Nhập Hàng", "fal fa-capsules", Paths.consumableTransactionReceive),
            createSite("Xuất Hàng", "fal fa-capsules", Paths.consumableTransactionExport),
            createSite("Nhập xuất tồn", "fal fa-capsules", Paths.importExportInventory),
        ]),
        createSite("Kiểm kê", "fal fa-clipboard-list-check", null, [
            createSite("Kế hoạch kiểm kê", "fal fa-users-class", Paths.consumableInventoryPlan),
            createSite("Xử lý kiểm kê", "fal fa-users-class", Paths.balanceWarehouse),
            createSite("Lịch sử xử lý", "fal fa-users-class", Paths.consumableResolveTicket),
        ]),
        createSite("Thanh lý", "fal fa-sack-dollar", null, [
            createSite("Duyệt", "fal fa-users-class", Paths.liquidationRequest),
            createSite("Xử lý", "fal fa-users-class", Paths.liquidationHandling),
            createSite("Lịch sử", "fal fa-users-class", Paths.liquidationHistory),
        ]),
        createSite("QL bán dược nội bộ", "fal fa-warehouse-alt", Paths.TransferToOtherHospitalPage),
        createSite("Dược quốc gia", "fal fa-book-medical", null, [
            createSite("Dược quốc gia", "fal fa-pills", Paths.NationalPharmacyPage),
            createSite("Đơn thuốc quốc gia", "fal fa-prescription", Paths.NationalPrescriptionPage),
        ]),
    ]),
    createRoot("Mua sắm", "fal fa-shopping-cart", [
        createSite("Dự trù", "fal fa-calculator", null, [
            createSite("Dự trù", "fal fa-calculator", Paths.preparationPlan),
            createSite("Dự trù chờ mua sắm", "fal fa-vote-yea", Paths.createConsumablePlan),
            createSite("Nhập xuất tồn dự trù", "fal fa-vote-yea", Paths.preparationPlanDetail),
            createSite("Dự trù tự động", "fal fa-vote-yea", Paths.autoPreparation)
        ]),
        createSite("Kế hoạch mua sắm", "fal fa-shopping-cart", Paths.consumablePlan),
        createSite("Tạo đơn đặt hàng", "fal fa-paper-plane", Paths.consumablePlanDetail),
        createSite("Đơn đặt hàng", "fal fa-paste", Paths.consumableOrder),
        createSite("Nhận hàng", "fal fa-truck-loading", Paths.consumableOrderDetail),
        createSite("Chờ duyệt nhập kho", "fal fa-box-check", Paths.tempReceiveWareHouse),
        createSite("Biên bản nhận hàng", "fal fa-file-invoice-dollar", Paths.goodReceipt),
        createSite("Quản lý hóa đơn", "fal fa-copy", Paths.receiveTransaction, [
            createSite("Hóa đơn nhận hàng", "fal fa-copy", Paths.receiveTransaction),
            createSite("Hóa đơn ký gửi", "fal fa-copy", Paths.NonePrepayUsingTransactionPage),
            createSite("Thông tin đối chiếu", "fa fa-copy", Paths.bizziMappingInvoice)
        ]),
        createSite("Trả hàng nhà cung cấp", "fal fa-dolly-flatbed", Paths.returnVendor),
        createSite("Hợp đồng thầu", "fal fa-file-contract", Paths.supplyContract),
    ]),
    createRoot("Nhà thuốc", "fal fa-home", [
        createSite("Phát thuốc ngoại trú", "fal fa-capsules", Paths.medicinePackageDistribution),
        createSite("Hàng đợi phát thuốc", "fal fa-tablets", Paths.dispenseMedicationQueue),
        createSite("Bán thuốc vãng lai", "fal fa-capsules", Paths.saleExternalPatient),
        createSite("Trả vỏ ngoại trú", "fal fa-archive", Paths.returnMedicineCover),
        createSite("Quản lí vãng lai", "far fa-house-return", Paths.patientManagement),
    ]),
    createRoot("Thu ngân", "fal fa-home", [
        createSite("Quầy thu", "fal fa-cash-register", Paths.cashier, []),
        createSite("Hàng đợi thu ngân ngoại trú", "fal fa-cash-register", Paths.cashierQueue, []),
        createSite("Chi tiết giao dịch thu ngân", "fal fa-search-dollar", Paths.accountStatement), // mỗi thu ngân chỉ xem chi tiết giao dịch của nó
        createSite("Quản lí vãng lai", "far fa-house-return", Paths.patientManagement),
        createSite("Bán voucher", "far fa-badge-percent", Paths.VoucherSale),
    ]),
    createRoot("Kế toán", "fal fa-home", [
        createSite("Quản lý quầy thu", "fal fa-cash-register", Paths.manageCashier),
        createSite("Chi tiết giao dịch bệnh viện", "fal fa-search-dollar", Paths.hospitalAccountStatement), // coi tat ca thu ngan, hoac 1 so thu ngan (co filter thu ngan)
        createSite("Tạm ứng online", "fal fa-comments-dollar", Paths.allocateBalance),
        createSite("Nộp ngân hàng", "far fa-landmark", Paths.bank),
        createSite("Clear POS", "fal fa-hand-holding-usd", Paths.refPos),
        createSite("Quản lý hóa đơn", "fal fa-file-invoice-dollar", Paths.invoiceManagement),
    ]),
    createRoot("BHXH", "fal fa-gift-card", [
        createSite("XML BHYT", "fal fa-paper-plane", Paths.sendInsurranceHistory),
        createSite("Báo cáo tháng", "fal fa-file-chart-line", Paths.sendInsurranceMonthlyReport),
        createSite("Insurance tool", "far fa-tools", Paths.InsuranceTool),
    ]),
    createRoot("Quản lý Voucher", "fal fa-gift-card", [
        createSite("Voucher", "fal fa-gift-card", Paths.VoucherCampaignManagement),
    ]),

    // createRoot("Khoa phòng", "fal fa-home", [
    //     createSite("Phòng bệnh", "fal fa-bed-bunk", Paths.InPatientDepartmentPage),
    //     createSite("Phẫu thuật", "fal fa-scalpel-path", Paths.SurgeryExecutionPage, []),

    //     createSite("Danh mục D&C", "fal fa-inventory", Paths.consumableListDepartment),
    //     createSite("Gói bệnh nhân", "fal fa-prescription-bottle-alt", Paths.managePackagedBatchDepartment),
    //     createSite("Kiểm kê", "fal fa-clipboard-list-check", null, [
    //         createSite("Kế hoạch kiểm kê", "fal fa-users-class", Paths.consumableInventoryPlanDepartment),
    //         createSite("Xử lý kiểm kê", "fal fa-users-class", Paths.balanceWarehouseDepartment),
    //         createSite("Lịch sử xử lý", "fal fa-users-class", Paths.consumableResolveTicketDepartment),
    //     ]),
    //     createSite("Thanh lý", "fal fa-sack-dollar", null, [
    //         createSite("Duyệt", "fal fa-users-class", Paths.liquidationRequestDepartment),
    //         createSite("Xử lý", "fal fa-users-class", Paths.liquidationHandlingDepartment),
    //         createSite("Lịch sử", "fal fa-users-class", Paths.liquidationHistoryDepartment),
    //     ]),
    //     createSite("Tra cứu bệnh án", "fal fa-file-search", Paths.searchMedicalRecord),
    // ]),
    createRoot("Kiểm soát nhiễm khuẩn", "fal fa-home", [
        createSite("Danh mục D&C", "fal fa-inventory", Paths.consumableListInfectionControl),
        createSite("Vật tư bền", "fal fa-toolbox", null, [
            createSite("Thu hồi", "fal fa-users-class", Paths.collectLastingConsumable),
            createSite("Xử lý", "fal fa-users-class", Paths.lastingConsumableList),
        ]),
        createSite("Kiểm kê", "fal fa-clipboard-list-check", null, [
            createSite("Kế hoạch kiểm kê", "fal fa-users-class", Paths.consumableInventoryPlanInfectionControl),
            createSite("Xử lý kiểm kê", "fal fa-users-class", Paths.balanceWarehouseInfectionControl),
            createSite("Lịch sử xử lý", "fal fa-users-class", Paths.consumableResolveTicketInfectionControl),
        ]),
        createSite("Thanh lý", "fal fa-sack-dollar", null, [
            createSite("Duyệt", "fal fa-users-class", Paths.liquidationRequestInfectionControl),
            createSite("Xử lý", "fal fa-users-class", Paths.liquidationHandlingInfectionControl),
            createSite("Lịch sử", "fal fa-users-class", Paths.liquidationHistoryInfectionControl),
        ]),
    ]),
    createRoot("Trang thiết bị", "fal fa-capsules", [
        createSite("Danh mục TTB", "fal fa-desktop", Paths.assetsList),
        createSite("Mua sắm", "fal fa-shopping-cart", null, [
            createSite("Kế hoạch mua sắm", "fal fa-users-class", Paths.assetPlan),
            createSite("Tạo đơn đặt hàng", "fal fa-users-class", Paths.assetPlanDetail),
            createSite("Đơn đặt hàng", "fal fa-users-class", Paths.assetOrder),
            createSite("Nhận hàng", "fal fa-users-class", Paths.assetOrderDetail),
            createSite("Chờ duyệt nhập kho", "fal fa-users-class", Paths.assetTempReceiveWareHouse),
        ]),
        createSite("Kiểm kê", "fal fa-shopping-cart", null, [
            createSite("Kế hoạch kiểm kê", "fal fa-users-class", Paths.assetInventory),
            createSite("Xử lý kiểm kê", "fal fa-users-class", Paths.assetBalanceWarehouse),
            createSite("Lịch sử xử lý", "fal fa-users-class", Paths.assetResolveTicket),
        ]),
        createSite("Thanh lý", "fal fa-sack-dollar", null, [
            createSite("Duyệt", "fal fa-users-class", Paths.liquidationAssetRequest),
            createSite("Xử lý", "fal fa-users-class", Paths.liquidationAssetHandling),
            createSite("Lịch sử", "fal fa-users-class", Paths.liquidationAssetHistory),
        ]),
        createSite("Nhập/xuất", "fal fa-sort-alt", null, [
            createSite("Nhập Hàng", "fal fa-capsules", Paths.assetTransactionReceive),
            createSite("Xuất Hàng", "fal fa-capsules", Paths.assetTransactionExport),
            createSite("Nhập xuất tồn", "fal fa-capsules", Paths.assetImportExportInventory),
        ]),
    ]),
    // createRoot("Máu", "", [
    //     createSite("Quản lý máu", "fal fa-tint", Paths.bloodList),
    //     createSite("Thanh lý", "fal fa-sack-dollar", null, [
    //         createSite("Duyệt", "fal fa-users-class", Paths.liquidationBloodBagRequest),
    //         createSite("Xử lý", "fal fa-users-class", Paths.liquidationBloodBagHandling),
    //         createSite("Lịch sử", "fal fa-users-class", Paths.liquidationBloodBagHistory),
    //     ]),
    //     createSite("Mua sắm", "fal fa-shopping-cart", null, [
    //         createSite("Kế hoạch mua sắm", "fal fa-users-class", Paths.bloodBagPlanDetail),
    //         createSite("Đơn đặt hàng", "fal fa-users-class", Paths.bloodBagOrder),
    //         createSite("Nhận hàng NCC", "fal fa-users-class", Paths.bloodBagOrderDetail),
    //         createSite("Xử lý", "fal fa-users-class", Paths.bloodBagTempReceiveWareHouse),
    //     ]),
    //     createSite("Kiểm kê", "fal fa-clipboard-list-check", null, [
    //         createSite("Kế hoạch kiểm kê", "fal fa-users-class", Paths.bloodInventory),
    //         createSite("Xử lý kiểm kê", "fal fa-users-class", Paths.bloodBalanceWarehouse),
    //         createSite("Lịch sử xử lý", "fal fa-users-class", Paths.bloodBagResolveTicket),
    //     ]),
    // ]),

    createRoot("Báo cáo", "fal fa-clipboard-list", [
        createSite("Báo cáo", "fal fa-clipboard-list", Paths.businessReport),
        createSite("Báo cáo giao ban", "far fa-columns", Paths.BaoCaoGiaoBan),
    ]),

    createRoot("Quản lý hệ thống", "fal fa-capsules", [
        // createSite("Master Data", "fal fa-star", Paths.masterData),
        createSite("Phân quyền", "fal fa-hospital-user", Paths.userManager),
        createSite("Trình ký", "fal fa-file-signature", Paths.SubmissionManager),
        createSite("DS Q.Trình", "fal fa-tasks", Paths.lineList),
        createSite("Bệnh nhân VIP", "fal fa-star", Paths.PatientLevelHistory),
        createSite("DC Forwarders", "fal fa-clipboard-list", Paths.DCForwarders),
        createSite("Enum", "fal fa-sort-numeric-up-alt", Paths.Enum),
        createSite("Ekip hội chẩn dịch vụ", "fas fa-users-medical", Paths.ServiceConsultationTeamPage),
        // createSite("Ủy quyền trình ký", "fal fa-tasks", Paths.userAutoSign),
    ]),
    createRoot("Tiện ích", "fal fa-sack-dollar", [
        createSite("Dev-tools", "fas fa-code", Paths.AdminToolsPage),
        createSite("Form mẫu", "fal fa-clipboard-list", Paths.formPage),
        createSite("AutoText", "fal fa-text-size", Paths.autoTextDictionary),
        createSite("Hướng dẫn sử dụng", "fal fa-book", Paths.ehealthDocument),
        createSite("Tải ảnh", "fal fa-book", Paths.uploadFileMobile),
        createSite("FIS", "fal fa-database", null, [
            createSite("Post FIS Data", "fal fa-database", Paths.postFisData),
            createSite("Đồng bộ danh mục", "fal fa-database", Paths.fisMasterData),
            createSite("Kết quả FIS", "fal fa-database", Paths.fisChungTu)
        ]),
        createSite("Master data", "fal fa-database", Paths.masterData),
        createSite("Chẩn đoán hình ảnh", "fal fa-database", Paths.DiagnosticImagingUtility)
    ]),
];

export { rootMenu as globalSiteMap };
