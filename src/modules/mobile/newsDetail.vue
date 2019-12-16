<template>
    <div class="newsDetail" v-loading="loading">
        <!--新闻内容-->
        <div class="news-detail">
            <p class="marginB10 fontSize14">
                {{newsList.author}}
                <i>&nbsp;&nbsp;·&nbsp;&nbsp;</i>
                <span v-html="formatterTimestamp(newsList.releaseTime)"></span>
            </p>
            <h3 class="newsDetail-title">{{newsList.title}}</h3>
            <div class="news-content ql-container ql-snow">
                <pre class="ql-editor" v-html="newsList.newsText"></pre>
            </div>
            <el-tag
                class="newsTag"
                v-for="tag in newsList.lables"
                :key="tag.id"
                @click.native="goLabel(tag.id,tag.lable)"
                :disable-transitions="false">
                {{tag.lable}}
            </el-tag>
        </div>
        <div class="related">
            <div class="case-scenes">
                <h3 class="scenes-title">{{$t("news.related")}}</h3>
            </div>
            <ul class="insights-list clearfix" v-if="relatShow">
                <li v-for="(item,index) in relatList" :key="index">
                    <div class="insights-list-content"  @click="gotoDetail(item.id)">
                        <div class="insights-imgUrl">
                            <img :src="imagesUrl+item.imgUrl" alt="">
                        </div>
                        <div class="insights-news-basic">
                            <div class="author-time-container">
                                <p class="author-time">
                                    {{item.author}}
                                </p>
                                <i>&nbsp;·&nbsp;</i>
                                <span v-html="formatterTimestamp(item.releaseTime)"></span>
                            </div>
                            <p class="news-title">{{item.title}}</p>
                        </div>
                    </div>
                </li>
            </ul>
            <p class="color00223A" v-if="!relatShow">{{$t("news.noNews")}}</p>
        </div>
        <div class="subscribe">
            <!-- 表单 start -->
            <mobile-sub></mobile-sub>
            <!-- 表单 end -->
        </div>
    </div>
</template>

