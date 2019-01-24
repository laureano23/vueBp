/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/login',
    view: 'Login'
  },
  {
    path: '/dashboard',
    // Relative to /src/views
    view: 'Dashboard',
    meta: { requiresAuth: true }
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    view: 'UserProfile',
    meta: { requiresAuth: true }
  },
  {
    path: '/table-list',
    name: 'Table List',
    view: 'TableList',
    meta: { requiresAuth: true }
  },
  {
    path: '/typography',
    view: 'Typography',
    meta: { requiresAuth: true }
  },
  {
    path: '/icons',
    view: 'Icons',
    meta: { requiresAuth: true }
  },
  {
    path: '/maps',
    view: 'Maps',
    meta: { requiresAuth: true }
  },
  {
    path: '/notifications',
    view: 'Notifications',
    meta: { requiresAuth: true }
  },
  {
    path: '/upgrade',
    name: 'Upgrade to PRO',
    view: 'Upgrade',
    meta: { requiresAuth: true }
  }
]
