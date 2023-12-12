import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login_register',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: () => import('../views/InventoryView.vue')
    },
    {
      path: '/profile/deleteprofile',
      name: 'deleteprofile',
      component: () => import('../views/DeleteProfileView.vue')
    }
    ,
    {
      path: '/viewlogs',
      name: 'viewlogs',
      component: () => import('../views/ViewLogsView.vue')
    },
    {
      path: '/changeequippedattacks',
      name: 'changeequippedattacks',
      component: () => import('../views/ChangeEquippedAttacksView.vue')
    },
    {
      path: '/playergamehistory',
      name: 'playergamehistory',
      component: () => import('../views/PlayerGameHistoryView.vue')
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('../views/GameView.vue')
    },
    {
      path: '/wait',
      name: 'wait',
      component: () => import('../views/test.vue')
    }
  ]
})

export default router
