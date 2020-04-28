import * as React from 'react';
import { Route } from 'react-router-dom';
import { AppPath } from './routes-list';
import { Todo } from '@app/modules/todo';

export const InternalRoutes: React.FC = () => {
  return <Route component={Todo} path={AppPath.Todo.Base} />;
};
