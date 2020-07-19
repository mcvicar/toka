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
  {
      path: '/admin',
      component: () => import('../views/admin/index.vue'),
      name: 'adminIndex',
  },

  {
      path: '/admin/content-types',
      component: () => import('../views/admin/contentTypes.vue'),
      name: 'contentTypes',
  },

  {
      path: '/admin/content-blocks',
      component: () => import('../views/admin/contentBlocks.vue'),
      name: 'contentBlocks',
  },
];

export default [
    page404,
    page500,
    ...mainRouter
];
