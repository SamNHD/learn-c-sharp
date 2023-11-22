import DateFnsUtils from '@date-io/date-fns';
import { withStyles } from '@material-ui/core';
import { KeyboardDatePicker as DPicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import BaseConsumer from 'BaseComponent/BaseConsumer';
import cx from 'classnames';
import React from 'react';
import moment from 'moment';
import 'moment/min/locales';
import MomentUtils from "@date-io/moment";

class DatePicker extends BaseConsumer {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        }
    }
    static defaultProps = {

    }

    _onChangeDate = (date) => {
        let { onChange } = this.props;
        let creationData = date ? date.creationData() : null;
        let error = false;
        if (creationData) {
            let inp = creationData.input;
            if (inp && typeof (inp) == "string" && inp.indexOf("_") < 0 && !date.isValid()) { //not fullfill && invalid date -> error
                error = true;
            }
        }

        this.setState({ error: error }, () => {
            if (date) {
                onChange(date.format("YYYY-MM-DDTHH:mm:ss"));
            } else {
                onChange(null);
            }
        })
    }

    _formatDate = (date) => {
        if (date) {
            let stringDate = date.toString();
            let mday = moment(stringDate);
            let display = mday.format(this.props.format);
            return display;
        }
        else {
            return null;
        }
    }

    consumerContent() {
        const { i18n, value, onChange, classes, fullWidth, clearable, onKeyDown, errorMessage, noSuccess, format, ...others } = this.props;
        let error = this.props.error !== undefined ? this.props.error : this.state.error;
        console.log(1, moment(value));
        return (
            <div>
                <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
                    <DPicker
                        ToolbarComponent={({ date }) => {
                            return (
                                <div className={classes.toolbar}>
                                    {this._formatDate(date)}
                                </div>
                            )
                        }
                        }
                        format={format}
                        placeholder={format}
                        value={value ? moment(value) : null}
                        className={cx({
                            [classes.fullWidth]: fullWidth,
                            [classes.root]: true,
                            [classes.error]: error,
                            [classes.success]: error === false && !noSuccess,
                        })}
                        onChange={this._onChangeDate}
                        clearable={clearable}
                        {...others}
                        inputProps={{
                            onKeyDown: onKeyDown
                        }}
                        okLabel={"OK"}
                        todayLabel={"Today"}
                        cancelLabel={"Cancel"}
                        clearLabel={"Xóa"}
                    />
                </MuiPickersUtilsProvider>
                {
                    error
                        ?
                        <div className={classes.errorMessage}>{errorMessage}</div>
                        : null
                }
            </div>
        )
    }
}

const styles = {
    fullWidth: {
        width: '100%'
    },
    toolbar: {
        height: '100px',
        backgroundColor: "#3f51b5",
        fontSize: '2.125rem',
        lineHeight: '100px',
        color: 'white',
        textAlign: 'center',
        fontWeight: 400
    },
    root: {
        height: "40px",
        "& > div": {
            height: "inherit"
        }
    },
    error: {
        "& fieldset": {
            border: "solid 1px " + "red" + " !important",
        }
    },
    success: {
        "& fieldset": {
            border: "solid 1px " + "green" + " !important",
        }
    },
    errorMessage: {
        color: 'red',
        padding: '4px 0px',
        fontSize: '11px',
        textTransform: 'uppercase',
    }
}
export default withStyles(styles)(DatePicker)
DatePicker.displayName = 'DatePicker';





