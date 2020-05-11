import styled from 'styled-components';
import { Border, Colors, Spacing } from '@atomic/atm.constants';

interface CardProps {
  noGutter?: boolean;
}

export const CardStyled = styled.div`
  border-style: solid;
  border-width: ${Border.Width};
  border-color: ${Colors.LightGray};
  border-radius: ${Border.Radius};
  padding: ${(props: CardProps) => (props.noGutter ? 0 : Spacing.Medium)};
`;
