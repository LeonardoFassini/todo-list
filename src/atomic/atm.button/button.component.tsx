import { ButtonContent } from '@atomic/atm.button/button-content.component';
import { ButtonLoading } from '@atomic/atm.button/button-loading-component';
import { ButtonKind, ButtonStyled } from '@atomic/atm.button/button.style';
import { FontSize } from '@atomic/atm.constants';
import * as React from 'react';

interface ButtonProps {
  onClick?: () => void;
  kind: ButtonKind;
  loading?: boolean;
  type?: 'submit' | 'button';
}

export const Button: React.FC<ButtonProps> = ({ onClick, kind, loading, type, children }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <ButtonStyled kind={kind} type={type || 'button'} onClick={handleClick} loading={loading}>
      <ButtonLoading loading={loading} type='spin' height={FontSize.Large} width={FontSize.Large} />
      <ButtonContent loading={loading}>{children}</ButtonContent>
    </ButtonStyled>
  );
};
