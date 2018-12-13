import getType from './getType';

/**
 * 修改参数key的信息
 * @param {Object,Array} target 目标对象或数组
 * @param {Object} modifyOpt 修改的配置文件 {key:修改后的名称}
 */
export default function modifyParamsSrc(target, modifyOpt, isDeep=true) {
    let targetParam = [],
        targetType = getType(target);

    if (targetType === 'Object') {
        // 取出所有的key值，并存放临时的数组中去
        targetParam = Object.keys(target);

        // 创建对应的属性并赋值
        targetParam.forEach(targetParamItem => {
            if (modifyOpt[targetParamItem]) {
                target[modifyOpt[targetParamItem]] = target[targetParamItem];
                delete target[targetParamItem];

                if (isDeep){
                  // 判断是否还是数组
                  if (getType(target[modifyOpt[targetParamItem]]) === 'Array' || getType(target[modifyOpt[targetParamItem]]) === 'Object') {
                    modifyParamsSrc(target[modifyOpt[targetParamItem]], modifyOpt);
                  } else {
                      return false;
                  }
                }
                
            }
        });
    } else if (targetType === 'Array') {
        target.forEach(targetItem => {
            Object.keys(targetItem).forEach(targetParamItem => {
                // 将需要修改的字段给替换掉
                if (targetItem[targetParamItem]) {
                    if (modifyOpt[targetParamItem]) {
                        targetItem[modifyOpt[targetParamItem]] = targetItem[targetParamItem];
                        delete targetItem[targetParamItem];

                        if (isDeep){
                          // 判断是否还是数组
                          if (getType(targetItem[modifyOpt[targetParamItem]]) === 'Array' || getType(targetItem[modifyOpt[targetParamItem]]) === 'Object') {
                            modifyParamsSrc(targetItem[modifyOpt[targetParamItem]], modifyOpt);
                          } else {
                              return false;
                          }
                        }

                    }
                }
            });
        });
    } else {
        return false;
    }
}