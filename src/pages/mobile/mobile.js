import Vue from 'vue'
import Mobile from './mobile.vue'
import router from './router'
// import VueI18n from 'vue-i18n'
// import Swiper from 'swiper'
// import 'swiper/dist/css/swiper.min.css';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

// import VueQuillEditor from 'vue-quill-editor'
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'

// Vue.use(VueQuillEditor)

// Vue.use(VueI18n);
// Vue.use(ElementUI);

import ApiService from '../../service/API-service';
import "babel-polyfill"
import common from '../../util/common.js';

/* 挂载到原型上*/
Vue.prototype.common = common;
Vue.prototype.ApiService = ApiService;

const i18n = new VueI18n({
    locale: window.sessionStorage.getItem("locale") || 'en', // 语言标识
    messages:{
        'zh': require('../../I18n/zh'),
        'en': require('../../I18n/en')
    }
})

/* eslint-disable no-new */
new Vue({
  el: '#mobile',
  router,
  i18n,
  components: { Mobile },
  template: '<mobile/>'
})


router.beforeEach((to, from, next) => {
    next();
    setTimeout(() => {
        //流量统计
        let _hmt = _hmt || [];
        (function() {
            var _parentElement = document.getElementById('baidu_tj').parentNode;
            if(_parentElement){
                _parentElement.removeChild(document.getElementById('baidu_tj'));
            }
            let hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?125274a46e966504faa38b7711115816";
            hm.id = 'baidu_tj';
            let s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    }, 0);
})