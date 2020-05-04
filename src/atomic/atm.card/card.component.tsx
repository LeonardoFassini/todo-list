import * as React from 'react';
import { CardStyled } from './card.style';

export const Card: React.FC = (props) => {
  return <CardStyled>{props.children}</CardStyled>;
};
