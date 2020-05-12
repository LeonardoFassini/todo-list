import * as React from 'react';
import 'reflect-metadata';
import { localStoreManager } from '@app/services/tokens.ts';
import { LocalStorageManager } from '@app/services/localstorage-manager.service';

import { ExternalRoutes } from './routes/external-routes';
import { Container } from 'typedi';

Container.set(LocalStorageManager, new LocalStorageManager());

export const App: React.FC = () => {
  return <ExternalRoutes />;
};
