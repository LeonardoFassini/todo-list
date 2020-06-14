import { AuthContext } from '@app/modules/app/auth.provider';
import * as React from 'react';

export const useLogin = () => {
  const authContext = React.useContext(AuthContext);
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<string>();
  const [error, setError] = React.useState(false);

  const logIn = (username: string, password: string) => {
    /*eslint-disable-next-line no-console*/
    console.log('loading...');
    setLoading(true);
    window.setTimeout(() => {
      if (username === 'admin' && password === 'timmy') {
        setData(username);
        setError(false);
      } else {
        setError(true);
        setData(null);
      }
      setLoading(false);
      /*eslint-disable-next-line no-console*/
      console.log('loaded!');
    }, 5000);
  };

  React.useEffect(() => {
    if (!loading && data) {
      authContext.logIn(data);
    }
  }, [loading, data, authContext]);

  const logOut = (onComplete: () => void) => {
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      authContext.logOut();
      onComplete();
    }, 1000);
  };

  return { loading, error, data, logIn, logOut };
};
