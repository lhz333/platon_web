<template>
    <div class="custody">
        <!--banner-->
        <div class="case-block-1 text-center">
            <div class="back-mask"></div>
            <img class="keyShard-logo zindex-2" src="../../assets/index/keyShard.svg" alt="">
            <h3 class="main-slogan zindex-2">{{$t("custody.mainSlogan")}}</h3>
            <p class="sub-slogan zindex-2">{{$t("custody.subSlogan")}}</p> 
        </div>
        <!-- <mobile-banner :imgSrc="require('../../assets/mobile/kms-mbg.png')">
            <div slot="content" class="banner-content text-center">
                <img class="keyShard-logo" src="../../assets/index/keyShard.svg" alt="">
                <h3 class="main-slogan">{{$t("custody.mainSlogan")}}</h3>
                <p class="sub-slogan">{{$t("custody.subSlogan")}}</p>
            </div>
        </mobile-banner> -->
        <div class="section">
            <!-- What We Face Today -->
            <div class="m2-index-block news-index-block">
                <h3 class="big-title text-center">{{$t("custody.doWhatTitle.title")}}</h3>
                <p class="service-subtitle" v-html="$t('custody.doWhatTitle.subTitle')"></p>
                <div class="clearfix swiper-container swiper-container1">
                    <ul class="swiper-wrapper index2-ul clearfix">
                        <li class="swiper-slide text-center" v-for="(item,index) in dowhatLists" :key="index">
                            <p class="icon-dowhat">
                                <img :src="require('../../assets/index/icons/icon-kms-0'+(index+1)+'.svg')" />
                            </p>
                            <p class="padding20 co-00223A fontSize16">{{item.title}}</p>
                            <p class="dowhat-text marginB20" v-html="item.text"></p>
                        </li>
                    </ul>
                </div>
                <div class="swiper-pagination1 swiper-pagination repaint"></div>
            </div>
            <!-- What We Provide -->
            <div class="m2-index-block whifeBg">
                <h3 class="big-title text-center">{{$t("custody.provide.title")}}</h3>
                <p class="service-subtitle" v-html="$t('custody.provide.subTitle')"></p>
                <div class="clearfix swiper-container swiper-container2">
                    <ul class="swiper-wrapper index2-ul clearfix">
                        <li class="swiper-slide text-center" v-for="(item,index) in provideLists" :key="index">
                            <p class="icon-dowhat">
                                <img :src="require('../../assets/index/icons/icon-kms-0'+(index+4)+'.svg')" />
                            </p>
                            <p class="padding20 co-00223A fontSize16">{{item.title}}</p>
                            <ul class="ul-detail-lists">
                                <li v-for="(list,i) in item.textArr" :key="i">
                                    <p>{{list}}</p>
                                </li>
                            </ul>
                            <!-- <p class="dowhat-text marginB20" v-html="item.text"></p> -->
                        </li>
                    </ul>
                </div>
                <div class="swiper-pagination2 swiper-pagination repaint"></div>
            </div>
            <!-- How It Works -->
            <div class="m2-index-block blueBg">
                <h3 class="big-title whiteColor text-center">{{$t("custody.howWorks.title")}}</h3>
                <!-- <p class="service-subtitle co-88b6ce">{{$t("custody.howWorks.subTitle")}}</p> -->
                <!-- svga动画 -->
                <div class="marginT10" id="demoCanvas"></div>
            </div>
            <!-- Platform API -->
            <!-- <div class="m2-index-block news-index-block">
                <h3 class="big-title text-center">{{$t("custody.platformApi")}}</h3>
            </div> -->
        </div>
    </div>
</template>

<script>
import MobileBanner from '@/components/MobileBanner'
export default {
    data(){
        return {

        }
    },
    components: {
        MobileBanner
    },
    computed: {
        dowhatLists() {
            return this.$t("custody.doWhat");
        },
        provideLists() {
            return this.$t("custody.provide.point");
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

        // svga动画
        // var player = new SVGA.Player('#demoCanvas');
        // var parser = new SVGA.Parser('#demoCanvas'); // 如果你需要支持 IE6+，那么必须把同样的选择器传给 Parser。
        // parser.load('./static/kms-animation.svga', function(videoItem) {
        //     player.setVideoItem(videoItem);
        //     player.startAnimation();
        // })
    }
}
</script>
<style scoped>
@import url("../../style/mobile/m-index.css");
@import url("../../style/mobile/news.css");
.custody .case-block-1{
    height: 5.333333rem;
    background:#000;
}
.custody .case-block-1 h3{
    line-height: .64rem;
}
.back-mask{
    background:url(../../assets/mobile/kms-mbg.png) no-repeat center center;
    background-size: cover;
}
.custody .service-subtitle{
    color: #667580;
    font-size: .373333rem;
    line-height: .586667rem;
    margin-top:.533333rem;
}
.custody .blueBg {
  background-image: linear-gradient(-90deg, #121D26 0%, #263948 100%);
}
.custody .co-88b6ce{
  color: #88B6CE;
}
.custody .whiteColor {
  color: #fff;
}
.custody .co-00223A{
    color: #00223a;
}
.custody .keyShard-logo{
    width:1.333333rem;
    height: 1.333333rem;
    margin:1.466667rem auto 0;
}
.custody .zindex-2{
    position: relative;
    z-index: 2;
}
.custody .main-slogan{
    font-size: .533333rem;
    margin: .266667rem 0;
}
.custody .big-title{
    font-size: .453333rem;
}
.custody .sub-slogan{
    font-size: .32rem;
    line-height: 2;
    color: #e9ebed;
}
.custody .icon-dowhat{
    margin:25px auto 0;
}
.custody .dowhat-text{
    color: #667580;
    font-size: .373333rem;
    line-height: .586667rem;
}
#demoCanvas{
    width: 100%;
    height:8rem;
    overflow: hidden;
}
#demoCanvas canvas{
    height: 8rem;
}
</style>


