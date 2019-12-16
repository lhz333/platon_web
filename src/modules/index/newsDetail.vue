<template>
    <div class="news-detail-container">
        <!--新闻内容-->
        <div class="newsdetail">
            <div class="content-min-size paddingLR50 clear" v-loading="loading">
                <div class="news-detail fl">
                    <p class="news-time">
                        <span class="type fontWeight">{{newsList.typeName}}</span>
                        <span>{{newsList.author}}</span>
                        <i v-if="newsList.author!==null && newsList.releaseTime !== null">&nbsp;&nbsp;·&nbsp;&nbsp;</i>
                        <span v-html="formatterTimestamp(newsList.releaseTime)"></span>
                    </p>
                    <h3 class="newsdetail-title">{{newsList.title}}</h3>
                    <div class="news-content ql-container ql-snow newsDetail">
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
                <div class="related fr">
                    <!-- 订阅表单 -->
                    <div id="sfd3de3bb0c5d5b249356895f3144b5099c98e811ca5f0889b" class="input-ground-join" data-type="signupform">
                        <div id="customForm">
                        <input type="hidden" id="signupFormType" value="QuickForm_Horizontal">
                        <div class="quickFormHorizontal quick_form_8_css" name="SIGNUP_BODY" id="SIGNUP_BODY">
                            <div id="SIGNUP_HEADING" name="SIGNUP_HEADING" changeid="SIGNUP_MSG" changetype="SIGNUP_HEADER"></div>
                            <div style="position:relative;">
                            <div id="Zc_SignupSuccess" style="display:none;position:absolute;margin-left:4%;width:90%;background-color: white; padding: 3px; border: 3px solid rgb(194, 225, 154);  margin-top: 10px;margin-bottom:10px;word-break:break-all">
                                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tbody>
                                    <tr>
                                    <td width="10%">
                                        <img class="successicon" src="https://zca.maillist-manage.com/images/challangeiconenable.jpg" align="absmiddle">
                                    </td>
                                    <td>
                                        <span id="signupSuccessMsg" style="color: rgb(73, 140, 132); font-family: sans-serif; font-size: 14px;word-break:break-word">&nbsp;&nbsp;Thank you for Signing Up</span>
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </div>
                            <form method="POST" id="zcampaignOptinForm" style="margin:0px;" action="https://zca.maillist-manage.com/campaigns/weboptin.zc" target="_zcSignup">
                            <div style="display:none;height:0;" id="errorMsgDiv"></div>
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tbody>
                                <tr>
                                    <td align="left" valign="top">
                                    <div>
                                        <span>
                                        <span>
                                            <input savetype="EMBED_FORM_EMAIL_LABEL" changetype="CONTACT_EMAIL" name="CONTACT_EMAIL" changeitem="SIGNUP_FORM_FIELD" type="text" id="CONTACT_EMAIL"  class="mail-input">
                                            <span style="display:none" id="dt_CONTACT_EMAIL">1,true,6,联系人邮箱,2</span>
                                        </span>
                                        </span>
                                        <span style="padding-left:0px; padding-right:0px;padding-bottom:10px;">
                                        <input name="SIGNUP_SUBMIT_BUTTON" id="zcWebOptin" type="button" class="btn-mail text-center" :value="$t('joinUs.subscribe')">
                                        </span>
                                    </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table><!-- Do not edit the below Zoho Campaigns hidden tags -->
                            <input type="hidden" id="fieldBorder" value="rgb(235, 235, 235)">
                            <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="" onload="">
                            <input type="hidden" id="submitType" name="submitType" value="optinCustomView">
                            <input type="hidden" id="lD" name="lD" value="164c127f33ff3bdf">
                            <input type="hidden" name="emailReportId" id="emailReportId" value="">
                            <input type="hidden" id="formType" name="formType" value="QuickForm">
                            <input type="hidden" name="zx" id="cmpZuid" value="1286d1b46">
                            <input type="hidden" name="zcvers" value="3.0">
                            <input type="hidden" name="oldListIds" id="allCheckedListIds" value="">
                            <input type="hidden" id="mode" name="mode" value="OptinCreateView">
                            <input type="hidden" id="zcld" name="zcld" value="164c127f33ff3bdf">
                            <input type="hidden" id="document_domain" value="campaigns.zoho.com">
                            <input type="hidden" id="zc_Url" value="zca.maillist-manage.com">
                            <input type="hidden" id="new_optin_response_in" value="2">
                            <input type="hidden" id="duplicate_optin_response_in" value="2">
                            <input type="hidden" id="zc_formIx" name="zc_formIx" value="d3de3bb0c5d5b249356895f3144b5099c98e811ca5f0889b"><!-- End of the campaigns hidden tags --></form>
                        </div>
                        <img src="https://zca.maillist-manage.com/images/spacer.gif" id="refImage" onload="referenceSetter(this)" style="display:none;">
                        </div>
                    </div>
                    <div id="zcOptinOverLay" oncontextmenu="return false" style="display:none;text-align: center; background-color: rgb(0, 0, 0); opacity: 0.5; z-index: 100; position: fixed; width: 100%; top: 0px; left: 0px; height: 988px;"></div>
                    <div id="zcOptinSuccessPopup" style="display:none;z-index: 9999;width: 800px; height: 40%;top: 84px;position: fixed; left: 26%;background-color: #FFFFFF;border-color: #E6E6E6; border-style: solid; border-width: 1px;  box-shadow: 0 1px 10px #424242;padding: 35px;color: #333;">
                        <span style="position: absolute;top: -16px;right:-14px;z-index:99999;cursor: pointer;" id="closeSuccess">
                        <img src="https://zca.maillist-manage.com/images/videoclose.png">
                        </span>
                        <div id="zcOptinSuccessPanel"></div>
                    </div>
                    <!-- end -->
                    <h3>{{$t("news.related")}}</h3>
                    <ul class="related-news clear" v-loading="loading2" v-if="relatShow">
                        <li v-for="(item,index) in relatList" :key="index" @click="gotoDetail(item.id)">
                            <img :src="imagesUrl+item.imgUrl" alt="">
                            <div class="related-content">
                                <h4>{{item.title}}</h4>
                                <div class="author-time-container marginT10 ">
                                    <p class="author-time fontSize12 color00223A">
                                        {{item.author}}
                                    </p>
                                    <i class="color00223A">&nbsp;·&nbsp;</i>
                                    <span v-html="formatterTimestamp(item.releaseTime)"></span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <p class="color00223A" v-if="!relatShow">{{$t('news.noNews')}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import r from '@/util/RequestUtil.js'
    import VueQuillEditor from 'vue-quill-editor'
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'
import { setTimeout } from 'timers';
    
    export default {
        name: '',
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
                _this.loading2 = true;
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
                    _this.loading2 = false;
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
                    _this.loading2 = false;
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
                // window.open(href, '_blank');
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
            // 设置样式
            document.getElementsByTagName('html')[0].style.height = '100%'
            const htmlHeight = document.getElementsByTagName('html')[0].offsetHeight
            const a = document.querySelector('.block-header').offsetHeight
            const b = document.querySelector('.block-footer').offsetHeight
            document.querySelector('.news-detail-container').style.minHeight = htmlHeight - a - b + 'px'

            // 订阅
            setTimeout(function(){
                setupSF('sfd3de3bb0c5d5b249356895f3144b5099c98e811ca5f0889b','ZCFORMVIEW',false,'light');
            },1000);
            
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

            document.querySelector(".block-header").style.background="rgba(0,69,105,.85)";

        },
        destroyed() {
            // 重置样式 防止影响其他页面
            document.getElementsByTagName('html')[0].style.height = 'auto'
        },
    }
</script>

<style type="text/css">
    .el-tag + .el-tag {
        margin-left: 10px;
    }
    .newsTag.el-tag{
        background: #E8EAEA;
        color: #8B8C8E;
        line-height: 32px;
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
    .newsDetail.ql-container.ql-snow{
        border: none;
    }
    .newsDetail .ql-editor{
        overflow-x: hidden;
    }
</style>
<style scoped="scoped">
    @import url("../../style/index/newsdetail.css");
    .input-ground-join{
        width: 100%;
    }
    .mail-input{
        font-size:12px;
        padding-left:10px;
    }
    .news-detail-container{
        background: #f5f7fa;
    }
</style>