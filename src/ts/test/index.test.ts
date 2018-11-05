import * as StringUtils from "../main/index";

describe("Test", () => {
    const url = "http://example.com/image.jpg";
    it("startsWithTest", () => {
        expect(StringUtils.startsWith(url, "http://")).toBe(true);
        expect(StringUtils.startsWith(url, "http://example")).toBe(true);
        expect(StringUtils.startsWith(url, "http://examples")).toBe(false);
        expect(StringUtils.startsWith(url, "image.jpg")).toBe(false);
    });
    it("endsWithTest", () => {
        expect(StringUtils.endsWith(url, "jpg")).toBe(true);
        expect(StringUtils.endsWith(url, "image.jpg")).toBe(true);
        expect(StringUtils.endsWith(url, "org/image.jpg")).toBe(false);
        expect(StringUtils.endsWith(url, "http://")).toBe(false);
    });
    it("repeatStringTest", () => {
        expect(StringUtils.repeatString("abc", 3)).toBe("abcabcabc");
        expect(StringUtils.repeatString("x", 5)).toBe("xxxxx");
    });
    it("zeroFormatTest", () => {
        expect(StringUtils.zeroFormat(1, 1)).toBe("1");
        expect(StringUtils.zeroFormat(1, 2)).toBe("01");
        expect(StringUtils.zeroFormat(10, 2)).toBe("10");
        expect(StringUtils.zeroFormat(100, 4)).toBe("0100");
        expect(StringUtils.zeroFormat(1000, 4)).toBe("1000");
        expect(StringUtils.zeroFormat(1000, 7)).toBe("0001000");
        expect(StringUtils.zeroFormat(99999, 3)).toBe("99999");
    });
    it("urlFromFullFileNameTest", () => {
        expect(StringUtils.urlFromFullFileName("")).toBe("");
        expect(StringUtils.urlFromFullFileName("http://example.com/")).toBe("");
        expect(StringUtils.urlFromFullFileName(url)).toBe("image.jpg");
    });
    it("urlFromFileNameTest", () => {
        expect(StringUtils.urlFromFileName(url)).toBe("image");
    });
});
