import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/Login.vue'
import LayOut from '../views/layOut/LayOut.vue'
import Dashboard from '../views/home/Dashboard.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'LayOut',
    component: LayOut,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'music',
        name: 'Music',
        component: () => import('../views/musicManage/Music.vue')
      },
      {
        path: 'album',
        name: 'Album',
        component: () => import('../views/musicManage/Album.vue')
      },
      {
        path: 'musiclist',
        name: 'MusicList',
        component: () => import('../views/musicManage/MusicList.vue')
      },
      {
        path: 'permission',
        name: 'Permission',
        component: () => import('../views/systemManage/Permission.vue')
      },
      {
        path: 'role',
        name: 'Role',
        component: () => import('../views/systemManage/Role.vue')
      },
      {
        path: 'user',
        name: 'User',
        component: () => import('../views/systemManage/User.vue')
      },
      {
        path: 'color',
        name: 'Color',
        component: () => import('../views/othersManage/Color.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  // {
  //   path: '*',
  //   name: '404',
  //   component: () => import('../views/404/Error.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
