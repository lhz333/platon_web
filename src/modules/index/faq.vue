<template>
    <div class="faq-section">
        <!--banner-->
        <div class="case-block-1">
            <div class="back-mask"></div>
            <div class="content-min-size paddingLR50 case-banner">
                <div class="case-title text-center">
                    <h3 class="marginB20">{{$t("faq.title")}}</h3>
                </div>
            </div>
        </div>
        <!--问题-->
        <div class="faq-block-2" v-loading="loading">
            <div class="content-min-size paddingLR50">
                <el-collapse accordion class="faq-list">
                    <el-collapse-item v-for="(item,index) in faqList" :key="index">
                        <template slot="title" class="title_top">
                            <div class="fontWeight">
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
                <div class="text-center" v-if="faqList.length>0" style="padding-top:30px;">
                    <el-pagination
                      @current-change="handleCurrentChange"
                      :current-page="page.currentNo"
                      :page-size="page.pageSize"
                      layout="prev, pager, next"
                      :total="page.totalPages">
                    </el-pagination>
                </div>
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
                    pageSize: 30
                },
            }
        },
        methods:{
            getData(){
                let _this = this;
                _this.loading = true;
                let param ={
                    pageNo:_this.page.currentNo,
                    pageSize:_this.page.pageSize
                }
                _this.ApiService.faq.findFaq(param).then(data => {
                    _this.loading = false;
                    if (data && data.code === 0) {
                        _this.faqList = data.data.result;
                        _this.page.totalPages = data.data.totalCount;
                    } else {
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
                document.documentElement.scrollTop=0;
                document.body.scrollTop =0;
                this.getData();
                document.querySelector('.faq-block-1').style.background='#6b84e1';
            },
        },
        mounted(){
            document.querySelector('.faq-section').style.minHeight = (document.documentElement.clientHeight-46)+'px';

            this.getData();
        }
    }
</script>
<style type="text/css">
    .faq-list.el-collapse{
        border-top:none;
    }
    .faq-list .el-collapse-item__header{
        height: auto;
        line-height: 26px;
        color: #00223a;
        padding:20px 0 20px 20px;
        font-size: 16px;
    }
    .faq-list .el-collapse-item__content{
        padding-bottom: 0;
    }

    .faq-list .el-collapse-item__arrow {
        color: #657480;
        font-size: 14px;
        font-weight: bold;
        line-height: 26px;
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
    }
    .faq-list .el-collapse-item__arrow.is-active{
        line-height: 26px;
        -webkit-transform: rotate(-90deg);
        transform: rotate(-90deg);
    }
</style>
<style scoped>
@import url("../../style/index/index.css");
@import url("../../style/index/case.css");
.faq-block-2{
    min-height:400px;
}
.back-mask{
    background: url(../../assets/index/faq.png) no-repeat center;
    background-size:auto 100%;
} 
.faq-img{
    width:280px;
    float: right;
    vertical-align: middle;
}
.faq-block-2 {
    width: 100%;
    padding: 40px 0 100px 0;
    background: #fff;
}
.faq-title {
    display: inline-block;
    font-size: 32px;
    line-height: 210px;
}
.item-question-body {
    box-sizing: border-box;
    display: flex;
    font-size: 14px;
    padding: 20px;
    background-color: #f5f5f5;
    color: #00223a;
    border-top: 1px solid #eee;
}
.faq-q{
    width:20px;
    height: 20px;
    margin-right:10px;
}
.item-question-body .faq-q{
    margin-right:14px;
}
</style>