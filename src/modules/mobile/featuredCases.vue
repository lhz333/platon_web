// 案例
<template>
    <div class="case">
        <mobile-banner :imgSrc="require('../../assets/mobile/mbg1.png')">
            <div slot="content" class="banner-content text-center">
                <p class="">{{$t("caseDetails.solutitle")}}</p>
                <!-- <p class="subtitle">{{$t('caseDetails.subtitleOne')}}</p> -->
                <p class="subtitle">{{$t('caseDetails.subtitleTwo')}}</p>
            </div>
        </mobile-banner>
        <div class="case-content">
            <el-collapse class="collapse-wrap" accordion>
                <el-collapse-item
                    class="collapse-item"
                    v-for="(item, index) in cases"
                    :key="index"
                    :id="`case${index + 1}`"
                    @click.native="toAnchor('case', index + 1)"
                    :name="index">
                    <div slot="title">
                        <i class="collapse-icon" :class="`collapse-icon${index}`"></i>
                        <span class="collapse-label co-009ac9 fontSize16 fontWeight">{{item.title}}</span>
                    </div>
                    <div class="content-wrap">
                        <p class="co-657480 fontSize12 marginB10">{{item.content}}</p>
                        <div class="benefits">
                            <p class="content-label">
                                <span class="co-00223A fontSize16 fontWeight">{{$t("caseDetails.benefits")}}</span>
                                <i></i>
                            </p>
                            <div v-for="(cell, i) in item.benefits" :key="i" class="content-text">
                                <p class="co-657480 fontSize14 fontWeight"><i class="content-icon" :class="`content-icon${index}${i}`"></i>{{cell.title}}</p>
                                
                                
                                <ul class="ul-detail-content">
                                    <li>
                                        <p class="co-979DA1 fontSize12">{{cell.firstPoint}}</p>
                                    </li>
                                    <li>
                                        <p class="co-979DA1 fontSize12">{{cell.secondPoint}}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="opportunities">
                            <p class="content-label">
                                <span class="fontSize16 fontWeight co-00223A">{{$t("caseDetails.opportunities")}}</span>
                                <i></i>
                            </p>
                            <div v-for="(cell, i) in item.opportunities" :key="i" class="content-text">
                                <p class="co-657480 fontSize14 fontWeight"><i class="content-icon" :class="`content-icon${index}${i}`"></i>{{cell.title}}</p>
                                
                                <ul class="ul-detail-content">
                                    <li>
                                        <p class="co-979DA1 fontSize12">{{cell.firstPoint}}</p>
                                    </li>
                                    <li>
                                        <p class="co-979DA1 fontSize12">{{cell.secondPoint}}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script>
import MobileBanner from '@/components/MobileBanner'
import common from '@/util/common'

export default {
    components: {
        MobileBanner
    },
    computed: {
        cases () {
            return this.$t('caseDetails.cases')
        }
    },
    methods: {
        toAnchor (name, index) {
            common.goAnchor(name, index)
        }
    }
}
</script>

<style scoped>
.case .co-009ac9 {
    color: #009AC9;
}
.case .co-00223A {
    color: #00223A;
}
.case .co-657480 {
    color: #657480;
}
.case .co-979DA1 {
    color: #979DA1;
}

