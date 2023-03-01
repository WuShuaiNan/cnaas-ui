/**
 * 文件转base64
 * @param file
 */
export function getBase64(file) {
  return new Promise(((resolve, reject) => {
    const reader = new FileReader();
    let imgResult = '';
    reader.readAsDataURL(file);
    // eslint-disable-next-line func-names
    reader.onload = function () {
      imgResult = reader.result;
    };
    // eslint-disable-next-line func-names
    reader.onerror = function (error) {
      reject(error);
    };
    // eslint-disable-next-line func-names
    reader.onloadend = function () {
      resolve(imgResult);
    };
  }));
}

export function downloadFileByBase64(base64, name) {
  const arr = base64.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  // eslint-disable-next-line no-plusplus
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  const myBlob = new Blob([u8arr], { type: mime });
  const myUrl = URL.createObjectURL(myBlob);
  const a = document.createElement('a');
  a.setAttribute('href', myUrl);
  a.setAttribute('download', name);
  a.setAttribute('target', '_blank');
  const clickEvent = document.createEvent('MouseEvents');
  clickEvent.initEvent('click', true, true);
  a.dispatchEvent(clickEvent);
}

export function base64ToBlob(base64) {
  const parts = base64.split(';base64,');
  const contentType = parts[0].split(':')[1];
  const raw = window.atob(parts[1]);
  const rawLength = raw.length;

  const uInt8Array = new Uint8Array(rawLength);

  for (let i = 0; i < rawLength; i += 1) {
    uInt8Array[i] = raw.charCodeAt(i);
  }
  return new Blob([uInt8Array], { type: contentType });
}
