import { Todo } from '@app/modules/todo';
import * as React from 'react';
import { Route } from 'react-router-dom';

import { AppPath } from './routes-list';

export const InternalRoutes: React.FC = () => {
  return <Route component={Todo} path={AppPath.Todo.Base} />;
};
