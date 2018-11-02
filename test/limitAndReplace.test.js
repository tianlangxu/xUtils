const limitAndReplace = require('../dist/xUtils').limitAndReplace;
const expect = require('chai').expect;


let strDefault = "这是一段测试文字，主要看看替换效果";

describe("limitAndReplace 单元测试:",  () => {
    before( () => {
        console.log("测试内容  ----------->  " + strDefault);
    }),
    it("默认文字替换,str:0,max:3，输出为:这是一...", () => {
        expect(limitAndReplace({
            str: strDefault,
            start: 0,
            max: 3
        })).to.be.equal("这是一...");
    }),
    it("默认文字替换,start:0,max:3,end:3,输出为:这是一...换效果", () => {
        expect(limitAndReplace({
            str: strDefault,
            start: 0,
            max: 3,
            end: 3
        })).to.be.equal("这是一...换效果");
    }),
    it("默认文字替换,start:0,max:3,end:3,fileterStr:'***',输出为:这是一***换效果", () => {
        expect(limitAndReplace({
            str: strDefault,
            start: 0,
            max: 3,
            end: 3,
            fileterStr: "***"
        })).to.be.equal("这是一***换效果");
    })
});