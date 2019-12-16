<template>
    <div class="mobile-banner">
        <img :src="imgSrc" alt="">
        <div class="mobile-banner-content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imgSrc: {
            type: String,
            default: require('../assets/index/world_vector.png')
        }
    }
}
</script>

<style scoped>
.mobile-banner {
    position: relative;
    width: 100%;
    height: 5.333333rem;
    background-image: linear-gradient(90deg, #01445A 0%, #004569 86%);
}
.mobile-banner img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
}
.mobile-banner .mobile-banner-content {
  position: absolute;
  width: 100%;
  z-index: 1;
}
</style>
