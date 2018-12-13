/**
 * 解析url参数 
 * @param {String} url
 * @retrun {Object} 对象  
 */
export default function parseParams(url) {
	if (typeof url === 'string') {
		let paramsArr = url.split('?'),
			params = {};
		if (paramsArr.length > 1) {
			let ps = paramsArr[1].split('&');
			ps.forEach((p) => {
				let result = p.split('=');
				params[result[0]] = result[1];
			});
		}
		return params;
	} else {
		return url;
	}
}