<template>
    <div class="news-container">
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
        <div class="nav-anchor" :class="isFixed== true?'isFixed':''">
            <div class="content-min-size paddingLR50 new-nav">
                <div class="nav-type">
                    <div class="swiper-container">
                        <ul class="swiper-wrapper text-center">
                            <li class="swiper-slide" v-for="(item,index) in typeList" :key="index" @click="getTypeNews(item.id)" :class="{active:activeIndex===item.id}">{{item.name}}</li>
                        </ul>
                        <!-- <div class="swiper-button-next">
                            <i class="el-icon-arrow-right"></i>
                        </div> -->
                    </div>
                    <!-- <ul class="marginAuto nav-anchor-ul clear text-center">
                        <li v-for="(item,index) in typeList" :key="index" @click="getTypeNews(item.id)" :class="{active:activeIndex===item.id}">{{item.name}}</li>
                    </ul> -->
                </div>
                
                <el-input
                    class="news-search"
                    :placeholder="$t('news.search')"
                    v-model.trim="searchValue" @blur="handleSearch" @keyup.native.enter="handleSearch()" :clearable="true">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
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
                                    <div class="author-time-container">
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
                activeIndex:null,
                anchorsTop:0,
                newsList: [],
                typeList:[],
                isFixed: false,
                imagesUrl:null,
                page: {
                    totalPages: 1,
                    currentNo: 1,
                    pageSize: 9
                },
                loading:false,
                newsPageno:1
            }
        },
        methods: {
            initSwiper() {
                var mySwiper = new Swiper('.swiper-container', {
                    // width: 1073,
                    slidesPerView: 6,
                    slidesPerGroup: 1,
                    // nextButton:'.swiper-button-next'
                    // spaceBetween: 25,
                });
            },
            //   滚动事件
            handleScroll() {
                this.$nextTick(() => {
                    let scrollTop =
                        document.documentElement.scrollTop || document.body.scrollTop;
                    if (scrollTop > this.anchorsTop) {
                        this.isFixed = true;
                    } else {
                        this.isFixed = false;
                    }
                });
            },
            typeTab(index){
                this.activeType = index;
            },
            handleCurrentChange(val) {
                this.page.currentNo = val;
                window.sessionStorage.setItem('newsPageno',val);
                document.documentElement.scrollTop=0;
                document.body.scrollTop =0;
                this.getData();
            },
            //时间转换
            formatterTimestamp(row, column) {
                return r.formatterTimestampT(row);
            },
            gotoDetail(newsId) {
                const {href} = this.$router.resolve({
                    path: '/newsDetail',
                    query: {
                        language:this.$i18n.locale,
                        newsId: newsId
                    }
                });
                window.open(href, '_blank');
            },
            //点击分类 获取不同分类下的数据
            getTypeNews(id){
                let _this = this;
                _this.activeIndex = id;
                _this.page.currentNo = 1;
                window.sessionStorage.setItem('newsPageno',1);
                _this.getData();
            },
            //获取分类数据
            getTypes(){
                let _this = this;
                let baseUrl = null;
                if(this.$i18n.locale == 'zh') {
                    baseUrl = "findTypeCn";
                } else {
                    baseUrl = "findTypeEn";
                }
                _this.ApiService.news[baseUrl]().then(data=>{
                    if (data && data.code === 0) {
                        _this.typeList = data.data;
                        if(_this.$i18n.locale == 'zh') {
                            _this.typeList.unshift({name:"全部",id:null})
                        } else {
                            _this.typeList.unshift({name:"All",id:null})
                        }
                        _this.$nextTick(() => {
                            _this.initSwiper()
                        })
                    } else {
                        r.message(data.message, "warning");
                    }
                })
                .catch(err => {
                    console.log(err);
                });
            },
            //搜索
            handleSearch() {
                this.page.currentNo = 1;
                window.sessionStorage.setItem('newsPageno',1);
                this.getData();
            },
            //获取数据
            getData() {
                let _this = this;
                _this.loading = true;
                this.imagesUrl = r.GETIMG_URL;
                let param = {
                    title: _this.searchValue,
                    pageNo: _this.page.currentNo,
                    pageSize: _this.page.pageSize,
                    typeId:_this.activeIndex
                }
                let baseUrl = null;
                if (this.$i18n.locale == "zh") {
                    baseUrl = "findNewsCn";
                } else {
                    baseUrl = "findNewsEn";
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
                const b = document.querySelector('.nav-anchor').offsetHeight
                const c = document.querySelector('.news-block-3').offsetHeight
                const d = document.querySelector('.block-footer').offsetHeight
                document.querySelector('.news-block-2').style.minHeight = htmlHeight - a - b - c - d - 90 + 'px'
            }
        },
        watch: {
            '$i18n.locale':function(val){
                this.page.currentNo = 1;
                window.sessionStorage.setItem('newsPageno',1);
                this.activeIndex=null;
                this.getTypes();
                this.getData();
            }
        },
        mounted() {

            // 设置样式
            let _this=this;
            // 设置样式
            _this.contentHeight();
            window.onresize = function temp() {
                _this.contentHeight();
            };

            //页码
            this.newsPageno = window.sessionStorage.getItem('newsPageno');
            if(this.newsPageno && this.newsPageno !== null){
                this.page.currentNo = parseInt(this.newsPageno);
            }
            
            this.getTypes();
            this.getData();
            
            let scrollTop =
              document.documentElement.scrollTop || document.body.scrollTop;
            this.anchorsTop =
              document.querySelector(".nav-anchor").getBoundingClientRect().top +
              scrollTop -
              50;
            window.addEventListener("scroll", this.handleScroll);
            
        },
        destroyed() {
            // 重置样式 防止影响其他页面
            document.getElementsByTagName('html')[0].style.height = 'auto'
            window.removeEventListener("scroll", this.handleScroll);
        }
    }
</script>

<style>
    .news-search .el-input__inner{
        border: 1px solid #B0B5B9;
        border-radius: 100px;
        height:32px;
        line-height: 32px;
        color:#b0b5b9;
        background: transparent;
    }
</style>

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