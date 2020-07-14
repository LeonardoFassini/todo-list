import * as React from 'react';
import { CardStyled, CardProps } from './card.style';

export const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return <CardStyled {...props}>{children}</CardStyled>;
};
