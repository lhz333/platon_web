<template>
    <div class="header-nav">
        <div class="paddingLR20 clearfix">
            <div class="nav-logo fl" @click="$router.push({path: '/'});">
                <a href="JavaScript:;"><img src="../../assets/index/nav-logo.png" alt="" /></a>
            </div>
            <div class="fr nav-list" @click="navFuncShow" v-bind:class="{ active: navShow }">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="nav-list-div" v-bind:class="{ active: navShow }">
                <ul class="nav-list-ul">
                    <template v-for="(item,index) in navList">
                        <li v-if="item.name!=='service'&&item.name!=='custody'&&item.name!=='newsMedia'" :key="index" @click="navTab(index)">
                            <a href="JavaScript:;">{{$t("headerNav."+item.name)}}</a>
                        </li>
                        <li v-else-if="item.name=='newsMedia'" class="change-language" @click="newsMediaShow" :key="index">
                            <a href="JavaScript:;">
                                <p>
                                    <span>{{$t("headerNav."+item.name)}}</span>
                                    <i class="el-icon-arrow-down el-icon--right"></i>
                                </p>
                            </a>
                            <div class="model-language service" v-show="newsMediaDialog">
                                <ul class="clear text-center">
                                    <li @click="serviceNavTab('/news')">
                                        <a href="JavaScript:;">{{$t("headerNav.news")}}</a>
                                    </li>
                                    <li @click="serviceNavTab('/pressCenter')">
                                        <a href="JavaScript:;">{{$t("headerNav.pressCenter")}}</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li v-else-if="item.name=='custody'" :key="index">
                            <a href="https://keyshard.platon.network/mobile.html#/">{{$t("headerNav."+item.name)}}</a>
                        </li>
                        <li v-else-if="$i18n.locale=='en'&&item.name=='service'" class="change-language" @click="serviceShow" :key="index">
                            <a href="JavaScript:;">
                                <p>
                                    <span>{{$t("headerNav."+item.name)}}</span>
                                    <i class="el-icon-arrow-down el-icon--right"></i>
                                </p>
                            </a>
                            <div class="model-language service" v-show="serviceDialog">
                                <ul class="clear text-center">
                                    <li @click="serviceNavTab('/blockchain')">
                                        <a href="JavaScript:;">{{$t("blockchain.title")}}</a>
                                    </li>
                                    <li @click="serviceNavTab('/consulting')">
                                        <a href="JavaScript:;">{{$t("consulting.title")}}</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                     </template>
                    <li class="change-language" id="language" @click="languageShow">
                        <a href="JavaScript:;">
                            <p>
                                <img class="language-icon" src="../../assets/index/language-b.png" alt="" />
                                <span>{{$t("headerNav.language")}}</span>
                                <i class="el-icon-arrow-down el-icon--right"></i>
                            </p>
                        </a>
                        <div class="model-language" id="model-language" v-show="modelLanguage">
                            <ul class="clear text-center">
                                <li :class="{active:$i18n.locale=='en'}" @click="tabLanguage('en')">
                                    <a href="JavaScript:;" name="en">{{$t("headerNav.en")}}</a>
                                </li>
                                <li :class="{active:$i18n.locale=='zh'}" @click="tabLanguage('zh')">
                                    <a href="JavaScript:;" name="zh">{{$t("headerNav.zh")}}</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="nav-mask" @click="navFuncShow" v-bind:class="{ active: navShow }"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                navShow: false,
                modelLanguage:false,
                serviceDialog:false,
                newsMediaDialog: false,
                navList: [{
                    name: 'home',
                    path: '/',
                    obj: null
                },
                {
                    name: 'technology',
                    path: '/technology',
                    obj: null
                },
                {
                    name: 'service',
                    path: null,
                    obj: null
                },{
                    name: 'case',
                    path: '/featuredCases',
                    obj: null
                },
                {
                    name: 'team',
                    path: '/team',
                    obj: null
                },{
                    name: 'newsMedia',
                    path: null,
                    obj: null
                },{
                    name:'developer',
                    path:null,
                    obj:null
                },{
                    name: 'custody',
                    path: '/custody',
                    obj: null
                },{
                    name: 'honorPoints',
                    path: '',
                    obj: null
                },{
                    name: 'vitu',
                    path: '',
                    obj: null
                },
                {
                    name: 'joinUs',
                    path: '/',
                    obj: 'joinUs'
                }]
            }
        },
        methods: {
            //  滚动事件
            handleScroll() {
                let currentUrl = window.location.href;
                let currentEnd = currentUrl.split('#')[1];
                this.$nextTick(() => {
                    if(currentEnd.indexOf("newsDetail") != -1 || currentEnd.indexOf("team") != -1){

                    }else{
                        let scrollTop =
                        document.documentElement.scrollTop || document.body.scrollTop;
                        let headerBlock = document.querySelector(".header-nav");
                        if (scrollTop > 50) {
                            headerBlock.style.background='#004569';
                        } else {
                            if(this.navShow){
                                headerBlock.style.background='#004569';
                                return;
                            }
                            headerBlock.style.background='transparent';
                        }
                    }
                });
            },
            serviceNavTab(path){
                this.$router.push({
                    path:path
                });
                this.navShow = false;
                ModalHelper.beforeClose();
            },
            //导航切换
            navTab(index) {
                let that = this;
                if(that.navList[index].name==='developer'){
                    window.open('https://developer.platon.network/mobile/index.html#/?lang='+that.$i18n.locale,'_self');
                    return;
                }
                if(that.navList[index].name==='vitu'){
                    window.open('https://vitu.platon.network/','_self');
                    return; 
                }
                if(that.navList[index].name==='honorPoints'){
                    window.open('http://platon.mall.fensaas.com','_blank');
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
                if(that.navList[index].obj != null) {
                    setTimeout(function(){
                        that.$nextTick(function() {
                            let distanceTop = document.documentElement.scrollTop || document.body.scrollTop;
                            let total1 = document.querySelector('#' + that.navList[index].obj).getBoundingClientRect().top + distanceTop -65;
                            that.common.jump(3600);
                        })
                    },50);
                }
                that.navShow = false;
                ModalHelper.beforeClose();
            },
            languageShow(){
                this.modelLanguage = !this.modelLanguage;
            },
            serviceShow(){
                this.serviceDialog = !this.serviceDialog;
            },
            newsMediaShow(){
                this.newsMediaDialog = !this.newsMediaDialog;
            },
            tabLanguage(language){
                let that = this;
                that.$i18n.locale = language;
                window.sessionStorage.setItem('locale', language);
                // that.$router.replace({
                //     query:{
                //         lang:language
                //     }
                // });
                //无刷新更改页面URL参数
                let currentUrl = window.location.href;
                let currentEnd = currentUrl.split('#')[1];
                this.$nextTick(() => {
                    if(currentEnd.indexOf("newsDetail") != -1){

                    }else{
                        that.common.changeURL('lang',language);
                    }
                });
                

                that.navShow = false;
                ModalHelper.beforeClose();
            },
            navFuncShow() {
                this.navShow = !this.navShow;
                if(this.navShow){
                    ModalHelper.afterOpen();
                }else{
                    ModalHelper.beforeClose();
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

<style scoped>
.nav-list-ul .service li a{
    font-size: .32rem;
}
</style>
