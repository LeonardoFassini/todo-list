import styled from 'styled-components';

export const CheckboxHiddenStyled = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const CheckboxContainerStyled = styled.div`
  display: inline-block;
  vertical-align: middle;
`;
