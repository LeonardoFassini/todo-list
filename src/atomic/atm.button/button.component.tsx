import styled from 'styled-components';
import * as React from 'react';
import { ButtonStyled, ButtonKind } from '@atomic/atm.button/button.style';

interface ButtonProps {
  type?: 'submit' | 'button';
  onClick?: () => void;
  kind: ButtonKind;
}

export const Button: React.FC<ButtonProps> = (props) => (
  <ButtonStyled kind={props.kind} type={props.type || 'button'} onClick={props.onClick}>
    {props.children}
  </ButtonStyled>
);
