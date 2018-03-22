import Home from './components/home.vue'
import P1 from './components/page01.vue'
import P2 from './components/page02.vue'

const routers = [

  {
    path: '/',
    component: Home,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/page01',
    name: 'page01',
    component: P1,
  },
  {
    path: '/page02',
    name: 'page02',
    component: P2,
  },
];

export default routers
