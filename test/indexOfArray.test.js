const indexOfArray = require('../dist/xUtils').indexOfArray;
const expect = require('chai').expect;

let arr1 = [1,2,3,4,5];
let arr2 = [{a:1},{a:2},{a:3},{a:4},{a:5}]

describe('indexOfArray 单元测试',  () => {
    it (`数组[1,2,3,4,5],查找2的下标 输出:1`,  () => {
        expect(indexOfArray(arr1, '', 2)).to.be.equal(1);
    }),
    it (`数组[{a:1},{a:2},{a:3},{a:4},{a:5}], 查找{a:2}的下标 输出:1`,  () => {
        expect(indexOfArray(arr2, 'a', 2)).to.be.equal(1);
    })
});
