import HomePage from './HomePage';
import Characters from './Characters';
import Comics from './Comics';

export const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/characters',
    component: Characters,
  },
  {
    path: '/comics',
    component: Comics,
  },
];
