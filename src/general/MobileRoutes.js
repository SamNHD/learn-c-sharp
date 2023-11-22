import HomeMobilePageWrapper from "../page-components/HomeMobilePage/HomeMobilePageWrapper";
import SignatureCanvasPageWrapper from "../page-components/SignatureCanvas/SignatureCanvasPageWrapper";
import TestPageWrapper from "../page-components/TestPage/TestPageWrapper";
import UploadFileMobilePageWrapper from "../page-components/UploadFileMobile/UploadFileMobilePageWrapper";
import { createRoute, Paths } from "./paths";


export const Mobile = [
    createRoute(Paths.mobile, HomeMobilePageWrapper),
    createRoute(Paths.tranTest, TestPageWrapper),
    createRoute(Paths.uploadFileMobile, UploadFileMobilePageWrapper),
    createRoute(Paths.signaturePad, SignatureCanvasPageWrapper)
];

