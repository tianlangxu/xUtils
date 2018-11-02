const handlePrams = require('../dist/xUtils').handlePrams;
const expect = require('chai').expect;

let obj = {'a':1,'name':'zhangsan'}

describe('handlePrams 单元测试',  () => {
    it (`对象{'a':1,'name':'zhangsan'} 输出:a=1&name=zhangsan`,  () => {
        expect(handlePrams(obj)).to.be.equal('a=1&name=zhangsan');
    })
});
