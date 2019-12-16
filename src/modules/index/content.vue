<template>
  <div>
    <!--banner-->
    <div class="index-block-1">
        <el-carousel arrow="never" interval="5000" :style="{overflow:'hidden',height: screenHeight+'px',width: screenWidth+'px'}">
            <el-carousel-item>
                <div class="content-min-size item-content text-center" :style="{height: screenHeight+'px',width: screenWidth+'px'}">
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
                            <polygon class="pentagon-lines" :class="{active:allAIndex}" points="107.58 0.4 0.58 83.37 41.45 214.38 173.7 214.38 214.57 83.37 107.58 0.4" />
                          </g>
                        </g>
                      </svg>
                    </div>

                    <!-- 首屏动画end -->
                    <div class="zoomInDown">
                      <h1 class="fontSize30 fontWeight bannertitle">{{$t("banner.title")}}</h1>
                      <p class="fontSize14 fontWeight">{{$t("banner.subtitle")}}</p>
                      <!-- 下载白皮书 -->
                      <div class="clear btns">
                        <div class="download fl text-center">
                          <a :href="'../static/pdf/'+$i18n.locale+'/PlatON_A High-Efficiency Trustless Computing Network_Whitepaper_'+toUpperCase($i18n.locale)+'.pdf'" target="_blank">
                            <span v-html="$t('banner.btn')"></span>
                          </a>
                        </div>
                        <div class="fr text-center link-github">
                          <a href="https://github.com/PlatONnetwork" target="_blank">
                            <span>GitHub</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <!-- 下拉按钮 -->
                    <!-- <div class="text-center pulldown" @click="pullDown">
                      <i style="margin-left:0;" class="el-icon-arrow-down el-icon--right"></i>
                    </div> -->
                  </div>
            </el-carousel-item>
            <el-carousel-item class="two">
                <div class="waves"></div>
                <div class="content-min-size item paddingLR50">
                    <div class="item-content2 transform-7">
                        <div class="keyshard-logo">
                            <img src="../../assets/keyshard-logo-banner.png" alt="">
                        </div>
                        <h3 class="main-sologn">{{$t("keyShard.mainSologan")}}</h3>
                        <p class="sub-sologn">{{$t("keyShard.subSologan")}}</p>
                        <p class="btn-p">
                          <a class="a-btn text-center" href="https://keyshard.platon.network/#/" target="_blank">{{$t("keyShard.btn")}} <i class="arrow"></i></a>
                        </p>
                    </div>
                </div>
            </el-carousel-item>
            <!-- vitu -->
            <el-carousel-item class="three">
                <div class="content-min-size item-three paddingLR50">
                    <div class="item-content2">
                        <div class="vitu-logo">
                            <img src="../../assets/vitu-logo-white.png" alt="">
                        </div>
                        <h3 class="main-sologn" v-html="$t('vitu.title')"></h3>
                        <p class="sub-sologn vitu-descript" v-html="$t('vitu.descript')"></p>
                        <p class="btn-p">
                          <a class="a-btn vitu-btn text-center" href="https://vitu.platon.network/" target="_blank">{{$t("vitu.btn")}} <i class="arrow vitu-arrow"></i></a>
                        </p>
                    </div>
                </div>
            </el-carousel-item>
            <!-- 云图荣誉 -->
            <el-carousel-item class="four">
                <div class="content-min-size item-four paddingLR50 text-center">
                    <div v-show="$i18n.locale=='zh'" class="honor-logo-zh">
                        <img src="../../assets/banner/HonorPoints-zh.png" alt="">
                    </div>
                    <div class="honr-logo-en">
                        <img src="../../assets/banner/HonorPoints-en.png" alt="">
                    </div>
                    
                    <p class="honor-descript">{{$t("honorPoints.descript")}}</p>
                    <a class="honor-signUp" target="_blank" href="http://platon.pc.fensaas.com/index">{{$t("honorPoints.signUp")}}</a>
                </div>
            </el-carousel-item>
        </el-carousel>
      
    </div>
    <!--PlatON是什么-->
    <div class="index-block-2" id="platon">
      <div class="content-min-size paddingLR50">
        <div class="index2-ul-margin">
          <ul class="clear index2-ul">
            <li v-for="(item,index) in $t('partOne.content')" :key="index">
              <div class="index2-div-content clear">
                <div class="platon-icon" :class="`platon-icon${index+1}`"></div>
                <p class="platon-title fontWeight marginB15">{{$t("partOne.content["+index+"].title")}}</p>
                <!-- <ul class="platon-point">
                  <li v-for="(cont,i) in $t('partOne.content['+index+'].point')" :key="i">{{$t("partOne.content["+index+"].point["+i+"].text")}}</li>
                </ul> -->
                <ul class="ul-detail-content platon" :class="{active:(index==0||index==2)}">
                    <li v-for="(cont,i) in $t('partOne.content['+index+'].point')" :key="i">
                        <p>{{$t("partOne.content["+index+"].point["+i+"].text")}}</p>
                    </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Services -->
    <div class="index-block-9" v-if="$i18n.locale=='en'">
        <div class="content-min-size paddingLR50">
            <div class="module-title text-center">
                Services
            </div>
            <div class="services-ul">
                <div v-for="(item,index) in services" :key="index" >
                    <div class="text-center service-img">
                        <img :src="require(`../../assets/index/icons/img-1-${index+1}.png`)" />
                    </div>
                    <p class="text-center fontWeight service-title">{{$t(item+".title")}}</p>
                    <ul class="ul-detail-content">
                        <li v-for="(list,i) in $t(item+'.doWhat')" :key="i">
                            <p>{{$t(item+'.doWhat['+i+'].text')}}</p>
                        </li>
                    </ul>
                    <!-- 查看更多 -->
                    <p class="text-right marginT20 seemore" @click="$router.push({path:'/'+item})">{{$t("news.learnMore")}}</p>
                </div>
            </div>
        </div>
    </div>
    <!--路线图-->
    <div class="index-block-5" id="roadmap">
      <div class="content-min-size paddingLR50 text-center">
        <div class="module-title">
          {{$t("roadmap.title")}}
        </div>
        <div class="roadmap-img">
          <img :src="require('../../assets/index/'+$i18n.locale+'/roadmap.png')" alt="" />
        </div>
      </div>
    </div>
    <!--创始人-->
    <div class="index-block-8" id="team">
      <div class="content-min-size paddingLR50">
        <div class="module-title text-center">
          {{$t("founder.title")}}
        </div>
        <div class="founder">
          <ul class="founder-ul clear">
            <li v-for="(item,index) in $t('founder.people')" :key="index" @click="showTeamDetail('founder',index)">
              <div class="founder-content text-center">
                <div class="head-picture">
                  <img :src="require(`../../assets/index/founder${index+1}.png`)" />
                </div>
                <p class="founder-name">{{$t("founder.people["+index+"].name")}}</p>
                <p class="founder-educat" v-html="$t('founder.people['+index+'].detail')"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 团队详细介绍 -->
    <transition name="fade">
      <div class="modal-filter" v-show="teamShow" @click="closeTeamSow"></div>
    </transition>
    <transition name="fade">
      <div class="team-modal" v-if="teamShow">
        <!-- <div class="close-modal text-center" @click="closeTeamSow">
          <i class="el-icon-close"></i>
        </div> -->
        <div class="modal-left">
          <p class="team-name marginB20">{{$t(teamDetail+".people["+teamActive+"].name")}}</p>
          <p class="marginB20 team-educat" v-html="$t(teamDetail+'.people['+teamActive+'].education')"></p>
          <p class="marginB20 team-educat" v-html="$t(teamDetail+'.people['+teamActive+'].detail')"></p>
        </div>
        <ul class="ul-detail-content paddingL40">
          <li v-for="(list,i) in $t(teamDetail+'.people['+teamActive+'].point')" :key="i">
            <p>{{$t(`${teamDetail}.people[${teamActive}].point[${i}].text`)}}</p>
          </li>
        </ul>
        
      </div>
    </transition>
    <!--核心团队-->
    <div class="index-block-9">
      <div class="content-min-size">
        <div class="module-title text-center">
          {{$t("team.title")}}
        </div>
        <ul class="team-ul clear">
          <li v-for="(item,index) in $t('team.people')" :key="index" @click="showTeamDetail('team',index)">
            <div class="team-content text-center">
              <img :src="require('../../assets/index/team'+(index+1)+'.png')" />
              <p class="founder-name">{{$t("team.people["+index+"].name")}}</p>
              <p class="founder-educat">{{$t("team.people["+index+"].job")}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--顾问-->
    <div class="index-block-9">
      <div class="content-min-size paddingLR50">
        <div class="module-title text-center" style="padding:0;">
          {{$t("advisorTitle")}}
        </div>
        <ul class="founder-ul clear paddingTB70">
          <li v-for="(item,index) in $t('advisor')" :key="index">
            <div class="advisor-content text-center">
              <div class="advisor-img">
                <img :src="require('../../assets/index/advisor'+(index+1)+'.png')" />
              </div>
              <p class="founder-name marginB20">{{$t("advisor["+index+"].name")}}</p>
              <p class="color666 lineHeight26" v-for="(list,i) in $t('advisor['+index+'].point')" :key="i" v-html="$t('advisor['+index+'].point['+i+'].text')"></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--新闻公告-->
    <div class="index-block-7">
      <div class="content-min-size paddingLR50" style="height:734px;">
        <div class="insights">
          <div class="insights-left">
            <!-- news -->          
              <p class="insight-type-title">{{$t("news.news")}}</p>
              <ul class="new-list clear" v-loading="loading" style="min-height:296px;">
                <li v-for="(item,index) in newsList" :key="index">
                  <div class="new-list-content" @click="gotoDetail(item.id)">
                    <div class="imgUrl">
                      <img v-if="item.imgUrl!==null" :src="imagesUrl+item.imgUrl" />
                    </div>
                    <div class="news-basic">
                      <p class="news-title fontWeight">{{item.title}}</p>
                      <div class="author-time-container">
                        <p class="author-time">
                            {{item.author}}
                        </p>
                        <i v-if="item.author!==null && item.releaseTime !== null">&nbsp;·&nbsp;</i>
                        <span v-html="formatterTimestamp(item.releaseTime)"></span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <!-- <p v-else class="color00223A">{{$t("news.noNews")}}</p> -->
              <!-- insights -->
              <p class="insight-type-title marginT20">{{$t("news.insights")}}</p>
              <ul class="new-list clear" v-loading="loadingInsight" style="min-height:296px;">
                 <li v-for="(item,index) in insightList" :key="index">
                  <div class="new-list-content" @click="gotoDetail(item.id)">
                    <div class="imgUrl">
                      <img v-if="item.imgUrl!==null" :src="imagesUrl+item.imgUrl" />
                    </div>
                    <div class="news-basic">
                      <p class="news-title fontWeight">{{item.title}}</p>
                      <div class="author-time-container">
                        <p class="author-time">
                            {{item.author}}
                        </p>
                        <i v-if="item.author!==null && item.releaseTime !== null">&nbsp;·&nbsp;</i>
                        <span v-html="formatterTimestamp(item.releaseTime)"></span>
                      </div>
                    </div>
                  </div>
                 </li>
               </ul>
               <!-- <p v-else class="color00223A">{{$t("news.noInsights")}}</p> -->
          </div>
          <!-- events -->
          <div class="insights-right" v-loading="loadingEvent">
            <p class="insight-type-title">{{$t("news.events")}}</p>
            <div class="events" v-if="eventsList.length>0" @click="gotoDetail(eventsList[0].id)">
              <div class="event-img">
                <img v-if="eventsList[0].topImgUrl!==null" :src="imagesUrl+eventsList[0].topImgUrl" />
              </div>
              <div class="news-basic clear">
                <p class="events-time fl text-center" v-if="eventsList[0].activityBeginTime">
                  <span v-html="formatterTimesDate(eventsList[0].activityBeginTime)"></span>
                  <span class="fontSize34 fontWeight" v-html="formatterTimesDates(eventsList[0].activityBeginTime)"></span>
                </p>
                <p class="events-time fl text-center" v-else>
                  <span v-html="formatterTimesDate(eventsList[0].releaseTime)"></span>
                  <span class="fontSize34 fontWeight" v-html="formatterTimesDates(eventsList[0].releaseTime)"></span>
                </p>
                <p class="events-title fl fontWeight">{{eventsList[0].title}}</p>
              </div>
            </div>
            <p v-else class="color00223A">{{$t("news.noEvents")}}</p>
          </div>
        </div>
        <!-- 查看更多 -->
        <p class="text-right marginT20 seemore" @click="gotoNews()">{{$t("news.seemore")}}</p>
      </div>
    </div>
    <!--Media&Press-->
    <div class="index-block-9">
      <div class="content-min-size">
        <div class="module-title text-center">
          {{$t("news.pressCenter")}}
        </div>
        <div class="paddingTB70">
          <ul class="media-list clear" v-loading="loading2" style="height:163px;">
            <li v-for="(item,index) in mediaList" :key="index">
              <div class="text-center media-img" @click="tolink(item.link)">
                <img :src="imagesUrl+item.logoUrl" alt="">
              </div>
              <p class="news-title fontWeight" @click="tolink(item.link)">{{item.title}}</p>
              <div class="author-time-container marginT10" @click="tolink(item.link)">
                <p class="author-time">
                    {{item.name}}
                </p>
                <i v-if="item.name!==null && item.reTime !== null">&nbsp;·&nbsp;</i>
                <span v-html="formatterTimestamp(item.reTime)"></span>
              </div>
            </li>
          </ul>
          <!-- 查看更多 -->
          <p class="text-right marginT20 seemore paddingLR50" @click="gotoMedia()">{{$t("news.seemore")}}</p>
        </div>
        
      </div>
    </div>
        <!-- Partner -->
    <div class="index-block-10">
        <div class="content-min-size paddingLR50">
            <div class="module-title text-center">
              {{$t("partner.title")}}
            </div>
            <div class="partners-list">
              <figure class="image" v-for="(item,index) in partners" :key="index">
                  <!-- <el-tooltip placement="bottom"> -->
                      <!-- <div class="partners-content" slot="content">{{item.text}}</div> -->
                      <a v-tip.bottom="item.text" :href="item.link" target="_blank">
                        <img :src="require('../../assets/index/partner-'+item.name+'.png')" />
                      </a>
                  <!-- </el-tooltip> -->
              </figure>
            </div>
        </div>
    </div>
    <!--加入社区-->
    <div class="index-block-11" id="joinUs">
      <div class="content-min-size paddingLR50">
        <div class="module-title text-center">
          {{$t("joinUs.title")}}
        </div>
          <ul class="icon-links clear">
            <li>
              <a class="icon-link-1" href="https://t.me/PlatONHK" target="_blank"></a>
            </li>
            <li id="weixin" @click="weixinFuncShow">
              <a class="icon-link-2" href="JavaScript:;"></a>
            </li>
            <li>
              <a class="icon-link-3" href="https://github.com/PlatONnetwork" target="_blank"></a>
            </li>
            <li>
              <a class="icon-link-4" href="https://twitter.com/PlatON_Network" target="_blank"></a>
            </li>
            <li>
              <a class="icon-link-5" href="https://www.facebook.com/PlatONNetwork/" target="_blank"></a>
            </li>
            <li>
              <a class="icon-link-6" href="https://www.reddit.com/user/PlatON_Network" target="_blank"></a>
            </li>
            <li>
              <a class="icon-link-7" href="https://medium.com/@PlatON_Network" target="_blank"></a>
            </li>
            <li>
              <a class="icon-link-8" href="https://www.linkedin.com/company/platonnetwork/" target="_blank"></a>
            </li>
            <!-- 巴比特 -->
            <li>
              <a class="icon-link-9" href="https://www.chainnode.com/forum/267" target="_blank"></a>
            </li>
            <!-- 币乎 -->
            <li>
              <a class="icon-link-10" href="https://bihu.com/people/1215832888" target="_blank"></a>
            </li>
          </ul>
          <!-- 订阅表单 -->
          <web-sub></web-sub>
          <!-- 订阅结束 -->
          <div class="text-center fontSize14 paddingB25">
              <span>{{$t("joinUs.contactUs")}}：</span>
              <a style="color: #919299;" href="mailto:support@platon.network">{{$t("joinUs.email")}}</a>
          </div>
          
      </div>
    </div>

    <!--弹出微信二维码-->
    <el-dialog class="weixin-dialog" :visible.sync="weixinShow" width="374px">
      <div class="weixin-img">
        <img src="../../assets/index/weixin.jpg" alt="" />
      </div>
    </el-dialog>

  </div>
</template>

<script>
import r from "@/util/RequestUtil.js";
import { rejects } from "assert";
import { setTimeout } from "timers";
// import { clearInterval } from 'timers';
let timer = null;
let timerA = null;
import WebSub from '@/components/WebSub'

export default {
  metaInfo(){
    return {
      title: this.$t("seo.index.title"), // set a title
      // meta: [{                 // set meta
      //   name: 'keywords',
      //   content: this.$t("seo.index.keywords"),
      // },{
      //   name: 'description',
      //   content: this.$t("seo.index.description"),
      // }]
    }
  },
  name: "",
  components: {
      WebSub
  },
  data() {
    return {
      polygonIndex: -1,
      allActive: false,
      allAIndex: true,
      activeStep: null,
      loading: false,
      loadingEvent:false,
      loadingInsight:false,
      loading2:false,
      mobile_flag: null,
      weixinShow: false,
      imagesUrl: null,
      teamIndex: 0,
      teamShow: false,
      screenHeight: document.documentElement.clientHeight,
      screenWidth: document.documentElement.clientWidth,
      founderArr: ["one", "two"],
      teamDetail: null,
      teamActive: null,
      newsList: [],
      insightList: [],
      eventsList: [],
      mediaList:[],
      services:['blockchain','consulting']
    };
  },
  methods: {
    // 下拉
    // pullDown() {
    //   this.common.jump(0, "pull-down", 50);
    //   this.activeStep = 0;
    // },
    //微信二维码展示
    weixinFuncShow() {
      this.weixinShow = !this.weixinShow;
    },
    // 订阅
    runOnFormSubmit_sfd3de3bb0c5d5b249356895f3144b5099c98e811ca5f0889b(th){
      /*Before submit, if you want to trigger your event, "include your code here"*/
    },
    // 转大写
    toUpperCase(obj) {
      return obj.toUpperCase();
    },
    // 媒体报道链接
    tolink(link){
      window.open(link);
    },
    //进入新闻详情页
    gotoDetail(newsId) {
      var _this = this;
      this.$router.push({
        path: "/newsDetail",
        query: {
          language: this.$i18n.locale,
          newsId: newsId
        }
      });
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
      _this.loadingInsight = true;
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
        _this.loadingInsight = false;
        if (data && data.code === 0) {
            _this.insightList = data.data.result;
        } else {
          r.message(data.message, "warning");
        }
      })
      .catch(err => {
        _this.loadingInsight = false;
        console.log(err);
      });
    },
    //获取活动数据
    getEventsData() {
      let _this = this;
      _this.loadingEvent = true;
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
        _this.loadingEvent = false;
        if (data && data.code === 0) {
            _this.eventsList = data.data.result;          
        } else {
          r.message(data.message, "warning");
        }
      })
      .catch(err => {
        _this.loadingEvent = false;
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
      _this.loading2 = true;
      let param = {
        pageNo: 1,
        pageSize: 4
      };
      _this.ApiService.media.findPlatMedia(param,true).then(data=>{
        _this.loading2 = false;
        if (data && data.code === 0) {
           _this.mediaList = data.data.result;
        } else {
          r.message(data.message, "warning");
        }
      })
      .catch(err => {
        _this.loading2 = false;
        console.log(err);
      });
    },
    // 展示团队详情
    showTeamDetail(obj, index) {
      this.teamDetail = obj;
      this.teamActive = index;
      this.teamShow = true;
      document.querySelector("body").style.overflowY = "hidden";
    },
    //关闭团队展示
    closeTeamSow() {
      this.teamShow = false;
      document.querySelector("body").style.overflowY = "auto";
    },
    // 判断是否是手机
    isMobile() {
      var userAgentInfo = navigator.userAgent;
      var mobileAgents = [
        "Android",
        "iPhone",
        "SymbianOS",
        "Windows Phone",
        "iPod"
      ];
      var mobile_flag = false;
      for (var v = 0; v < mobileAgents.length; v++) {
        if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
          mobile_flag = true;
          return mobile_flag;
        }
      }
      return mobile_flag;
    },
    //定时轮播
    timingGear() {
      let _this = this;

      timer = setInterval(function() {
        _this.allAIndex = false;
        _this.polygonIndex++;
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
  watch: {
    "$i18n.locale": function(val) {
      this.getNewsData();
      this.getEventsData();
      this.getInsightsData();
    }
  },
  computed: {
    partners () {
        return this.$t('partner.list')
    },
  },
  mounted: function() {
    let query = this.$route.query;
    let tab = query.tab;
    if(tab==='joinUs'){
      let distanceTop = document.documentElement.scrollTop || document.body.scrollTop;
      let total1 = document.querySelector('#joinUs').getBoundingClientRect().top + distanceTop;
      this.common.jump(total1);
    }

    this.timingGear();
    this.timingGearA();

    // 获取新闻数据
    this.getNewsData();
    this.getEventsData();
    this.getInsightsData();
    //获取媒体报道
    this.getMediaData();
    //判断是否是手机端
    this.mobile_flag = this.isMobile();
    if (this.mobile_flag) {
      window.location.href = "mobile.html"+location.hash;
    }

    //首屏的高度 动态获取
    this.screenHeight = document.documentElement.clientHeight;
    this.screenWidth = document.documentElement.clientWidth;
    
    // 然后监听window的resize事件．在浏览器窗口变化时再设置下首屏高度．
    const that = this;
    window.onresize = function temp() {
      that.screenHeight = document.documentElement.clientHeight;
      that.screenWidth = document.documentElement.clientWidth;
    };
  },
  //销毁滚动事件
  beforeDestroy() {
    this.clearTimer();
    this.clearTimerA();
  }
};
</script>
<style type="text/css">
.el-dialog__header,
.model-dialog .el-dialog__body {
  padding: 0;
}

.weixin-dialog .el-dialog__body {
  padding: 10px;
}

.el-dialog {
  margin: 0 auto;
}

.el-dialog__headerbtn {
  right: 5px;
  top: 5px;
}

.el-dialog__close {
  font-size: 32px;
  font-weight: bold;
}
/* body .el-tooltip__popper.is-dark{
  border: none;
  background: #fff;
  box-shadow: 0 0 20px 4px rgba(156,168,177,.33);
}
body .el-tooltip__popper[x-placement^=top] .popper__arrow,body .el-tooltip__popper[x-placement^=top] .popper__arrow::after{
  border-top-color:#fff;
}
body .el-tooltip__popper[x-placement^=bottom] .popper__arrow,body .el-tooltip__popper[x-placement^=bottom] .popper__arrow::after{
  border-bottom-color:#fff;
} */

body .v-tip-container{
  border: 1px solid transparent;
  background: #fff;
  box-shadow: 0 0 20px 4px rgba(156,168,177,.33);
}
body .v-tip-container .v-tip-content{
  max-width: 350px;
  font-size:14px;
  color: #b1b1b1;
}
/* 轮播 */
body .el-carousel__container{
  height: 100%;
}
body .el-carousel__button{
  width: 20px;
  height: 2px;
  border-radius: 2px;
  background-color: #C7D3E7;
  opacity: 1;
}
body .el-carousel__indicator.is-active button{
  background-color: #00B7DE;
}
</style>
<style scoped="scoped">
@import url("../../style/index/index.css");
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.ul-detail-content.platon{
  margin-left:11%;
  width:89%;
}
.ul-detail-content.active{
  margin-left:26%;
  width:74%;
}
</style>