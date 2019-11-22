import ea from './ea';

export default [
  {
    path: '/expense',
    component: () => import('@/components/common/blank'),
    children: [
      ...ea,
    ],
  },
];