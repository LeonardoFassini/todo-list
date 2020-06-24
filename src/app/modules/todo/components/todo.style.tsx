import styled from 'styled-components';
import { Spacing, Colors, BoxShadow } from '@atomic/atm.constants';

export const TodoItemStyled = styled.div`
  padding: ${Spacing.Small} ${Spacing.Medium};
  background: ${Colors.White};

  :hover {
    box-shadow: ${BoxShadow.Depht2};
    zoom: 1.2;
  }
`;

export const TodoContainerStyled = styled.div`
  border: 1px solid ${Colors.LightGray};
`;