<script>
    import r from '@/util/RequestUtil.js'
    import VueQuillEditor from 'vue-quill-editor'
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'
    import MobileSub from '@/components/MobileSub'
    
    export default {
        name: '',
        components: {
            MobileSub
        },
        data() {
            return {
                newsList:{
                    releaseTime:null,
                },
                relatList:[],
                newsId:null,
                language:null,
                loading:false,
                loading2:false,
                relatShow:true,
                imagesUrl: r.GETIMG_URL,
                typeId:null
            }
        },
        methods:{
            //进入标签页面
            goLabel(lableId,value) {
                var _this = this;
                this.$router.push({
                    path: '/labels',
                    query: {
                        lableId: lableId
                    }
                })
                window.sessionStorage.setItem('tagged',value);
            },
            // 相关阅读
            getRelatedData(){
                let _this = this;
                let imagesUrl = r.GETIMG_URL;
                let baseUrl = null;
                let lableIds = [];
                
                if(this.$i18n.locale == 'zh'){
                    baseUrl = "findNewsByLableIdCn";
                }else{
                    baseUrl = "findNewsByLableIdEn";
                }
                if(_this.newsList.lables.length<=0){
                    lableIds = [-1];
                }else{
                    for(let i=0;i<_this.newsList.lables.length;i++){
                        lableIds.push(_this.newsList.lables[i].id);
                    }
                }
                
                let param = {
                    id:_this.newsId,
                    length: 3,
                    lableIds:lableIds,
                    typeId:_this.typeId
                }
                _this.ApiService.news[baseUrl](param,true).then(data=>{
                    if (data && data.code === 0) {
                        if(data.data.length<=0){
                            _this.relatShow = false;
                            return false;
                        }
                        _this.relatList = data.data;
                    } else {
                        r.message(data.message, "warning");
                    }
                })
                .catch(err => {
                    console.log(err);
                });
            },
            getData(){
                let _this = this;
                _this.loading = true;
                let imagesUrl = r.GETIMG_URL;
                let baseUrl = null;
                if(this.$i18n.locale == 'zh') {
                    baseUrl = "findNewsByIdCn";
                } else {
                    baseUrl = "findNewsByIdEn";
                }
                let param = {
                    id: _this.newsId
                }
                _this.ApiService.news[baseUrl](param).then(data=>{
                    if (data && data.code === 0) {
                        _this.loading = false;
                        _this.newsList = data.data;
                        _this.typeId =  data.data.typeId;
                        _this.getRelatedData();
                        if(data.data.newsText!==null){
                            _this.newsList.newsText = data.data.newsText.replace(/imagesUrl=/g, imagesUrl);
                        }
                    } else {
                        // r.message(data.message, "warning");
                        setTimeout(function(){
                            _this.$router.push({
                                path: '/news'
                            })
                        },500);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
            },
            //时间转换
            formatterTimestamp(row, column) {
                return r.formatterTimestampT(row);
            },
            tabNewsDetail(param){
                let _this = this;
                _this.ApiService.news.findNewsDetailCnEn(param).then(data => {
                    if (data && data.code === 0) {
                        _this.newsId = data.data.id;
                        _this.getData();
                    }else if(data && data.code === 1){

                    } else {
                        r.message(data.message, "warning");
                    }
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            tabNewsDetailFirst(param){
                let _this = this;
                _this.ApiService.news.findNewsDetailCnEn(param).then(data => {
                    if(data && data.code === 0) {
                        _this.newsId = data.data.id;
                        _this.getData();
                    } else if(data && data.code === 1){
                        _this.loading = true;
                        let imagesUrl = r.GETIMG_URL;
                        let baseUrl = null;
                        if(this.$i18n.locale == 'zh') {
                            baseUrl = "findNewsByIdEn";
                        } else {
                            baseUrl = "findNewsByIdCn";
                        }
                        let param = {
                            id: _this.newsId
                        }
                        _this.ApiService.news[baseUrl](param,true).then(data=>{
                            if (data && data.code === 0) {
                                _this.loading = false;
                                _this.newsList = data.data;
                                _this.typeId =  data.data.typeId;
                                _this.getRelatedData();
                                if(data.data.newsText!==null){
                                    _this.newsList.newsText = data.data.newsText.replace(/imagesUrl=/g, imagesUrl);
                                }
                            } else {
                                r.message(data.message, "warning");
                            }
                        })
                        .catch(err => {
                            console.log(err);
                        });
                    }else{
                        r.message(data.message, "warning");
                    }
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            //相关阅读详情
            gotoDetail(newsId) {
                var _this = this;
                this.$router.push({
                    path: '/newsDetail',
                    query: {
                        language:this.$i18n.locale,
                        newsId: newsId
                    }
                })
                // location.reload();
            },
        },
        watch: {
            '$route':function(val,oldVal){
                if(val!==oldVal){
                    location.reload();
                }
            },
            '$i18n.locale':function(val,oldVal){
                let param = {};
                if(oldVal == 'zh'){
                    param = {
                        cnId:this.newsId,
                    }
                }else if(oldVal == 'en'){
                    param = {
                        enId:this.newsId,
                    }
                }
                this.tabNewsDetail(param);
            }
        },
        updated() {
            window.scroll(0, 0);
        },
        mounted(){
            document.querySelector(".header-nav").style.background="#004569";
            // 设置样式 适配手机端
            document.querySelector('.newsDetail').style.minHeight = (document.documentElement.clientHeight-100)+'px';
            
            var _this = this;
            let query = this.$route.query;
            if(query.newsId===null){
                setTimeout(function(){
                    _this.$router.push({
                        path: '/news'
                    })
                },0);
                return;
            }
            _this.newsId = parseInt(query.newsId);
            _this.language = query.language;

            if(this.$i18n.locale == query.language){
                this.getData();
            }else if(this.$i18n.locale !== query.language && this.$i18n.locale == 'zh'){
                let param = {
                        enId:_this.newsId,
                }
                _this.tabNewsDetailFirst(param);
            }else if(this.$i18n.locale !== query.language && this.$i18n.locale == 'en'){
                let param = {
                    cnId:this.newsId,
                }
                _this.tabNewsDetailFirst(param);
            }
        }
    }
</script>

<style type="text/css">
    .el-tag + .el-tag {
        margin: 10px 0 0 10px;
    }
    .newsTag.el-tag{
        height: 26px;
        background: #E8EAEA;
        color: #8B8C8E;
        line-height: 26px;
        border:none;
        cursor: pointer;
    }
    .ql-editor{
        padding: 0;
        margin:0;
    }
    .ql-editor .ql-video{
        width: 500px;
        height: 300px;
        margin: auto;
    }
    .ql-container.ql-snow{
        border: none;
        padding:35px 0 20px;
        font-size: 14px;
        color: #00223A;
    }
    .newsDetail .ql-editor{
        line-height: 22px;
    }
</style>
<style scoped="scoped">
    @import url("../../style/mobile/m-index.css");
    @import url("../../style/mobile/news.css");
</style>