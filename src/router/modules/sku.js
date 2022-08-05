import Layout from '@/layout'
export default {
  path: '/sku',
  component: Layout,
  children: [
    {
      path: 'commodityType',
      component: () => import('@/views/commodityType'),
    },
    {
      path: 'commodityManage',
      component: () => import('@/views/commodityManage'),
    },
  ],
}
