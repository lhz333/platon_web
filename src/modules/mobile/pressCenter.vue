<template>
    <div>
        <!--banner-->
        <div class="case-block-1 text-center">
            <div class="back-mask"></div>
            <h3>{{$t("headerNav.pressCenter")}}</h3>               
        </div>
        <!--Media&Press-->
        <div class="media-index-block">
            <ul class="media-list clear">
                <li v-for="(item,index) in mediaList" :key="index">
                    <div class="text-center media-img">
                        <img :src="imagesUrl+item.logoUrl" alt="">
                    </div>
                    <div class="media-content">
                        <div class="author-time-container">
                            <p class="author-time">
                                {{item.name}}
                            </p>
                            <i>&nbsp;·&nbsp;</i>
                            <span v-html="formatterTimestamp(item.reTime)"></span>
                        </div>
                        <p class="news-title" @click="tolink(item.link)">{{item.title}}</p>
                    </div>
                </li>
            </ul>

            <div class="text-center" >
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
                    pageSize: 6
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
        },
        mounted(){
            //页码
            this.mediaPageno = window.sessionStorage.getItem('mediaPageno');
            if(this.mediaPageno && this.mediaPageno !== null){
                this.page.currentNo = parseInt(this.mediaPageno);
            }
            this.getMediaData();
        }
    }
</script>

<style scoped="scoped">
@import url("../../style/mobile/news.css");
.back-mask{
    background:url(../../assets/mobile/mbg4.png) no-repeat center center;
    background-size: cover;
}
</style>
