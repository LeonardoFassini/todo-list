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

const flashMessageTypesToLightenColors = [
  { flashMessageType: FlashMessageTypes.Success, value: ColorFn(Colors.Success).lighten(2).string() },
  { flashMessageType: FlashMessageTypes.Warning, value: ColorFn(Colors.Warning).lighten(0.9).string() },
  { flashMessageType: FlashMessageTypes.Alert, value: ColorFn(Colors.Alert).lighten(1.3).string() },
];

const findMessageColor = (messageType: FlashMessageTypes) => {
  return flashMessageTypesToColors.find(
    (flashmessageTypeToColor) => flashmessageTypeToColor.flashMessageType === messageType,
  )?.value;
};

const findMessageLightenColor = (messageType: FlashMessageTypes) => {
  return flashMessageTypesToLightenColors.find(
    (flashmessageTypeToColor) => flashmessageTypeToColor.flashMessageType === messageType,
  )?.value;
};

interface FlashMessageStyledProps {
  type: FlashMessageTypes;
  visible: boolean;
}

export const FlashMessageStyled = styled.div<FlashMessageStyledProps>`
  background-color: ${(props) => findMessageLightenColor(props?.type)};
  border-color: ${(props) => findMessageColor(props?.type)};
  border-radius: ${Border.Radius};
  border-style: solid;
  border-width: ${Border.Width};
  bottom: ${Spacing.Small};
  display: flex;
  flex-direction: column;
  left: ${Spacing.Small};
  right: ${Spacing.Small};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  padding: ${Spacing.Small} ${Spacing.Medium};
  position: fixed;
  transition: opacity 0.4s ease-in-out;
  left: 50%;
  transform: translate(-50%, 0);
  width: calc(100vw - ${Spacing.Medium});
  z-index: 99;

  @media (min-width: ${flexboxBreakpoint}) {
    bottom: ${Spacing.Medium};
    left: 50%;
    width: 50%;
    bottom: ${Spacing.Medium};
    padding: ${Spacing.Small};
  }
  p {
    color: ${(props: FlashMessageStyledProps) => findMessageColor(props.type)};
  }
`;
