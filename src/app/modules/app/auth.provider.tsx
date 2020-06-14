import { LocalStorageManager } from '@app/services/localstorage-manager.service';
import * as React from 'react';
import Container from 'typedi';

interface AuthContextState {
  user: string;
  logIn: (user: string) => void;
  logOut: () => void;
}

export const AuthContext = React.createContext<AuthContextState>(null);

export const AuthProvider: React.FC = (props) => {
  const authManager = Container.get(LocalStorageManager);
  const initialUser = authManager.getUser();
  const [user, setuser] = React.useState(initialUser);

  const logIn = React.useCallback(
    (user: string) => {
      setuser(user);
      authManager.saveUser(user);
    },
    [authManager],
  );

  const logOut = () => {
    authManager.removeUser();
    setuser(null);
  };

  return <AuthContext.Provider value={{ logIn, logOut, user }}>{props.children}</AuthContext.Provider>;
};
