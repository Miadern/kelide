import Layout from '@/layout'
export default {
  path: '/vn',
  component: Layout,
  children: [
    {
      path: 'device',
      component: () => import('@/views/device'),
    },
    {
      path: 'deviceState',
      component: () => import('@/views/deviceState'),
    },
    {
      path: 'deviceType',
      component: () => import('@/views/deviceType'),
    },
  ],
}
