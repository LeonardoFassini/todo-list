import { useLogin } from '@app/modules/login/use-login.hook';
import { Hbox } from '@atomic/atm.box/hbox.component';
import { Button } from '@atomic/atm.button/button.component';
import { ButtonKind } from '@atomic/atm.button/button.style';
import { VSeparator } from '@atomic/atm.separator/separator.style';
import { H1 } from '@atomic/atm.typography';
import * as React from 'react';
import { useHistory } from 'react-router-dom';

import { AppPath } from '../routes/routes-list';
import { AppHeaderStyled } from './app-header.style';

export const AppHeader: React.FC = () => {
  const history = useHistory();
  const { logOut, loading } = useLogin();

  const handleLogOut = () => {
    logOut(() => history.push(AppPath.Login));
  };

  return (
    <AppHeaderStyled>
      <VSeparator small />
      <Hbox>
        <Hbox.Separator />
        <Hbox.Item vAlign='center'>
          <H1>Lista de Tarefas</H1>
        </Hbox.Item>
        <Hbox.Item noGrow vAlign='center'>
          <Button kind={ButtonKind.Rounded} onClick={handleLogOut} loading={loading}>
            Deslogar
          </Button>
        </Hbox.Item>
        <Hbox.Separator />
      </Hbox>
      <VSeparator small />
    </AppHeaderStyled>
  );
};
