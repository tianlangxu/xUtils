# xUtils

### 项目介绍
> js工具库
> 采用 Rollup.js 编译打包，希望目标能够兼容市场上主流版本的浏览器

```
npm run build // 编译源码

npm run test // 编译打包并进行单元测试
```

**需要注意:** 
1. bable版本采用babel@6x,rollup-plugin-babel@3.0.7
2. mocha 测试需要es6模块，所以采用两套 .babelrc 配置，一份在src下，用于rollup打包使用，加上"modules": false；一份用于mocha测试使用，没加"modules": false。所以需要注意先编译后测试







### 方法：

| 方法名称           | 说明                                         | 备注             |
| ------------------ | -------------------------------------------- | ---------------- |
| deepArrayUpdateKey | 深入修改数组中对象的属性key值                |                  |
| donwloadExcelFile  | 下载Excel文件                                | 用在前端（PC）   |
| getType            | 获取类型                                     |                  |
| handlePrams        | 将Object转成请求参数url中的query数据         |                  |
| parseParams        | 将请求参数url中的query数据转成Object         |                  |
| indexOfArray       | 获取数组指定对象key的下标值，没有则返回 -1   |                  |
| limitAndReplace    | 限制字符串长度，超出部分采用自定义字符串代替 |                  |
| modifyParams       | 修改参数key的信息                            | 不修改源对象数据 |
| modifyParamsSrc    | 修改参数key的信息                            | 修改源对象数据   |
| queryObjKey        | 根据正则或者字符串获取对象中的key值          |                  |

