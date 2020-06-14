import { Border, Colors, Spacing } from '@atomic/atm.constants';
import * as ColorFn from 'color';
import styled from 'styled-components';

export enum FlashMessageTypes {
  Success = 'success',
  Warning = 'warning',
  Alert = 'alert',
}

const flexboxBreakpoint = '48em';

const flashMessageTypesToColors = [
  { flashMessageType: FlashMessageTypes.Success, value: Colors.Success },
  { flashMessageType: FlashMessageTypes.Warning, value: Colors.Warning },
  { flashMessageType: FlashMessageTypes.Alert, value: Colors.Alert },
];

const findMessageColor = (messageType: FlashMessageTypes) => {
  return flashMessageTypesToColors.find(
    (flashmessageTypeToColor) => flashmessageTypeToColor.flashMessageType === messageType,
  )?.value;
};

interface FlashMessageStyledProps {
  type: FlashMessageTypes;
  visible: boolean;
}

export const FlashMessageStyled = styled.div<FlashMessageStyledProps>`
  border-color: ${(props) => findMessageColor(props?.type)};
  border-style: solid;
  border-width: ${Border.Width};
  background-color: ${(props) => ColorFn(findMessageColor(props?.type)).lighten(2).string()};
  display: flex;
  transition: opacity 0.4s ease-in-out;
  position: fixed;
  z-index: 99;
  flex-direction: column;
  width: 100%;
  padding: ${Spacing.Medium};
  bottom: 0;
  opacity: ${(props) => (props.visible ? 1 : 0)};

  @media (min-width: ${flexboxBreakpoint}) {
    bottom: ${Spacing.Small};
    padding: ${Spacing.Small};
    width: 50%;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: ${Spacing.Medium};
  }
  p {
    color: ${(props: FlashMessageStyledProps) => findMessageColor(props.type)};
  }
`;
