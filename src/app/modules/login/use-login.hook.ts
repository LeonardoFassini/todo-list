import { AuthContext } from '@app/modules/app/auth.provider';
import { FlashMessageDispatcherContext } from '@atomic/mol.flash-message/flash-message.provider';
import { FlashMessageTypes } from '@atomic/mol.flash-message/flash-message.style';
import * as React from 'react';

export const useLogin = () => {
  const { dispatchFlashMessage } = React.useContext(FlashMessageDispatcherContext);
  const authContext = React.useContext(AuthContext);
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<string>(null);

  const logIn = (username: string, password: string) => {
    console.log('loading...');
    setLoading(true);
    window.setTimeout(() => {
      if (username === 'admin' && password === 'timmy') {
        setData(username);
        dispatchFlashMessage({ text: `Bem vindo, ${username}`, type: FlashMessageTypes.Success });
      } else {
        dispatchFlashMessage({ text: `Usuário ou senha inválidos`, type: FlashMessageTypes.Alert });
      }
      setLoading(false);
      console.log('loaded!');
    }, 2000);
  };

  React.useEffect(() => {
    if (!loading && data) {
      authContext.logIn(data);
    }
  }, [loading, data, authContext]);

  const logOut = () => {
    setLoading(true);
    window.setTimeout(() => {
      authContext.logOut();
      setLoading(false);
    }, 1000);
  };

  return { loading, logIn, logOut };
};
