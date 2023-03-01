/**
 * 输出带有前导0的数字。
 * @param number 指定的数字。
 * @param size 前导0与数字加起来的位数。
 */
// eslint-disable-next-line import/prefer-default-export
export function pad(number, size) {
  let s = String(number);
  while (s.length < (size || 2)) {
    s = `0${s}`;
  }
  return s;
}

/**
 * 获取指定闭区间的随机数
 * @param min 最小值
 * @param max 最大值
 * @returns {number}
 */
export function getRandomNum(min, max) {
  let result;
  if (min <= max) {
    result = Math.floor(Math.random() * (max - min + 1) + min);
  } else {
    result = Math.floor(Math.random() * (min - max + 1) + max);
  }
  return result;
}
