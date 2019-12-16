<template>
  <div class="custody">
    <!--banner-->
    <div class="case-block-1">
      <div class="back-mask"></div>
      <div class="content-min-size paddingLR50 case-banner">
        <div class="case-title text-center">
          <img src="../../assets/index/keyShard.svg" alt="">
          <h3 class="marginT10">{{$t("custody.mainSlogan")}}</h3>
          <p class="marginT10">{{$t("custody.subSlogan")}}</p>
        </div>
      </div>
    </div>
    <!-- 侧边栏锚点定位 -->
    <!-- <div class="nav-anchors">
      <ul class="anchor-list">
        <li
          v-for="(item,index) in navLists"
          :key="index"
          :class="{active:activeStep===index}"
          @click="jumpTo(index)"
        >
          <p>{{item.nav}}</p>
          <div class="circle">
            <p class="round"></p>
          </div>
        </li>
      </ul>
    </div> -->

    <div class="custody-block-1">
      <div class="content-min-size">
        <div class="step-jump"></div>
        <div class="module-title text-center">
          {{$t("custody.doWhatTitle.title")}}
        </div>
        <p class="fontSize14 color00223A text-center kms-custody-subtitle" v-html="$t('custody.doWhatTitle.subTitle')"></p>
        <ul class="kms-doWhat-chanllenge clear">
          <li
            v-for="(item,index) in dowhatLists"
            :key="index"
          >
            <div
              class="text-center"
              @mouseenter="showDetail(index)"
              @mouseleave="hideDetail"
            >
              <p class="text-center icon-kms">
                <img :src="require('../../assets/index/icons/icon-kms-0'+(index+1)+'.svg')" />
              </p>
              <p class="kms-title marginT20">{{item.title}}</p>
              <div class="kms-dowhat-text marginT10">
                <p v-html="item.text"></p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="custody-block-1 whiteBg">
      <div class="content-min-size">
        <div class="step-jump"></div>
        <div class="module-title text-center">
          {{$t("custody.provide.title")}}
        </div>
        <p class="fontSize14 color00223A text-center kms-custody-subtitle" v-html="$t('custody.provide.subTitle')"></p>
        <ul class="kms-doWhat-ul clear">
          <li
            v-for="(item,index) in provideLists"
            :key="index"
          >
            <div
              class="text-center"
              :class="{speticalMargin:(index==1)}"
              @mouseenter="showDetail(index+4)"
              @mouseleave="hideDetail"
            >
              <p class="text-center icon-kms">
                <img :src="require('../../assets/index/icons/icon-kms-0'+(index+4)+'.svg')" />
              </p>
              <p class="kms-title marginT20">{{item.title}}</p>
              <div class="kms-dowhat-text kms-service-text marginT10">
                <!-- <p v-show="doWhatActive==(index+4)">
                  {{item.text}}
                </p> -->
                <ul class="ul-detail-content">
                    <li v-for="(list,i) in item.textArr" :key="i">
                        <p>{{list}}</p>
                    </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="custody-block-1 blueBg">
      <div class="content-min-size">
        <div class="step-jump"></div>
        <div class="module-title text-center whiteColor">
          {{$t("custody.howWorks.title")}}
        </div>
        <!-- <p class="fontSize14 co-88b6ce marginT20 marginB20 text-center">{{$t("custody.howWorks.subTitle")}}</p> -->
        <!-- svga动画 -->
        <div id="demoCanvas"></div>
      </div>
    </div>
    <!-- <div class="custody-block-1">
      <div class="content-min-size">
        <div class="step-jump"></div>
        <div class="module-title text-center">
          {{$t("custody.platformApi")}}
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      doWhatActive: null,
      // activeStep: null
    };
  },
  methods: {
    // handleScroll() {
    //   this.$nextTick(() => {
    //     let scrollTop =
    //       document.documentElement.scrollTop || document.body.scrollTop;

    //     let _article = document.querySelectorAll(".step-jump");
    //     _article.forEach((item, index) => {
    //       if (scrollTop >= item.getBoundingClientRect().top + scrollTop - 50) {
    //         this.activeStep = index;
    //       }
    //     });
    //   });
    // },
    showDetail(index) {
      this.doWhatActive = index;
    },
    hideDetail() {
      this.doWhatActive = null;
    },
    // jumpTo(index) {
    //   let distance =
    //     document.documentElement.scrollTop || document.body.scrollTop;
    //   // 用 class="step-jump" 添加锚点
    //   let jump = document.querySelectorAll(".step-jump");
    //   let total = jump[index].getBoundingClientRect().top + distance - 50;

    //   this.common.jump(total);
    //   this.activeStep = index;
    // }
  },
  computed: {
    dowhatLists() {
      return this.$t("custody.doWhat");
    },
    provideLists() {
      return this.$t("custody.provide.point");
    },
    // navLists() {
    //   return this.$t("custody.kmsNavs");
    // }
  },
  mounted() {
    // window.addEventListener("scroll", this.handleScroll);
    // svga动画
    // var player = new SVGA.Player('#demoCanvas');
    // var parser = new SVGA.Parser('#demoCanvas'); // 如果你需要支持 IE6+，那么必须把同样的选择器传给 Parser。
    // parser.load('./static/kms-animation.svga', function(videoItem) {
    //     player.setVideoItem(videoItem);
    //     player.startAnimation();
    // })
  }
};
</script>

