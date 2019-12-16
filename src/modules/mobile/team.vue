<template>
    <div class="team">
        <div class="founder">
            <div class="block-label text-center fontWeight co-00223A">{{$t('founder.title')}}</div>
            <el-collapse accordion @change="handleChange(1)" v-model="active1">
                <el-collapse-item v-for="(item, index) in founders" :key="index" :class="`collapse-wrap${index}`" :id="`founder${index + 1}`" :name="`founder${index}`" @click.native="toAnchor('founder', index + 1)">
                    <div slot="title" class="collapse-title">
                        <img :src="require(`../../assets/index/founder${index + 1}.png`)">
                        <div>
                            <p class="fontSize15 co-00223A fontWeight">{{item.name}}</p>
                            <p class="fontSize13 co-667580" v-html="item.detail"></p>
                        </div>
                    </div>
                    <div class="person-detail">
                        <!-- <p class="fontSize15 co-00223A fontWeight">{{item.name}}</p> -->
                        <p class="fontSize13 co-667580" v-html="item.education"></p>
                        <ul>
                            <li class="fontSize12 co-979DA1" v-for="(cell, i) in item.point" :key="i">{{cell.text}}</li>
                        </ul>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
        <div class="core-team">
            <div class="block-label fontWeight text-center">{{$t('team.title')}}</div>
            <el-collapse class="collapse-wrap0" accordion @change="handleChange(2)" v-model="active2">
                <el-collapse-item :id="`coreTeam${index + 1}`" v-for="(item, index) in teams" :key="index" :class="`collapse-team${index}`" :name="`coreTeam${index}`" @click.native="toAnchor('coreTeam', index + 1)">
                    <div slot="title" class="collapse-title">
                        <img :src="require(`../../assets/index/team${index + 1}.png`)">
                        <div>
                            <p class="fontSize15 co-00223A fontWeight">{{item.name}}</p>
                            <p class="fontSize13 co-667580" v-html="item.job"></p>
                        </div>
                    </div>
                    <div class="person-detail">
                        <!-- <p class="fontSize15 co-00223A fontWeight">{{item.name}}</p> -->
                        <p class="fontSize13 co-667580" v-html="item.education"></p>
                        <p class="marginT10 fontSize12 co-667580" v-html="item.detail"></p>
                        <ul class="marginT10">
                            <li class="fontSize12 co-979DA1" v-for="(cell, i) in item.point" :key="i">{{cell.text}}</li>
                        </ul>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
        <div class="founder">
            <div class="block-label text-center fontWeight co-00223A">{{$t('advisorTitle')}}</div>
            <div v-for="(item, index) in advisor" :key="index">
                <div class="advisor-content">
                    <img :src="require('../../assets/index/advisor'+(index+1)+'.png')" />
                    <div class="advisor-content-detail">
                        <p class="fontSize15 co-00223A marginB10 fontWeight">{{item.name}}</p>
                        <p class="fontSize13 co-667580" v-for="(list,i) in item.point" :key="i" v-html="list.text"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import common from '@/util/common'

export default {
    data () {
        return {
            active1: [],
            active2: []
        }
    },
    computed: {
        founders () {
            return this.$t('founder.people')
        },
        teams () {
            return this.$t('team.people')
        },
        advisor(){
            return this.$t('advisor')
        }
    },
    methods: {
        handleChange (type) {
            if (type === 1) {
                this.active2 = []
            } else {
                this.active1 = []
            }
        },
        toAnchor (name, index) {
            common.goAnchor(name, index)
        }
    },
    mounted(){
        document.querySelector(".header-nav").style.background="#004569";
    }
}
</script>

<style scoped>
.team .co-00223A {
    color: #00223A;
}
.team .co-667580 {
    color: #667580;
}
.team .co-979DA1 {
    color: #979DA1;
}

.team {
    margin-top: 50px;
}
.team .collapse-wrap0 .collapse-title p.fontSize15 {
    margin-top: 10px;
}
.team .collapse-title {
    box-sizing: border-box;
    display: flex;
    padding: 20px;
    /* justify-items: center; */
    align-items: center;
}
.advisor-content{
    box-sizing: border-box;
    display: flex;
    padding: 20px;
}
.advisor-content-detail{
    line-height: 1.5;
}
.team .collapse-title img,.advisor-content img {
    width: 70px;
    height: 70px;
    margin-right: 18px;
}
.team .collapse-title p {
    line-height: 1.5;
    margin-bottom: 10px;
}
.team .collapse-title div.fl {
    width: calc(100% - 90px);
}
.team .founder .block-label {
    font-size: .48rem;
    padding-top: 40px;
}
.team .core-team .block-label {
    font-size: .48rem;
    padding-top: 25px;
}
.team .core-team {
    background-color: #F5F7FA;
}
.team .person-detail {
    padding: 20px;
}
.team .person-detail li {
    margin-left: 15px;
    list-style: disc;
}
</style>
