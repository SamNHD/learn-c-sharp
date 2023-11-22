import BusinessReportPageWrapper from "../page-components/BusinessReport/BusinessReportPageWrapper";
import BaoCaoGiaoBanReportPageWrapper from "../page-components/Report/BaoCaoGiaoBanReportPageWrapper";
import { createRoute, Paths } from "./paths";


export const ReportRoutes = [
    createRoute(Paths.businessReport, BusinessReportPageWrapper),
    createRoute(Paths.BaoCaoGiaoBan, BaoCaoGiaoBanReportPageWrapper),
];

