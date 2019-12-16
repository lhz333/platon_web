<template>
    <div id="app" v-bind:class="{ active: isEn }">
        <header-nav></header-nav>
        <div class="anchors" @click="jumpTo" @mouseenter="navShowFn" @mouseleave="navShowFn">
            <img src="../../assets/icon-email.svg" alt="">
            <p v-show="navShow">CONTACT US</p>
        </div>
        <router-view/>
        <Footer></Footer>
    </div>
</template>

<script>
    import HeaderNav from '@/modules/index/header.vue'
    import Footer from '@/modules/index/footer.vue'

    export default {
        name: 'App',
        data(){
            return {
                navShow: false
            }
        },
        components: {
            HeaderNav,
            Footer
        },
        methods:{
            navShowFn(){
                this.navShow = !this.navShow;
            },
            jumpTo(){
                let that = this;
                that.$router.push({
                    path: '/'
                });
                setTimeout(function(){
                    that.$nextTick(function() {
                        let distanceTop = document.documentElement.scrollTop || document.body.scrollTop;
                        let total1 = document.querySelector('#joinUs').getBoundingClientRect().top + distanceTop;
                        that.common.jump(total1);
                    })
                },50);
            }
        },
        computed: {
            isEn(){
                if(this.$i18n.locale === 'en'){
                    return true;
                }else{
                    return false;
                }
            }
        }
    }
</script>

<style>
    @import url("../../style/index/common.css");
    #app.active .block-header-ul>li{
        padding: 0 15px;
    }
</style>