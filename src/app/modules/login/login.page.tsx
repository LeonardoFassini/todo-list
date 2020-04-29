import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppPath } from '../app/routes/routes-list';
import { H1 } from '@atomic/atm.typography';

export const Login: React.FC = () => {
  return (
    <>
      <H1>Você está no login!</H1>
      <Link to={AppPath.Todo.Base}>Redirecionar para o Todo</Link>
    </>
  );
};
