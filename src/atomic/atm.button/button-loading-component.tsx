import ReactLoading from 'react-loading';
import styled from 'styled-components';

interface ButtonLoadingProps {
  loading: boolean;
}

export const ButtonLoading = styled(ReactLoading)<ButtonLoadingProps>`
  display: ${(props) => (props.loading ? 'inline-block' : 'none')};
  position: absolute;
`;