.case {
    background-color: #F5F7FA;
}
.case .banner-content {
    padding-top: 2.4rem;
}
.case .banner-content p {
    color: #fff;
    font-weight: 300;
}
.case .banner-content p:first-child {
    font-size: .533333rem;
    text-align: center;
    margin-bottom: .266667rem;
}
.case .banner-content p:not(:first-child) {
    font-size: .32rem;
    line-height: 2;
    color: #E9EBED;
    width: 95%;
    margin: 0 auto;
}
/*内容*/
.case .case-content {
    margin-bottom: 20px;
    box-shadow: 0 7px 9px 0 rgba(233,225,225,0.50);
}
.case .collapse-icon {
    margin-right: 25px;
}
.case .collapse-item .content-wrap {
    padding-left: 23px;
    padding-right: 5px;
}
.case .collapse-wrap .collapse-icon {
    display: inline-block;
    width: 35px;
    height: 40px;
    margin-top: 15px;
    vertical-align: top;
    background: url('../../assets/index/icons.png') no-repeat;
    background-size: 632px 254px;
}
.case .collapse-wrap .collapse-icon0 {
    background-position: -59px -215px;
}
.case .collapse-wrap .collapse-icon1 {
    background-position: -360px -215px;
}
.case .collapse-wrap .collapse-icon2 {
    background-position: -420px -215px;
}
.case .collapse-wrap .collapse-icon3 {
    background-position: -240px -215px;
}
.case .collapse-wrap .collapse-icon4 {
    background-position: -300px -215px;
}
.case .collapse-wrap .collapse-icon5 {
    background-position: 0px -215px;
}
/* Benefits*/
.case .content-label {
    margin-bottom: 13px;
}
.case .content-label span {
    vertical-align: top;
}
.case .content-label i {
    /* display: inline-block; */
    height: 1px;
    margin-top: 12px;
    width: 65%;
    float: right;
    margin-right: 20px;
    background: #D8D8D8;
    transform: scaleY(0.5);
}
.case .benefits .content-label i {
    width: 70%;
}
.case .content-text {
    margin-bottom: 20px;
}
.case .content-text .content-icon {
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-right: 10px;
    vertical-align: top;
    background: url('../../assets/index/casebots-blue.png') no-repeat;
    background-size: 80px 215px;
}
/*
    每块的icon
*/
/*
1
*/
.case .benefits .content-text .content-icon00 {
    background-position: -1px -76px;
}
.case .benefits .content-text .content-icon01 {
    background-position: -20px -1px;
}
.case .benefits .content-text .content-icon02 {
    background-position: -39px -1px;
}
.case .opportunities .content-text .content-icon00 {
    background-position: -1px -20px;
}
.case .opportunities .content-text .content-icon01 {
    background-position: -21px -19px;
}
/*
2
*/
.case .benefits .content-text .content-icon10 {
    background-position: -1px -36px;
}
.case .benefits .content-text .content-icon11 {
    background-position: -21px -36px;
}
.case .benefits .content-text .content-icon12 {
    background-position: -39px -36px;
}
.case .benefits .content-text .content-icon13 {
    background-position: -59px -36px;
}
.case .opportunities .content-text .content-icon10 {
    background-position: 0px -54px;
}
.case .opportunities .content-text .content-icon11 {
    background-position: -21px -55px;
}
.case .opportunities .content-text .content-icon12 {
    background-position: -1px -20px;
}
/*
3
*/
.case .benefits .content-text .content-icon20 {
    background-position: -1px -76px;
}
.case .benefits .content-text .content-icon21 {
    background-position: -21px -77px;
}
.case .benefits .content-text .content-icon22 {
    background-position: -39px -77px;
}
.case .benefits .content-text .content-icon23 {
    background-position: -60px -76px;
}
.case .opportunities .content-text .content-icon20 {
    background-position: 0 -102px;
}
.case .opportunities .content-text .content-icon21 {
    background-position: -20px -102px;
}
.case .opportunities .content-text .content-icon22 {
    background-position: -40px -104px;
}
/*
4
*/
.case .benefits .content-text .content-icon30 {
    background-position: -1px -76px;
}
.case .benefits .content-text .content-icon31 {
    background-position: -1px -125px;
}
.case .benefits .content-text .content-icon32 {
    background-position: -21px -125px;
}
.case .opportunities .content-text .content-icon30 {
    background-position: -2px -147px;
}
.case .opportunities .content-text .content-icon31 {
    background-position: -21px -147px;
}
/*
5
*/
.case .benefits .content-text .content-icon40 {
    background-position: -1px -76px;
}
.case .benefits .content-text .content-icon41 {
    background-position: -2px -167px;
}
.case .benefits .content-text .content-icon42 {
    background-position: -21px -167px;
}
.case .opportunities .content-text .content-icon40 {
    background-position: -1px -191px;
}
.case .opportunities .content-text .content-icon41 {
    background-position: -21px -191px;
}
.case .opportunities .content-text .content-icon42 {
    background-position: -39px -190px;
}
/*
6
*/
.case .benefits .content-text .content-icon50 {
    background-position: -1px -76px;
}
.case .benefits .content-text .content-icon51 {
    background-position: -60px -102px;
}
.case .opportunities .content-text .content-icon50 {
    background-position: -60px -120px;
}
.case .opportunities .content-text .content-icon51 {
    background-position: -60px -141px;
}
.case .opportunities .content-text .content-icon52 {
    background-position: -60px -163px;
}

.case .content-text>p:first-child {
    margin-bottom: 8px;
}
/* 新增项目符号 */
.ul-detail-content{
    margin: 0 0 0 6%;
}
.ul-detail-content>li{
    text-align: left;
    list-style: initial;
    color: #a0dff9;
}
</style>
