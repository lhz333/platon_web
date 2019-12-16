<template>
  <div>
    <!--banner-->
    <div class="case-block-1">
      <div class="back-mask"></div>
      <div class="content-min-size paddingLR50 case-banner">
        <div class="case-title text-center">
          <h3 class="marginB20">{{$t("tecPage.bigTitle")}}</h3>
          <p class="marginB20">{{$t("tecPage.bigText")}}</p>
          <!-- 按钮 -->
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
      </div>
    </div>
    <!-- 定位 -->
    <div class="tec-block-2">
      <div class="content-min-size paddingLR50" id="position">
        <h3 class="module-title text-center marginB20">{{$t('tecPage.positionTitle')}}</h3>
        <p class="fontSize14 color00223A marginB20 text-center">{{$t('tecPage.position.subtitle')}}</p>
        <div class="position clear">
          <div class="text-center posit-img">
            <img :src="require('../../assets/index/'+$i18n.locale+'/position.png')" alt="" />
          </div>
          <ul class="featureList clear marginT30">
            <li v-for="(item,index) in $t('tecPage.features')" :key="index">
              <div class="feature-top">
                <!-- tech-feature-icon -->
                <div class="feature-top-left">
                  <p class="feature-icon" :class="'feature-icon'+(index+1)"></p>
                </div>
                <div class="feature-top-right">
                  <p class="featureTitle fontWeight">{{$t("tecPage.features["+index+"].title")}}</p>
                  <p class="featureSubTitle">{{$t("tecPage.features["+index+"].subtitle")}}</p>
                </div>
              </div>
              
              <ul class="ul-detail-content">
                <li v-for="(item,i) in $t('tecPage.features['+index+'].point')" :key="i">
                  <p>{{$t('tecPage.features['+index+'].point['+i+'].text')}}</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 计算流程 -->
    <div class="tec-block-3">
      <div class="content-min-size paddingLR50 clear" id="computation">
        <h3 class="module-title text-center marginB20">{{$t('tecPage.comput')}}</h3>
        <p class="tech-subtitle text-center fontWeight">{{$t('tecPage.computSubtitle')}}</p>
        <div class="comput-content marginT30">
              <div class="comput-img  text-center">
                <img :src="require('../../assets/index/'+$i18n.locale+'/comput.png')" alt="" />
              </div>
              <div class="steplists">
                  <el-steps space="20" direction="vertical">
                      <el-step v-for="(item,i) in $t('tecPage.computProcess')" :key="i" :title="$t('tecPage.computProcess['+i+'].text')"></el-step>
                  </el-steps>
              </div>
        </div>
      </div>
    </div>
    <!-- 主链 -->
    <div class="tec-block-3" style="padding-bottom:90px;">
      <div class="content-min-size paddingLR50 clear" id="baseChain">
        <h3 class="tech-subtitle text-center fontWeight" style="padding-top:15px;">{{$t('tecPage.consenTitle')}}</h3>
        <div class="comput-content marginT30">
              <div class="comput-img  text-center">
                <img :src="require('../../assets/index/'+$i18n.locale+'/consen.png')" alt="" />
              </div>
              <div class="steplists">
                  <ul class="base-feature">
                      <li v-for="(item,index) in $t('tecPage.consensus')" :key="index">
                          <div class="base-img">
                            <p class="base-icon" :class="'base-icon'+(index+1)"></p>
                          </div>
                          <div class="base-text">
                            <p class="base-text-title fontWeight color00223A">{{$t("tecPage.consensus["+index+"].title")}}</p>
                            <p class="fontSize14 colorB0B5B9">{{$t("tecPage.consensus["+index+"].text")}}</p>
                          </div>
                      </li>
                  </ul>
              </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo(){
    return {
      title: this.$t("seo.technology.title"), // set a title
      meta: [{                 // set meta
        name: 'keywords',
        content: this.$t("seo.technology.keywords"),
      },{
        name: 'description',
        content: this.$t("seo.technology.description"),
      }]
    }
  },
  data() {
    return {

    };
  },
  methods: {
    // 转大写
    toUpperCase(obj) {
      return obj.toUpperCase();
    },
  },
  mounted() {
    
  }
};
</script>

