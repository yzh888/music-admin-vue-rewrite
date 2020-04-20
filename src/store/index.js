import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user')),
    menuList: [
      { title: 'Dashboard', icon: 'watch_later', url: 'dashboard', subMenus: [] },
      {
        title: '系统管理',
        icon: 'settings',
        url: '',
        subMenus: [
          {
            title: '用户管理',
            icon: 'account_circle',
            url: 'user',
            permissions: ['add', 'edit', 'delete']
          },
          {
            title: '角色管理',
            icon: 'face',
            url: 'role',
            permissions: ['add', 'edit', 'delete']
          },
          {
            title: '权限管理',
            icon: 'https',
            url: 'permission',
            permissions: ['add', 'edit', 'delete']
          }
        ]
      },
      {
        title: '音乐管理',
        icon: 'library_music',
        url: '',
        subMenus: [
          {
            title: '歌曲管理',
            icon: 'music_note',
            url: 'music',
            permissions: ['add', 'edit', 'delete']
          },
          {
            title: '歌单管理',
            icon: 'library_music',
            url: 'musiclist',
            permissions: ['add', 'edit', 'delete']
          },
          {
            title: '专辑管理',
            icon: 'perm_media',
            url: 'album',
            permissions: ['add', 'edit', 'delete']
          }
        ]
      },
      { title: '其他管理', 
        icon: 'send', 
        subMenus: [
          {
            title: '网站管理',
            icon: 'explore',
            url: 'color',
          }
        ] }
    ],
    menuList1: [
      { title: 'Dashboard', icon: 'watch_later', url: 'dashboard', subMenus: [] },
      {
        title: '系统管理',
        icon: 'settings',
        url: '',
        subMenus: [
          {
            title: '用户管理',
            icon: 'account_circle',
            url: 'user',
            permissions: ['add']
          },
        ]
      },
      {
        title: '音乐管理',
        icon: 'library_music',
        url: '',
        subMenus: [
          {
            title: '歌曲管理',
            icon: 'music_note',
            url: 'music',
            permissions: ['add', 'edit', 'delete']
          },
          {
            title: '歌单管理',
            icon: 'library_music',
            url: 'musiclist',
            permissions: ['add', 'edit', 'delete']
          },
          {
            title: '专辑管理',
            icon: 'perm_media',
            url: 'album',
            permissions: ['add', 'edit', 'delete']
          }
        ]
      },
    ],
  },
  mutations: {
    setToken(state, data) {
      state.token = data
    },
    setUser(state, data) {
      state.user = data
    },
    setMenuList(state, menuList) {
      state.menuList = menuList
    }
  },
  actions: {}
})
export default store