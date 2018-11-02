/**
 * 获取数组指定对象key的下标值，没有则返回 -1
 * @param {Array} arr
 * @param {String} key
 * @param {String | Number} value
 */
export default function indexOfArray(arr, key, value) {
    arr = arr || [];
    var idx = -1;

    arr.forEach(function (item, index) {
        if (typeof item !== "object") {
            idx = arr.indexOf(value);
        } else {
			
			if (item[key] === value) {
				idx = index;
			}
		}
    });
    return idx;
}