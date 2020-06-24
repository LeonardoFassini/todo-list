import { Hbox } from '@atomic/atm.box/hbox.component';
import { Text, TextSecondary } from '@atomic/atm.typography';
import * as React from 'react';

import { TodoItemStyled, TodoContainerStyled } from './todo.style';
import { Checkbox } from '@atomic/atm.checkbox/checkbox.component';

interface TodoItemProps {
  name: string;
  description: string;
  id: string;
  checked: boolean;
  onClick?: (checked: boolean) => void;
}

export const TodoItem: React.FC<TodoItemProps> = (props) => {
  return (
    <TodoItemStyled>
      <Hbox>
        <Hbox.Item noGrow vAlign='center'>
          <Checkbox checked={props.checked} onClick={props.onClick} label={props.name} />
        </Hbox.Item>
        <Hbox.Separator />
        <Hbox.Item vAlign='center'>
          <Text>{props.name}</Text>
          <TextSecondary>{props.description}</TextSecondary>
        </Hbox.Item>
      </Hbox>
    </TodoItemStyled>
  );
};

export const TodoContainer: React.FC = (props) => {
  return <TodoContainerStyled>{props.children}</TodoContainerStyled>;
};
