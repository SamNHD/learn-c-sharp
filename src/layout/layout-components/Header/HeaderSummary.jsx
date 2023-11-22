import React, { Fragment } from 'react';
import { withStyles } from "@mui/styles";
import { I3Div, I3DivCenter, I3Icon } from '../../../importer';
import StateWrapper from "BaseComponent/StateWrapper";
import HeaderSummaryItem from './HeaderSummaryItem';
import { Paths } from '../../../general/paths';
import { isNullOrUndefined } from '../../../general/helper';
import { EGetNotEnoughConsumableModel, EModalType } from '../../../general/enum';
import PackageInfoByWarehouse from './PackageInfoByWarehouse';
class HeaderSummary extends StateWrapper {
    constructor(props) {
        super(props);
        this._timeOut = null;
        this.state = {
            isGetting: false
        };
        this._getPrescriptionTimeout = 30 * 1000; //30s
        this._prescriptionTimeout = null;

        this._getPackageTimeout = 30 * 1000; //30s
        this._packageTimeout = null;

        window._getNeedPrescriptions = () => {
            let url = '/api/ehealth/GetHeaderNeedPrescriptionsCount';
            this.registerIntervalUrl(url);
            let timeOutF = () => {
                setTimeout(window._getNeedPrescriptions, this._getPrescriptionTimeout);
            }
            this.ajaxGet({
                url: url,
                success: (ack) => {
                    this.setState({ needApprovePrescription: ack.data });
                },
                finish: () => {
                    timeOutF();
                }
            })
        }
        window._getPackages = () => {
            let url = '/api/ehealth/GetNotEnoughConsumableCount';
            this.registerIntervalUrl(url);
            let timeOutF = () => {
                setTimeout(window._getPackages, this._getPackageTimeout);
            }
            this.ajaxGet({
                url: url,
                success: (ack) => {
                    this.setState(ack.data);
                },
                finish: () => {
                    timeOutF();
                }
            })
        }
    }

    _getData = () => {
        clearTimeout(this._prescriptionTimeout);
        clearTimeout(this._packageTimeout);

        let timeOutFunc = () => {
            setTimeout(window._getNeedPrescriptions, this._getPrescriptionTimeout);
            setTimeout(window._getPackages, this._getPackageTimeout);
        }

        let url = '/api/EHealth/GetHeaderModel';
        this.setState({ isGetting: true });
        this.ajaxGet({
            url: url,
            success: (ack) => {
                this.setState({ ...ack.data, isGetting: false }, () => {
                    timeOutFunc()
                });
            },
            unsuccess: (ack) => {
                timeOutFunc();
            },
            error: () => {
                timeOutFunc();
            }
        })
    }

    _goToPackagePage = () => {
        this.goTo(Paths.medicinePackage.path);
    }
    _openPopupInfo = (mode, title) => {
        this.openModal(
            () => ({
                title: title,
                body: <PackageInfoByWarehouse mode={mode} />,
            }),
            EModalType.Mini
        );
    }
    _goToApprovePrescriptionPage = () => {
        this.goTo(Paths.approvePrescription.path);
    }

    wrapperContent() {
        let data = this.state;
        return (
            <Fragment>
                <I3Div display="flex" height="100%" alignItems="center">
                    {isNullOrUndefined(data.needApprovePrescription) == false || isNullOrUndefined(data.notEnoughSpecialConsumables) == false || isNullOrUndefined(data.notEnoughNormalConsumables) == false
                        ? <I3DivCenter margin={[, "sm", , "sm"]}>
                            <I3Icon className={`far fa-sync-alt ${data.isGetting ? 'fa-spin' : ''}`} cursor="pointer" title={`Nhấn để cập nhật`} onClick={this._getData}></I3Icon>
                        </I3DivCenter>
                        : null}
                    <HeaderSummaryItem
                        iconClass={'fas fa-cubes'}
                        bgColor={'orange2'}
                        iconColor={'yellow5'}
                        items={[
                            {
                                text: "Thiếu hàng riêng",
                                number: data.notEnoughSpecialConsumables,
                                onClick: () => { this._openPopupInfo(EGetNotEnoughConsumableModel.OnlySpecial, "Danh sách mặt hàng cần đóng gói riêng mà kho đang thiếu để cung ứng cho bệnh nhân") }
                            },
                            {
                                text: "Thiếu hàng thường",
                                number: data.notEnoughNormalConsumables,
                                onClick: () => { this._openPopupInfo(EGetNotEnoughConsumableModel.OnlyNormal, "Danh sách mặt hàng không cần đóng gói riêng mà kho đang thiếu để cung ứng cho bệnh nhân") }
                            }
                        ]}
                    />
                    <I3Div margin={[,'md',,'xs']} border={[false, true, false, false]} height="20px" borderColor="grey3"></I3Div>
                    <HeaderSummaryItem
                        iconClass={'fas fa-file-prescription'}
                        bgColor={'blue1'}
                        iconColor={'blue5'}
                        items={[
                            {
                                text: "Đơn chờ duyệt",
                                number: data.needApprovePrescription,
                                onClick: this._goToApprovePrescriptionPage
                            }
                        ]}
                    />
                </I3Div>
            </Fragment>
        )
    }

    componentDidMount() {
        this.setData({}, this._getData)
    }

    componentWillUnmount() {
        super.componentWillUnmount();
        clearTimeout(this._timeOut);
        clearTimeout(this._prescriptionTimeout);
        clearTimeout(this._getPackageTimeout);
    }
}

export default withStyles({

})(HeaderSummary)
HeaderSummary.propTypes = {

}
HeaderSummary.displayName = 'HeaderSummary';
