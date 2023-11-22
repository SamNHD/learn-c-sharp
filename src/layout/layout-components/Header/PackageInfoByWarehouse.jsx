import { withStyles } from "@mui/styles";
import React from "react";
import EHealthButton from "../../../components/ui-kit/button/EHealthButton";
import { EGetNotEnoughConsumableModel } from "../../../general/enum";
import { Paths } from "../../../general/paths";
import { getColorFromName, I3Component, I3Div, I3DivCenter, I3Icon } from "../../../importer";
import ModalLayout from "../../content-layout/ModalLayout";
import ReadMoreReact from 'read-more-react';
import ExpandableView from "../../../components/doctor-side/General/ExpandableView";
import ConsumableUnitConvertPopUp from "../../../components/ConsumableList/ConsumableUnitConvertPopUp";
class PackageInfoByWarehouse extends ModalLayout {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            expandedWareHouse: []
        }
    }

    _getUrl = () => {
        let { mode } = this.props;
        switch (mode) {
            case EGetNotEnoughConsumableModel.OnlyNormal:
                return "/api/ehealth/GetWareHouseNotEnoughNormalConsumableInfo";
            case EGetNotEnoughConsumableModel.OnlySpecial:
                return "/api/ehealth/GetWareHouseNotEnoughSpecialConsumableInfo";
            default:
                throw (`Need handle mode ${model} in PackageInfoByWarehouse.jsx`);
        }
    }

    loadData(f) {
        this.ajaxGet({
            url: this._getUrl(),
            success: (ack) => {
                this.setState({ data: ack.data }, f);
            },
        });
    }

    _toggleExpand = (wareHouseId) => {
        let { expandedWareHouse } = this.state;
        if (expandedWareHouse.indexOf(wareHouseId) >= 0) {
            this.removeLocalElement(expandedWareHouse, wareHouseId)
        }
        else {
            this.addLocalElement(expandedWareHouse, wareHouseId);
        }
    }

    modalBody() {
        let { classes } = this.props;
        let { data, expandedWareHouse } = this.state;
        return (
            <React.Fragment>
                <I3Div display="flex" flexWrap="wrap">
                    {data.map((i) => {
                        let expanded = expandedWareHouse.indexOf(i.wareHouseId) >= 0;
                        return (
                            <I3Div
                                padding={['xs', 'xs', 'xs', 'xs']}
                                boxShadow="style1"
                                boxShadowColor="primary5"
                                borderRadius="5px"
                                flex={"1 0 34%"}
                                width={"200px"}
                                margin={['xs', 'xs', 'md', 'sm']}
                                border="1px solid"
                                borderColor="primary5"
                                // onClick={() => this._openPackagePage(i.id)}
                                key={i.wareHouseId}
                            >
                                <ExpandableView
                                    iconColor="black"
                                    iconSize="md"
                                    headerProps={{
                                        border: !expanded ? false : [false, false, true, false],
                                        borderWidth: "default",
                                        padding: "md",
                                    }}
                                    title={<I3DivCenter cursor="pointer">
                                        <b>{i.wareHouseName}:&nbsp;{i.notEnoughConsumables.length}</b>
                                    </I3DivCenter>}
                                    iconPosition="end"
                                    expanded={expanded}
                                    onChange={() => { this._toggleExpand(i.wareHouseId) }}
                                    content={(
                                        <I3Div>
                                            <I3Div fontStyle="italic" textDecoration="underline" margin={[, , "xs",]}>Số lượng thiếu</I3Div>
                                            {i.notEnoughConsumables.map((c, cIndex) => {
                                                return (
                                                    <I3Div key={`${c.id}_${cIndex}`} display="flex">
                                                        <I3Component component="span" fontWeight="bold">{cIndex + 1}. [{c.id}] {c.name}</I3Component>:&nbsp;
                                                        {c.quantity}&nbsp;
                                                        <ConsumableUnitConvertPopUp
                                                            consumableId={c.id}
                                                            renderComponent={<I3Component component="span" textDecoration="underline">{c.unitName}</I3Component>}
                                                            defaultFromUnitId={c.unitId}
                                                        />
                                                    </I3Div>
                                                );
                                            })}
                                        </I3Div>
                                    )}
                                />

                            </I3Div>
                        )
                    })}
                </I3Div>
            </React.Fragment>
        )
    }
    rightFooter() {
        return (
            <EHealthButton onClick={this.closeThisModal}>Đóng</EHealthButton>
        )
    }
}
export default withStyles({
    hoverStyles: {
        "&:hover": {
            backgroundColor: `${getColorFromName("primary4")}`,
            color: "white",
            boxShadowColor: "primary1",
            borderRadius: "2px"
        },
    },
})(PackageInfoByWarehouse);