<template>
    <div class="footer">
        <div class="footer-content">
            <div class="terms-link">
                <a href="JavaScript:;" @click="$router.push({path: '/terms'});">TERMS</a>
                <a href="JavaScript:;">&nbsp;&nbsp;-&nbsp;&nbsp;</a>
                <a href="JavaScript:;" @click="$router.push({path: '/privacy'});">PRIVACY POLICY</a>
            </div>
                <!-- <ul class="fr contact-icon">
                    <li v-for="(item,index) in navList" :key="index" @click="navTab(index)">
                        <a href="JavaScript:;">{{$t("headerNav."+item.name)}}</a>
                    </li>
                </ul> -->
            <div class="footer-bottom text-center">
                COPYRIGHT &copy; 2019 PLATON INTERNATIONAL LIMITED ALL RIGHTS RESERVED.
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                navList: [{
                    name: 'home',
                    path: '/'
                }, {
                    name: 'team',
                    path: '/team'
                },
//              {
//                  name: 'faq',
//                  path: '/faq'
//              },
                {
                    name: 'news',
                    path: '/news'
                }]
            }
        },
        methods:{
            //导航切换
            navTab(index) {
                let that = this;
                that.$router.push({
                    path: that.navList[index].path
                });
            },
        }
    }
</script>

<style scoped="scoped">
    .terms-link{
        padding:0 .266667rem;
        text-align: right;
    }
    .terms-link a{
        color: #919299;
        font-size: .373333rem;
    }
</style>