/**
 * 获取一个对象的深层属性。
 * 不同层级的属性使用 . 进行分隔。
 *
 * @param target 指定的目标。
 * @param property 深层属性字符串。
 * @param defaultResult 当属性找不到时返回的默认结果。
 * @returns 对象的深层属性，或者是默认结果。
 */
export function getDeepProperty(target, property, defaultResult) {
  const subPropertyList = property.split('.');
  let subTarget = target;
  for (let i = 0; i < subPropertyList.length; i += 1) {
    const subProperty = subPropertyList[i];
    if (Object.prototype.hasOwnProperty.call(subTarget, subProperty)) {
      subTarget = subTarget[subProperty];
    } else {
      return defaultResult;
    }
  }
  return subTarget;
}

/**
 * 克隆一个对象
 * @param obj 被克隆的对象
 * @param {boolean} deep 是否深度克隆
 */
export function clone(obj, deep) {
  if (Array.isArray(obj)) { // 如果是数组
    if (deep) { // 深克隆
      const newArr = [];
      // 此时要考虑数组中可能含有对象数据项，所以循环遍历每一个数据项对其克隆
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < obj.length; i++) {
        return clone(obj[i], true);
      }
      return newArr;
    } // 浅克隆，直接返回一个新的数组即可
    return obj.slice();
  }
  if (typeof obj === 'object') { // 是一个对象
    if (obj === null) {
      return null;
    }
    const newObj = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const key in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(key)) { // 不克隆原型链上的值
        if (deep) { // 深克隆也要考虑对象中的属性还是一个对象
          newObj[key] = clone(obj[key], true);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    return newObj;
  }
  return obj; // 返回一个普通值
}
