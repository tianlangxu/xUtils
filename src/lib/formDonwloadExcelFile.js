/**
 * 下载Excel文件
 * @method donwloadExcelFile
 * @param {Object} params 参数信息 
 * @param {String} url 下载地址 
 * @param {String} method 请求方式 get | post
 */
export default function donwloadExcelFile(url, params, method) { //是post请求需要的参数，url是请求url地址
    method = method || "get";
    var form = document.createElement("form");
    form.style.display = 'none';
    form.action = url;
    form.method = method;
    document.body.appendChild(form);
    for (var key in params) {
        var input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = params[key];
        form.appendChild(input);
    }
    form.submit();
    form.remove();
}