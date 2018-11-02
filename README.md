# xUtils

#### 项目介绍
> js工具库
> 采用 Rollup.js 编译打包，希望目标能够兼容市场上主流版本的浏览器

```
npm run build // 编译源码

npm run test // 编译打包并进行单元测试
```

**需要注意:** 
1. bable版本采用babel@6x,rollup-plugin-babel@3.0.7
2. mocha 测试需要es6模块，所以采用两套 .babelrc 配置，一份在src下，用于rollup打包使用，加上"modules": false；一份用于mocha测试使用，没加"modules": false。所以需要注意先编译后测试


