<template>
    <div>
        <!--banner-->
        <div class="case-block-1">
            <div class="back-mask"></div>
            <div class="content-min-size paddingLR50 case-banner">
                <div class="case-title text-center">
                    <h3 class="marginB20">{{$t("caseDetails.title")}}</h3>
                    <p>
                        <!-- {{$t("caseDetails.subtitleOne")}} -->
                        {{$t("caseDetails.subtitleTwo")}}
                    </p>
                </div>
            </div>
        </div>
        <!-- 应用案例 -->
        <div class="case-block-4">
            <div class="content-min-size paddingLR50">
                <div class="step-jump"></div>
                <h3 class="module-title text-center">{{$t("caseDetails.caseTitle")}}</h3>
                <ul class="casetabs text-center clear">
                    <li v-for="(item,index) in $t('caseDetails.cases')" :key="index" :class="{active:caseActive===index}" @mouseenter="showCaseDetail(index)">
                        <p class="caseicons" :class="'caseicon'+(index+1)"></p>
                        <p class="caseTitle fontSize18 fontWeight">{{$t('caseDetails.cases['+index+'].title')}}</p>
                        <i class="arrowtop el-icon-caret-top"></i>
                    </li>
                </ul>
                <div class="case-detail">
                   <p class="summary text-center">{{$t("caseDetails.cases["+caseActive+"].content")}}</p>
                    <!-- 优势 -->
                    <div class="case-scenes">
                        <p class="scenes-title fontSize18 fontWeight">{{$t("caseDetails.benefits")}}</p>
                    </div>
                    <div class="benefits-margin">
                        <ul class="clear benefits" :class="{four:(caseActive == 1 || caseActive == 2)}">
                            <li v-for="(item,i) in $t('caseDetails.cases['+caseActive+'].benefits')" :key="i">
                                <div class="item-content">
                                    <div class="clear">
                                        <p class="casecont-icon fl" :class="'benefits-icon'+(caseActive+1)+''+i"></p>
                                        <p class="color00223A fontWeight fl casetitle-top" v-html="$t('caseDetails.cases['+caseActive+'].benefits['+i+'].title')"></p>
                                    </div>
                                    <div class="right-con">
                                        
                                        <ul class="fontSize14 marginT10 color666 ul-detail-content">
                                            <li>
                                                <p>{{$t("caseDetails.cases["+caseActive+"].benefits["+i+"].firstPoint")}}</p>
                                            </li>
                                            <li>
                                                <p>{{$t("caseDetails.cases["+caseActive+"].benefits["+i+"].secondPoint")}}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!-- 应用场景 -->
                    <div class="case-scenes">
                        <p class="scenes-title fontSize18 fontWeight">{{$t("caseDetails.opportunities")}}</p>
                    </div>
                    <div class="benefits-margin">
                        <ul class="clear benefits">
                            <li v-for="(item,i) in $t('caseDetails.cases['+caseActive+'].opportunities')" :key="i">
                                <div class="item-content">
                                    <div class="right-con">
                                        <div class="clear">
                                            <p class="casecont-icon fl" :class="'opport-icon'+(caseActive+1)+''+i"></p>
                                            <p class="color444 fontWeight fl casetitle-top">{{$t("caseDetails.cases["+caseActive+"].opportunities["+i+"].title")}}</p>
                                        </div>
                                        
                                        <ul class="fontSize14 marginT10 color666 ul-detail-content">
                                            <li>
                                                <p>{{$t("caseDetails.cases["+caseActive+"].opportunities["+i+"].firstPoint")}}</p>
                                            </li>
                                            <li>
                                                <p>{{$t("caseDetails.cases["+caseActive+"].opportunities["+i+"].secondPoint")}}</p>
                                            </li>
                                        </ul>
                                    </div>
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
      title: this.$t("seo.case.title"), // set a title
      meta: [{                 // set meta
        name: 'keywords',
        content: this.$t("seo.case.keywords"),
      },{
        name: 'description',
        content: this.$t("seo.case.description"),
      }]
    }
  },
  data() {
    return {
      caseActive: 0
    };
  },
  methods: {
    showCaseDetail(index) {
      this.caseActive = index;
    }
  },
  mounted() {
    
  }
};
</script>

<style>
.casetabs .el-tabs__nav {
  width: 100%;
}
.casetabs .el-tabs__header {
  margin: 0;
}
.casetabs .el-tabs__item {
  width: 16.666666666%;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  text-align: center;
}
.casetabs.el-tabs--card > .el-tabs__header .el-tabs__item {
  transition: none;
}
.casetabs.el-tabs--card > .el-tabs__header {
  border-bottom: 1px solid #e5e5e5;
}
.casetabs.el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
  background: #00b7db;
  color: #fff;
  border-bottom-color: #00b7db;
}
.casetabs .el-tabs__item:hover {
  color: #444;
}
#app.active .casetabs .el-tabs__item {
  font-size: 14px;
  text-align: center;
  padding: 0;
}
</style>


<style scoped>
@import url("../../style/index/index.css");
@import url("../../style/index/case.css");
.back-mask{
    background: url(../../assets/mobile/bg1.png) no-repeat center;
    background-size:auto 100%;
} 
#app.active .overview-margin {
  margin-left: -60px;
}
#app.active .lineHeight40 {
  line-height: 40px;
}
#app.active .fontSize {
  font-size: 16px;
}
.ul-detail-content > li {
  list-style: initial;
  color: #A0DFF9;
}
.ul-detail-content > li p{
  margin-left:5px;
  color: #00223a;
}
.four .ul-detail-content > li p{
  margin-left:8px;
}
.ul-detail-content {
  margin: 10px 0 0 7%;
  width: 93%;
}
.four .ul-detail-content {
  margin: 10px 0 0 9%;
  width: 91%;
}
</style>


