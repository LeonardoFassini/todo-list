import { AppPath } from '@app/modules/app/routes/routes-list';
import * as React from 'react';
import { Redirect } from 'react-router-dom';

export const Base: React.FC = () => {
  return <Redirect to={AppPath.Login} />;
};
