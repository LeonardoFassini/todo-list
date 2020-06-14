import styled from 'styled-components';

interface ButtonContentProps {
  loading: boolean;
}

export const ButtonContent = styled.span<ButtonContentProps>`
  opacity: ${(props) => (props.loading ? 0 : 1)};
`;
