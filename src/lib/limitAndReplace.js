/**
 * 限制字符串长度，超出部分采用自定义字符串代替
 * @param {String} str 原字符串 
 * @param {int} start 开始计算位置，默认为0  字符串下标 
 * @param {int} max 限制的最大长度，默认为原字符串的长度 从开始位置起数个数
 * @params {int} end 保留后面的文字   从后数个数
 * @param {String} fileterStr 替换的字符串，默认为...
 */
export default function limitAndReplace({
    str = "",
    start = 0,
    max = str.length,
    end = str.length,
    fileterStr = "..."
}) {
    if (str.length <= start || str.length <= max) {
        return str;
    }
    var tempStr = str;
    let strLen = str.length;

    start = +start || 0;
    end = +end || str.length;
    // 保留后面的值
    let endStr = "";
    if (end !== strLen){
        endStr = tempStr.substring(strLen - (end), strLen);
    }
    
    max = start + max;
    return str.substring(start, max) + fileterStr + endStr;
}