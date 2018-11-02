const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const uglify = require('rollup-plugin-uglify');// js 文件压缩

module.exports = {
    input: "src/xUtils.js", // 配置入口文件 
    output: { // 配置输出
        name: 'xUtils',
        file: 'dist/xUtils.js', // 输出文件
        format: 'umd',
    },
    plugins: [
        // 打包外部文件
        resolve({
            jsnext: true, // 该属性是指定将Node包转换为ES2015模块
            // main 和 browser 属性将使插件决定将那些文件应用到bundle中
            main: true, // Default: true 
            browser: true // Default: false
        }),
        commonjs(), // 转换 commonjs 规范
        babel({
            runtimeHelpers: "true",
            exclude: 'node_modules/**' // 排除node_module下的所有文件
        }),
        // uglify() // 压缩js代码
    ],
}