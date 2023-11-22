import { globalStyle, typographyStyles } from "StyleConfig";
import cx from "classnames";
import { getColorFromName, getDarkerColor, getTextColorWithBackground } from "general/CleanNodeHelper";
import ehealth from "general/i3app";
import $ from "jquery";
import _, { isEqual } from "lodash";
import moment from "moment";
import "moment/locale/vi";
import printJS from "print-js";
import React from 'react';
const helper = {};

helper.cx = cx;
helper.guid = ehealth.guid;
helper.getColorFromName = getColorFromName;
helper.getTextColorWithBackground = getTextColorWithBackground;
helper.blockUI = ehealth.blockUI;
helper.innerHeight = () => {
    return window.innerHeight + 'px';
};
function setBaseProto() {
    Date.prototype.addDays = function (days) {
        let date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    };
}
helper.setBaseProto = setBaseProto;

helper.setLanguage = (str) => {
    moment.locale(str);
};

// date formatting
function _displayDateByFormat(date, format) {
    if (date) {
        return moment(date).format(format);
    } else {
        return "-";
    }
}
helper.displayDateNoYear = (date) => _displayDateByFormat(date, "DD/MM");
helper.displayDate = (date) => _displayDateByFormat(date, "DD/MM/YYYY");
helper.displayDateTimeWoYear = (date) => _displayDateByFormat(date, "DD/MM HH:mm");
helper.displayFullDateTimeWoYear = (date) => _displayDateByFormat(date, "DD/MM HH:mm:ss");
helper.displayDateTime = (date) => _displayDateByFormat(date, "DD/MM/YYYY HH:mm");
helper.displayFullDateTime = (date, withMs = false) => _displayDateByFormat(date, withMs ? "DD/MM/YYYY HH:mm:ss.SSS" : "DD/MM/YYYY HH:mm:ss");
helper.displayTime = (date) => _displayDateByFormat(date, "HH:mm");


helper.deepClone = (obj) => (Array.isArray(obj) ? $.extend(true, [], obj) : $.extend(true, {}, obj));
helper.deepCompare = (obj1, obj2) => isEqual(obj1, obj2);

