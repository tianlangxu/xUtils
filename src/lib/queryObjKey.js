import getType from './getType';
/**
 * 根据正则或者字符串获取对象中的key值
 * @param {Object} obj 对象
 * @param {String || RegExp} express 字符串或正则表达式
 * @param {Boolean} 是否全局匹配,针对字符串
 * @retruns {Array} 对象key的集合
 */
export default function queryObjKey(obj, express, isGloab = false) {
  let theKey = [];
  if (!express) {
    return theKey;
  }

  // 如果是普通字符串  String
  if (getType(express) === 'String') {
    Object.keys(obj).forEach((item) => {
      if (isGloab) {
        if (item === express) {
          theKey.push(item);
        }
      } else {
        if (item.startsWith(express)) {
          theKey.push(item);
        }
      }
    });
  }
  // 如果是正则表达式  RegExp
  if (getType(express) === 'RegExp') {
    Object.keys(obj).forEach((item) => {
      let matchRes = item.match(express);
      if (matchRes && matchRes.length > 0) {
        theKey.push(item);
      }
    });
  }
  return theKey;
}