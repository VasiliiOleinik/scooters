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
const Users = Loadable({
  loader: () => import('./pages/Users'), loading: Loading
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, exact: true },
  { path: '/transport', name: 'Transport', component: Transport, exact: true },
  { path: '/clients', name: 'Clients', component: Clients, exact: true },
  { path: '/promocode', name: 'Promocode', component: Promocode, exact: true },
  { path: '/security', name: 'Security', component: Security, exact: true },
  { path: '/settings', name: 'Settings', component: Settings, exact: true },
  { path: '/trips', name: 'Trips', component: Trips, exact: true },
  { path: '/users', name: 'Users', component: Users, exact: true },
];

export default routes;
