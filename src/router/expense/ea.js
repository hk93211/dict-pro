const eaTyList = () => import('@/views/expense/ea/page/ea_ty/list');

export default [
  {
    path: 'EA',
    component: () => import('@/components/common/blank'),
    children: [
      {
        path: 'EA_TY',
        component: () => import('@/components/common/blank'),
        children: [
          {
            path: 'list',
            name: 'eaTyList',
            component: eaTyList,
          },
          // {
          //   path: 'EA_TY',
          //   component: () => import('@/components/common/blank'),
          //   children: [
          //     {
          //       path: 'list',
          //       name: 'eaTyList',
          //       component: eaTyList,
          //     },
          //   ],
          // },
        ],
      },
    ],
  },
];