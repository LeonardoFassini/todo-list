import { Spacing } from '@atomic/atm.constants';
import styled from 'styled-components';

interface VSeparatorProps {
  small?: boolean;
}

export const VSeparator = styled.p`
  padding: ${(props: VSeparatorProps) => (props.small ? Spacing.Small : Spacing.Medium)};
  display: block;
  margin: 0;
`;
