import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

interface AnimationProps {
  active: boolean;
}

export const AnimationStyled = styled.div`
  animation: ${(props: AnimationProps) => (props.active ? fadeIn : fadeOut)} 0.4s ease-in-out;
`;
