/* eslint-disable import/no-unresolved */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { message } from 'ant-design-vue'
import Index from '@pages/Index.vue'
import EntityLayout from '@layout/EntityLayout.vue'

// 路由
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Index,
    redirect: '/console',
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/console',
        component: () => import('@pages/Console.vue'),
        meta: {
          title: '控制台'
        }
      },
      {
        path: '/system',
        component: EntityLayout,
        meta: {
          title: '系统设置'
        },
        children: [
          {
            path: '/admin',
            component: () => import('@pages/system/Admin.vue'),
            meta: {
              title: '管理员管理'
            }
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@pages/Login.vue'),
    meta: {
      title: '登录'
    }
  }
]

// 创建路由管理器
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 登录拦截
const authExclude = ['/login']

router.beforeEach((to) => {
  // console.log(to)
  // console.log(from)
  // console.log(next)

  const token = sessionStorage.getItem('token')
  console.log('token', token)
  if (token === null || token === '') {
    if (authExclude.indexOf(to.path) === -1) {
      router.replace('/login')
      message.success('token过期！')
      // return false;
    }
  } else if (token !== '' && authExclude.indexOf(to.path) > -1) {
    router.replace('/')
  }

  return true
})

export default router
