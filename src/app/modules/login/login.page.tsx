import { AppPath } from '@app/modules/app/routes/routes-list';
import { ContentFullHeightStyled } from '@app/modules/login/components/atm.content-full-height';
import { useLogin } from '@app/modules/login/use-login.hook';
import { Button } from '@atomic/atm.button/button.component';
import { ButtonKind } from '@atomic/atm.button/button.style';
import { Card } from '@atomic/atm.card/card.component';
import { VSeparator } from '@atomic/atm.separator/separator.style';
import { H1, Text } from '@atomic/atm.typography';
import { Form } from '@atomic/mol.form/form.component';
import { TextInput } from '@atomic/mol.input/text-input.component';
import * as React from 'react';
import { useHistory, Redirect } from 'react-router';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { AuthContext } from '@app/modules/app/auth.provider';

export const Login: React.FC = () => {
  const authContext = React.useContext(AuthContext);
  const history = useHistory();
  const { loading, logIn } = useLogin();
  const [loginText, setLoginText] = React.useState('');
  const [passwordText, setPasswordText] = React.useState('');

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    logIn(loginText, passwordText);
  };

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
                <Row>
                  <Col xs={12}>
                    <TextInput label='Login' id='loginInput' type='text' onChange={setLoginText} value={loginText} />
                  </Col>
                </Row>
                <VSeparator small />
                <Row>
                  <Col xs={12}>
                    <TextInput
                      label='Senha'
                      id='loginPassword'
                      type='password'
                      onChange={setPasswordText}
                      value={passwordText}
                    />
                  </Col>
                </Row>
                <VSeparator small />
                <Row>
                  <Col xs={12}>
                    <Button type='submit' kind={ButtonKind.RoundedLarge}>
                      Entrar
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card>
          </ContentFullHeightStyled>
        </Col>
      </Row>
    </Grid>
  );
};
