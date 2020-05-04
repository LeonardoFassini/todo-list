import { ContainerStyled } from '@atomic/atm.container/container.style';
import * as React from 'react';

export const Container: React.FC = (props) => {
  return <ContainerStyled>{props.children}</ContainerStyled>;
};
