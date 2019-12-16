// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MetaInfo from 'vue-meta-info'


Vue.use(MetaInfo)

import Vtip from 'vtip'
import 'vtip/lib/index.min.css'
// 注册指令使用
Vue.use(Vtip.directive)
// 工具函数调用
Vue.prototype.$tip = Vtip.tip
// import VueI18n from 'vue-i18n'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'


// import VueQuillEditor from 'vue-quill-editor'
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'

// Vue.use(VueQuillEditor)

Vue.config.productionTip = false

// Vue.use(VueI18n);
// Vue.use(ElementUI);
import "babel-polyfill"
import common from '../../util/common.js';
import ApiService from '../../service/API-service';

/* 挂载到原型上*/
Vue.prototype.common = common;
Vue.prototype.ApiService = ApiService;

const i18n = new VueI18n({
    locale: window.sessionStorage.getItem("locale") || 'en', // 语言标识
    messages: {
        'zh': require('../../I18n/zh'),
        'en': require('../../I18n/en')
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    i18n,
    components: {
        App
    },
    template: '<App/>'
})

router.beforeEach((to, from, next) => {
    next();
    setTimeout(() => {
        //流量统计
        var _hmt = _hmt || [];
        (function() {
            var _parentElement = document.getElementById('baidu_tj').parentNode;
            if(_parentElement){
                _parentElement.removeChild(document.getElementById('baidu_tj'));
            }
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?125274a46e966504faa38b7711115816";
            hm.id = 'baidu_tj';
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    }, 0);
})
