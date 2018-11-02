const deepArrayUpdateKey = require('../dist/xUtils').deepArrayUpdateKey;
const expect = require('chai').expect;

let arr = [{name:'zhangsan', childrenList: [{name: 'lisi', childrenList: []}]}];
let upArr = [{name:'zhangsan', children: [{name: 'lisi', children: []}]}];



describe(`deepArrayUpdateKey 单元测试:`, ()=>{
    it(`修改数组[{name:'zhangsan', childrenList: [{name: 'lisi', childrenList: []}]}]中的childrenList为children`, ()=>{
        deepArrayUpdateKey(arr, 'childrenList', 'children')
        expect(arr[0]).to.have.include.keys("children");
        expect(arr[0]["children"][0]).to.have.include.keys("children");
    });
});