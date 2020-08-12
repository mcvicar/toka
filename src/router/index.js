import { Auth } from 'aws-amplify'

const authGuard = async (to, from, next) => {
  try {
    await Auth.currentSession()
    next()
  } catch (error) {
    next('/sign-in')
  }
}

const loginAuthGuard = async (to, from, next) => {
  try {
    await Auth.currentSession()
    next('/')
  } catch (error) {
    next()
  }
}

export const page404 = {
    path: '/404',
    component: () => import('../views/error/404.vue')
};

export const page500 = {
    path: '/500',
    component: () => import('../views/error/500.vue')
};

export const mainRouter = [
  {
      path: '/auth',
      component: () => import('../views/auth/cognito.vue'),
      name: 'auth',
      beforeEnter: loginAuthGuard
  },
  {
      path: '/editor',
      component: () => import('../views/content/editor.vue'),
      name: 'contentEditor',
  },
  {
      path: '/admin',
      component: () => import('../views/admin/index.vue'),
      name: 'adminIndex',
  },
  {
      path: '/admin/sites/new',
      component: () => import('../views/admin/sites.vue'),
      name: 'adminIndex',
  },
  {
      path: '/admin/content-types',
      component: () => import('../views/admin/contentTypes.vue'),
      name: 'contentTypes',
      beforeEnter: authGuard
  },

  {
      path: '/admin/content-blocks',
      component: () => import('../views/admin/contentBlocks.vue'),
      name: 'contentBlocks',
  },
  {
      path: '/',
      component: () => import('../views/dashboard/dashboard.vue'),
      name: 'contentDashboard',
  },
];

export default [
    page404,
    page500,
    ...mainRouter
];
