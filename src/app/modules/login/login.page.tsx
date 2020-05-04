import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppPath } from '../app/routes/routes-list';
import { H1 } from '@atomic/atm.typography';
import { Card } from '@atomic/atm.card/card.component';

export const Login: React.FC = () => {
  return (
    <>
      <Card>
        <H1>Você está no login!</H1>
        <Link to={AppPath.Todo.Base}>Redirecionar para o Todo</Link>
      </Card>
    </>
  );
};
