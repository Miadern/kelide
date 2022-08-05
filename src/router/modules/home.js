import Layout from '@/layout'
export default {
  path: '/home',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/home'),
    },
  ],
}
