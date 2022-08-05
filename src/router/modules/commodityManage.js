import Layout from '@/layout'
export default {
  path: '/commodityManage',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/commodityManage'),
    },
  ],
}
