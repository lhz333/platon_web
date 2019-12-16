<template>
    <div class="tech">
        <mobile-banner :imgSrc="require('../../assets/mobile/mbg2.png')">
            <div slot="content" class="banner-content">
                <p class="text-center fontSize20">{{$t('tecPage.bigTitle')}}</p>
                <p class="text-center fontSize14">{{$t('tecPage.bigText')}}</p>
                <div class="text-center">
                    <div class="text-center btn-default btn">
                        <a :href="'../static/pdf/'+$i18n.locale+'/PlatON_A High-Efficiency Trustless Computing Network_Whitepaper_'+$i18n.locale.toUpperCase()+'.pdf'" :download="'PlatON_A High-Efficiency Trustless Computing Network_Whitepaper_'+$i18n.locale.toUpperCase()+'.pdf'">
                            <span>{{$t('banner.btn')}}</span>
                        </a>
                    </div>
                    <div class="text-center btn-trans btn">
                        <a href="https://github.com/PlatONnetwork" target="_blank">
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </mobile-banner>
        <div class="tech-content">
            <div class="platon">
                <p class="text-center fontSize18 fontWeight co-00223A">{{$t('tecPage.position.title')}}</p>
                <p class="text-center fontSize12 co-667580">{{$t('tecPage.position.subtitle')}}</p>
                <div class="img-container">
                    <img :src="img1">
                </div>
            </div>
            <div class="verifiable">
                <div class="swiper-container swiper-container1">
                    <ul class="swiper-wrapper">
                        <li class="swiper-slide" v-for="(item, index) in verifiableList" :key="index">
                            <p class="feature-icon" :class="'feature-icon'+(index+1)"></p>
                            <p class="text-center fontSize16 fontWeight co-00223A">{{item.title}}</p>
                            <p class="text-center fontSize14 co-00223A">{{item.subtitle}}</p>
                            <!-- <div class="fontSize13 co-667580" v-for="(cell, i) in item.point" :key="i">{{cell.text}}</div> -->
                            <ul class="ul-detail-content">
                                <li  v-for="(cell, i) in item.point"  :key="i">
                                    <p class="co-667580">{{cell.text}}</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div class="swiper-pagination swiper-pagination1 repaint"></div>
                </div>
            </div>
            <div class="works">
                <p class="text-center fontSize18 fontWeight co-00223A">{{$t('tecPage.comput')}}</p>
                <p class="text-center fontSize17 fontWeight marginB20 co-667580">{{$t('tecPage.computSubtitle')}}</p>
                <div class="img-container">
                    <img :src="img2">
                </div>
                <el-steps class="marginT20" space="20" direction="vertical">
                    <el-step v-for="(item,i) in $t('tecPage.computProcess')" :key="i" :title="$t('tecPage.computProcess['+i+'].text')"></el-step>
                </el-steps>
                <!-- <ul>
                    <li v-for="(item, index) in works" :key="index">
                        <span>{{index + 1}}.</span>
                        <p class="co-667580">{{item.text}}</p>
                    </li>
                </ul> -->
            </div>
            <div class="consensus">
                <p class="text-center fontSize17 fontWeight marginB20 co-667580">{{$t('tecPage.consenTitle')}}</p>
                <div class="img-container">
                    <img :src="img3">
                </div>
                <div class="swiper-container swiper-container2">
                    <ul class="swiper-wrapper">
                        <li class="swiper-slide" v-for="(item, index) in consens" :key="index">
                            <div class="consensus-icon text-center" :class="`consensus-icon${index}`">
                                <i></i>
                            </div>
                            <p class="text-center fontSize16 fontWeight co-00223A">{{item.title}}</p>
                            <p class="fontSize12 text-center co-667580">{{item.text}}</p>
                        </li>
                    </ul>
                    <div class="swiper-pagination swiper-pagination2 repaint"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MobileBanner from '@/components/MobileBanner'

export default {
    components: {
        MobileBanner
    },
    computed: {
        verifiableList () {
            return this.$t('tecPage.features')
        },
        works () {
            return this.$t('tecPage.computProcess')
        },
        consens () {
            return this.$t('tecPage.consensus')
        },
        img1 () {
            if (this.$i18n.locale === 'en') {
                return require('../../assets/mobile/en/mo-what-platon.png')
            } else {
                return require('../../assets/mobile/zh/mo-what-platon.png')
            }
        },
        img2 () {
            if (this.$i18n.locale === 'en') {
                return require('../../assets/index/en/comput.png')
            } else {
                return require('../../assets/index/zh/comput.png')
            }
        },
        img3 () {
            if (this.$i18n.locale === 'en') {
                return require('../../assets/index/en/consen.png')
            } else {
                return require('../../assets/index/zh/consen.png')
            }
        }
    },
    mounted () {
        var mySwiper1 = new Swiper('.swiper-container1', {
            direction: 'horizontal',
            loop: false,
            height: 200,
            // 如果需要分页器
            pagination: '.swiper-pagination1',
            paginationClickable: true,
            centeredSlides: true,
            autoplayDisableOnInteraction: false
        })
        var mySwiper1 = new Swiper('.swiper-container2', {
            direction: 'horizontal',
            loop: false,
            height: 200,
            // 如果需要分页器
            pagination: '.swiper-pagination2',
            paginationClickable: true,
            centeredSlides: true,
            autoplayDisableOnInteraction: false
        })
    }
}
</script>
<style>
.marginT20{
    margin-top: 20px;
}
/* 步骤 */
body .el-step__title{
    font-size: 14px;
}
body #app.active .el-step__title{
    font-size: 12px;
}
body .el-step__icon-inner{
  font-weight: normal;
}
body .el-step__icon{
    width:16px;
    height:16px;
    background:#fff;
}
body .el-step__line{
  color:#c2c2c2;
}
body .el-step__title.is-wait{
    color: #667580;
    font-size: .32rem;
    line-height: 20px;
}
body .el-step__head.is-wait{
    color:#00B7DB;
    border-color:#00B7DB;
    min-width: 24px;
}
body .el-step__icon.is-text{
    border:1px solid;
}
body .el-step.is-vertical .el-step__title{
    line-height: 18px;
}
body .el-step.is-vertical .el-step__main{
    padding-left:5px;
}
body .el-step.is-vertical .el-step__line{
    width: 1px;
    top:2px;
    left:8px;
}
body #app.active .el-step.is-vertical .el-step__head{
    width: 20px;
}
</style>

