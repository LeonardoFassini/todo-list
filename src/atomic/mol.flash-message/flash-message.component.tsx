import { AnimationStyled } from '@atomic/atm.animation/animation.style';
import { Hbox } from '@atomic/atm.box/hbox.component';
import { Text } from '@atomic/atm.typography';
import { FlashMessageDispatcherContext } from '@atomic/mol.flash-message/flash-message.provider';
import { FlashMessageStyled, FlashMessageTypes } from '@atomic/mol.flash-message/flash-message.style';
import * as React from 'react';

const TIMEOUT = 3 * 1000;

export interface Message {
  text: string;
  type: FlashMessageTypes;
}

export const FlashMessage: React.FC = () => {
  const { message, visible, onDisableVisibility } = React.useContext(FlashMessageDispatcherContext);

  React.useEffect(() => {
    const visibleTimeout = window.setTimeout(() => {
      onDisableVisibility();
    }, TIMEOUT);

    return () => {
      window.clearTimeout(visibleTimeout);
    };
  });

  return (
    <AnimationStyled active={visible}>
      <FlashMessageStyled type={message?.type} visible={visible}>
        <Hbox>
          <Hbox.Item>
            <Text>{message?.text}</Text>
          </Hbox.Item>
        </Hbox>
      </FlashMessageStyled>
    </AnimationStyled>
  );
};
