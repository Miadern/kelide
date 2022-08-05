import Layout from '@/layout'
export default {
  path: '/task',
  component: Layout,
  children: [
    {
      path: 'operate',
      component: () => import('@/views/operate'),
    },
    {
      path: 'maintain',
      component: () => import('@/views/maintain'),
    },
  ],
}
