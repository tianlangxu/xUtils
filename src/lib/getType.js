/**
 * 获取类型
 * @param {Any} val 对象
 * @returns {String} 类型 
 */
export default function getType(val) {
    let valTypeStr = Object.prototype.toString.call(val);
    return valTypeStr.slice(8, valTypeStr.length - 1)
}