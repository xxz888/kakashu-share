import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/registers',
   
  },
  {
    path: '/registers', //注册
    name: 'registers',
    component: () => import('@/views/register/registers'),
    meta: {
      title: '注册下载',
    },
  },
  {
    path: '/register', //注册
    name: 'register',
    component: () => import('@/views/register/register'),
    meta: {
      title: '注册下载',
    }
  },
  {
    path: '/down',
    name: 'down',
    component: () => import('@/views/register/downreg')
  },
  {
    path: "/videoTudorial",
    name: "videoTudorial",
    component: () => import("@/views/user/videoTudorial"),
    meta: {
      title: '机构政策',
    },
  },
  {
    path:'/kadeChina',
    name:'kadeChina',
    component: () => import("@/views/external/kadeChina"),
    meta: {
      title:'卡德中国'
    }
  },
  {
    path:'/kadeWorld',
    name:'kadeWorld',
    component: () => import("@/views/external/kadeWorld"),
    meta: {
      title:'卡德国际'
    }
  }, {
    path:'/article/:newsid',
    name:'article',
    component: () => import("@/views/external/article"),
    meta: {
      title:'文章资讯'
    }
  },
  , {
    path:'/standby',
    name:'standby',
    component: () => import("@/views/external/standby"),
    meta: {
      title:'备用下载'
    }
  },
  {
    path: '/lucky',
    name: 'lucky',
    component: () => import(/* webpackChunkName: "about" */ '@/views/luck/lucky') // 我的奖品
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "about" */ '@/views/external/test') // 我的奖品
  },
  // {
  //   path: '/addTheAddress',
  //   name: 'addTheAddress',
  //   component: () => import(/* webpackChunkName: "about" */ '@/views/address/addTheAddress') // 添加收货地址
  // },
  // {
  //   path: '/address',
  //   name: 'address',
  //   component: () => import(/* webpackChunkName: "about" */ '@/views/address/address') // 我的收货地址
  // },
  // {
  //   path: '/myOrder',
  //   name: 'myOrder',
  //   component: () => import(/* webpackChunkName: "about" */ '@/views/luck/myOrder') // 我的奖品订单
  // },
]

const router = new VueRouter({
  routes
})

export default router
