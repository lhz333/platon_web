<template>
    <div>
        <div class="m1-index-block" :style="{height: screenHeight+'px'}">
            <div class="clearfix swiper-container swiper-container-banner">
                <ul class="swiper-wrapper">
                    <li class="swiper-slide mBanner-bg-one">
                        <div class="middle">
                                <!-- 首屏动画 -->
                            <div class="base-panel">
                                <!-- 五个多面体 -->
                                <div v-for="(item,index) in 5" :key="index" class="polygons" :class="[{active:(polygonIndex == index||allActive) }, 'polygon-'+(index+1)]">
                                    <div :class="'dot-'+(index+1)"></div>
                                    <div :class="'move'+(index+1)"></div>
                                    <img :src="require('../../assets/index/polygon-1'+(index+1)+'.png')" alt="">
                                </div>

                                <!-- 内部背景 -->
                                <div class="circle-bag text-center">
                                    <div class="circle-border"></div>
                                    <img class="fov-img"  :src="require('../../assets/index/polygon-1'+(polygonIndex+1)+'.png')" alt="">
                                    
                                </div>
                                <!-- 五边形 -->
                                <svg class="first-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215.15 214.88">
                                    <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_8" data-name="Layer 8">
                                        <polygon class="pentagon-lines" :class="{'active':allAIndex}" points="107.58 0.4 214.57 83.37 173.7 214.38 41.45 214.38 0.58 83.37 107.58 0.4" />
                                    </g>
                                    </g>
                                </svg>
                            </div>
                            <h1 class="text-center bannertitle">{{$t("banner.title")}}</h1>
                            <p class="subtitle text-center">{{$t("banner.subtitle")}}</p>
                            <!-- 白皮书 -->
                            <div class="download text-center">
                                <a :href="'../static/pdf/'+$i18n.locale+'/PlatON_A High-Efficiency Trustless Computing Network_Whitepaper_'+$i18n.locale.toUpperCase()+'.pdf'" :download="'PlatON_A High-Efficiency Trustless Computing Network_Whitepaper_'+$i18n.locale.toUpperCase()+'.pdf'">
                                    <span v-html="$t('banner.btn')"></span>
                                </a>
                            </div>
                            <div class="text-center link-github">
                                <a href="https://github.com/PlatONnetwork" target="_blank">
                                    <span>GitHub</span>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li class="swiper-slide two">
                        <div class="waves"></div>
                        <div class="content-min-size item">
                            <div class="item-content transform-6 text-center">
                                <div class="keyshard-logo">
                                    <img src="../../assets/keyshard-logo-mobile.png" alt="">
                                </div>
                                <h3 class="main-sologn">{{$t("keyShard.mainSologan")}}</h3>
                                <p class="sub-sologn">{{$t("keyShard.subSologan")}}</p>
                                <a class="a-btn" href="https://keyshard.platon.network/#/">{{$t("keyShard.btn")}}</a>
                            </div>
                        </div>
                    </li>
                    <li class="swiper-slide three">
                        <div class="waves vitu-bg-star"></div>
                        <div class="content-min-size item">
                            <div class="item-content text-center">
                                <div class="vitu-logo">
                                    <img src="../../assets/vitu-logo.png" alt="">
                                </div>
                                <h3 class="main-sologn vitu-title" v-html="$t('vitu.title')"></h3>
                                <p class="sub-sologn vitu-descipt" v-html="$t('vitu.descriptM')"></p>
                                <a class="a-btn vitu-btn" href="https://vitu.platon.network/">{{$t("vitu.btn")}}</a>
                            </div>
                        </div>
                    </li>
                    <li class="swiper-slide four">
                        <div class="content-min-size item">
                            <div class="item-content text-center">
                                <div v-show="$i18n.locale=='zh'" class="honor-logo-zh">
                                    <img src="../../assets/banner/HonorPoints-zh.png" alt="">
                                </div>
                                <div class="honr-logo-en">
                                    <img src="../../assets/banner/HonorPoints-en.png" alt="">
                                </div>
                                
                                <p class="honor-descript" v-html="$t(`honorPoints.descriptm`)"></p>
                                <!-- 跳转至积分商城手机端 -->
                                <a class="honor-signUp" href="JavaScript:;" @click="jumpHonor">{{$t("honorPoints.signUp")}}</a>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="swiper-paginationIndex swiper-pagination repaint"></div>
            </div>
        </div>
        <!--platon-->
        <div class="section">
            <!--PlatON是什么-->
            <div class="m2-index-block news-index-block">
                <div class="clearfix swiper-container swiper-container1">
                    <ul class="swiper-wrapper index2-ul clearfix">
                        <li class="swiper-slide" v-for="(item,index) in $t('partOne.content')" :key="index">
                            <div class="index2-img-top text-center" :class="'platon-icon'+(index+1)"></div>
                            <p class="index2p-title-2 text-center">{{$t("partOne.content["+index+"].title")}}</p>
                            <!-- <ul class="ul-detail-content">
                                <li v-for="(cont,i) in $t('partOne.content['+index+'].point')" :key="i">
                                    <p v-html="$t('partOne.content['+index+'].point['+i+'].text')"></p>
                                </li>
                            </ul> -->
                            <ul class="ul-detail-lists" :class="{marginAuto:((index!==1&&index!==3)||$i18n.locale == 'zh')}">
                                <li v-for="(cont,i) in $t('partOne.content['+index+'].point')" :key="i">
                                    <p v-html="$t('partOne.content['+index+'].point['+i+'].text')"></p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="swiper-pagination1 swiper-pagination repaint"></div>
            </div>
            <!-- service -->
            <div class="m2-index-block whifeBg" v-show="$i18n.locale=='en'">
                <h3 class="big-title text-center">Services</h3>
                <div class="clearfix swiper-container paddingT40 swiper-container2">
                    <ul class="swiper-wrapper index2-ul clearfix">
                        <li class="swiper-slide" v-for="(item,index) in services" :key="index" @click="$router.push({path:'/'+item})">
                            <div class="text-center service-img">
                                <img :src="require('../../assets/index/icons/img-1-'+(index+1)+'.png')" />
                            </div>
                            <p class="text-center index2p-title-2">{{$t(item+".title")}}</p>
                            <ul class="ul-detail-lists">
                                <li v-for="(list,i) in $t(item+'.doWhat')" :key="i">
                                    <p>{{$t(item+'.doWhat['+i+'].text')}}</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="swiper-pagination2 swiper-pagination repaint"></div>
            </div>
            <!--路线图-->
            <div class="m2-index-block index-block-roadmap">
                <h3 class="big-title text-center">{{$t("roadmap.title")}}</h3>
                <div class="roadmap-img text-center">
                    <img v-show="$i18n.locale == 'en'" :src="require('../../assets/mobile/en/roadmap.png')" alt="" />
                    <img v-show="$i18n.locale == 'zh'" :src="require('../../assets/mobile/zh/roadmap.png')" alt="" />
                </div>
            </div>
            <!--应用案例-->
            <!--新闻-->
            <div class="m2-index-block news-index-block" v-loading="loading">
                <h3 class="big-title text-center">{{$t("news.news")}}</h3>
                <!-- <ul class="new-list clearfix" v-if="newsList.length>0">
                    <li v-for="(item,index) in newsList" :key="index">
                        <div class="new-list-content" @click="gotoDetail(item.id)">
                            <div class="imgUrl">
                                <img v-if="item.imgUrl!==null" :src="imagesUrl+item.imgUrl" />
                            </div>
                            <div class="news-basic">
                                <div class="author-time-container">
                                    <p class="small">
                                        {{item.author}}
                                    </p>
                                    <i>&nbsp;·&nbsp;</i>
                                    <span v-html="formatterTimestamp(item.releaseTime)"></span>
                                </div>
                                <p class="news-title">{{item.title}}</p>
                            </div>
                        </div>
                    </li>
                </ul> -->
                <ul class="insights-list clearfix" v-if="newsList.length>0">
                    <li v-for="(item,index) in newsList" :key="index">
                        <div class="insights-list-content" @click="gotoDetail(item.id)">
                            <div class="insights-imgUrl">
                                <img v-if="item.imgUrl!==null" :src="imagesUrl+item.imgUrl" />
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
                <p v-else class="color00223A">{{$t('news.noNews')}}</p>
                <!-- 查看更多 -->
                <p class="seemore"><span @click="gotoNews()">{{$t("news.seemore")}}</span></p>
            </div>
            <!--观点-->
            <div class="m2-index-block whifeBg">
                <h3 class="big-title text-center">{{$t("news.insights")}}</h3>
                <ul class="insights-list clearfix" v-if="insightList.length>0">
                    <li v-for="(item,index) in insightList" :key="index">
                        <div class="insights-list-content" @click="gotoDetail(item.id)">
                            <div class="insights-imgUrl">
                                <img v-if="item.imgUrl!==null" :src="imagesUrl+item.imgUrl" />
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
                <p v-else class="color00223A">{{$t('news.noInsights')}}</p>
                <!-- 查看更多 -->
                <p class="seemore"><span  @click="gotoNews()">{{$t("news.seemore")}}</span></p>
            </div>
            <!--事件-->
            <div class="m2-index-block news-index-block">
                <h3 class="big-title text-center">{{$t("news.events")}}</h3>
                <div class="events whifeBg" v-if="eventsList.length>0" @click="gotoDetail(eventsList[0].id)">
                    <div class="event-img">
                        <img v-if="eventsList[0].topImgUrl!==null" :src="imagesUrl+eventsList[0].topImgUrl" />
                    </div>
                    <div class="events-news-basic">
                        <p class="events-time text-center" v-if="eventsList[0].activityBeginTime">
                            <span class="event-date" v-html="formatterTimesDates(eventsList[0].activityBeginTime)"></span><br>
                            <span v-html="formatterTimesDate(eventsList[0].activityBeginTime)"></span>
                        </p>
                        <p class="events-time text-center">
                            <span class="event-date" v-html="formatterTimesDates(eventsList[0].releaseTime)"></span><br>
                            <span v-html="formatterTimesDate(eventsList[0].releaseTime)"></span>
                        </p>
                        <p class="events-title" >{{eventsList[0].title}}</p>
                    </div>
                </div>
                <p v-else class="color00223A">{{$t('news.noEvents')}}</p>
                <!-- 查看更多 -->
                <p class="seemore" ><span @click="gotoNews()">{{$t("news.seemore")}}</span></p>
            </div>
            <!--媒体报道-->
            <div class="m2-index-block whifeBg">
                <h3 class="big-title text-center">{{$t("news.pressCenter")}}</h3>
                <ul class="media-list clearfix">
                    <li v-for="(item,index) in mediaList" :key="index">
                        <div class="text-center media-img" @click="tolink(item.link)">
                            <img :src="imagesUrl+item.logoUrl" alt="">
                        </div>
                    </li>
                </ul>
                <!-- 查看更多 -->
                <p class="seemore" >
                <span @click="gotoMedia()">{{$t("news.seemore")}}</span></p>
            </div>
            <!-- Partner -->
            <div class="m2-index-block news-index-block">
                <h3 class="big-title text-center">{{$t("partner.title")}}</h3>
                <div class="partners-list">
                    <figure class="image" v-for="(item,index) in partners" :key="index">
                        <a :href="item.link" target="_blank">
                            <img :src="require('../../assets/index/partner-'+item.name+'.png')" />
                        </a>
                        <!-- <div class="partners-content" slot="content">{{item.text}}</div> -->
                    </figure>
                </div>
            </div>
            <!--加入社区-->
            <div class="m2-index-block index-block-joinUs" style="padding:40px 0;" id="joinUs">
                <h3 class="big-title text-center">{{$t("joinUs.title")}}</h3>
                <div class="">
                    <ul class="icon-links clearfix">
                        <li>
                            <a href="https://t.me/PlatONHK" target="_blank"></a>
                        </li>
                        <li id="weixin" @click="weixinFuncShow">
                            <a href="JavaScript:;"></a>
                        </li>
                        <li>
                            <a href="https://github.com/PlatONnetwork" target="_blank"></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/PlatON_Network" target="_blank"></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/PlatONNetwork/" target="_blank"></a>
                        </li>
                        <li>
                            <a href="https://www.reddit.com/user/PlatON_Network" target="_blank"></a>
                        </li>
                        <li>
                            <a href="https://medium.com/@PlatON_Network" target="_blank"></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/platonnetwork/" target="_blank"></a>
                        </li>
                        <!-- 巴比特 -->
                        <li>
                            <a href="https://www.chainnode.com/forum/267" target="_blank"></a>
                        </li>
                        <!-- 币乎 -->
                        <li>
                            <a href="https://bihu.com/people/1215832888" target="_blank"></a>
                        </li>
                    </ul>
                    <!-- 表单 start -->
                    <div style="padding:0 15px;">
                        <mobile-sub></mobile-sub>
                    </div>
                    
                    <!-- 表单 end -->
                    <div class="contact-us text-center">
                        <span>{{$t("joinUs.contactUs")}}：</span>
                        <a href="mailto:support@platon.network">{{$t("joinUs.email")}}</a>
                    </div>
                </div>
            </div>

        </div>
        <!--弹出微信二维码-->
        <el-dialog class="weixin-dialog" title="" :visible.sync="weixinShow" :before-close="weixinClose" width="290px">
            <div class="weixin-img">
                <img src="../../assets/index/weixin.jpg" alt="" />
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import r from '@/util/RequestUtil.js'
    let timer = null;
    let timerA = null;
    import MobileSub from '@/components/MobileSub'

    export default {
        name: '',
        data() {
            return {
                polygonIndex: -1,
                allActive: false,
                allAIndex: true,
                weixinShow: false,
                modelDialog: false,
                screenHeight:document.documentElement.clientHeight < 520 ? 520 : document.documentElement.clientHeight,
                partone: ['one', 'two', 'three', 'four'],
                loading:false,
                newsList: [],
                insightList: [],
                eventsList: [],
                mediaList:[],
                services:['blockchain','consulting']
            }
        },
        components: {
            MobileSub
        },
        methods: {
            jumpHonor(){
                window.open('http://platon.mall.fensaas.com','_blank');
                return; 
            },
            //微信二维码展示
            weixinFuncShow() {
                this.weixinShow = !this.weixinShow;
                if(this.weixinShow){
                    ModalHelper.afterOpen();
                }else{
                    ModalHelper.beforeClose();
                }
            },
            //微信弹窗关闭按钮
            weixinClose(){
                this.weixinShow = false;
                ModalHelper.beforeClose();
            },
            // 媒体报道链接
            tolink(link){
                window.open(link);
            },
            // 进去新闻页
            gotoNews(){
                this.$router.push({path: '/news'});
                window.sessionStorage.setItem('newsPageno',1);
            },
            // 进去媒体报道
            gotoMedia(){
                this.$router.push({path: '/pressCenter'});
                window.sessionStorage.setItem('mediaPageno',1);
            },
            // 点击进入新闻详情页
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
            //时间转换
            formatterTimestamp(row, column) {
                return r.formatterTimestampT(row);
            },
            formatterTimesDate(row, column) {
                return r.formatterTimesDate(row);
            },
            formatterTimesDates(row, column) {
                return r.formatterTimesDates(row);
            },
            //获取观点数据
            getInsightsData() {
                let _this = this;
                _this.loading = true;
                this.imagesUrl = r.GETIMG_URL;
                let param = {
                    pageNo: 1,
                    pageSize: 2,
                    typeName:_this.$t("news.insights")
                };
                let baseUrl = null;
                if (this.$i18n.locale == "zh") {
                    baseUrl = "findNewsCn";
                } else {
                    baseUrl = "findNewsEn";
                }
                _this.ApiService.news[baseUrl](param,true).then(data=>{
                    _this.loading = false;
                    if (data && data.code === 0) {
                        _this.insightList = data.data.result;
                    } else {
                    r.message(data.message, "warning");
                    }
                })
                .catch(err => {
                    _this.loading = false;
                    console.log(err);
                });
            },
            //获取活动数据
            getEventsData() {
                let _this = this;
                _this.loading = true;
                this.imagesUrl = r.GETIMG_URL;
                let param = {
                    pageNo: 1,
                    pageSize: 1,
                    typeName:_this.$t("news.events")
                };
                let baseUrl = null;
                if (this.$i18n.locale == "zh") {
                    baseUrl = "findNewsCn";
                } else {
                    baseUrl = "findNewsEn";
                }
                _this.ApiService.news[baseUrl](param,true).then(data=>{
                    _this.loading = false;
                    if (data && data.code === 0) {
                        _this.eventsList = data.data.result;          
                    } else {
                    r.message(data.message, "warning");
                    }
                })
                .catch(err => {
                    _this.loading = false;
                    console.log(err);
                });
            },
            //获取新闻数据
            getNewsData() {
                let _this = this;
                _this.loading = true;
                this.imagesUrl = r.GETIMG_URL;
                let param = {
                    pageNo: 1,
                    pageSize: 2,
                    typeName:_this.$t("news.news")
                };
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
                    } else {
                    r.message(data.message, "warning");
                    }
                })
                .catch(err => {
                    _this.loading = false;
                    console.log(err);
                });
            },
            //获取媒体报道
            getMediaData() {
                let _this = this;
                let param = {
                    pageNo: 1,
                    pageSize: 3
                };
                _this.ApiService.media.findPlatMedia(param,true).then(data=>{
                    if (data && data.code === 0) {
                    _this.mediaList = data.data.result;
                    } else {
                    r.message(data.message, "warning");
                    }
                })
                .catch(err => {
                    console.log(err);
                });
            },
             //定时轮播
            timingGear() {
                let _this = this;

                timer = setInterval(function() {

                    _this.allAIndex = false;
                    _this.polygonIndex++;
                    // console.log('定时轮播')
                    if (_this.polygonIndex == 4) {
                        _this.clearTimer();

                        setTimeout(function() {
                            _this.polygonIndex = -1;
                            _this.allActive = false;
                        }, 2000);
                        setTimeout(function() {
                            _this.allActive = true;
                        }, 2100);
                        setTimeout(function() {
                            _this.allActive = false;
                        }, 5000);
                        return;
                    }
                }, 2000);
            },
            // 循环动画
            timingGearA() {
                let _this = this;
                timerA = setInterval(function() {
                    _this.allAIndex = true;
                    // console.info('循环开始')
                    _this.timingGear();
                }, 16500);
            },
            //清除定时器
            clearTimer() {
                clearInterval(timer);
            },
            clearTimerA() {
                clearInterval(timerA);
            }
        },
        computed: {
            partners () {
                return this.$t('partner.list')
            },
        },
        watch: {
            '$i18n.locale':function(val){
                this.getNewsData();
                this.getEventsData();
                this.getInsightsData();
            }
        },
        mounted() {
            let query = this.$route.query;
            let tab = query.tab;
            if(tab==='joinUs'){
                this.common.jump(3350);
            }

            
            setTimeout(()=>{
              window.scrollTo(0,0);
            },0)
            this.timingGear();
            this.timingGearA();

            let that = this;
            window.onresize = function temp() {
                that.screenHeight = document.documentElement.clientHeight < 520 ? 520 : document.documentElement.clientHeight;
            };

            // 获取新闻数据
            this.getNewsData();
            this.getEventsData();
            this.getInsightsData();
            //获取媒体报道
            this.getMediaData();
            //swiper轮播
            var mySwiper1 = new Swiper('.swiper-container1', {
                direction: 'horizontal',
                loop: false,
                // 如果需要分页器
                pagination: '.swiper-pagination1',
                paginationClickable: true,
                centeredSlides: true,
                autoplayDisableOnInteraction: false
            })
            var mySwiper2 = new Swiper('.swiper-container2', {
                direction: 'horizontal',
                loop: false,
                pagination: '.swiper-pagination2',
                paginationClickable: true,
                centeredSlides: true,
                autoplayDisableOnInteraction: false
            })
            var mySwiperIndex = new Swiper('.swiper-container-banner', {
                direction: 'horizontal',
                loop: false,
                autoplay: 5000,
                pagination: '.swiper-paginationIndex',
                paginationClickable: true,
                centeredSlides: true,
                autoplayDisableOnInteraction: false
            })
        },
        //销毁滚动事件
        beforeDestroy() {
            this.clearTimer();
            this.clearTimerA();
        }
    }
</script>
<style type="text/css">
    .repaint.swiper-pagination{
        position: relative;
        z-index:3;
    }
    .repaint .swiper-pagination-bullet{
        width: 20px;
        height: 2px;
        border-radius: 2px;
        background: #C7D3E7;
        margin:0 5px;
        opacity: 1;
    }
    .repaint .swiper-pagination-bullet-active{
        background: #00B7DE;
    }
    .weixin-dialog .el-dialog__body {
        padding: 0;
    }

    .model-dialog .el-dialog__body {
        padding: 0 15px;
    }

    .el-dialog__headerbtn {
        top: 5px;
        right: 5px;
    }

    .el-dialog {
        margin: 0 auto;
    }

    .el-dialog__close {
        font-size: 32px;
        font-weight: bold;
    }

    .el-message {
        min-width: 250px;
        top: 40%;
    }

</style>
<style scoped="scoped">
    @import url("../../style/mobile/m-index.css");
</style>