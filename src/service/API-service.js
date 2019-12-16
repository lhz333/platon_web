import Vue from 'vue';
import Http from 'axios';
import API from './API-path';
import CONFIG from '../config/config';

Http.defaults.headers.post['Content-Type'] = "application/json;charset=utf-8";
Http.interceptors.response.use(function(response) {
    return response;
}, function(error) {
    CONFIG.handleErr(error);
    return Promise.reject(error);
});

/**
 * encode get 请求对象
 * @param params
 * @returns {string}
 */
const encodeParams = (params) => {
    let r = '?',
        p = [];
    for(let key in params) {
        p.push(`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
    }
    return r + p.join('&');
};

/**
 * 请求类
 */
class ApiService {
    constructor() {
        // 新闻
        this.news = {
            findNewsCn: this.post.bind(this, API.news.findNewsCn),
            findNewsEn: this.post.bind(this, API.news.findNewsEn),
            findTypeCn: this.post.bind(this, API.news.findTypeCn),
            findTypeEn: this.post.bind(this, API.news.findTypeEn),
            // 新闻详情
            findNewsByIdCn:this.post.bind(this, API.news.findNewsByIdCn),
            findNewsByIdEn:this.post.bind(this, API.news.findNewsByIdEn),
            // 切换新闻语言
            findNewsDetailCnEn:this.post.bind(this, API.news.findNewsDetailCnEn),
            // 获取相关阅读
            findNewsByLableIdCn:this.post.bind(this, API.news.findNewsByLableIdCn),
            findNewsByLableIdEn:this.post.bind(this, API.news.findNewsByLableIdEn),
            // 标签
            findLabelCn: this.post.bind(this, API.news.findLabelCn),
            findLabelEn: this.post.bind(this, API.news.findLabelEn),
        }

        this.media = {
            findPlatMedia:this.post.bind(this, API.media.findPlatMedia),
        }

        // faq
        this.faq = {
            findFaq: this.post.bind(this, API.faq.findFaq),
        }

        this.interceptorsOfReq();
        this.interceptorsOfRes();
    }

    /**
     * encode请求参数
     * @param url
     * @param params
     * @returns {Promise.<TResult>}
     */
    getParam(url, params) {
        if(params) {
            url += '?param=' + encodeURIComponent(JSON.stringify(params));
        }
        return Http.get(url).then(res => {
            if(res.statusText == "OK") {
                window.location.href = url
                return {
                    result: 0
                }
            } else {
                return {
                    result: -1
                }
            }
        });
    }

    /**
     * get请求
     * @param url
     * @param params
     * @returns {Promise.<TResult>}
     */
    get(url, params) {
        if(params) {
            url += encodeParams(params);
        }
        return Http.get(url).then(res => res.data);
    }

    /**
     * post请求
     * @param url       请求地址
     * @param params    请求参数
     * @param flag      是否需要加签名
     * @returns {Promise.<TResult>}
     */
    post(url, params) {
        if(!params) {
            params = {}
        }
        return Http.post(url, params).then(res => res.data);
    }

    /**
     * 请求拦截器
     * @returns {number}
     */
    interceptorsOfReq() {
        return Http.interceptors.request.use(
            config => {
//              console.log('请求URL== ' + config.url);
//              console.log('请求参数==', config.data);
                return config;
            },
            err => {
                return Promise.reject(err);
            });
    }

    /**
     * 响应拦截器
     */
    interceptorsOfRes() {
        Http.interceptors.response.use(function(response) {
//          console.log('响应完整数据==', response);
//          console.log('响应数据==', response.data);
            return response;
        }, function(error) {
            return Promise.reject(error);
        });
    }

}

//导出一个对象
export default new ApiService();