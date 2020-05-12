import { FlashMessageTypes } from '@atomic/mol.flash-message/flash-message.style';
import * as React from 'react';

interface FlashMessageValues {
  dispatchFlashMessage: (messageToDispatch: DispatcherMessageType) => void;
  closeFlashMessage: () => void;
  active: boolean;
  message: DispatcherMessageType;
}

export interface DispatcherMessageType {
  text: string;
  type: FlashMessageTypes;
}

const TIMEOUT = 5 * 1000;
const ANIMATION_DURATION = 400;

export const FlashMessageDispatcherContext = React.createContext<FlashMessageValues>(null);

export const FlashMessageProvider: React.FC = (props) => {
  const [active, setActive] = React.useState(false);
  const [message, setMessage] = React.useState<DispatcherMessageType>(null);
  const [activeTimeout, setActiveTimeout] = React.useState<number>(null);
  const [messageTimeout, setMessageTimeout] = React.useState<number>(null);

  const dispatchMessage = (message: DispatcherMessageType) => {
    window.clearTimeout(activeTimeout);
    window.clearTimeout(messageTimeout);

    if (active) {
      setActive(false);
      window.setTimeout(() => {
        setMessage(message);
        setActive(true);
      }, ANIMATION_DURATION);
    } else {
      setMessage(message);
      setActive(true);
    }

    setActiveTimeout(
      window.setTimeout(() => {
        setActive(false);
      }, TIMEOUT),
    );

    setMessageTimeout(
      window.setTimeout(() => {
        setMessage(null);
      }, TIMEOUT + ANIMATION_DURATION),
    );
  };

  return (
    <FlashMessageDispatcherContext.Provider
      value={{ dispatchFlashMessage: dispatchMessage, active, message, closeFlashMessage: () => setActive(false) }}
    >
      {props.children}
    </FlashMessageDispatcherContext.Provider>
  );
};
