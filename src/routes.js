import Loadable from 'react-loadable';
import Loading from 'src/components/Loading';

const Dashboard = Loadable({
  loader: () => import('./pages/Dashboard'), loading: Loading
});
const Transport = Loadable({
  loader: () => import('./pages/Transport'), loading: Loading
});
const Clients = Loadable({
  loader: () => import('./pages/Clients'), loading: Loading
});
const Promocode = Loadable({
  loader: () => import('./pages/Promocode'), loading: Loading
});
const Security = Loadable({
  loader: () => import('./pages/Security'), loading: Loading
});
const Settings = Loadable({
  loader: () => import('./pages/Settings'), loading: Loading
});
const Trips = Loadable({
  loader: () => import('./pages/Trips'), loading: Loading
});
const TripsView = Loadable({
  loader: () => import('./pages/TripsView'), loading: Loading
});
const Users = Loadable({
  loader: () => import('./pages/Users'), loading: Loading
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', name: 'Главная', component: Dashboard, exact: true },
  // { path: '/dashboard', name: 'Доска', component: Dashboard, exact: true },
  { path: '/transport', name: 'Транспорт', component: Transport, exact: true },
  { path: '/clients', name: 'Клиенты', component: Clients, exact: true },
  { path: '/promocode', name: 'Промокоды', component: Promocode, exact: true },
  { path: '/security', name: 'Безопасность', component: Security, exact: true },
  { path: '/settings', name: 'Настройки', component: Settings, exact: true },
  { path: '/trips', name: 'Поездки', component: Trips, exact: true },
  { path: '/users', name: 'Пользователи', component: Users, exact: true },
  { path: '/trips/view', name: 'Детали поездки', component: TripsView, exact: true },
];

export default routes;
