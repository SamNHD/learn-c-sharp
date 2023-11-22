import { printFromHtml } from "./helper";

const helperPrint = {};


helperPrint.wantPrintSignature = (_this, userId, successCallback) => {
    _this.ajaxGet({
        url: `/api/account/wantPrintSignature`,
        data: { userId: userId },
        success: ({ data }) => {
            typeof successCallback == "function" && successCallback(data);
        }
    });
}

// print phiếu thu tạm ứng của bệnh nhân
helperPrint.printThuTamUng = (_this, resultModel, callback) => {
    _this.ajaxPost({
        url: `/api/doctor/PrintPatientAddMoneyToWalletTransaction`,
        data: resultModel,
        success: ({ data }) => {
            printFromHtml(data, callback);
        },
    });
};

// print phiếu trả tạm ứng của bệnh nhân
helperPrint.printTraTamUng = (_this, resultModel, callback) => {
    _this.ajaxPost({
        url: `/api/doctor/PrintTraTamUng`,
        data: resultModel,
        success: ({ data }) => {
            printFromHtml(data, callback);
        },
    });
};

helperPrint.printVoucherSale = (_consumerInstance, patientVoucherIds, callback) => {
    _consumerInstance.ajaxPost({
        url: `/api/doctor/PrintVoucherSaleSummary`,
        data: {
            patientVoucherIds,
        },
        success: ({ data }) => {
            printFromHtml(data, callback);
        },
    });
}


// in đơn thuốc
helperPrint.printPrescription = (_this, medicalReportId, showSignImage) => {
    _this.ajaxPost({
        url: `/api/doctor/PrintPrescription`,
        data: { data: medicalReportId, showSignImage: showSignImage },
        success: ({ data }) => {
            printFromHtml(data);
        }
    })
}



export default helperPrint;