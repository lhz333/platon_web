<template>
    <div class="big-div">
        <!--banner-->
        <div class="case-block-1">
            <div class="back-mask"></div>
            <div class="content-min-size paddingLR50 case-banner">
                <div class="case-title text-center">
                    <h3 class="marginB20">{{$t("news.title")}}</h3>
                </div>                
            </div>
        </div>
        <!-- 锚点导航 -->
        <div class="nav-anchor">
            <div class="content-min-size paddingLR50 new-nav">
                <div class="nav-type" style="line-height:46px;font-size:14px;">
                    {{$t("news.tagged")}}&nbsp;{{tagged}}
                </div>
            </div>
        </div>
        <!--新闻资讯-->
        <div class="news-block-2" v-loading="loading">
            <div class="content-min-size paddingLR50">
                <div class="news-left-margin">
                    <ul class="newsLists clear" v-if="newsList.length>0">
                        <li v-for="(item,index) in newsList" :key="index">
                            <div class="news-item" @click="gotoDetail(item.id)">
                                <div class="imgUrl">
                                    <img :src="imagesUrl+item.imgUrl" />
                                </div>
                                <div class="news-basic">
                                    <p class="news-title fontWeight">{{item.title}}</p>
                                    <div class="author-time-container marginT10">
                                        <p class="author-time">
                                            {{item.author}}
                                        </p>
                                        <i v-if="item.author!==null && item.releaseTime !== null">&nbsp;&nbsp;·&nbsp;&nbsp;</i>
                                        <span v-html="formatterTimestamp(item.releaseTime)"></span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <p class="text-center color00223A" v-else>{{$t('news.noNews')}}</p>
                </div>                
            </div>

            <div class="content-min-size paddingLR50 text-center" v-if="newsList.length>0">
                <el-pagination
                  class="marginT50"
                  @current-change="handleCurrentChange"
                  :page-size="page.pageSize"
                  :current-page="page.currentNo"
                  layout="prev, pager, next"
                  :total="page.totalPages">
                </el-pagination>
            </div>
        </div>

        <div class="news-block-3">
            <!-- 订阅表单 -->
          <web-sub></web-sub>
          <!-- 订阅结束 -->
        </div>
    </div>
</template>

<script>
    import r from '@/util/RequestUtil.js'
    import WebSub from '@/components/WebSub'

    export default {
        metaInfo(){
          return {
            title: this.$t("seo.news.title"), // set a title
            meta: [{                 // set meta
              name: 'keywords',
              content: this.$t("seo.news.keywords"),
            },{
              name: 'description',
              content: this.$t("seo.news.description"),
            }]
          }
        },
        name: '',
        components: {
            WebSub
        },
        data() {
            return {
                searchValue:null,
                anchorsTop:0,
                newsList: [],
                imagesUrl:null,
                page: {
                    totalPages: 1,
                    currentNo: 1,
                    pageSize: 9
                },
                loading:false,
                lableId:null,
                tagged:null
            }
        },
        methods: {
            handleCurrentChange(val) {
                this.page.currentNo = val;
                document.documentElement.scrollTop=0;
                document.body.scrollTop =0;
                this.getData();
            },
            //时间转换
            formatterTimestamp(row, column) {
                return r.formatterTimestampT(row);
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
            },
            //获取数据
            getData() {
                let _this = this;
                _this.loading = true;
                this.imagesUrl = r.GETIMG_URL;
                let param = {
                    lable: _this.lableId,
                    pageNo: _this.page.currentNo,
                    pageSize: _this.page.pageSize,
                }
                let baseUrl = null;
                if (this.$i18n.locale == "zh") {
                    baseUrl = "findLabelCn";
                } else {
                    baseUrl = "findLabelEn";
                }
                _this.ApiService.news[baseUrl](param,true).then(data=>{
                    _this.loading = false;
                    if (data && data.code === 0) {
                        _this.newsList = data.data.result;
                        _this.page.totalPages = data.data.totalCount;
                    } else {
                    r.message(data.message, "warning");
                    }
                })
                .catch(err => {
                    _this.loading = false;
                    console.log(err);
                });
            },
            contentHeight(){
                document.getElementsByTagName('html')[0].style.height = '100%'
                const htmlHeight = document.getElementsByTagName('html')[0].offsetHeight
                const a = document.querySelector('.case-block-1').offsetHeight
                const c = document.querySelector('.news-block-3').offsetHeight
                const d = document.querySelector('.block-footer').offsetHeight
                document.querySelector('.news-block-2').style.minHeight = htmlHeight - a - c - d - 90 + 'px'
            }
        },
        // watch: {
        //     '$i18n.locale':function(val){
        //         this.page.currentNo = 1;
        //         this.getData();
        //     }
        // },
        mounted() {
            let _this=this;
            // 设置样式
            _this.contentHeight();
            window.onresize = function temp() {
                _this.contentHeight();
            };
            //标签
            this.tagged = window.sessionStorage.getItem('tagged');

            //邮件订阅
            setupSF('sfd3de3bb0c5d5b249356895f3144b5099c98e811ca5f0889b','ZCFORMVIEW',false,'light');
            
            let query = this.$route.query;
            _this.lableId = parseInt(query.lableId);

            this.getData();
        },
        destroyed() {
            // 重置样式 防止影响其他页面
            document.getElementsByTagName('html')[0].style.height = 'auto'
            window.removeEventListener("scroll", this.handleScroll);
        }
    }
</script>


<style scoped="scoped">
    @import url("../../style/index/case.css");
    @import url("../../style/index/news.css");
    .back-mask{
        background: url(../../assets/mobile/bg3.png) no-repeat center;
        background-size:auto 100%;
    }
    i {
        font-style: normal;
    }
</style>