import HomePage from './HomePage/index.jsx';
import Characters from './Characters/index.jsx';
import Comics from './Comics/index.jsx';
import Comicsinfo from './Comicsinfo/index.jsx';

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
  {
    path: '/comicsinfo',
    component: Comicsinfo,
  },
];
