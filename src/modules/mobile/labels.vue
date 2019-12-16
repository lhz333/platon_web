<template>
    <div class="news-container">
        <!--banner-->
        <div class="case-block-1 text-center">
            <div class="back-mask"></div>
            <h3>{{$t("news.title")}}</h3> 
        </div>
        <div class="anchors">
            <ul class="nav-anchor-ul clearfix">
                <li>
                    {{$t("news.tagged")}}&nbsp;{{tagged}}
                </li>
            </ul>
            <!-- <div class="swiper-container">
                <ul class="swiper-wrapper nav-anchor-ul text-center">
                    <li class="swiper-slide" v-for="(item,index) in typeList" :key="index" @click="getTypeNews(item.id)" :class="{active:activeIndex===item.id}">{{item.name}}</li>
                </ul>
            </div> -->
        </div>  
        <!--新闻资讯-->
        <div class="media-index-block">
            <ul class="media-list clearfix" v-if="newsList.length>0">
                <li v-for="(item,index) in newsList" :key="index" @click="gotoDetail(item.id)">
                    <div class="text-center media-img">
                        <img :src="imagesUrl+item.imgUrl" alt="">
                    </div>
                    <div class="media-content">
                        <div class="author-time-container">
                            <p class="author-time">
                                {{item.author}}
                            </p>
                            <i>&nbsp;·&nbsp;</i>
                            <span v-html="formatterTimestamp(item.releaseTime)"></span>
                        </div>
                        <p class="news-title">{{item.title}}</p>
                    </div>
                </li>
            </ul>
            <p v-else class="text-center">{{$t("news.noNews")}}</p>

            <div class="text-center" >
                <el-pagination
                    v-if="newsList.length>0"
                    @current-change="handleCurrentChange"
                    :page-size="page.pageSize"
                    :current-page="page.currentNo"
                    layout="prev, pager, next"
                    :total="page.totalPages">
                </el-pagination>
            </div>
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
    import MobileSub from '@/components/MobileSub'
    export default {
        name: '',
        components: {
            MobileSub
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
            // 订阅
            runOnFormSubmit_sfd3de3bb0c5d5b249356895f3144b5099c98e811ca5f0889b(th){
            /*Before submit, if you want to trigger your event, "include your code here"*/
            },
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
        },
        // watch: {
        //     '$i18n.locale':function(val){
        //         this.page.currentNo = 1;
        //         this.getData();
        //     }
        // },
        mounted() {
            // 设置样式 适配手机端
            document.querySelector('.news-container').style.minHeight = (document.documentElement.clientHeight-100)+'px';
            window.onresize = function temp() {
               document.querySelector('.news-container').style.minHeight = (document.documentElement.clientHeight-100)+'px';
            };
             //标签
            this.tagged = window.sessionStorage.getItem('tagged');

            var _this = this;
            let query = this.$route.query;
            _this.lableId = parseInt(query.lableId);

            this.getData();
        }
    }
</script>


<style scoped="scoped">
    @import url("../../style/mobile/style-mobile.css");
    @import url("../../style/mobile/news.css");
</style>