<style scoped>
@import url("../../style/index/index.css");
@import url("../../style/index/case.css");
.custody .case-block-1{
  background: #000000;
}
.back-mask {
  background: url(../../assets/index/kms-bg.png) no-repeat center;
  background-size: auto 100%;
}
.custody-block-1 {
  padding: 0 0 30px 0;
  background: #f5f7fa;
}
.whiteBg {
  background: #fff;
}
.blueBg {
  background-image: linear-gradient(-90deg, #121D26 0%, #263948 100%);
}
.custody .co-88b6ce{
  color: #88B6CE;
}
.kms-doWhat-ul>li {
  float: left;
  width: 33.33333%;
}
.kms-doWhat-chanllenge{
  display: table;
  margin:auto;
}
.kms-doWhat-chanllenge>li{
  float: left;
}
.kms-doWhat-ul>li > div,.kms-doWhat-chanllenge>li > div  {
  margin: 50px 50px 0;
}
.icon-kms {
  min-height: 50px;
}
.kms-dowhat-text {
  min-height: 40px;
  font-size: 14px;
  color: #666;
}
.kms-service-text{
  min-height: 135px;
}
.kms-title {
  font-size: 18px;
  color: #0b2d43;
}
.whiteColor {
  color: #fff;
}
/* .custody .nav-anchors{
  position: fixed;
  top:50%;
  left:140px;
  z-index: 9;
  transform: translateY(-50%);
} */
/* .custody{
  position: relative;
}
.custody .anchor-list{
  text-align: right;
  text-align: -webkit-right;
}
.custody .anchor-list li {
  display: table;
  font-size: 12px;
  color: #b6babe;
  margin-bottom: 15px;
  cursor: pointer;
}
.custody .circle {
  display: table-cell;
  padding-left: 12px;
  vertical-align: middle;
}
.custody .round {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #b6babe;
}
.custody .anchor-list li.active {
  color: #009ac9;
}
.custody .anchor-list li.active .round {
  background: #009ac9;
} */
#demoCanvas{
  width:1120px;
  height:500px;
  margin:30px auto 0;
  overflow: hidden;
}
.custody .ul-detail-content>li p{
  text-align: justify;
}
.custody .kms-custody-subtitle{
  width: 690px;
  margin:20px auto 0;
}
@media all and (min-width:1442px) and (max-width:1660px){
  .custody .nav-anchors{
    left:40px;
  }
}
@media all and (min-width:1200px) and (max-width:1441px){
  .custody .nav-anchors{
    left:0px;
  }
}
@media all and (max-width:1200px){
  .custody .nav-anchors{
    display: none
  }
}
.kms-doWhat-ul>li>div.speticalMargin{
  margin:50px 15px 0;
}
</style>


