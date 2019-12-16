<template>
    <div>
        <!--banner-->
        <div class="case-block-1">
            <div class="back-mask"></div>
            <div class="content-min-size paddingLR50 case-banner">
                <div class="case-title text-center">
                    <h3 class="marginB20">{{$t("consulting.title")}}</h3>
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
                                <img :src="require('../../assets/index/icons/icon-3-'+(index+1)+'.svg')" />
                            </p>
                            <p class="dowhat-text marginT20">
                                {{item.text}}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div class="consult-block-2">
            <div class="content-min-size">
                <div class="module-title text-center">
                    {{$t("blockchain.caseTitle")}}
                </div>
                <ul class="doWhat-ul cases-ul clear">
                    <li v-for="(item,index) in caseLists" :key="index">
                        <div>
                            <p class="text-center" style="width:180px;height:54px;margin:auto;">
                                <img style="width:180px;" :src="require('../../assets/index/icons/logo-'+(item.name)+'.png')" />
                            </p>
                            <p class="dowhat-text case-text marginT20">
                                {{item.text}}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"",
    data(){
        return {

        }
    },
    computed: {
        dowhatLists () {
            return this.$t('consulting.doWhat')
        },
        caseLists(){
            return this.$t('consulting.cases')
        }
    },
}
</script>

<style>
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
.cases-ul li{
    width: 50%;
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
.consult-block-2{
    background: #fff;
    padding:0 0 70px 0;
}
.case-text{
    min-height: 60px;
}
</style>


