import styled from 'styled-components';
import { FontFamily, FontSize, Colors } from '@atomic/atm.constants';

export const H1 = styled.h1`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Medium};
  color: ${Colors.Secondary};
  margin: 0;
`;

export const Text = styled.p`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Small};
  color: ${Colors.DarkGray};
  margin: 0;
  padding: 0;
`;
