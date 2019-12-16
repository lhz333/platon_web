<template>
    <div class="faq-section">
        <!--banner-->
        <div class="case-block-1 text-center">
            <div class="back-mask"></div>
            <h3>{{$t("faq.title")}}</h3>               
        </div>
        <!--问题-->
        <div class="faq-block-2" v-loading="loading">
            <div class="paddingLR10">
                <el-collapse accordion class="faq-list">
                    <el-collapse-item v-for="(item,index) in faqList" :id="`moveup${index + 1}`" @click.native="toAnchor('moveup', index + 1)" :key="index">
                        <template slot="title">
                            <div class="fontWeight fontSize14">
                                <img class="faq-q" src="../../assets/index/faq-q.png" alt="">
                                <span v-if="$i18n.locale == 'zh'">{{item.problemCn}}</span>
                                <span v-else>{{item.problemEn}}</span>
                            </div>
                        </template>
                        <div class="item-question-body" v-if="$i18n.locale == 'zh'">
                            <img class="faq-q" src="../../assets/index/faq-a.png" alt="">
                            <p v-html="item.replyCn"></p>
                        </div>
                        <div class="item-question-body" v-else>
                            <img class="faq-q" src="../../assets/index/faq-a.png" alt="">
                            <p v-html="item.replyEn"></p>
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>

            <div class="content-min-size padding50 text-center" v-if="faqList.length>0">
                <el-pagination
                  @current-change="handleCurrentChange"
                  :current-page="page.currentNo"
                  layout="prev, pager, next"
                  :total="page.totalPages">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import r from '@/util/RequestUtil.js'
    export default {
        name: 'faqs',
        data() {
            return {
                faqList:[],
                loading:false,
                page: {
                    totalPages: 100,
                    currentNo: 1,
                    pageSize: 10
                },
            }
        },
        methods:{
            toAnchor (name, index) {
                this.common.goAnchor(name, index)
            },
            getData(){
                let _this = this;
                _this.loading = true;
                let param ={
                    pageNo:_this.page.currentNo,
                    pageSize:_this.page.pageSize
                }
                 _this.ApiService.faq.findFaq(param).then(data => {
                    if (data && data.code === 0) {
                        _this.loading = false;
                        _this.faqList = data.data.result;
                        _this.page.totalPages = data.data.totalCount;
                    } else {
                        _this.loading = false;
                        r.message(data.message, "warning");
                    }
                    })
                    .catch(err => {
                        _this.loading = false;
                        console.log(err);
                    });
            },
            handleCurrentChange(val) {
                this.page.currentNo = val;
                this.getData();
            },
        },
        mounted(){
            document.querySelector('.faq-section').style.minHeight = (document.documentElement.clientHeight-100)+'px';
            
            this.getData();
        }
    }
</script>
<style type="text/css">
    .faq-list.el-collapse {
        border-top: none;
        -webkit-tap-highlight-color:rgba(0,0,0,0)
    }

    .faq-list .el-collapse-item__header,
    .faq-list .el-collapse-item__arrow {
        height: auto;
        line-height: .64rem;
    }

    #mobile.active .faq-list .el-collapse-item__header {
        font-size: .32rem;
    }

    .faq-list .el-collapse-item__content {
        padding-bottom: 0;
    }
    .faq-list .el-collapse-item__header{
        color:#00223a;
        line-height: .64rem;
        padding:.32rem .133333rem;
    }

    .faq-list .el-collapse-item__arrow {
        color: #657480;
        font-size: .373333rem;
        font-weight: bold;
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
    }
    .faq-list .el-collapse-item__arrow.is-active{
        -webkit-transform: rotate(-90deg);
        transform: rotate(-90deg);
    }
</style>
<style scoped="scoped">
    @import url("../../style/mobile/news.css");
    @import url("../../style/mobile/style-mobile.css");
    .back-mask{
        background:url(../../assets/mobile/mfaq.png) no-repeat center center;
        background-size: cover;
    }
    
    #mobile.active .item-question-body {
        font-size: 13px;
        line-height: 22px;
    }
    .padding50{
        padding:.533333rem 1.333333rem;
    }
    .faq-q{
        width:.533333rem;
        height: .533333rem;
        margin-right:.133333rem;
    }
    .item-question-body .faq-q{
        margin-right:.24rem;
    }
</style>