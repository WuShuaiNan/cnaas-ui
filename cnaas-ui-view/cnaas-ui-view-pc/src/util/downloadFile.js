// eslint-disable-next-line import/prefer-default-export
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
