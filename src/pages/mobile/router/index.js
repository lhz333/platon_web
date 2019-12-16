import Vue from 'vue'
import Router from 'vue-router'

// import Content from '@/modules/mobile/content.vue'

//const Content = resolve => require(['@/modules/mobile/content.vue'], resolve)

const Content = () => import('@/modules/mobile/content.vue')
const News = () => import('@/modules/mobile/news.vue')
// const Faq = () => import('@/modules/mobile/faq.vue')
const Team = () => import('@/modules/mobile/team.vue')
const NewsDetail = () => import('@/modules/mobile/newsDetail.vue')
const Terms = () => import('@/modules/mobile/terms.vue')
const Privacy = () => import('@/modules/mobile/privacy.vue')
const FeaturedCases = () => import('@/modules/mobile/featuredCases.vue')
const Technology = () => import('@/modules/mobile/technology.vue')
const PressCenter = () => import('@/modules/mobile/pressCenter.vue')
const Labels = () => import('@/modules/mobile/labels.vue')
const Blockchain = () => import('@/modules/mobile/blockchain.vue')
const Consulting = () => import('@/modules/mobile/consulting.vue')
// const Custody = () => import('@/modules/mobile/custody.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Content
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/labels',
      name: 'labels',
      component: Labels
  },
    {
      path: '/pressCenter',
      name: 'pressCenter',
      component: PressCenter
    },
    // {
    //   path: '/faq',
    //   name: 'faq',
    //   component: Faq
    // },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/featuredCases',
      name: 'featuredCases',
      component: FeaturedCases
    },
    {
      path: '/technology',
      name: 'technology',
      component: Technology
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
    {
      path: '/newsDetail',
      name: 'newsDetail',
      component: NewsDetail
    },
    // {
    //   path: '/custody',
    //   name: 'custody',
    //   component: Custody
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
      redirect: '/'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
