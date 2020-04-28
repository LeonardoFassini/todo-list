import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppPath } from '../app/routes/routes-list';

export const Login: React.FC = () => {
  return (
    <>
      <h1>Você está no login!</h1>
      <Link to={AppPath.Todo.Base}>Redirecionar para o Todo</Link>
    </>
  );
};
