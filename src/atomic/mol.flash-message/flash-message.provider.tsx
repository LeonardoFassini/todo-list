import * as React from 'react';
import { Message } from '@atomic/mol.flash-message/flash-message.component';

interface FlashMessageValues {
  dispatchFlashMessage: (messageToDispatch: Message) => void;
  onDisableVisibility: () => void;
  message: Message;
  visible: boolean;
}

export const FlashMessageDispatcherContext = React.createContext<FlashMessageValues>(null);

export const FlashMessageProvider: React.FC = (props) => {
  const [message, setMessage] = React.useState<Message>(null);
  const [visible, setVisible] = React.useState(false);

  const dispatchFlashMessage = React.useCallback((message: Message) => {
    setMessage(message);
    setVisible(true);
  }, []);

  return (
    <FlashMessageDispatcherContext.Provider
      value={{
        dispatchFlashMessage,
        message,
        visible,
        onDisableVisibility: () => setVisible(false),
      }}
    >
      {props.children}
    </FlashMessageDispatcherContext.Provider>
  );
};
