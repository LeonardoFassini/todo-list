import * as React from 'react';
import { Route, Switch } from 'react-router';
import { AppPath } from './routes-list';
import { InternalRoutes } from './internal-routes';
import { Login } from '@app/modules/login';

export const ExternalRoutes: React.FC = () => {
  console.log('pipoquinha');
  return (
    <Switch>
      <Route component={Login} path={AppPath.Login} exact />
      <Route component={InternalRoutes} path={AppPath.Todo.Base} />
    </Switch>
  );
};
