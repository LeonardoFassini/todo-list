import styled from 'styled-components';
import { Border, Colors } from '@atomic/atm.constants';

export const CardStyled = styled.div`
  border-style: solid;
  border-width: ${Border.Width};
  border-color: ${Colors.LightGray};
  border-radius: ${Border.Radius};
`;
