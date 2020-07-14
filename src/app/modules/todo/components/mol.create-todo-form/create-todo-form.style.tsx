import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  0% {
    opacity: 0;
    transform: translateX(20%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

interface AnimationProps {
  active: boolean;
}

export const CreateTodoStyled = styled.div`
  animation: ${(props: AnimationProps) => props.active && appear} 0.4s ease-in-out;
`;
