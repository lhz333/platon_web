<template>
    <div class="news-container">
        <!--banner-->
        <div class="case-block-1 text-center">
            <div class="back-mask"></div>
            <h3>{{$t("news.title")}}</h3> 
        </div>
        <div class="anchors" :class="isFixed== true?'isFixed':''">
            <!-- <ul class="nav-anchor-ul clearfix">
                <li v-for="(item,index) in typeList" :class="{active:activeIndex===item.id}" :key="index" @click="getTypeNews(item.id)">
                    {{item.name}}
                </li>
            </ul> -->
            <div class="swiper-container">
                <ul class="swiper-wrapper nav-anchor-ul text-center">
                    <li class="swiper-slide" v-for="(item,index) in typeList" :key="index" @click="getTypeNews(item.id)" :class="{active:activeIndex===item.id}">{{item.name}}</li>
                </ul>
            </div>
        </div>  
        <div class="search">
            <el-input
                    class="news-search"
                    :placeholder="$t('news.search')"
                    v-model.trim="searchValue" @blur="handleSearch" @keyup.native.enter="handleSearch()" :clearable="true">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
        </div>

        <div class="media-index-block" v-loading="loading">
            <ul class="media-list clearfix" v-if="newsList.length>0">
                <li v-for="(item,index) in newsList" :key="index" @click="gotoDetail(item.id)" >
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
                newsList:[],
                imagesUrl:null,
                isFixed: false,
                
                page: {
                    totalPages: 1,
                    currentNo: 1,
                    pageSize: 6
                },
                loading:false,
                typeList:[],
                searchValue:null,
                activeIndex:null,
                newsPageno:1
            }
        },
        methods: {
            initSwiper() {
                var mySwiper = new Swiper('.swiper-container', {
                    // width: 1073,
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    // spaceBetween: 25,
                });
            },
            //   滚动事件
            handleScrollnew() {
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
            shwoInput() {
                const tiemr = setTimeout(function() {
                    document.querySelector('#CONTACT_EMAIL').scrollIntoView();
                }, 200);
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
            // 设置样式 适配手机端
            document.querySelector('.news-container').style.minHeight = (document.documentElement.clientHeight-100)+'px';
            window.onresize = function temp() {
               document.querySelector('.news-container').style.minHeight = (document.documentElement.clientHeight-100)+'px';
            };
            
            //获取媒体分类数据
            //页码
            this.newsPageno = window.sessionStorage.getItem('newsPageno');
            if(this.newsPageno && this.newsPageno !== null){
                this.page.currentNo = parseInt(this.newsPageno);
            }
            this.getTypes();
            this.getData();
            setTimeout(()=>{
              window.scrollTo(0,0);
            },0)

            let scrollTop =
              document.documentElement.scrollTop || document.body.scrollTop;
            this.anchorsTop =
              document.querySelector(".anchors").getBoundingClientRect().top +
              scrollTop -
              50;
            window.addEventListener("scroll", this.handleScrollnew);
        },
        destroyed() {
            // 重置样式 防止影响其他页面
            window.removeEventListener("scroll", this.handleScrollnew);
        }
    }
</script>
<style>
.news-search .el-input__inner{
    height: .8rem;
    line-height: .8rem;
    background: #EFF1F3;
}
.news-search .el-input__icon{
    line-height: .8rem;
}
</style>

<style scoped="scoped">
    @import url("../../style/mobile/style-mobile.css");
    @import url("../../style/mobile/news.css");
</style>