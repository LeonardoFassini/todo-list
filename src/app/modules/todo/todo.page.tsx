import { AppPath } from '@app/modules/app/routes/routes-list';
import { useLogin } from '@app/modules/login/use-login.hook';
import { Hbox } from '@atomic/atm.box/hbox.component';
import { Button } from '@atomic/atm.button/button.component';
import { ButtonKind } from '@atomic/atm.button/button.style';
import { VSeparator } from '@atomic/atm.separator/separator.style';
import { H1 } from '@atomic/atm.typography';
import * as React from 'react';
import { useHistory } from 'react-router';
import { Grid } from 'react-styled-flexboxgrid';

export const Todo: React.FC = () => {
  const { logOut, loading } = useLogin();
  const history = useHistory();

  const handleLogOut = () => {
    logOut(() => history.push(AppPath.Login));
  };

  return (
    <Grid>
      <VSeparator />
      <Hbox>
        <Hbox.Item>
          <H1>Esse é o TODO</H1>
        </Hbox.Item>
        <Hbox.Item noGrow>
          <Button kind={ButtonKind.Rounded} onClick={handleLogOut} loading={loading}>
            Deslogar
          </Button>
        </Hbox.Item>
      </Hbox>
    </Grid>
  );
};
