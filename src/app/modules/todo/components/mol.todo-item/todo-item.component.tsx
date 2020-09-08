import { Hbox } from '@atomic/atm.box/hbox.component';
import { Checkbox } from '@atomic/atm.checkbox/checkbox.component';
import { Text, TextSecondary } from '@atomic/atm.typography';
import * as React from 'react';

import { TodoItemStyled } from './todo-item.style';
import { FaIcons } from '@app/components/icons/fa-icons';
import { Clickable } from '@atomic/atm.clickable/clickable.component';

interface TodoItemProps {
  name: string;
  description: string;
  checked: boolean;
  onClick?: () => void;
  onDelete?: () => void;
}

export const TodoItem: React.FC<TodoItemProps> = (props) => {
  return (
    <TodoItemStyled data-test='todoItem'>
      <Hbox>
        <Hbox.Item noGrow vAlign='center'>
          <Clickable>
            <Checkbox checked={props.checked} onClick={props.onClick} label={props.name} />
          </Clickable>
        </Hbox.Item>
        <Hbox.Separator />
        <Hbox.Item vAlign='center'>
          <Text>{props.name}</Text>
          <TextSecondary>{props.description}</TextSecondary>
        </Hbox.Item>
        <Hbox.Item hAlign='flex-end' vAlign='center'>
          <Clickable>
            <FaIcons.Close onClick={props.onDelete} data-test='deleteTodo' />
          </Clickable>
        </Hbox.Item>
      </Hbox>
    </TodoItemStyled>
  );
};
