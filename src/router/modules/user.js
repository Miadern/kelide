import Layout from '@/layout'
export default {
  path: '/user',
  component: Layout,
  children: [
    {
      path: 'personnel',
      component: () => import('@/views/personnel'),
    },
    {
      path: 'census',
      component: () => import('@/views/census'),
    },
    {
      path: 'workload',
      component: () => import('@/views/workload'),
    },
  ],
}
