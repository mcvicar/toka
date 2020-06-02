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
      path: '/editor',
      component: () => import('../views/content/editor.vue'),
      name: 'contentEditor',
  },
];

export default [
    page404,
    page500,
    ...mainRouter
];