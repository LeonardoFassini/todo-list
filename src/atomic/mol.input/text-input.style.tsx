import { Border, Colors, Spacing } from '@atomic/atm.constants';
import styled from 'styled-components';

interface TextInputStyledProps {
  checked: boolean;
  focused: boolean;
}

export const TextInputStyled = styled.input`
  border-radius: ${Border.Radius};
  border-style: solid;
  border-width: 1px;
  border-color: ${(props: TextInputStyledProps) => (props.focused ? Colors.Primary : Colors.LightGray)};
  width: 100%;
  :focus {
    outline: none;
  }
  padding: ${Spacing.Small};
`;
