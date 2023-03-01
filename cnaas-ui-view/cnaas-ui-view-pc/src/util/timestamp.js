// noinspection DuplicatedCode

/**
 * 获取当前的时间戳。
 */
export function currentTimestamp() {
  return new Date().getTime();
}

/**
 * 将时间戳格式化为 yyyy-mm-dd hh:mm:ss 的形式。
 * @param timestamp 时间戳。
 */
export function formatTimestamp(timestamp) {
  // 时间戳为10位需*1000，时间戳为13位的话不需乘1000 var date = new Date(timestamp*1000);
  const date = new Date(timestamp);
  const YY = `${date.getFullYear()}-`;
  const MM = `${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-`;
  const DD = (date.getDate() < 10 ? `0${date.getDate()}` : date.getDate());
  const hh = `${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}:`;
  const mm = `${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}:`;
  const ss = (date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds());
  return `${YY + MM + DD} ${hh}${mm}${ss}`;
}

/**
 * 将时间戳格式化为 yyyy-mm-dd 的形式。
 * @param timestamp 时间戳。
 */
export function formatShortTimestamp(timestamp) {
  // 时间戳为10位需*1000，时间戳为13位的话不需乘1000 var date = new Date(timestamp*1000);
  const date = new Date(timestamp);
  const YY = `${date.getFullYear()}-`;
  const MM = `${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-`;
  const DD = (date.getDate() < 10 ? `0${date.getDate()}` : date.getDate());
  return `${YY + MM + DD}`;
}

/**
 * 获取指定时间戳的零时时间戳。
 * @param timestamp 时间戳。
 */
export function getZeroTimestamp(timestamp) {
  const date = new Date(timestamp);
  date.setUTCHours(0, 0, 0, 0);
  return date.getTime();
}

/**
 * 将时间戳格式化为 hh:mm:ss 的形式。
 * @param timestamp 时间戳。
 */
export function getHMS(timestamp) {
  const date = new Date(timestamp);
  const hh = `${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}:`;
  const mm = `${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}:`;
  const ss = (date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds());
  return `${hh}${mm}${ss}`;
}

/**
 * 将时间戳以人性化的方式格式化为毫秒、秒、分钟、小时。
 * @param timestamp 时间戳。
 */
export function durationFormatter(timestamp) {
  if (timestamp < 1000) {
    return `${timestamp}毫秒`;
  }
  if (timestamp < 60 * 1000) {
    return `${(timestamp / 1000).toFixed(0)}秒`;
  }
  if (timestamp < 3600 * 1000) {
    return `${(timestamp / 60 / 1000).toFixed(0)}分钟`;
  }
  return `${(timestamp / 3600 / 1000).toFixed(2)}小时`;
}
