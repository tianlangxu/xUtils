const modifyParams = require('../dist/xUtils').modifyParams;
const expect = require('chai').expect;

let modifyKey = {
  name: 'chageName',
  age: 'changeAge'
}

let obj1 = {name: 'zhangsan',age: 24,addr: '北京市昌平区',gender: '男'}

let modyfyObj1 = modifyParams(obj1, modifyKey)

let objArr1 = [
    {
        name: 'zhangsan',
        age: 24,
        addr: '北京市昌平区',
        gender: '男'
    },
    {
        name: 'lisi',
        age: 26,
        addr: '北京市海淀区',
        gender: '男'
    },
    {
        name: 'lili',
        age: 20,
        addr: '北京市朝阳区',
        gender: '女'
    }
]

let modyfyObjArr1 = modifyParams(objArr1, modifyKey)


describe(`modifyParams 单元测试:`,  () => {
    it(`修改普通对象:${JSON.stringify(obj1)} 修改键值为: ${JSON.stringify(modifyKey)} , 修改后为：${JSON.stringify(modifyParams(obj1, modifyKey))} `, () => {
        expect(modifyParams(obj1, modifyKey)).to.deep.equal(modyfyObj1);
    }),
    it(`修改普通数组:${JSON.stringify(objArr1)} 修改键值为: ${JSON.stringify(modifyKey)} , 修改后为：${JSON.stringify(modifyParams(objArr1, modifyKey))} `, () => {
      expect(modifyParams(objArr1, modifyKey)).to.deep.equal(modyfyObjArr1);
  })
});