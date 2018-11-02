const parseParams = require('../dist/xUtils').parseParams;
const expect = require('chai').expect;


let url = "http://www.baidu.com?name=zhangsan&age=10&addrr=北京市海淀区";
let params = { name: 'zhangsan', age: '10', addrr: '北京市海淀区' }

describe(`limitAndReplace 单元测试:`,  () => {
    it(`解析${url},得到结果: { name: 'zhangsan', age: '10', addrr: '北京市海淀区' }`, () => {
        expect(parseParams(url)).to.deep.equal(params);
    })
});