<template>
    <div>
        <!--banner-->
        <div class="case-block-1 text-center">
            <div class="back-mask"></div>
            <h3>{{$t("consulting.title")}}</h3> 
        </div>
        <div class="section">
            <div class="m2-index-block news-index-block">
                <h3 class="big-title text-center">{{$t("blockchain.doWhatTitle")}}</h3>
                <div class="clearfix swiper-container swiper-container1">
                    <ul class="swiper-wrapper index2-ul clearfix">
                        <li class="swiper-slide" v-for="(item,index) in dowhatLists" :key="index">
                            <p class="text-center icon-dowhat">
                                <img :src="require('../../assets/index/icons/icon-3-'+(index+1)+'.svg')" />
                            </p>
                            <p class="dowhat-text text-center marginB20" :class="{paddingLR20:index==2}">
                                {{item.text}}
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="swiper-pagination1 swiper-pagination repaint"></div>
            </div>

            <div class="m2-index-block whifeBg">
                <h3 class="big-title text-center">{{$t("blockchain.caseTitle")}}</h3>
                <ul class="doWhat-ul cases-ul clear">
                    <li v-for="(item,index) in caseLists" :key="index">
                        <p class="text-center cases-imgs">
                            <img style="width:180px;" :src="require('../../assets/index/icons/logo-'+(item.name)+'.png')" />
                        </p>
                        <p class="dowhat-text case-text marginT20">
                            {{item.text}}
                        </p>
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
    .cases-imgs{
        margin:35px 0 10px;
    }
</style>