helper.parseNumber = (value, defaultValue) => {
    let _value = parseInt(value) || defaultValue;
    return _value;
};
helper.formatMoney = (money, hiddenUnit = false) => {
    if (typeof (money) != "number") {
        return "-";
    }
    let value = 0;
    if (money.toString().includes(".")) {
        value = (money).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
    else {
        value = (money).toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    if (hiddenUnit == false) {
        value += "đ";
    }
    return value;
};

helper.formatDecimal = (number, digit) => {
    if (number.toString().includes(".")) {
        number = (number).toFixed(digit).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
    else {
        number = (number).toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return number;
}

// dành cho trang dược D&C
helper.formatNumberExact = (number) => {
    number = number * 10000;
    var temp = parseInt(number);
    temp = temp / 10000;
    return temp;
}
helper.formatBatchDate = (value) => {
    if ((value ?? "").includes("0001-01-01")) {
        return "";
    }
    return helper.displayDate(value);
};

helper.addDays = (currentDate, day) =>
    moment(currentDate, "YYYY-MM-DD HH:mm:ss").add(day, "days").format("YYYY-MM-DD HH:mm:ss");
//ext start with .
helper.isImage = (ext) => {
    var arr = [".gif", ".png", ".jpg", ".jpeg", ".bmp", ".tiff", ".svg"];
    var x = ext.toLowerCase();
    return arr.indexOf(x) >= 0;
};

//ext start with .
helper.isVideo = (ext) => {
    var arr = [".webm", ".mkv", ".flv", ".mp4", ".3gp"];
    var x = ext.toLowerCase();
    return arr.indexOf(x) >= 0;
};
export function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

//lấy các dòng trong props (TableItem hoặc ActionTableItem) theo điều kiện là key phải nằm trong selectedTableRow (các phần tử được chọn mà master table trả ra)
export function getPropListBySelectedTableRow(propList, selectedTableRow) {
    let selectedKeys = selectedTableRow.map((i) => i.dataKey.key);

    let result = propList.filter((i) => selectedKeys.indexOf(i.dataKey.key) >= 0);
    return result;
}

export function calculateDayBetweenToDate(startDate, endDate) {
    let start = moment(startDate).format("YYYY-MM-DD");
    let end = moment(endDate).format("YYYY-MM-DD");
    let days = moment(end).diff(start, "day");
    return days;
}

export function getValueFromPaddingOrMargin(str) {
    return globalStyle[`${str}MarginAndPadding`];
}

export function getValueFromFontSize(str) {
    return typographyStyles[`${str}FontSize`];
}

export function getValueFromFontWeight(str) {
    return globalStyle.fontWeightValues[str];
}

export function getValueFromBorderRadius(str) {
    return typographyStyles[`${str}Radius`];
}
export function getValueFromBorderWidth(str) {
    return globalStyle[`${str}BorderWidth`];
}

export function getDarkerColorFromName(colorName, level) {
    if (level > 3 || level < -3) {
        throw "getDarkerColorFromName receive level from -3 to 3";
    }

    let colorCode = getColorFromName(colorName);
    return getDarkerColor(colorCode, level * 10);
}

export function filterObject(obj, value, fields = [], keepObj = true) {
    //keep khi object con ko chứa từ khóa có giữ lại hay ko
    if (!typeof obj === "object") throw "obj parameter must be object type!";
    if (!Array.isArray(fields)) throw "field parameter must be array type!";
    if (!typeof keepObj === "boolean") throw "keepObj parameter must be boolean type!";
    let _obj = $.extend(true, Array.isArray(obj) ? [] : {}, obj);
    return _filterObject(_obj, value, fields, keepObj);
}

function _filterObject(obj, value, fields, keepObj) {
    let _obj = {};
    let _okChildren = false;
    let _okParent = false;
    let keys = Object.keys(obj);
    keys.forEach((k) => {
        if (!_okParent) {
            if (typeof obj[k] !== "object" || obj[k] == null) {
                if (Array.isArray(fields) && fields.length > 0) {
                    if (textContains(obj[k], value) && fields.some((f) => f == k)) _okParent = true;
                } else if (textContains(obj[k], value)) _okParent = true;
                _obj[k] = obj[k];
            } else {
                let _data = filterObject(obj[k], value, fields);
                if (Object.keys(_data).length > 0) {
                    _okChildren = true;
                    _obj[k] = _data;
                } else if (Array.isArray(obj[k])) _obj[k] = [];
                else if (keepObj && !Array.isArray(obj)) _obj[k] = obj[k];
            }
        }
    });
    if (_okParent) {
        _obj = obj;
    }
    if (Array.isArray(obj)) {
        _obj = Object.values(_obj);
    }
    _obj = _okChildren || _okParent ? _obj : Array.isArray(obj) ? [] : {};
    return _obj;
}

export function textContains(target, searchValue) {
    if (target != null && searchValue != null) {
        let _target = ehealth.cleanAccents(target.toString().toLowerCase()).trim();
        let _searchValue = ehealth.cleanAccents(searchValue.toString().toLowerCase()).trim();
        return _target.includes(_searchValue);
    } else return false;
}

export function flatListByProperty(list, propertyContainList) {
    let flattedList = [];
    for (let i = 0; i < list.length; i++) {
        list[i].renderType = "colSpan";
        flattedList.push({
            data: list[i],
        });
        flattedList = flattedList.concat(propertyContainList(i));
    }
    return flattedList;
}
export default helper;

function createRow(
    data,
    key,
    headerLevel,
    footerLevel,
    isSelectable,
    isDataItem,
    dataKey,
    isDescriptionRow = false,
    descriptionRows = null,
    rowIndex = null,
) {
    let _isFooter = footerLevel != null && headerLevel == null;
    return {
        data,
        key,
        headerLevel,
        footerLevel,
        isHeader: headerLevel != null && footerLevel == null,
        isFooter: _isFooter,
        isDataRow: !isDescriptionRow && footerLevel == null && headerLevel == null,
        isSelectable: !isDescriptionRow && isSelectable,
        isDataItem: !isDescriptionRow && (_isFooter ? false : isDataItem),
        dataKey: dataKey,
        isDescriptionRow,
        descriptionRows,
        rowIndex,
    };
}

function getKey(key, headerLevel, footerLevel) {
    if (headerLevel != null) {
        return key;
    }
    if (footerLevel != null) {
        return "footer-" + key;
    }
    return key;
}

export function readKey(key, headerLevel, footerLevel) {
    if (headerLevel != null) {
        return key;
    }
    if (footerLevel != null) {
        return key.split("footer-")[1];
    }
    return key;
}

function getMaskObjJSON(data) {
    var maskObj = {};

    Object.keys(data).forEach(key => {
        var isObject = !!data[key] && typeof (data[key]) == "object";

        if (!isObject) {
            maskObj[key] = data[key] ?? null;
        }
    })

    return JSON.stringify(maskObj);
}

function createRowFromGroup(group, headerLevel, footerLevel, newIndex) {
    if (!group.dataKey.key || group.dataKey.key.length == 0) {
        var { items, descriptions, ...realData } = group.data;

        group.dataKey.key = getMaskObjJSON(realData);
    }
    let key = getKey(group.dataKey.key, headerLevel, footerLevel);
    return createRow(
        group.data,
        key,
        headerLevel,
        footerLevel,
        group.isSelectable,
        group.isDataItem,
        group.dataKey,
        false,
        group.descriptions,
        (group.isDataItem && typeof newIndex === 'function') ? newIndex() : null,
    );
}

export function groupedListToFlatted(groupedList) {
    let index = 0;
    function newIndex() {
        return index++;
    }

    return groupedListToFlattedImpl(groupedList, newIndex, 1)
}

function groupedListToFlattedImpl(groupedList, newIndex, level) {
    let totalFlattedList = [];

    groupedList.forEach((grouped) => {
        if (grouped.items != null) {
            //co' con
            let subFlattedList = [];
            subFlattedList.unshift(createRowFromGroup(grouped, level, null, newIndex));

            subFlattedList = subFlattedList.concat(groupedListToFlattedImpl(grouped.items, newIndex, level + 1));

            subFlattedList.push(createRowFromGroup(grouped, null, level, newIndex));

            totalFlattedList = totalFlattedList.concat(subFlattedList);
        } else {
            // ko co con
            totalFlattedList.push(createRowFromGroup(grouped, null, null, newIndex));
            if (grouped.descriptions != null) {
                totalFlattedList = totalFlattedList.concat(

                    grouped.descriptions.map((resRow, index) => {
                        if (!resRow.dataKey.key || resRow.dataKey.key.length == 0) {
                            var { items, descriptions, ...realData } = resRow.data;
                            resRow.dataKey.key = getMaskObjJSON(realData) + "_" + index;
                        }
                        return createRow(
                            resRow.data,
                            getKey(resRow.dataKey.key, null, null),
                            null,
                            null,
                            false,
                            false,
                            resRow.dataKey,
                            true
                        );
                    })
                );
            }
        }
    });
    return totalFlattedList;
}

export function phoneValid(phoneNumber) {
    return phoneNumber && phoneNumber.search(/^(\+84\d{9}|0\d{9})$/) == 0;
}

export function emailValid(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

helper.getTagList = (searchModel, config) => {
    let result = [];
    config.forEach((i) => {
        result.push(i.getChildrenTagList(searchModel));
    });
    return result;
};

export function checkDate(date) {
    return date instanceof Date && date != "Invalid Date";
}
export function compareYear(firstDate, secondDate) {
    if (!checkDate(firstDate)) return -1;
    if (!checkDate(secondDate)) return -1;
    if (firstDate.getFullYear() > secondDate.getFullYear()) return 1;
    if (firstDate.getFullYear() < secondDate.getFullYear()) return -1;
    return 0;
}
export function compareMonth(firstDate, secondDate) {
    if (!checkDate(firstDate)) return -1;
    if (!checkDate(secondDate)) return -1;
    var r = compareYear(firstDate, secondDate);
    if (r != 0) return r;
    if (firstDate.getMonth() > secondDate.getMonth()) return 1;
    if (firstDate.getMonth() < secondDate.getMonth()) return -1;
    return 0;
}
export function compareDate(firstDate, secondDate) {
    if (!checkDate(firstDate)) return -1;
    if (!checkDate(secondDate)) return -1;
    var r = compareMonth(firstDate, secondDate);
    if (r != 0) return r;
    if (firstDate.getDate() > secondDate.getDate()) return 1;
    if (firstDate.getDate() < secondDate.getDate()) return -1;
    return 0;
}

function createFrame(content, onloadCallback, isSrc) {
    var frame = document.createElement("iframe");
    frame.name = helper.guid.get();
    //frame.style.visibility = "hidden";
    if (isSrc) {
        frame.src = content;
    }
    document.body.appendChild(frame);
    var frameDoc = frame.contentWindow
        ? frame.contentWindow
        : frame.contentDocument.document
            ? frame.contentDocument.document
            : frame.contentDocument;
    frameDoc.document.open();

    frameDoc.document.write(content);
    frameDoc.document.close();
    frameDoc.onload = () => { onloadCallback(frame); }
    return frame;
}

export function printFromHtml(html, callback) {
    createFrame(html, (frame) => {
        _printFrame(frame, callback);
    });
}

export function printFromUrl(url, callback) {
    createFrame(url, (frame) => {
        _printFrame(frame, callback);
    }, true);
}

function _printFrame(frame, callback) {
    window.frames[frame.name].print();
    document.body.removeChild(frame);
    if (typeof callback == "function") {
        callback();
    }
}

export function printMultipleHtml(htmls) {
    htmls.forEach((html, index) => {
        printFromHtml(html);
    });
}


helper.arrayToObject = (array, keyField) => {
    return array.reduce((obj, item) => {
        obj[item[keyField]] = item;
        return obj;
    }, {});
};
// Chuyển chữ hoa đầu
helper.ucwords = (str) => {
    return str.replace(/\b./g, function (m) {
        return m.toUpperCase();
    });
};

helper.detectChatGroupOnline = (chatGroup) => {
    if (chatGroup.chatMembers) {
        return chatGroup.chatMembers.filter((i) => i.isOnline == true).length > 1;

    } else {
        return false;
    }
};

//get jwt ra và truyền vào hàm callback
export const processWithJwt = (callback) => {
    if (window.jwtObj) {
        callback(window.jwtObj);
    } else {
        $.ajax({
            url: "/api/account/GetJwt",
            method: "GET",
            success: (ack) => {
                window.jwtObj = ack.data;
                callback(window.jwtObj);
            },
        });
    }
};

helper.convertToUnSign = (str) => {
    if (str === null || str === undefined) {
        return str;
    }
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g, " ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
    return str;
};

helper.separateFullName = (fullName) => {
    if (!fullName || !fullName.trim()) {
        return { surname: "", name: "", fullName: "" };
    }
    let splits = fullName.replace(/\s+/g, " ").trim().split(" ");
    let surname = "";
    let name = "";

    if (splits.length == 1) {
        name = splits[0];
    }
    else {
        surname = splits[0];
        name = splits.slice(1).join(" ");
    }
    return { surname: surname, name: name, fullName: fullName };
};

helper.checkDateTimeDefault = (datetime) => {
    if (!datetime) {
        return true;
    }
    return moment(datetime).format("DD/MM/YYYY") == "01/01/0001";
};
helper.tryParseJSON = function (jsonString) {
    try {
        var o = JSON.parse(jsonString);
        if (o && typeof o === "object") {
            return o;
        }
    } catch (e) { }
    return false;
};
const secondsDiff = (dateBefore, dateAfter) => {
    return Math.floor((dateAfter - dateBefore) / 1000);
};
const minutesDiff = (dateBefore, dateAfter) => {
    return Math.floor(secondsDiff(dateBefore, dateAfter) / 60);
};
const hoursDiff = (dateBefore, dateAfter) => {
    return Math.floor(minutesDiff(dateBefore, dateAfter) / 60);
};
const dateDiff = (dateBefore, dateAfter) => {
    return Math.floor(hoursDiff(dateBefore, dateAfter) / 24);
};
const monthsDiff = (dateBefore, dateAfter) => {
    return Math.floor(dateDiff(dateBefore, dateAfter) / 30);
};
const yearsDiff = (dateBefore, dateAfter) => {
    return Math.floor(monthsDiff(dateBefore, dateAfter) / 365);
};
helper.yearsDiff = yearsDiff;
helper.monthsDiff = monthsDiff;
helper.dateDiff = dateDiff;
helper.hoursDiff = hoursDiff;
helper.minutesDiff = minutesDiff;
helper.secondsDiff = secondsDiff;
helper.timeNotification = (datetime, suffix = "trước") => {
    const now = new Date(Date.now());
    const time = moment(datetime).toDate();
    let timeString = "";
    if (yearsDiff(time, now) > 0) {
        timeString = `${yearsDiff(time, now)} năm`;
    } else if (monthsDiff(time, now) > 0) {
        timeString = `${monthsDiff(time, now)} tháng`;
    } else if (dateDiff(time, now) > 0) {
        if (dateDiff(time, now) >= 7) timeString = `${Math.floor(dateDiff(time, now) / 7)} tuần`;
        else timeString = `${dateDiff(time, now)} ngày`;
    } else if (hoursDiff(time, now) > 0) {
        timeString = `${hoursDiff(time, now)} giờ`;
    } else if (minutesDiff(time, now) > 0) {
        timeString = `${minutesDiff(time, now)} phút`;
    } else if (secondsDiff(time, now) > 0) {
        if (secondsDiff(time, now) > 30) timeString = `${secondsDiff(time, now)} giây`;
        else timeString = "Vừa xong";
    }
    if (suffix != null && timeString != "Vừa xong") return `${timeString} ${suffix}`;
    else return timeString;
};


helper.reloadPatientImprest = (
    patientId,
    patientInformationId,
    isExternalPatient,
    ajaxFunc,
    successCallback,
    signalRCallback
) => {
    ajaxFunc({
        url: `/api/patient/GetImpressByPatientId`,
        data: {
            patientId: patientId,
            patientInformationId: patientInformationId,
            isExternalPatient: isExternalPatient
        },
        success: (ack) => {
            successCallback && successCallback(ack, signalRCallback);
        },
        unsuccess: (ack) => {
            signalRCallback && signalRCallback();
        },
        error: () => {
            signalRCallback && signalRCallback();
        }
    });
}


export function checkSpecialSocialInsuranceCode(
    code, // mã bảo hiểm
    fullName, //
    birthday, // ngày sinh
) {
    let errorMessage = null;
    let isSuccess = true;
    let separate = helper.separateFullName(fullName);
    if (!code || code.trim() == "") {
        errorMessage = "Nhập mã thẻ"
        isSuccess = false;
    }
    else if (code.length < 100) {
        if (!separate.name || !separate.surname) {
            errorMessage = "Nhập thông tin họ tên";
            isSuccess = false;
        }
        else if (!birthday || helper.checkDateTimeDefault(birthday)) {
            errorMessage = "Nhập ngày sinh";
            isSuccess = false;
        }
    }
    return { errorMessage: errorMessage, isSuccess: isSuccess };
}


helper.isNullOrEmpty = (code) => {
    return !code || code.trim() == "";
}

helper.cancelClickPropagation = (e) => {
    if (!e)
        e = window.event;

    //IE9 & Other Browsers
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    //IE8 and Lower
    else {
        e.cancelBubble = true;
    }
}

helper.getColorFromDataChart = (value, acceptableRanges) => {
    if (acceptableRanges == undefined) {
        throw "Cần truyền acceptableRanges";
    }
    acceptableRanges.sort((a, b) => a.value - b.value);

    let result = null;
    for (let i = acceptableRanges.length - 1; i >= 0; i--) {
        const rangeValue = acceptableRanges[i].value;

        if (value < rangeValue) {
            result = getColorFromName(acceptableRanges[i].displayColor);
        } else {
            if (i == acceptableRanges.length - 1)
                result = getColorFromName(acceptableRanges[i].displayColor);
        }
    }
    return result;
}

helper.displayHourAndMin = (timespan) => {
    const t = timespan.split(":");
    if (t.length != 3)
        throw new ("This is not timespan value");
    return t[0] + ":" + t[1];
}

helper.distinctArray = (array, comparer) => {
    var output = [];
    array.forEach((item) => {
        let contained = output.some((oitem) => { return comparer(oitem, item); });
        if (contained === false) {
            output.push(item);
        }
    });
    return output;
}

helper.getHoursMinsAndSecs = (totalSeconds) => {
    let seconds = totalSeconds;
    const hours = parseInt(seconds / 3600);
    seconds = seconds % 3600;
    const minutes = parseInt(seconds / 60);
    seconds = seconds % 60;

    return { hours, minutes, seconds };
}

helper.getDisplayStringForHoursMinsAndSecs = (seconds) => {
    const result = helper.getHoursMinsAndSecs(seconds);
    let str = "";

    if (result.hours !== 0) {
        str += result.hours + "h ";
    }

    if (result.minutes !== 0) {
        str += result.minutes + "m ";
    }
    str += result.seconds + "s";
    return str;
}

helper.checkPageTest = () => {
    return window.location.host.toLocaleLowerCase().includes("test");
}

helper.isNotNullAndIsNotUndefined = (...args) => {
    let result = true;
    for (let i = 0; i < args.length; i++) {
        const x = args[i];
        result = result && x != null && x != undefined
    }
    return result;
}
helper.formatTextUpperCase = (words) => {
    var separateWord = words.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
        separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
            separateWord[i].substring(1);
    }
    return separateWord.join(' ');
}

export function printMultipleUrl(urlInfos, callback) {
    // debugger;
    sortUrls(urlInfos);
    printMultiUrl(urlInfos, 0, callback);
}

function sortUrls(urls) {
    urls.sort((u1, u2) => {
        if (u1.printType == EPrintType.Pdf.value) {
            return -1;
        }
        if (u2.printType == EPrintType.Html.value) {
            return 1;
        }
        return 0;
    })
}

function printMultiUrl(urlInfos, index, callback) {
    if (index < urlInfos.length) {
        let urlInfo = urlInfos[index];
        if (urlInfo.printType == EPrintType.Html.value) {
            ehealth.printer.active(urlInfos[index].url, () => {
                printMultiUrl(urlInfos, index + 1, callback)
            });
        }
        else {
            let type = "";
            switch (urlInfo.printType) {
                case EPrintType.Pdf.value:
                    type = EPrintType.Pdf.type;
                    break;
                case EPrintType.Image.value:
                    type = EPrintType.Image.type;
                    break;
                case EPrintType.Json.value:
                    type = EPrintType.Json.type;
                    break;
            }
            printJS({
                printable: urlInfos[index].url,
                type: type,
                onPrintDialogClose: () => {
                    printMultiUrl(urlInfos, index + 1, callback)
                }
            });
        }
    } else {
        if (typeof (callback) === "function")
            callback();
    }
}


export function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export function isJson(item) {
    item = typeof item !== "string"
        ? JSON.stringify(item)
        : item;

    try {
        item = JSON.parse(item);
    } catch (e) {
        return false;
    }

    if (typeof item === "object" && item !== null) {
        return true;
    }

    return false;
}

export function isNullOrUndefined(value) {
    return value === null || value === undefined;
}


export function uploadFile(manager, byte, fileName, beforeSend, successCallback) {
    let formData = new FormData();
    formData.append("file", dataURLtoFile(byte, fileName));
    $.ajax({
        url: ehealth.getPath("/api/EHealth/UploadFiles"),
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,
        beforeSend: beforeSend,
        success: (ack) => {
            if (ack.isSuccess == true) {
                typeof successCallback == "function" && successCallback(ack);
            }
            else {
                ack.errorMessage.forEach((e) => {
                    manager.error(e);
                });
            }
        },
        error: (xhr, status, err) => {
            //this.error("Lỗi");
            setTimeout(uploadFile, 5000); //retry after 5s
        },
    });
}

export function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
}

helper.build2FeeText = (hospitalFee, insuranceFee) => {
    return ({
        renderText: `${insuranceFee ? `${helper.formatMoney(insuranceFee, true)}đ / ` : ""}${helper.formatMoney(hospitalFee, true)}đ`,
        titleText: insuranceFee ? "Giá bảo hiểm / Giá bệnh viện" : "Giá bệnh viện",
    })
}


helper.round = (number, decimalPlace) => {
    const places = Math.pow(10, decimalPlace);
    const result = Math.round(number * places) / places;
    return result;
}

export const getActualMaterialModels = items => {
    let materials = [];
    items.forEach(m => {
        if (m.children) {
            materials = [...materials, ...m.children];
        }
        else {
            materials.push(m);
        }
    });
    return materials;
}
helper.checkEffectiveDateInsurance = (socialInsuranceCard) => {
    const now = new Date();
    const check = moment(socialInsuranceCard.fromDate).toDate() <= now;
    return check;
}

helper.round = (number, decimalPlace) => {
    const places = Math.pow(10, decimalPlace);
    const result = Math.round(number * places) / places;
    return result;
}

export const filterDataByKey = (arr, getKeySearch, searchValue) => {
    let _searchValue = helper.convertToUnSign(searchValue.toString().toLowerCase());
    return arr.filter(i => helper.convertToUnSign(getKeySearch(i).toString().toLowerCase()).includes(_searchValue));
}


export const getSortedColumnsByColumnConfig = (columnConfig, showingColumns) => {
    let result = _.sortBy(columnConfig, ['index']).map(i => i.key);
    if (showingColumns && showingColumns.length > 0) {
        return result.filter(i => showingColumns.includes(i));
    }
    return result;
}

export const isValidProp = (p) => {
    return p != null && p != undefined;
}

export const objectExtract = (obj, keys, exclude) => {
    var clone = Object.assign({}, obj);
    if (keys && (keys instanceof Array)) {
        for (var k in clone) {
            var hasKey = keys.indexOf(k) >= 0;
            if ((!hasKey && !exclude) || (hasKey && exclude)) {
                delete clone[k];
            }
        }
    }
    return clone;
};

export const minDate = (dates) => {
    return dates.reduce(function (a, b) { return new Date(a) <= new Date(b) ? a : b; });
}
export const maxDate = (dates) => {
    return dates.reduce(function (a, b) { return new Date(a) <= new Date(b) ? b : a; });
}

export const playSound = ({ url, listeners }) => {
    var audio = new Audio(url);

    if (listeners) {
        const { endCb, errorCb, loadStartCb, playCb, abortCb, catchCb } = listeners;

        audio.addEventListener("loadStart", () => {
            typeof (loadStartCb) == "function" && loadStartCb();
        });
        audio.addEventListener("play", (e) => {
            typeof (playCb) == "function" && playCb(e);
        });
        audio.addEventListener("error", (e) => {
            typeof (errorCb) == "function" && errorCb(e);
        });
        audio.addEventListener('ended', (e) => {
            typeof (endCb) == "function" && endCb(e);
        });
        audio.addEventListener('abort', (e) => {
            typeof (abortCb) == "function" && abortCb(e);
        })
        audio.play().catch((e) => {
            typeof (catchCb) == "function" && catchCb(e);
        });
    }
}

export const constructPageSizeList = (listPageSize) => {
    return (listPageSize.map(i => {
        return ({
            data: i,
            value: i,
            label: `${i} dòng/trang`,
            isDisabled: false,
            level: 0
        })
    }));
}

export const pageSize = [5, 10, 20, 50, 100, 500];
export const PageSizeList = constructPageSizeList(pageSize);

export function toChangePriceItems(serviceItems) {
    return serviceItems.map(({ index, quantity, privateInsuranceUnitFee, socialInsuranceUnitFee, unitId, isVirtual, children }) => ({
        index, quantity, privateInsuranceUnitFee, socialInsuranceUnitFee, unitId, isVirtual, children
    }))
}

export const selectable = (value, label, customFields = null) => ({ value, label, ...customFields });

export function copyable(text) {
    navigator.clipboard.writeText(text);
}


export function downloadJsonFile(content) {
    const contentType = 'text/plain';
    var a = document.createElement("a");
    var file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = "viewer.json";
    a.click();
}


export const specialCharRegex = /[\x00-\x08\x0B\x0C\x0E-\x1F]/g;



export const getUrlWithParams = (url, params) => {
    let result = url;
    if (params != null && Object.keys(params).length > 0) {
        result = `${result}?${new URLSearchParams(params).toString()}`;
    }

    return result;
}


export const getIconInfoFile = (ext) => {
    let icon = "far fa-file";
    let color = "blue5";
    if (ext) {
        if (helper.isImage(ext)) {
            icon = "far fa-image-polaroid";
            color = "red6";
        }
        else {
            switch (ext) {
                case ".pdf":
                    icon = "far fa-file-pdf";
                    color = "red5";
                    break;
            }
        }
    }
    return { icon: icon, color: color };
}


const configIconStyle = (classIcon, size, color) => ({ className: classIcon, size: size, color: color });



helper.sum = (arr, propSelector) => {
    return arr.map(propSelector).reduce((x, y) => {
        return x + y;
    }, 0);
}

export const openFile = (file) => {
    window.open(file.isImage ? file.imageUrl : file.downloadUrl, "_blank");
}

export function popupNextLocationModal(data, onCloseCallback, Component, baseConsumer) {
    baseConsumer.openModal(
        () => ({
            title: "Hướng dẫn bệnh nhân",
            body: (
                <Component
                    data={data}
                    onCloseCallback={onCloseCallback}
                />
            ),
        }),
        EModalType.Mini
    );
}


export function oneTrue(...bools) {
    return bools.some(x => x)
}