<style scoped>
.tech .co-00223A {
    color: #00223A;
}
.tech .co-667580 {
    color: #667580;
}

.tech .banner-content {
    padding-top: 1.6rem;
}
.tech .banner-content p {
    margin-bottom: .533333rem; 
    color: #fff;
}
.tech .banner-content p.fontSize14 {
    color: #E9EBED;
}
.tech .btn {
    display: inline-block;
    width: 3.466667rem;
    height: 1.066667rem;
    line-height: 1.066667rem;
    border-radius: 100px;
    overflow: hidden;
}
.tech .btn a {
    display: block;
    width: 3.413333rem;
    height: 1.013333rem;
    margin: 1px auto;
    color: #fff;
    background-color: transparent;
}
.tech .btn-default {
    background: -webkit-linear-gradient(180deg, #59E0FF, #00769B);
    margin-right: 23px;
}
.tech .btn.btn-trans a {
    color: #45c9e9;
}
.tech .btn.btn-trans {
    border: 1px solid #45c9e9;
}

.tech .tech-content>div {
    padding: 45px 18px;
}
.tech .tech-content img {
    width: 100%;
}
.tech .tech-content p.fontSize12,
.tech .tech-content div.fontSize12 {
    margin: 0 auto;
    width: 85%;
}
.tech .tech-content .platon {
    background-color: #fff;
    padding-bottom: 22px;
}
.tech .tech-content .platon p.fontSize18 {
    margin-bottom: 13px;
}
.tech .tech-content .platon p.fontSize12 {
    line-height: 1.5;
    margin-bottom: 30px;
}

.tech .tech-content .verifiable {
    background-color: #F5F7FA;
}
.tech .tech-content .swiper-pagination {
    bottom: 0px;
}
.tech .tech-content .verifiable p.fontSize16 {
    margin-bottom: 10px;
}
.tech .tech-content .verifiable>p.fontSize13 {
    margin-bottom: 25px;
}
.tech .tech-content .verifiable div.fontSize13 {
    margin-bottom: 5px;
}
.tech .tech-content .works ul {
    margin-top: 20px;
}
.tech .tech-content .works ul li {
    font-size: 12px;
    line-height: 1.5;
    margin-bottom: 10px;
}
.tech .tech-content .works ul li span {
    width: 20px;
    color: #00B7DB;
    display: inline-block;
    vertical-align: top;
}
.tech .tech-content .works ul li p {
    display: inline-block;
    width: calc(100% - 25px);
}
.tech .tech-content .works p.fontSize18 {
    margin-bottom: 20px;
}
.tech .tech-content .works .img-container,
.tech .tech-content .consensus .img-container {
    background-image: linear-gradient(-90deg, #283B4B 0%, #121C25 100%);
    padding: 20px;
}
.tech .tech-content .consensus {
    padding-top: 0;
}
.tech .tech-content .consensus p.fontSize15 {
    margin-bottom: 30px;
}
.tech .tech-content .consensus .swiper-slide p.fontSize16 {
    margin-top: 10px;
    margin-bottom: 15px;
}
.tech .tech-content .consensus .swiper-slide p.fontSize13 {
    line-height: 1.5;
}
.tech .tech-content .consensus .consensus-icon i {
    display: inline-block;
    margin-top: 30px;
    margin-bottom: 10px;
    width: 35px;
    height: 30px;
    background: url('../../assets/index/techicons.png') no-repeat;
    background-size: 487px 32px;
    
}
.tech .tech-content .consensus .consensus-icon.consensus-icon0 i {
    background-position: -226px 0;
}
.tech .tech-content .consensus .consensus-icon.consensus-icon1 i {
    background-position: -302px -2px;
}
.tech .tech-content .consensus .consensus-icon.consensus-icon2 i {
    background-position: -379px -2px;
}
.tech .tech-content .consensus .consensus-icon.consensus-icon3 i {
    background-position: -454px -2px;
}

/* 新增项目符号 */
.ul-detail-content{
    margin: 25px 0 0 5%;
}
.ul-detail-content>li{
    text-align: left;
    list-style: initial;
    color: #a0dff9;
    margin-bottom:5px;
}
.ul-detail-content>li p{
    font-size:12px;
}

.feature-icon{
  width:34px;
  height: 34px;
  margin:0 auto 15px;
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
