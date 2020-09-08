import * as React from 'react';
import { Hbox } from '@atomic/atm.box/hbox.component';
import { TextInput } from '@atomic/mol.input/text-input.component';
import { Button } from '@atomic/atm.button/button.component';
import { ButtonKind } from '@atomic/atm.button/button.style';
import { CreateTodoStyled } from './create-todo-form.style';

interface CreateTodoFormProps {
  active: boolean;
  currentName: string;
  currentDescription: string;
  onSubmit: () => void;
  onNameChange: (newName: string) => void;
  onDescriptionChange: (newDescription: string) => void;
  onCancel: () => void;
}

export const CreateTodoForm: React.FC<CreateTodoFormProps> = (props) => {
  return (
    <CreateTodoStyled active={props.active}>
      <Hbox>
        <Hbox.Item>
          <TextInput
            onChange={(data: string) => props.onNameChange(data)}
            value={props.currentName}
            type='text'
            id='todoName'
            label='Nome do todo'
            dataTest='todoName'
          />
        </Hbox.Item>
        <Hbox.Separator />
        <Hbox.Item>
          <TextInput
            onChange={(data: string) => props.onDescriptionChange(data)}
            value={props.currentDescription}
            type='text'
            id='todoDescription'
            label='Descrição'
            dataTest='todoDescription'
          />
        </Hbox.Item>
        <Hbox.Separator />
        <Hbox.Item vAlign='flex-end'>
          <Button kind={ButtonKind.Rounded} onClick={props.onCancel} dataTest='cancelTodo'>
            Cancelar
          </Button>
        </Hbox.Item>
        <Hbox.Separator />
        <Hbox.Item vAlign='flex-end'>
          <Button kind={ButtonKind.Rounded} onClick={props.onSubmit} dataTest='saveTodo'>
            Salvar
          </Button>
        </Hbox.Item>
      </Hbox>
    </CreateTodoStyled>
  );
};
