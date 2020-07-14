import { AuthContext } from '@app/modules/app/auth.provider';
import { AppPath } from '@app/modules/app/routes/routes-list';
import { ContentFullHeightStyled } from '@app/modules/login/components/atm.content-full-height';
import { useLogin } from '@app/modules/login/use-login.hook';
import { Button } from '@atomic/atm.button/button.component';
import { ButtonKind } from '@atomic/atm.button/button.style';
import { Card } from '@atomic/atm.card/card.component';
import { VSeparator } from '@atomic/atm.separator/separator.style';
import { H1, Text } from '@atomic/atm.typography';
import { FlashMessageDispatcherContext } from '@atomic/mol.flash-message/flash-message.provider';
import { FlashMessageTypes } from '@atomic/mol.flash-message/flash-message.style';
import { Form } from '@atomic/mol.form/form.component';
import { TextInput } from '@atomic/mol.input/text-input.component';
import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';

export const Login: React.FC = () => {
  const authContext = React.useContext(AuthContext);
  const flashMessageDispatcher = React.useContext(FlashMessageDispatcherContext);

  const { logIn, loading, error, data } = useLogin();
  const [loginText, setLoginText] = React.useState('');
  const [passwordText, setPasswordText] = React.useState('');

  const handleLoginSubmit = () => {
    logIn(loginText, passwordText);
  };

  React.useEffect(() => {
    if (!loading) {
      if (error) {
        flashMessageDispatcher.dispatchFlashMessage({
          text: `Usuário ou senha inválidos`,
          type: FlashMessageTypes.Alert,
        });
      } else if (data) {
        flashMessageDispatcher.dispatchFlashMessage({
          text: `Bem vindo, ${data}`,
          type: FlashMessageTypes.Success,
        });
      }
    }
  }, [loading, error, data, flashMessageDispatcher.dispatchFlashMessage]);

  return authContext.user ? (
    <Redirect to={AppPath.Todo.Base} />
  ) : (
    <Grid fluid>
      <Row middle='xs' center='xs'>
        <Col xs={12} md={6} lg={4}>
          <ContentFullHeightStyled>
            <Card>
              <H1>Bem vindo(a) a lista de TODOs</H1>
              <Text>Faça o login para começar</Text>
              <VSeparator />
              <Form onSubmit={handleLoginSubmit}>
                <TextInput
                  label='Login'
                  id='loginInput'
                  type='text'
                  onChange={setLoginText}
                  value={loginText}
                  dataTest='loginInput'
                />
                <VSeparator small />
                <TextInput
                  label='Senha'
                  id='loginPassword'
                  type='password'
                  onChange={setPasswordText}
                  value={passwordText}
                  dataTest='passwordInput'
                />
                <VSeparator small />
                <Button
                  onClick={handleLoginSubmit}
                  type='submit'
                  dataTest='submitButton'
                  kind={ButtonKind.RoundedLarge}
                  loading={loading}
                >
                  Entrar
                </Button>
              </Form>
            </Card>
          </ContentFullHeightStyled>
        </Col>
      </Row>
    </Grid>
  );
};
