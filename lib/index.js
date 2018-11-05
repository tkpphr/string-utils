"use strict";
/*!
 *  string-utils
 *  Copyright (c) 2018 tkpphr
 *  Released under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function startsWith(src, target) {
    var str = " " + src;
    return str.indexOf(" " + target) !== -1;
}
exports.startsWith = startsWith;
function endsWith(src, target) {
    var str = src + " ";
    return str.indexOf(target + " ") !== -1;
}
exports.endsWith = endsWith;
function repeatString(str, count) {
    if (count <= 1) {
        return str;
    }
    var repeat = "";
    for (var i = 0; i < count; i++) {
        repeat += str;
    }
    return repeat;
}
exports.repeatString = repeatString;
function zeroFormat(num, count) {
    var str = num.toString();
    if (str.length >= count) {
        return num.toString();
    }
    else {
        return "" + repeatString("0", count - str.length) + str;
    }
}
exports.zeroFormat = zeroFormat;
function urlFromFullFileName(url) {
    if (endsWith(url, "/")) {
        return "";
    }
    var split = toAbsoluteUrl(url).split("/");
    return split[split.length - 1];
}
exports.urlFromFullFileName = urlFromFullFileName;
function urlFromFileName(url) {
    var fullFileName = urlFromFullFileName(url);
    var index = fullFileName.lastIndexOf(".");
    if (index === -1) {
        return fullFileName;
    }
    else {
        return fullFileName.slice(0, index);
    }
}
exports.urlFromFileName = urlFromFileName;
function toAbsoluteUrl(url) {
    var a = document.createElement("a");
    a.href = url;
    return a.href;
}
exports.toAbsoluteUrl = toAbsoluteUrl;
function toObjectUrl(buffer, mimeType) {
    return URL.createObjectURL(new Blob([buffer], { type: mimeType }));
}
exports.toObjectUrl = toObjectUrl;
function toBase64(buffer, mimeType) {
    var bytes = new Uint8Array(buffer);
    var binaryData = "";
    for (var i = 0, len = bytes.byteLength; i < len; i++) {
        binaryData += String.fromCharCode(bytes[i]);
    }
    return "data:" + mimeType + ";base64," + window.btoa(binaryData);
}
exports.toBase64 = toBase64;
