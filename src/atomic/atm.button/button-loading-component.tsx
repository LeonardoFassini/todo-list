import ReactLoading from 'react-loading';
import styled from 'styled-components';

interface ButtonLoadingProps {
  loading: boolean;
}

export const ButtonLoading = styled(ReactLoading).withConfig<ButtonLoadingProps>({
  shouldForwardProp: (prop, defaultValidatorFn) => !['loading'].includes(prop) && defaultValidatorFn(prop),
})`
  display: ${(props) => (props.loading ? 'inline-block' : 'none')};
  position: absolute;
`;
