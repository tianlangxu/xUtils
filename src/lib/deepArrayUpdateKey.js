

/**
 * 深入修改数组中对象的属性key值
 * @param {Array} arr 需要修改的数组
 * @param {String} key 修改的key
 * @param {String} updateKey 更新后的可以
 * @returns 修改原有的数组
 */
export default function deepArrayUpdateKey(arr, key, updateKey) {
    var len = arr.length;

    if (len > 0){
        arr = arr.map(function (item){
            if (item[key]){
                // 如果存在，则换成新key
                item[updateKey] = item[key];
                delete item[key];
                deepArrayUpdateKey(item[updateKey], key, updateKey);
                return item;
            }
        });
    } else {
        return;
    }
}