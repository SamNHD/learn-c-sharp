import React from 'react';
import { I3Div, I3Icon, BaseConsumer } from '../../../importer';
import Popover from '@mui/material/Popover';
import {  ButtonBase } from "@mui/material";
import { withStyles } from "@mui/styles";
import helper, { getDarkerColorFromName } from '../../../general/helper';
import { ColorObject } from 'StyleConfig';
import { FontWeight } from '../../../themeStyles/Color';

class SidebarItem extends BaseConsumer {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        }
        this.ref = React.createRef();
    }

    _onClickSubMenu = () => {
        let { item } = this.props;
        if (item.type === "window") {
            typeof item.onClick == "function" && item.onClick(this.props.index);
        }
        else if (item.views && item.views.length > 0) {
            this.setState({ anchorEl: this.ref.current });
        }
        else if (item.path) {
            this.props.onClick(this.props.index);
        }
    }

    _onClickChildMenu = (index) => {
        this._onClosePopup(() => {
            this.props.onClick(this.props.index, index);
        });
    }

    _onClosePopup = (callback) => {
        this.setState({ anchorEl: null }, () => {
            typeof callback === "function" && callback();
        });
    }
    _openNewTab = (item) => {
        if (item.type !== "window" && item.path) {
            window.open(item.path, "_blank");
            window.focus();
        }
        this._onClosePopup();
    }
    consumerContent() {
        const { item, height, color, backgroundColor, isSelected, classes } = this.props;
        const { anchorEl } = this.state;
        const _backgroundColor = isSelected ? "background" : null;
        const _color = isSelected ? backgroundColor : color;
        return (
            <div ref={this.ref}>
                <I3Div
                    onClick={(e) => {
                        if (e.ctrlKey) {
                            this._openNewTab(item);
                        }
                        else {
                            this._onClickSubMenu();
                        }
                    }}
                    onMouseDown={e => {
                        if (e.button === 1) {
                            this._openNewTab(item);
                        }
                    }}
                    width="100%"
                    height={"auto"}
                    cursor="pointer"
                    backgroundColor={_backgroundColor}
                >
                    <ButtonBase className={`${classes.buttonBase} ${item.type === "window" ? classes.maximizeButton : null}`}>
                        <I3Icon
                            size={item.type === "window" ? "sm" : "lg"}
                            color={_color}
                            variant="body1"
                            margin={[, "xs", ,]}
                            className={item.type === "window" ? "far fa-arrow-right" : item.icon}></I3Icon>
                        <I3Div
                            fontWeight={FontWeight.medium}
                            padding={["xs", "xs", , "xs"]}
                            flexGrow={1}
                            lineHeight="1.5" variant="subtitle1"
                            fontFamily="font2"
                            color={_color}
                            textTransform="uppercase">
                            {item.name}</I3Div>
                    </ButtonBase >
                </I3Div>
                {item.views && item.views.length > 0 ?
                    <Popover
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        onClose={this._onClosePopup}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        classes={{
                            paper: classes.overridePaper
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        PaperProps={{
                            square: true
                        }}
                    >
                        <I3Div>
                            {item.views.map((i, index) => {
                                return (
                                    <div key={index} className={classes.viewItem} >
                                        <ButtonBase
                                            onClick={() => {
                                            }}
                                            onClick={(e) => {
                                                if (e.ctrlKey) {
                                                    this._openNewTab(i);
                                                }
                                                else {
                                                    this._onClickChildMenu(index);
                                                }
                                            }}
                                            onMouseDown={e => {
                                                if (e.button === 1) {
                                                    this._openNewTab(i);
                                                }
                                            }}
                                        >
                                            <I3Div fontWeight={FontWeight.medium} fontFamily="font2" color={color} padding={[, , , "md"]} >
                                                {i.name}
                                            </I3Div>
                                        </ButtonBase>
                                    </div>
                                );
                            })}
                        </I3Div>
                    </Popover> : null
                }
            </div>
        );
    }
}

const styles = {};

Object.keys(ColorObject).map(function (key, index) {
    styles["item" + key] = {
        "&:hover": {
            backgroundColor: getDarkerColorFromName(key, 2)
        },
        cursor: 'pointer'
    };
});



export default withStyles({
    ...styles,
    buttonBase: {
        width: '25rem',
        minHeight: '18.75rem',
        display: 'unset',
        //padding: "12px 8px"
    },
    maximizeButton: {
        display: "flex",
        flexDirection: "row-reverse",
        padding: "6px 4px",
        background: "#00000033 0% 0% no-repeat padding-box",
        "&:hover": {
            background: "#0000001A 0% 0% no-repeat padding-box",
            color: "#34D1DC"
        },
        "&:hover span": {
            color: "#34D1DC",
        },
        "&:hover div": {
            color: "#34D1DC",
        }
    },
    viewItem: {
        // background: helper.getColorFromName("primary7"),
        '&:hover': {
            background: helper.getColorFromName("primary6"),
            boxShadow: '4px 0px 5px #00000036 inset'
        },
        minWidth: '60rem',
        height: '40px',
        '& button': {
            width: '100%',
            height: '40px',
            justifyContent: 'flex-start'
        }
    },
    overridePaper: {
        background: helper.getColorFromName("primary7"),
        boxShadow: '4px 0px 5px #00000036 inset'
    },
})(SidebarItem);