import asyncComponent from '../helpers/AsyncFunc';

const routes = [
  {
    path: 'blank_page',
    component: asyncComponent(() => import('./containers/blankPage'))
  },
  {
    path: 'table',
    component: asyncComponent(() => import('./containers/Tables/antTables'))
  }
];
export default routes;
