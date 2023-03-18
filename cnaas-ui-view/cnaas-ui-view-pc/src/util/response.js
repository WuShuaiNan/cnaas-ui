const errorCodeMessageMap = new Map();
errorCodeMessageMap.set(1010, '用户不存在或密码不正确');
errorCodeMessageMap.set(1020, '用户不存在或密码不正确');

/**
 * 解析通过 http.js 调用后获得的数据，并妥善处理错误。
 * @param vue 调用该方法的页面。
 * @param response 通过 http.js 调用后获得的响应。
 * @param overwriteMap 覆盖标准错误代码映射的映射。
 */
export default function resolveResponse(vue, response, overwriteMap) {
  return response.then(
    (res) => {
      if (res.meta.code !== 0) {
        if (errorCodeMessageMap.has(res.meta.code)
          || (overwriteMap !== undefined && overwriteMap.has(res.meta.code))) {
          let errorMessage;
          if (overwriteMap !== undefined && overwriteMap.has(res.meta.code)) {
            errorMessage = overwriteMap.get(res.meta.code);
          } else {
            errorMessage = errorCodeMessageMap.get(res.meta.code);
          }
          vue.$message({
            showClose: true,
            dangerouslyUseHTMLString: true,
            message: `<div style="text-align: center">${errorMessage}</div>`,
            type: 'error',
            center: true,
            duration: 5000,
          });
        } else {
          vue.$message({
            showClose: true,
            dangerouslyUseHTMLString: true,
            message: `
              <div style="text-align: center">服务端通信错误，返回错误代码</div>
              <div style="text-align: left">
              <ul><li>错误代码: ${res.meta.code}</li><li>错误信息: ${res.meta.message}</li></ul>
              </div>`,
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
