import { Card } from '@atomic/atm.card/card.component';
import { VSeparator } from '@atomic/atm.separator/separator.style';
import { H2 } from '@atomic/atm.typography';
import * as React from 'react';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';

import { AppHeader } from '../app/app-header/app-header.component';
import { TodoItem } from './components/mol.todo-item/todo-item.component';
import { Hbox } from '@atomic/atm.box/hbox.component';
import { Button } from '@atomic/atm.button/button.component';
import { ButtonKind } from '@atomic/atm.button/button.style';
import { TextInput } from '@atomic/mol.input/text-input.component';
import { CreateTodoForm } from './components/mol.create-todo-form/create-todo-form.component';

interface Todo {
  name: string;
  description: string;
  checked: boolean;
}

const initialTodo: Todo[] = [
  { name: 'a', description: 'im an a', checked: false },
  { name: 'b', description: 'im an b', checked: false },
];

export const Todo: React.FC = () => {
  const [todos, setTodos] = React.useState<Todo[]>(initialTodo);
  const [creating, setCreating] = React.useState(false);
  const [newTodoName, setNewTodoName] = React.useState('');
  const [newTodoDescription, setNewTodoDescription] = React.useState('');

  const handleTodoItemClick = (name: string, checked: boolean) => {
    const todosCpy = [...todos];
    todosCpy.find((todo) => todo.name === name).checked = checked;
    setTodos(todosCpy);
  };

  const handleTodoAddClick = () => {
    if (!todos.find((todo) => todo.name === newTodoName)) {
      const newTodo: Todo = { name: newTodoName, description: newTodoDescription, checked: false };
      const todosCpy = [...todos, newTodo];
      setTodos(todosCpy);
      setNewTodoName('');
      setNewTodoDescription('');
      setCreating(false);
    }
  };

  const handleCancelTodoClick = () => {
    setNewTodoName('');
    setNewTodoDescription('');
    setCreating(false);
  };

  const handleDelete = (name: string) => {
    const todosCpy = [...todos];
    const filteredTodos = todosCpy.filter((todo) => todo.name !== name);
    setTodos(filteredTodos);
  };

  return (
    <>
      <AppHeader />
      <Grid fluid>
        <Row center='xs' middle='xs'>
          <Col xs={12} md={6}>
            <VSeparator />
            <Hbox>
              <Hbox.Item>
                <H2>Tarefas existentes</H2>
              </Hbox.Item>
              {!creating && (
                <Hbox.Item noGrow>
                  <Button kind={ButtonKind.Rounded} onClick={() => setCreating(true)}>
                    Criar nova tarefa
                  </Button>
                </Hbox.Item>
              )}
              {creating && (
                <CreateTodoForm
                  active={creating}
                  currentDescription={newTodoDescription}
                  currentName={newTodoName}
                  onDescriptionChange={(newDescription) => setNewTodoDescription(newDescription)}
                  onNameChange={(newName: string) => setNewTodoName(newName)}
                  onSubmit={handleTodoAddClick}
                  onCancel={handleCancelTodoClick}
                />
              )}
            </Hbox>
            <VSeparator small />
            <Card bordered noGutter>
              {/* <TodoSearch /> */}
              {todos.map((todo) => (
                <TodoItem
                  onClick={(checked: boolean) => handleTodoItemClick(todo.name, checked)}
                  onDelete={() => handleDelete(todo.name)}
                  name={todo.name}
                  description={todo.description}
                  checked={todo.checked}
                  key={todo.name}
                />
              ))}
            </Card>
          </Col>
        </Row>
      </Grid>
    </>
  );
};
