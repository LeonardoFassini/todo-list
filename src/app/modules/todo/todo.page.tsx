import * as React from 'react';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';

import { AppHeader } from '../app/app-header/app-header.component';
import { TodoContainer, TodoItem } from './components/todo.component';

interface Todo {
  name: string;
  description: string;
  id: string;
  checked: boolean;
}

const initialTodo: Todo[] = [
  { name: 'a', description: 'im an a', id: 'a', checked: false },
  { name: 'b', description: 'im an b', id: 'b', checked: false },
];

export const Todo: React.FC = () => {
  const [todos, setTodos] = React.useState<Todo[]>(initialTodo);

  const handleTodoItemClick = (id: string, checked: boolean) => {
    const todosCpy = [...todos];
    todosCpy.find((todo) => todo.id === id).checked = checked;
    setTodos(todosCpy);
  };

  return (
    <>
      <AppHeader />
      <Grid fluid>
        <Row center='xs'>
          <Col xs={12} md={6}>
            <TodoContainer>
              {/* <TodoSearch /> */}
              {todos.map((todo) => (
                <TodoItem
                  onClick={(checked: boolean) => handleTodoItemClick(todo.id, checked)}
                  name={todo.name}
                  description={todo.description}
                  id={todo.id}
                  checked={todo.checked}
                  key={todo.id}
                />
              ))}
            </TodoContainer>
          </Col>
        </Row>
      </Grid>
    </>
  );
};
