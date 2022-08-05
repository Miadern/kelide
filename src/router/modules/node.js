import Layout from '@/layout'
export default {
  path: '/node',
  component: Layout,
  children: [
    {
      path: 'area',
      component: () => import('@/views/area'),
    },
    {
      path: 'point',
      component: () => import('@/views/point'),
    },
    {
      path: 'partner',
      component: () => import('@/views/partner'),
    },
  ],
}
