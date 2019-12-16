<template>
    <div>
        <!--banner-->
        <div class="case-block-1">
            <div class="back-mask"></div>
            <div class="content-min-size paddingLR50 case-banner">
                <div class="case-title text-center">
                    <h3 class="marginB20">{{$t("headerNav.pressCenter")}}</h3>
                </div>                
            </div>
        </div>
        <!--Media&Press-->
        <div class="index-block-9">
            <div class="content-min-size">
                <div class="team">
                    <ul class="media-list clear">
                        <li v-for="(item,index) in mediaList" :key="index">
                        <div class="text-center media-img" @click="tolink(item.link)">
                            <img :src="imagesUrl+item.logoUrl" alt="">
                        </div>
                        <p class="news-title fontWeight" @click="tolink(item.link)">{{item.title}}</p>
                        <div class="author-time-container marginT10 " @click="tolink(item.link)">
                            <p class="author-time fontSize12 color00223A">
                                {{item.name}}
                            </p>
                            <i class="color00223A">&nbsp;·&nbsp;</i>
                            <span v-html="formatterTimestamp(item.reTime)"></span>
                        </div>
                        </li>
                    </ul>
                </div>

                <div class="text-center marginB50" >
                    <el-pagination
                        v-if="mediaList.length>0"
                        @current-change="handleCurrentChange"
                        :page-size="page.pageSize"
                        :current-page="page.currentNo"
                        layout="prev, pager, next"
                        :total="page.totalPages">
                    </el-pagination>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import r from "@/util/RequestUtil.js";
    export default{
        data(){
            return {
                mediaList:[],
                imagesUrl: r.GETIMG_URL,
                page: {
                    totalPages: 1,
                    currentNo: 1,
                    pageSize: 8
                },
                mediaPageno:1
            }
        },
        methods:{
            //获取媒体报道
            getMediaData() {
                let _this = this;
                let param = {
                    pageNo: _this.page.currentNo,
                    pageSize: _this.page.pageSize,
                };
                _this.ApiService.media.findPlatMedia(param,true).then(data=>{
                    if (data && data.code === 0) {
                        _this.mediaList = data.data.result;
                        _this.page.totalPages = data.data.totalCount;
                    } else {
                        r.message(data.message, "warning");
                    }
                })
                .catch(err => {
                    console.log(err);
                });
            },
            handleCurrentChange(val) {
                this.page.currentNo = val;
                window.sessionStorage.setItem('mediaPageno',val);
                document.documentElement.scrollTop=0;
                document.body.scrollTop =0;
                this.getMediaData();
            },
            //时间转换
            formatterTimestamp(row, column) {
                return r.formatterTimestampT(row);
            },
            // 媒体报道链接
            tolink(link){
                window.open(link);
            },
            contentHeight(){
                document.getElementsByTagName('html')[0].style.height = '100%'
                const htmlHeight = document.getElementsByTagName('html')[0].offsetHeight
                const a = document.querySelector('.case-block-1').offsetHeight
                const d = document.querySelector('.block-footer').offsetHeight
                document.querySelector('.index-block-9').style.minHeight = htmlHeight - a  - d - 120 + 'px'
            }
        },
        mounted(){
            // 设置样式
            // 设置样式
            let _this=this;
            // 设置样式
            _this.contentHeight();
            window.onresize = function temp() {
                _this.contentHeight();
            };
            
            //页码
            this.mediaPageno = window.sessionStorage.getItem('mediaPageno');
            if(this.mediaPageno && this.mediaPageno !== null){
                this.page.currentNo = parseInt(this.mediaPageno);
            }
            this.getMediaData();
        },
        destroyed() {
            // 重置样式 防止影响其他页面
            document.getElementsByTagName('html')[0].style.height = 'auto'
            window.removeEventListener("scroll", this.handleScroll);
        }
    }
</script>

<style scoped="scoped">
@import url("../../style/index/index.css");
@import url("../../style/index/case.css");
.back-mask{
        background: url(../../assets/mobile/bg4.png) no-repeat center;
        background-size:auto 100%;
    }
.media-list li{
    padding: 0 50px 50px;
}
.team{
    margin:70px auto 0;
}
</style>
