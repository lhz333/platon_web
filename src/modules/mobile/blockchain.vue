<template>
    <div>
        <!--banner-->
        <div class="case-block-1 text-center">
            <div class="back-mask"></div>
            <h3>{{$t("blockchain.title")}}</h3> 
        </div>
        <div class="section">
            <div class="m2-index-block news-index-block">
                <h3 class="big-title text-center">{{$t("blockchain.doWhatTitle")}}</h3>
                <div class="clearfix swiper-container swiper-container1">
                    <ul class="swiper-wrapper index2-ul clearfix">
                        <li class="swiper-slide" v-for="(item,index) in dowhatLists" :key="index">
                            <p class="text-center icon-dowhat">
                                <img :src="require('../../assets/index/icons/icon-2-'+(index+1)+'.svg')" />
                            </p>
                            <p class="dowhat-text text-center marginB20 paddingLR20">
                                {{item.text}}
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="swiper-pagination1 swiper-pagination repaint"></div>
            </div>
            <!-- cases -->
            <div class="m2-index-block whifeBg">
                <h3 class="big-title text-center">{{$t("blockchain.caseTitle")}}</h3>
                <ul>
                    <li v-for="(item,index) in caseLists" :key="index">
                        <div class="cases-top-title text-center">
                            <img style="width:25px;" :src="require('../../assets/index/icons/logo-'+(index+1)+'.png')" />
                            <span class="fontWeight">{{item.title}}</span>
                        </div>
                        <p class="dowhat-text">{{item.content}}</p>
                        <div class="text-center marginT10">
                            <img :src="require('../../assets/index/icons/img-2-'+(index+1)+'.png')" />
                        </div>
                        <div class="clearfix swiper-container paddingT40" :class="'swiper-container'+(index+2)">
                            <ul class="swiper-wrapper index2-ul clearfix">
                                <li class="swiper-slide" v-for="(list,i) in item.point" :key="i">
                                    <p class="text-center">
                                        <img :src="require('../../assets/index/icons/case'+index+''+(i+1)+'.svg')" alt="" />
                                    </p>
                                    <p class="padding20 co-00223A fontSize16 text-center">{{list.title}}</p>
                                    <p class="dowhat-text text-center">{{list.text}}</p>
                                </li>
                            </ul>
                        </div>
                        <div class="swiper-pagination repaint" :class="'swiper-pagination'+(index+2)"></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"blockchainSolutions",
    data(){
        return{

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
    mounted(){
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
        //swiper轮播
        var mySwiper2 = new Swiper('.swiper-container2', {
            direction: 'horizontal',
            loop: false,
            // 如果需要分页器
            pagination: '.swiper-pagination2',
            paginationClickable: true,
            centeredSlides: true,
            autoplayDisableOnInteraction: false
        })
        //swiper轮播
        var mySwiper3 = new Swiper('.swiper-container3', {
            direction: 'horizontal',
            loop: false,
            // 如果需要分页器
            pagination: '.swiper-pagination3',
            paginationClickable: true,
            centeredSlides: true,
            autoplayDisableOnInteraction: false
        })
    }
}
</script>

<style scoped="scoped">
    @import url("../../style/mobile/m-index.css");
    @import url("../../style/mobile/news.css");
    .back-mask{
        background:url(../../assets/mobile/mbg2.png) no-repeat center center;
        background-size: cover;
    }
    .icon-dowhat{
        margin:25px auto;
    }
    .dowhat-text{
        color: #667580;
        font-size: .373333rem;
        line-height: .586667rem;
    }
    .cases-top-title{
        margin:45px 0 20px;
        font-size: .426667rem;
        color: #009AC9;
    }
    .cases-top-title span{
        position: relative;
        top:.053333rem;
        display: inline-block;
        margin-left: .133333rem;
    }
</style>


