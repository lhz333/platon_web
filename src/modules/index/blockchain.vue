<template>
    <div>
        <!--banner-->
        <div class="case-block-1">
            <div class="back-mask"></div>
            <div class="content-min-size paddingLR50 case-banner">
                <div class="case-title text-center">
                    <h3 class="marginB20">{{$t("blockchain.title")}}</h3>
                </div>
            </div>
        </div>
        <div class="consult-block-1">
            <div class="content-min-size">
                <div class="module-title text-center">
                    {{$t("blockchain.doWhatTitle")}}
                </div>
                <ul class="doWhat-ul clear">
                    <li v-for="(item,index) in dowhatLists" :key="index">
                        <div>
                            <p class="text-center icon-dowhat">
                                <img :src="require('../../assets/index/icons/icon-2-'+(index+1)+'.svg')" />
                            </p>
                            <p class="dowhat-text marginT20">
                                {{item.text}}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- cases -->
        <div class="consult-block-2">
            <div class="content-min-size paddingLR50">
                <div class="module-title text-center">
                    {{$t("blockchain.caseTitle")}}
                </div>
                <div class="casetabs text-center clear">
                    <div v-for="(item,index) in caseLists" :key="index" class="cases-title" :class="{active:caseActive===index}" @mouseenter="showCaseDetail(index)">
                        <img style="width:25px;" :src="require('../../assets/index/icons/logo-'+(index+1)+'.png')" />
                        <span>{{item.title}}</span>
                    </div>
                </div>
                <div class="cases-detail">
                   <p class="case-detail-title text-center" v-html="$t('blockchain.cases['+caseActive+'].content')"></p>
                   <div class="comput-content">
                        <div class="comput-img  text-center">
                            <img :src="require('../../assets/index/icons/img-2-'+(caseActive+1)+'.png')" />
                        </div>
                        <div class="steplists">
                            <ul class="base-feature">
                                <li v-for="(item,index) in $t('blockchain.cases['+caseActive+'].point')" :key="index">
                                    <div class="base-img">
                                        <img :src="require('../../assets/index/icons/case'+caseActive+''+(index+1)+'.svg')" alt="" />
                                    </div>
                                    <div class="base-text">
                                        <p class="base-text-title color00223A">{{$t('blockchain.cases['+caseActive+'].point['+index+'].title')}}</p>
                                        <p class="fontSize14 colorB0B5B9">{{$t('blockchain.cases['+caseActive+'].point['+index+'].text')}}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"blockchainSolutions",
    data(){
        return{
            caseActive:0
        }
    },
    methods:{
        showCaseDetail(index) {
            this.caseActive = index;
        }
    },
    computed: {
        dowhatLists () {
            return this.$t('blockchain.doWhat')
        },
        caseLists(){
            return this.$t('blockchain.cases')
        }
    },
}
</script>

<style scoped>
@import url("../../style/index/index.css");
@import url("../../style/index/case.css");
.back-mask{
    background: url(../../assets/mobile/bg2.png) no-repeat center;
    background-size:auto 100%;
} 
.consult-block-1{
    padding:0 0 70px 0;
    background: #F5F7FA;
}
.doWhat-ul li{
    float: left;
    width:33.3333%;
}
.doWhat-ul li>div{
    padding:50px 50px 0;
}
.icon-dowhat{
    min-height: 50px;
}
.dowhat-text{
    font-size: 14px;
    color: #00223A;
    text-align: justify;
}
/* cases */
.consult-block-2{
    background: #fff;
    padding:0 0 70px 0;
}
.casetabs{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0;
    width: 100%;
    margin: 50px auto 0;
    color: #687782;;
    border-bottom: 1px solid #F0F0F0;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: wrap row;
    flex-flow: row wrap;
    justify-content: center;
}
.cases-title{
    line-height: 24px;
    padding-bottom: 5px;
    margin-right: 40px;
    border-bottom: 4px solid transparent;
    cursor: pointer;
}
.cases-title.active{
    color: #009AC9;
    border-bottom: 4px solid #009AC9;
}

.case-detail-title {
    width: 850px;
    margin:25px auto;
    font-size: 14px;
    color: #00223a;
}
.comput-content{
  display:table;
  width:100%;
}
.comput-img {
  display:table-cell;
  width: 57%;
}
.comput-img img {
  width:100%;
  cursor: pointer;
}
.steplists{
  display:table-cell;
  vertical-align: middle;
  width: 36%;
  max-width: 410px;
  padding-left:3%;
}
.base-feature li{
  display:table;
  width:100%;
  margin-bottom:25px;
}
.base-img{
  display:table-cell;
  width:36px;
}
.base-text {
    display: table-cell;
    vertical-align: top;
    padding-left: 20px;
}
.base-text-title{
  margin-bottom:5px;
}
</style>



