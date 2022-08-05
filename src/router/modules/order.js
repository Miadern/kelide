import Layout from '@/layout'
export default {
  path: '/order',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/order'),
    },
  ],
}
