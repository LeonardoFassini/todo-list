import styled from 'styled-components';

interface ButtonContentProps {
  loading: boolean;
}

export const ButtonContent = styled.span.withConfig<ButtonContentProps>({
  shouldForwardProp: (prop, defaultValidatorFn) => !['loading'].includes(prop) && defaultValidatorFn(prop),
})`
  opacity: ${(props) => (props.loading ? 0 : 1)};
`;
