import Layout from '@/layout'
export default {
  path: '/commodityType',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/commodityType'),
    },
  ],
}
