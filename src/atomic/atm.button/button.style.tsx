import styled from 'styled-components';
import { FontSize, Spacing, Colors, Border } from '@atomic/atm.constants';

export enum ButtonKind {
  Rounded = 'rounded',
  Rectangle = 'rectangle',
  RoundedLarge = 'roundedLarge',
}

interface ButtonStyledProps {
  kind: ButtonKind;
  loading: boolean;
}

export const ButtonStyled = styled.button.withConfig<ButtonStyledProps>({
  shouldForwardProp: (prop, defaultValidatorFn) => !['loading'].includes(prop) && defaultValidatorFn(prop),
})`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: ${FontSize.Large};
  padding: ${Spacing.Small};
  border: none;
  background-color: ${Colors.Primary};
  color: ${Colors.White};
  ${(props) => props.kind === ButtonKind.Rounded && `border-radius:${Border.Radius}`};
  ${(props) => props.kind === ButtonKind.RoundedLarge && `border-radius:${Border.RadiusLarge}`};
  width: 100%;

  cursor: pointer;
`;