<style>
.marginT30 {
  margin-top: 30px;
}
.lineHeight24 {
  line-height: 24px;
}
#app.active .lineHeight24 {
  line-height: 20px;
}
/* 步骤 */
body .el-step__title{
    font-size: 14px;
}
body .el-step__icon-inner{
  font-weight: normal;
}
body .el-step__icon{
    width:20px;
    height:20px;
    background:#fff;
}
body .el-step__line{
  color:#c2c2c2;
}
body .el-step__title.is-wait{
  color:#00223A;
}
body .el-step__head.is-wait{
    color:#00B7DB;
    border-color:#00B7DB;
}
body .el-step__icon.is-text{
    border:1px solid;
}
body .el-step.is-vertical .el-step__line{
    width: 1px;
    top:2px;
    left:10px;
}
body #app.active .el-step.is-vertical .el-step__head{
    width: 20px;
}

</style>

<style scoped>
@import url("../../style/index/index.css");
@import url("../../style/index/case.css");
.back-mask{
    background: url(../../assets/mobile/bg2.png) no-repeat center;
    background-size:auto 100%;
} 
.btns{
    width: 220px;
    margin: 0 auto;
}
.download,.link-github {
  width: 100px;
  height: 34px;
  line-height: 34px;
  font-size: 12px;
}
.tec-block-2,
.tec-block-3 {
  width: 100%;
  color: #444;
  padding-bottom: 30px;
  background: #f5f7fa;
}
.tec-block-3 {
  background: #fff;
}
.tech-subtitle {
  font-size: 18px;
  color: #00223a;
}
.posit-img {
  width: 100%;
  padding: 25px 0;
  background-image: linear-gradient(-90deg, #141F29 0%, #263947 51%, #283B4A 100%);
}
.posit-img img {
  width: 1100px;
}
.ul-detail-content > li {
  list-style: initial;
  color: #A0DFF9;
}
.ul-detail-content {
  margin: 0 0 0 7%;
  width: 93%;
}
#app.active .ul-detail-content {
  margin: 0 0 0 4%;
  width: 96%;
}
.ul-detail-content > li p {
  color: #00223A;
}
.featureList>li{
  float: left;
  width:50%;
  padding:0 95px;
}
#app.active .featureList>li{
  padding:0 40px;
}
.featureTitle{
  color: #00223A;
  margin-bottom:5px;
}
.featureSubTitle{
  font-size: 14px;
  color: #B0B5B9;
}
/* 计算流程 */
.comput-content{
  display:table;
  width:100%;
}
.comput-img {
  display:table-cell;
  width: 60%;
  padding: 15px;
  background-image: linear-gradient(-90deg, #121C25 0%, #283B4B 100%);
}
.comput-img img {
  width:100%;
  padding:20px;
  border:1px dashed #68747F;
  cursor: pointer;
}
.steplists{
  display:table-cell;
  vertical-align: middle;
  width: 36%;
  max-width: 410px;
  padding-left:3%;
}

/* 主链 */
.base-feature li{
  display:table;
  width:100%;
  margin-bottom:30px;
}
.base-img{
  display:table-cell;
  width:36px;
}
.base-icon{
    width:34px;
    height: 34px;
    background: url(../../assets/index/techicons.png) no-repeat;
    background-size:cover;
}
.base-icon1{
    background-position:-247px 0;
}
.base-icon2{
    background-position:-332px 0;
}
.base-icon3{
    background-position:-415px 0;
}
.base-icon4{
    background-position:-498px 0;
}
.base-text{
  display:table-cell;
  vertical-align:top;
  padding-left:20px;
}
.base-text-title{
  margin-bottom:5px;
}

.feature-top{
  display:table;
  margin-bottom:20px;
}
.feature-top-left{
  display:table-cell;
  width:34px;
  vertical-align: middle;
  padding-right:20px;
}
.feature-icon{
  width:34px;
  height: 34px;
  background: url(../../assets/index/tech-feature-icon.png) no-repeat;
  background-size: cover;
}
.feature-top-right{
  display:table-cell;
  vertical-align: middle;
}
.feature-icon2{
  width:36px;
  background-position:-40px 0;
}
</style>


