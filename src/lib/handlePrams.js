/**
 * 处理请求参数
 * @param {Object} params 参数对象
 * @returns {string} 转换后数据 {a:'123','b':'zhangsan'} -> a=123&b=zhangsan
 */
export default function handlePrams(params) {
    var str = "",
        paramsStr = "";

    if (params && typeof params === "object") {
        Object.keys(params).forEach((param) => {
            str += param + "=" + params[param] + "&"
        });

        var strLen = str.length;

        if (strLen > 0) {
            paramsStr = str.substring(0, strLen - 1);
        }

    }
    return paramsStr;
};