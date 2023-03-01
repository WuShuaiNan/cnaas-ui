/**
 * 解析通过 http.js 调用后获得的数据，并妥善处理错误。
 * @param vue 调用该方法的页面。
 * @param response 通过 http.js 调用后获得的响应。
 * @param overwriteMap 覆盖标准错误代码映射的映射。
 */
export default function resolveResponse(vue, response, overwriteMap) {
  return response.then(
    (res) => {
      if (!res.success) { // 如果请求失败
        if (overwriteMap !== undefined && overwriteMap.has(res.code)) { // 首先查看是否有重写的错误代码映射，如果有就直接
          vue.$message({
            showClose: true,
            dangerouslyUseHTMLString: true,
            message: `<div style="text-align: center">${overwriteMap.get(res.code)}</div>`,
            type: 'error',
            center: true,
            duration: 5000,
          });
        } else {
          vue.$message({
            showClose: true,
            dangerouslyUseHTMLString: true,
            message: `<div style="text-align: center">${res.message}</div>`,
            type: 'error',
            center: true,
            duration: 5000,
          });
        }
        return Promise.reject();
      }
      return Promise.resolve(res.data);
    },
    (err) => {
      vue.$message({
        showClose: true,
        dangerouslyUseHTMLString: true,
        message: `<div style="text-align: center">通信错误，异常信息: <br/> ${err == null ? '' : err.message}</div>`,
        type: 'error',
        center: true,
        duration: 5000,
      });
      return Promise.reject();
    },
  );
}
