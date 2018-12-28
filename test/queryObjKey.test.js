const queryObjKey = require('../dist/xUtils').queryObjKey;
const expect = require('chai').expect;

let obj = {
	name: '张三',
	agess: '123',
	age: 12
}



describe(`queryObjKey 单元测试:`, () => {
    it(`字符串查找对象中是否存在age开头的key值--->${JSON.stringify(obj)}`, () => {
        expect(queryObjKey(obj,'age').length).to.be.equal(2);
    });

    it(`字符串查找对象中是否存在age的key值--->${JSON.stringify(obj)}`, () => {
        expect(queryObjKey(obj,'age', true)[0]).to.be.equal('age');
        expect(queryObjKey(obj,'age', true).length).to.be.equal(1);
    });
    it(`正则表达式查找对象中是否存在age的key值  /age/gi --->${JSON.stringify(obj)}`, () => {
        expect(queryObjKey(obj,/age/gi, true).length).to.be.equal(2);
    });
});