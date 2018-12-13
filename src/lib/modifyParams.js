import getType from './getType';

/**
 * 修改参数key的信息
 * @param {Object,Array} target 目标对象或数组
 * @param {Object} modifyOpt 修改的配置文件 {key:修改后的名称}
 */
export default function modifyParams(target, modifyOpt) {
    let targetParam = [],
        targetType = getType(target);

    if (targetType === 'Object') {
        let modifyObj = {}
        // 取出所有的key值，并存放临时的数组中去
        targetParam = Object.keys(target);

        // 创建对应的属性并赋值
        targetParam.forEach( targetParamItem => {
            if (modifyOpt[targetParamItem]){
                modifyObj[modifyOpt[targetParamItem]] = target[targetParamItem];
            } else {
                modifyObj[targetParamItem] = target[targetParamItem];
            }
        });

        return modifyObj;
    } else if (targetType === 'Array') {
        let modifyArr = [];

        target.forEach(targetItem => {
            let mObj = {};
            Object.keys(targetItem).forEach( targetParamItem => {
                // 将需要修改的字段给替换掉
                if (modifyOpt[targetParamItem]){
                    mObj[modifyOpt[targetParamItem]] = targetItem[targetParamItem];
                } else {
                    mObj[targetParamItem] = targetItem[targetParamItem];
                }
            });
            modifyArr.push(mObj);
        });

        return modifyArr;
    } else {
        return target;
    }
}

