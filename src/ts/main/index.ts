/*!
 *  string-utils
 *  Copyright (c) 2018 tkpphr
 *  Released under the MIT License.
 */

export function startsWith(src: string, target: string) {
    const str = " " + src;
    return str.indexOf(" " + target) !== -1;
}

export function endsWith(src: string, target: string) {
    const str = src + " ";
    return str.indexOf(target + " ") !== -1;
}

export function repeatString(str: string, count: number) {
    if (count <= 1) {
        return str;
    }
    let repeat = "";
    for (let i = 0; i < count; i++) {
        repeat += str;
    }
    return repeat;
}

export function zeroFormat(num: number, count: number) {
    const str = num.toString();
    if (str.length >= count) {
        return num.toString();
    } else {
        return `${repeatString("0", count - str.length)}${str}`;
    }
}

export function urlFromFullFileName(url: string) {
    if (endsWith(url, "/")) {
        return "";
    }
    const split = toAbsoluteUrl(url).split("/");
    return split[split.length - 1];
}

export function urlFromFileName(url: string) {
    const fullFileName = urlFromFullFileName(url);
    const index = fullFileName.lastIndexOf(".");
    if (index === -1) {
        return fullFileName;
    } else {
        return fullFileName.slice(0, index);
    }
}

export function toAbsoluteUrl(url: string) {
    const a = document.createElement("a");
    a.href = url;
    return a.href;
}

export function toObjectUrl(buffer: ArrayBuffer, mimeType: string) {
    return URL.createObjectURL(new Blob([buffer], {type: mimeType}));
}

export function toBase64(buffer: ArrayBuffer, mimeType: string) {
    const bytes = new Uint8Array(buffer);
    let binaryData = "";
    for (let i = 0, len = bytes.byteLength; i < len; i++) {
      binaryData += String.fromCharCode(bytes[i]);
    }
    return "data:" + mimeType + ";base64," + window.btoa(binaryData);
}
