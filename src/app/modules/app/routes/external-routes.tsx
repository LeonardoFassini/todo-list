import { Base } from '@app/modules/base/base.page';
import { Login } from '@app/modules/login';
import * as React from 'react';
import { Route, Switch } from 'react-router';

import { InternalRoutes } from './internal-routes';
import { AppPath } from './routes-list';

export const ExternalRoutes: React.FC = () => {
  return (
    <Switch>
      <Route component={Base} path={AppPath.Base} exact />
      <Route component={Login} path={AppPath.Login} exact />
      <Route component={InternalRoutes} path={AppPath.Todo.Base} />
    </Switch>
  );
};
