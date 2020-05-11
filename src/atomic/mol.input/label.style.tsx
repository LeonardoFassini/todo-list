import styled from 'styled-components';
import { Colors, FontSize, FontFamily } from '@atomic/atm.constants';

export const LabelStyled = styled.label`
  margin: 0;
  padding: 0;
  display: block;
  color: ${Colors.Secondary};
  font-size: ${FontSize.XSmall};
  font-family: ${FontFamily.Primary};
`;
