// need
// npm install babel-plugin-transform-remove-console --save-dev
// npm install babel-plugin-transform-remove-debugger --save-dev
// 生产环境
const prodPlugin = [];
if (process.env.NODE_ENV === 'production') {
  prodPlugin.push([
    'transform-remove-console',
  ]);
  prodPlugin.push([
    'transform-remove-debugger',
  ]);
}

module.exports = {
  plugins: [...prodPlugin],
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
};
