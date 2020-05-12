import * as React from 'react';
import { FlashMessageDispatcherContext } from '@atomic/mol.flash-message/flash-message.provider';
import { FlashMessageStyled } from '@atomic/mol.flash-message/flash-message.style';
import { Text } from '@atomic/atm.typography';
import { AnimationStyled } from '@atomic/atm.animation/animation.style';
import { Hbox } from '@atomic/atm.box/hbox.component';

export const FlashMessage: React.FC = (props) => {
  const { message, active } = React.useContext(FlashMessageDispatcherContext);

  return (
    <AnimationStyled active={active}>
      {message && (
        <FlashMessageStyled type={message?.type} active={active}>
          <Hbox>
            <Hbox.Item></Hbox.Item>
            <Hbox.Separator />
            <Hbox.Item>
              <Text>{message?.text}</Text>
            </Hbox.Item>
          </Hbox>
        </FlashMessageStyled>
      )}
    </AnimationStyled>
  );
};
