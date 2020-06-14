import { LocalStorageManager } from '@app/services/localstorage-manager.service';
import * as React from 'react';
import { Container } from 'typedi';

import { ExternalRoutes } from './routes/external-routes';

Container.set(LocalStorageManager, new LocalStorageManager());

export const App: React.FC = () => {
  return <ExternalRoutes />;
};
