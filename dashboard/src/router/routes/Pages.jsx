import lazyWithRetry from '../../lazy/lazyWithRetry';

const PagesRoutes = [
  {
    path: '/blank-page',
    component: lazyWithRetry(() => import('../../view/pages/blank')),
    layout: 'HorizontalLayout',
    protected: true,
  },
  {
    path: '/feed',
    component: lazyWithRetry(() => import('../../view/pages/feed')),
    layout: 'VerticalLayout',
    protected: true,
  },
  {
    path: '/billing',
    component: lazyWithRetry(() => import('../../view/pages/billing')),
    layout: 'VerticalLayout',
    protected: true,
  },
  {
    path: '/compose',
    component: lazyWithRetry(() => import('../../view/pages/compose')),
    layout: 'VerticalLayout',
    protected: true,
  },
  {
    path: '/teams',
    component: lazyWithRetry(() => import('../../view/pages/teams')),
    layout: 'VerticalLayout',
    protected: true,
  },
  {
    path: '/logs',
    component: lazyWithRetry(() => import('../../view/pages/logs')),
    layout: 'VerticalLayout',
    protected: true,
  },
  {
    path: '/providers/:selectedChannel',
    component: lazyWithRetry(() => import('../../view/pages/providers')),
    layout: 'VerticalLayout',
    protected: true,
    exact: true,
  },
  {
    path: '/channels',
    component: lazyWithRetry(() => import('../../view/pages/channels')),
    layout: 'VerticalLayout',
    protected: true,
  },
  {
    path: '/logs',
    component: lazyWithRetry(() => import('../../view/pages/logs')),
    layout: 'VerticalLayout',
    protected: true,
  },
  {
    path: '/profile',
    component: lazyWithRetry(() => import('../../view/pages/profile')),
    layout: 'VerticalLayout',
    protected: true,
  },
  {
    path: '/pages/error-page',
    component: lazyWithRetry(() => import('../../view/pages/error')),
    layout: 'FullLayout',
  },
  {
    path: '/auth/login',
    component: lazyWithRetry(() => import('../../view/pages/auth/login')),
    layout: 'FullLayout',
  },
  {
    path: '/auth/forgot-password',
    component: lazyWithRetry(() =>
      import('../../view/pages/auth/forgot-password')
    ),
    layout: 'FullLayout',
  },
  {
    path: '/auth/reset_password',
    component: lazyWithRetry(() =>
      import('../../view/pages/auth/reset_password')
    ),
    layout: 'FullLayout',
  },
  {
    path: '/auth/register',
    component: lazyWithRetry(() =>
      import('../../view/pages/auth/registration')
    ),
    layout: 'FullLayout',
  },
  {
    path: '/auth/verify',
    component: lazyWithRetry(() => import('../../view/pages/auth/verify')),
    layout: 'FullLayout',
  },
  {
    path: '/auth/verify_email',
    component: lazyWithRetry(() =>
      import('../../view/pages/auth/verify_email')
    ),
    layout: 'FullLayout',
  },
  {
    path: '/auth/session-expired',
    component: lazyWithRetry(() =>
      import('../../view/pages/auth/sessionExpired')
    ),
    layout: 'FullLayout',
  },
];

export default PagesRoutes;
