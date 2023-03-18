import { getRandomNum } from '@/util/number';

/**
 * 获取随机颜色
 * @param alpha 透明度
 * @returns {string} 返回rgba颜色
 */
export function randomRGBA(alpha) {
  const r = getRandomNum(0, 255);
  const g = getRandomNum(0, 255);
  const b = getRandomNum(0, 255);
  return `rgba(${r},${g},${b},${alpha})`;
}

/**
 * 获取随机冷色
 * 颜色设计思路：R值 === 50，0 <= G值 <= 255, 150 <= B值 <= 255,这样随机出来的冷色更加柔和，不会产生刺眼的感觉
 * @param alpha 透明度
 * @returns {string} 返回rgba颜色
 */
export function randomCoolColor(alpha) {
  const r = 50;
  const g = getRandomNum(0, 255);
  const b = getRandomNum(150, 255);
  return `rgba(${r},${g},${b},${alpha})`;
}

/**
 * 获取随机暖色
 * 颜色设计思路：R值 === 255，0 <= G值 <= 230, B值 === 50 ,这样随机出来的暖色更加柔和，不会产生刺眼的感觉
 * @param alpha 透明度
 * @returns {string} 返回rgba颜色
 */
export function randomWarmColor(alpha) {
  const r = 255;
  const g = getRandomNum(0, 230);
  const b = 50;
  return `rgba(${r},${g},${b},${alpha})`;
}

/**
 * 获取随机色透明渐变效果，函数输入两个透明度，随机色根据透明度参数进行渐变
 * @param alpha1 透明度1
 * @param alpha2 透明度2
 * @returns {string[]}返回随机色透明渐变效果的数组
 */
export function randomTransparentGradient(alpha1, alpha2) {
  const r = getRandomNum(0, 255);
  const g = getRandomNum(0, 255);
  const b = getRandomNum(0, 255);
  return [`rgba(${r},${g},${b},${alpha1})`, `rgba(${r},${g},${b},${alpha2})`];
}

/**
 * 获取随机冷色透明渐变效果，函数输入两个透明度，随机色根据透明度参数进行渐变
 * 颜色设计思路：R值 === 50，0 <= G值 <= 255, 150 <= B值 <= 255,这样随机出来的冷色更加柔和，不会产生刺眼的感觉
 * @param alpha1 透明度1
 * @param alpha2 透明度2
 * @returns {string[]}返回随机色透明渐变效果的数组
 */
export function randomTransparentCoolGradient(alpha1, alpha2) {
  const r = 50;
  const g = getRandomNum(0, 255);
  const b = getRandomNum(150, 255);
  return [`rgba(${r},${g},${b},${alpha1})`, `rgba(${r},${g},${b},${alpha2})`];
}

/**
 * 获取随机暖色透明渐变效果，函数输入两个透明度，随机色根据透明度参数进行渐变
 * 颜色设计思路：R值 === 255，0 <= G值 <= 230, B值 === 50 ,这样随机出来的暖色更加柔和，不会产生刺眼的感觉
 * @param alpha1 透明度1
 * @param alpha2 透明度2
 * @returns {string[]}返回随机色透明渐变效果的数组
 */
export function randomTransparentWarmGradient(alpha1, alpha2) {
  const r = 255;
  const g = getRandomNum(0, 230);
  const b = 50;
  return [`rgba(${r},${g},${b},${alpha1})`, `rgba(${r},${g},${b},${alpha2})`];
}

/**
 * 获取随机渐变色
 * @param alpha 透明度
 * @returns {string[]}返回随机渐变色数组
 */
export function randomGradient(alpha) {
  const r = getRandomNum(0, 255);
  const g = getRandomNum(0, 255);
  const b = getRandomNum(0, 255);
  return [`rgba(${r},${g},${b},${alpha})`, `rgba(${r},${g},${b},${alpha})`];
}

/**
 * 获取随机渐变冷色
 * 颜色设计思路：R值 === 50，0 <= G值 <= 255, 150 <= B值 <= 255,这样随机出来的冷色更加柔和，不会产生刺眼的感觉
 * @param alpha 透明度
 * @returns {string[]}返回随机渐变色数组
 */
export function randomCoolGradient(alpha) {
  const r = 50;
  const g = getRandomNum(0, 255);
  const b = getRandomNum(150, 255);
  return [`rgba(${r},${g},${b},${alpha})`, `rgba(${r},${g},${b},${alpha})`];
}

/**
 * 获取随机渐变暖色
 * 颜色设计思路：R值 === 255，0 <= G值 <= 230, B值 === 50 ,这样随机出来的暖色更加柔和，不会产生刺眼的感觉
 * @param alpha 透明度
 * @returns {string[]}返回随机渐变色数组
 */
export function randomWarmGradient(alpha) {
  const r = 255;
  const g = getRandomNum(0, 230);
  const b = 50;
  return [`rgba(${r},${g},${b},${alpha})`, `rgba(${r},${g},${b},${alpha})`];
}

/**
 * 获取随机暖色渐变到随机冷色
 * 暖色设计思路：R值 === 255，0 <= G值 <= 230, B值 === 50 ,这样随机出来的暖色更加柔和，不会产生刺眼的感觉
 * 冷色设计思路：R值 === 50，0 <= G值 <= 255, 150 <= B值 <= 255,这样随机出来的冷色更加柔和，不会产生刺眼的感觉
 * @param warmColorAlpha 暖色透明度
 * @param coolColorAlpha 冷色透明度
 * @returns {string[]}返回随机渐变色数组
 */
export function randomWarmColorToRandomCoolColor(warmColorAlpha, coolColorAlpha) {
  const wr = 255;
  const wg = getRandomNum(0, 230);
  const wb = 50;
  const cr = 50;
  const cg = getRandomNum(0, 255);
  const cb = getRandomNum(150, 255);
  return [`rgba(${wr},${wg},${wb},${warmColorAlpha})`, `rgba(${cr},${cg},${cb},${coolColorAlpha})`];
}

/**
 * 获取随机冷色渐变到随机暖色
 * 暖色设计思路：R值 === 255，0 <= G值 <= 230, B值 === 50 ,这样随机出来的暖色更加柔和，不会产生刺眼的感觉
 * 冷色设计思路：R值 === 50，0 <= G值 <= 255, 150 <= B值 <= 255,这样随机出来的冷色更加柔和，不会产生刺眼的感觉
 * @param coolColorAlpha 冷色透明度
 * @param warmColorAlpha 暖色透明度
 * @returns {string[]}返回随机渐变色数组
 */
export function randomCoolColorToRandomWarmColor(coolColorAlpha, warmColorAlpha) {
  const wr = 255;
  const wg = getRandomNum(0, 230);
  const wb = 50;
  const cr = 50;
  const cg = getRandomNum(0, 255);
  const cb = getRandomNum(150, 255);
  return [`rgba(${cr},${cg},${cb},${coolColorAlpha})`, `rgba(${wr},${wg},${wb},${warmColorAlpha})`];
}

// 随机冷色渐变到另一个随机冷色可通过两个randomCoolColor方法实现，因此不再额外封装。
// 随机暖色渐变到另一个随机暖色可通过两个randomWarmColor方法实现，因此不再额外封装。
