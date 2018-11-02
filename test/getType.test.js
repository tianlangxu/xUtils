const getType = require('../dist/xUtils').getType;
const expect = require('chai').expect;

describe('getType 单元测试',  () => {
    it ('检测String类型 输出:String',  () => {
        expect(getType("123")).to.be.equal('String');
    }),
    it ('检测Number类型 输出:Number',  () => {
        expect(getType(123)).to.be.equal('Number');
    }),
    it ('检测Boolean类型 输出:Boolean',  () => {
        expect(getType(true)).to.be.equal('Boolean');
    }),
    it ('检测Object类型 输出:Object',  () => {
        expect(getType({a:123})).to.be.equal('Object');
    }),
    it ('检测Array类型 输出:Array',  () => {
        expect(getType([{a:1},{a:2}])).to.be.equal('Array');
    }),
    it ('检测Undefined类型 输出:Undefined',  () => {
        expect(getType(undefined)).to.be.equal('Undefined');
    }),
    it ('检测Null类型 输出:Null',  () => {
        expect(getType(null)).to.be.equal('Null');
    })
});
