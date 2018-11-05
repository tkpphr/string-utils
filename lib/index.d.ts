/*!
 *  string-utils
 *  Copyright (c) 2018 tkpphr
 *  Released under the MIT License.
 */
export declare function startsWith(src: string, target: string): boolean;
export declare function endsWith(src: string, target: string): boolean;
export declare function repeatString(str: string, count: number): string;
export declare function zeroFormat(num: number, count: number): string;
export declare function urlFromFullFileName(url: string): string;
export declare function urlFromFileName(url: string): string;
export declare function toAbsoluteUrl(url: string): string;
export declare function toObjectUrl(buffer: ArrayBuffer, mimeType: string): string;
export declare function toBase64(buffer: ArrayBuffer, mimeType: string): string;
