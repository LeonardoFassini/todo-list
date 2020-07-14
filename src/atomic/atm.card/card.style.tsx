import styled from 'styled-components';
import { Border, Colors, Spacing, BoxShadow } from '@atomic/atm.constants';

export interface CardProps {
  noGutter?: boolean;
  bordered?: boolean;
}

export const CardStyled = styled.div<CardProps>`
  border: ${(props) => (props.bordered ? `${Border.Width} solid ${Border.Color}` : 'none')};
  border-radius: ${Border.Radius};
  padding: ${(props) => (props.noGutter ? 0 : Spacing.Medium)};
  background-color: ${Colors.White};
  box-shadow: ${BoxShadow.Depht2};
`;
