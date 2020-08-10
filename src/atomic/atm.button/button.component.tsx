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
  dataTest?: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, kind, loading, type, children, dataTest }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <ButtonStyled kind={kind} type={type || 'button'} onClick={handleClick} loading={loading} data-test={dataTest}>
      <ButtonLoading loading={loading} type='spin' height={FontSize.Large} width={FontSize.Large} />
      <ButtonContent loading={loading}>{children}</ButtonContent>
    </ButtonStyled>
  );
};
