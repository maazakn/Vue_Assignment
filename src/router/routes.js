export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/newcard',
    name: 'NewCard',
    component: () => import('../views/pages/NewCard.vue'),
  },
  {
    path: '/showcard',
    name: 'ShowCard',
    component: () => import('../views/pages/ShowCard.vue'),
  },
];
