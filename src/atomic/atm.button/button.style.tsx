import styled from 'styled-components';
import * as React from 'react';
import { FontSize, Spacing, Colors, Border } from '@atomic/atm.constants';

export enum ButtonKind {
  Rounded = 'rounded',
  Rectangle = 'rectangle',
  RoundedLarge = 'roundedLarge',
}

interface ButtonStyledProps {
  kind: ButtonKind;
}

export const ButtonStyled = styled.button`
  line-height: ${FontSize.Large};
  padding: ${Spacing.Small};
  background-color: ${Colors.Primary};
  color: ${Colors.White};
  ${(props: ButtonStyledProps) => props.kind === ButtonKind.Rounded && `border-radius:${Border.Radius}`};
  ${(props: ButtonStyledProps) => props.kind === ButtonKind.RoundedLarge && `border-radius:${Border.RadiusLarge}`};
  width: 100%;
`;
