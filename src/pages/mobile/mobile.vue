<template>
    <div id="mobile" v-bind:class="{ active: isEn }">
        <header-nav></header-nav>
        <router-view/>
        <Footer></Footer>
    </div>
</template>

<script>
    import HeaderNav from '@/modules/mobile/header.vue'
    import Footer from '@/modules/mobile/footer.vue'

    export default {
        name: 'mobile',
        components: {
            HeaderNav,
            Footer
        },
        computed: {
            isEn(){
                if(this.$i18n.locale === 'en'){
                    return true;
                }else{
                    return false;
                }
            }
        },
        mounted:function(){

        }
    }
</script>

<style>
    @import url("../../style/mobile/m-common.css");
</style>