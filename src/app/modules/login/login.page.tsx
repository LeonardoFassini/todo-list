import { ContentFullHeightStyled } from '@app/modules/login/components/atm.content-full-height';
import { Card } from '@atomic/atm.card/card.component';
import { VSeparator } from '@atomic/atm.separator/separator.style';
import { H1, Text } from '@atomic/atm.typography';
import { TextInput } from '@atomic/mol.input/text-input.component';
import * as React from 'react';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { Form } from '@atomic/mol.form/form.component';
import { Button } from '@atomic/atm.button/button.component';
import { ButtonKind } from '@atomic/atm.button/button.style';

export const Login: React.FC = () => {
  const [loginText, setLoginText] = React.useState('');
  const [passwordText, setPasswordText] = React.useState('');

  const handleSubmit = () => {
    console.log('submit', 'submit');
  };

  return (
    <Grid fluid>
      <Row middle='xs' center='xs'>
        <Col xs={12} md={6} lg={4}>
          <ContentFullHeightStyled>
            <Card>
              <H1>Bem vindo(a) a lista de TODOs</H1>
              <Text>Faça o login para começar</Text>
              <VSeparator />
              <Form onSubmit={handleSubmit}>
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
