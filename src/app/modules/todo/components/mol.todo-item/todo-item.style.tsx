import { Border, Colors, Spacing } from '@atomic/atm.constants';
import * as Color from 'color';
import styled from 'styled-components';

export const TodoItemStyled = styled.div`
  padding: ${Spacing.Small} ${Spacing.Medium};
  background: ${Colors.White};
  border-radius: ${Border.Radius};

  :hover {
    background: ${Color(Colors.XLightGray).lighten(0.07).toString()};
  }
`;

export const TodoContainerStyled = styled.div`
  border: 1px solid ${Colors.LightGray};
`;
