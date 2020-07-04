import styled from 'styled-components';
import { FontFamily, FontSize, Colors } from '@atomic/atm.constants';

export const H1 = styled.h1`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Large};
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

export const TextSecondary = styled.p`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XSmall};
  color: ${Colors.LightGray};
  margin: 0;
  padding: 0;
`;

export const H2 = styled.h2`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Medium};
  color: ${Colors.Secondary};
  margin: 0;
`;
