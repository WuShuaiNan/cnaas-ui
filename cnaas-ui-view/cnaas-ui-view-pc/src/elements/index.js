import Vue from 'vue';
import Element from 'element-ui';
import { OverlayScrollbarsPlugin } from 'overlayscrollbars-vue';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element);
Vue.use(OverlayScrollbarsPlugin);

Vue.prototype.$message = Element.Message;

const echarts = require('echarts/lib/echarts');

require('echarts/lib/chart/line');
require('echarts/lib/chart/bar');
require('echarts/lib/chart/radar');

require('echarts/lib/component/tooltip');
require('echarts/lib/component/toolbox');
require('echarts/lib/component/dataZoom');
require('echarts/lib/component/title');
require('echarts/lib/component/markArea');
require('echarts/lib/component/markLine');
require('echarts/lib/component/visualMap');
require('echarts/lib/component/legend');
require('echarts/lib/component/legendScroll');
require('echarts/lib/component/legendScroll');

Vue.prototype.$echarts = echarts;
