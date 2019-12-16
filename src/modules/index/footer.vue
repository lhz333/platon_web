<template>
    <div class="block-footer">
        <div class="content-min-size paddingLR50">
            <div class="footer-bottom clear">
                <span class="text-left">COPYRIGHT &copy; 2019 PLATON INTERNATIONAL LIMITED ALL RIGHTS RESERVED.</span>
                <span class="fr terms" @click="$router.push({path: '/privacy'});">PRIVACY POLICY</span>
                <b class="fr">&nbsp;&nbsp;-&nbsp;&nbsp;</b>
                <span class="fr terms" @click="$router.push({path: '/terms'});">TERMS</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                navList: {

                },
            }
        },
        methods: {

        }
    }
</script>