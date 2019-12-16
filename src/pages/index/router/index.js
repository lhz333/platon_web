import Vue from 'vue'
import Router from 'vue-router'

// import Index from '@/modules/index/content.vue'
// const Index = resolve => require(['@/modules/index/content.vue'], resolve)

const Index = () => import('@/modules/index/content.vue')
// const Faq = () => import('@/modules/index/faq.vue')
const News = () => import('@/modules/index/news.vue')
const NewsDetail = () => import('@/modules/index/newsDetail.vue')
const Terms = () => import('@/modules/index/terms.vue')

const Privacy = () => import('@/modules/index/privacy.vue')
const Labels = () => import('@/modules/index/labels.vue')
const FeaturedCases = () => import('@/modules/index/featuredCases.vue')
const Technology = () => import('@/modules/index/technology.vue')
const PressCenter = () => import('@/modules/index/pressCenter.vue')
const Blockchain = () => import('@/modules/index/blockchain.vue')
const Consulting = () => import('@/modules/index/consulting.vue')
// const Custody = () => import('@/modules/index/custody.vue')



Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: Index
        },
        // {
        //     path: '/faq',
        //     name: 'faq',
        //     component: Faq
        // },
        {
            path: '/labels',
            name: 'labels',
            component: Labels
        },
        {
            path: '/news',
            name: 'news',
            component: News
        },
        {
            path: '/pressCenter',
            name: 'pressCenter',
            component: PressCenter
        },
        {
            path: '/newsDetail',
            name: 'newsDetail',
            component: NewsDetail
        },{
            path:'/featuredCases',
            name:'featuredCases',
            component:FeaturedCases
        },
        {
            path:'/technology',
            name:'technology',
            component:Technology
        },
        {
            path:'/blockchain',
            name:'blockchain',
            component:Blockchain
        },
        {
            path:'/consulting',
            name:'consulting',
            component:Consulting
        },
        // {
        //     path:'/custody',
        //     name:'custody',
        //     component: Custody
        // },
        {
            path: '/terms',
            name: 'terms',
            component: Terms
        },
        {
            path: '/privacy',
            name: 'privacy',
            component: Privacy
        },
        {
            path: '*',
            redirect: '/',
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if(savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
})
