<template>
    <div class="block-header">
        <div class="content-min-size header-content paddingLR50">
            <a class="logo" href="JavaScript:;" @click="goHome">
                <img src="../../assets/index/nav-logo.png" alt="" style="width:112px;" />
            </a>
            <ul class="block-header-ul">
                <template v-for="(item,index) in navList">
                    <li v-if="item.name!=='service'&&item.name!=='custody'&&item.name!=='newsMedia'" @click="navTab(index)" :key="index">
                        <a href="JavaScript:;">{{$t("headerNav."+item.name)}}</a>
                    </li>
                    <li class="change-language media" v-else-if="item.name=='newsMedia'" :key="index" @mouseenter="newsMediaShow" @mouseleave="newsMediaShow">
                        <a href="JavaScript:;">{{$t("headerNav."+item.name)}}</a>
                        <transition name="height">
                            <div class="model-language newsMedia" v-show="dialogNewsMedia">
                                <ul class="clear text-center">
                                    <li @click="$router.push({path: '/news'})">
                                        <a href="JavaScript:;">{{$t("headerNav.news")}}</a>
                                    </li>
                                    <li @click="$router.push({path: '/pressCenter'})">
                                        <a href="JavaScript:;">{{$t("headerNav.pressCenter")}}</a>
                                    </li>
                                </ul>
                            </div>
                        </transition>
                    </li>
                    <li v-else-if="item.name=='custody'" :key="index">
                        <a href="https://keyshard.platon.network/#/" target="_blank"><img width="74" src="../../assets/KeyShard-logo.png" alt=""></a>
                    </li>
                    <li class="change-language" v-else-if="$i18n.locale=='en'&&item.name=='service'" :key="index" @mouseenter="serviceShow" @mouseleave="serviceShow">
                        <a href="JavaScript:;">{{$t("headerNav."+item.name)}}</a>
                        <transition name="height">
                            <div class="model-language" style="width:185px;" v-show="serviceDialog">
                                <ul class="clear text-center">
                                    <li @click="$router.push({path: '/blockchain'})">
                                        <a href="JavaScript:;">{{$t("blockchain.title")}}</a>
                                    </li>
                                    <li @click="$router.push({path: '/consulting'})">
                                        <a href="JavaScript:;">{{$t("consulting.title")}}</a>
                                    </li>
                                </ul>
                            </div>
                        </transition>
                    </li>
                </template>
                
                <li class="change-language" id="language" @mouseenter="tabLanguageShow" @mouseleave="tabLanguageShow">
                    <p>
                        <span class="active">{{$t("headerNav.language")}}</span>
                    </p>
                    <transition name="height">
                        <div class="model-language" id="model-language" v-show="languageDialog">
                            <ul class="clear text-center">
                                <li :class="{active:$i18n.locale=='en'}" @click="handleCommand('en')">
                                    <a href="JavaScript:;" name="en">{{$t("headerNav.en")}}</a>
                                </li>
                                <li :class="{active:$i18n.locale=='zh'}" @click="handleCommand('zh')">
                                    <a href="JavaScript:;" name="zh">{{$t("headerNav.zh")}}</a>
                                </li>
                            </ul>
                        </div>
                    </transition>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                languageDialog: false,
                serviceDialog:false,
                dialogNewsMedia: false,
                navList: [
                {
                    name: 'technology',
                    path: '/technology',
                    obj: null
                },
                {
                    name: 'service',
                    path: '',
                    obj: null
                },{
                    name: 'case',
                    path: '/featuredCases',
                    obj: null
                },{
                    name: 'newsMedia',
                    path: '',
                    obj: null
                },
                {
                    name:'developer',
                    path:null,
                    obj:null
                },{
                    name: 'honorPoints',
                    path: '',
                    obj: null
                },{
                    name: 'custody',
                    path: '/custody',
                    obj: null
                },{
                    name: 'vitu',
                    path: '',
                    obj: null
                }]
            }
        },
        methods: {
            //   滚动事件
            handleScroll() {
                let currentUrl = window.location.href;
                let currentEnd = currentUrl.split('#')[1];
                this.$nextTick(() => {
                    if(currentEnd.indexOf("newsDetail") != -1){

                    }else{
                        let scrollTop =
                        document.documentElement.scrollTop || document.body.scrollTop;
                        let headerBlock = document.querySelector(".block-header");
                        if (scrollTop > 50) {
                            headerBlock.style.background='rgba(0,69,105,.85)';
                        } else {
                            headerBlock.style.background='transparent';
                        }
                    }
                });
            },
            //service
            serviceShow(){
                this.serviceDialog = !this.serviceDialog;
            },
            //newsMediaShow
            newsMediaShow(obj){
                this.dialogNewsMedia = !this.dialogNewsMedia;
            },
            //语言栏显示
            tabLanguageShow() {
                this.languageDialog = !this.languageDialog;
            },
            goHome(){
                if(this.$route.path==='/'){
                    this.common.jump(0);
                }else{
                    this.$router.push({path: '/'});
                }
            },
            //语言切换
            handleCommand(command) {
                this.$i18n.locale = command;
                
                window.sessionStorage.setItem('locale', command);
                //无刷新更改页面URL参数
                let currentUrl = window.location.href;
                let currentEnd = currentUrl.split('#')[1];
                this.$nextTick(() => {
                    if(currentEnd.indexOf("newsDetail") != -1){

                    }else{
                        this.common.changeURL('lang',command);
                    }
                });
            },
            //导航切换
            navTab(index) {
                let that = this;
                if(that.navList[index].name==='developer'){
                    window.open('https://developer.platon.network/#/?lang='+that.$i18n.locale,'_blank');
                    return; 
                }
                if(that.navList[index].name==='vitu'){
                    window.open('https://vitu.platon.network/','_blank');
                    return; 
                }
                if(that.navList[index].name==='honorPoints'){
                    window.open('http://platon.pc.fensaas.com/index','_blank');
                    return; 
                }
                that.$router.push({
                    path: that.navList[index].path
                });
                if(that.navList[index].name==='news'){
                    window.sessionStorage.setItem('newsPageno',1);
                }
                if(that.navList[index].name==='pressCenter'){
                    window.sessionStorage.setItem('mediaPageno',1);
                }
            },
        },
        watch: {
            '$route.query':function(val,oldVal){
                let languageName= val.lang || window.sessionStorage.getItem('locale');
                if (languageName == "zh") {
                    this.$i18n.locale = 'zh';
                    window.sessionStorage.setItem('locale', 'zh');
                } else {
                    this.$i18n.locale = 'en';
                    window.sessionStorage.setItem('locale', 'en');
                }
            }
        },
        mounted() {
            window.addEventListener("scroll", this.handleScroll);
        }
    }
</script>

<style scoped="scoped">
    .el-dropdown {
        color: #fff;
        font-size: 16px;
    }

    .el-dropdown-link {
        display: block;
        width: 100%;
        height: 100%;
    }
    .newsMedia{
        min-width: 100px;
    }
    #app.active .newsMedia{
        min-width: 180px;
    }
</style>