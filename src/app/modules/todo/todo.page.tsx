import { TodoListData, TodoListModel } from '@app/models/todo-list.model';
import { Hbox } from '@atomic/atm.box/hbox.component';
import { Button } from '@atomic/atm.button/button.component';
import { ButtonKind } from '@atomic/atm.button/button.style';
import { Card } from '@atomic/atm.card/card.component';
import { VSeparator } from '@atomic/atm.separator/separator.style';
import { H2 } from '@atomic/atm.typography';
import { FlashMessageDispatcherContext } from '@atomic/mol.flash-message/flash-message.provider';
import { FlashMessageTypes } from '@atomic/mol.flash-message/flash-message.style';
import { LoadingState } from '@atomic/mol.loading-state/loading-state.component';
import axios from 'axios';
import * as React from 'react';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';

import { AppHeader } from '../app/app-header/app-header.component';
import { CreateTodoForm } from './components/mol.create-todo-form/create-todo-form.component';
import { TodoItem } from './components/mol.todo-item/todo-item.component';

export const Todo: React.FC = () => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<TodoListModel>();
  const [fetchError, setFetchError] = React.useState();
  const [addError, setAddError] = React.useState();
  const [removeError, setRemoveError] = React.useState();
  const [checkError, setCheckError] = React.useState();
  const [creating, setCreating] = React.useState(false);
  const [newTodoName, setNewTodoName] = React.useState('');
  const [newTodoDescription, setNewTodoDescription] = React.useState('');

  const flashDispatcher = React.useContext(FlashMessageDispatcherContext);

  React.useEffect(() => {
    axios
      .get<TodoListModel>(`/todos/list`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        if (err.request) {
          flashDispatcher.dispatchFlashMessage({ text: err.request.statusText, type: FlashMessageTypes.Alert });
          setFetchError(err);
        }
      });
    setLoading(false);
  }, []);

  const handleTodoItemClick = async (id: number) => {
    setLoading(true);
    try {
      await axios.post<TodoListModel>(`/todos/check/${id}`).then((response) => {
        setData(response.data);
        flashDispatcher.dispatchFlashMessage({ text: 'Adicionado com sucesso', type: FlashMessageTypes.Success });
      });
    } catch (err) {
      flashDispatcher.dispatchFlashMessage({ text: err.request.statusText, type: FlashMessageTypes.Alert });
      setCheckError(err);
    }
    setLoading(false);
  };

  const handleTodoAddClick = async () => {
    setLoading(true);
    if (!data?.list?.find((todo) => todo.name === newTodoName)) {
      const newTodo: TodoListData = { name: newTodoName, description: newTodoDescription, done: false };
      try {
        await axios.post<TodoListModel>(`/todos/add`, newTodo).then((response) => {
          setData(response.data);
          flashDispatcher.dispatchFlashMessage({ text: 'Adicionado com sucesso', type: FlashMessageTypes.Success });
        });
        setNewTodoName('');
        setNewTodoDescription('');
        setCreating(false);
      } catch (err) {
        flashDispatcher.dispatchFlashMessage({ text: err.request.statusText, type: FlashMessageTypes.Alert });
        setAddError(err);
      }
    } else {
      flashDispatcher.dispatchFlashMessage({
        text: 'Esse todo já existe. Tente outro nome ou reuse o existente!',
        type: FlashMessageTypes.Warning,
      });
    }
    setLoading(false);
  };

  const handleCancelTodoClick = () => {
    setNewTodoName('');
    setNewTodoDescription('');
    setCreating(false);
  };

  const handleDelete = async (id: number) => {
    setLoading(true);
    try {
      await axios.post(`/todos/remove/${id}`).then((response) => {
        setData(response.data);
        flashDispatcher.dispatchFlashMessage({ text: 'Adicionado com sucesso', type: FlashMessageTypes.Success });
      });
    } catch (err) {
      flashDispatcher.dispatchFlashMessage({ text: err.request.statusText, type: FlashMessageTypes.Alert });
      setRemoveError(err);
    }
    setLoading(false);
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
                  <Button kind={ButtonKind.Rounded} onClick={() => setCreating(true)} dataTest='createTodo'>
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
            <LoadingState data={!!data} loading={loading} error={fetchError || addError || removeError || checkError}>
              <LoadingState.Error>
                <Card bordered>
                  <H2>Ocorreu um erro.</H2>
                </Card>
              </LoadingState.Error>
              <LoadingState.NoData>
                <Card bordered>
                  <H2>Nenhum dado a ser mostrado</H2>
                </Card>
              </LoadingState.NoData>
              <LoadingState.Loading>
                <Card bordered>
                  <H2>Carregando...</H2>
                </Card>
              </LoadingState.Loading>
              <Card bordered noGutter>
                {/* <TodoSearch /> */}
                {data?.list?.map((todo) => (
                  <TodoItem
                    onClick={() => handleTodoItemClick(todo.id)}
                    onDelete={() => handleDelete(todo.id)}
                    name={todo.name}
                    description={todo.description}
                    checked={todo.done}
                    key={todo.name}
                  />
                ))}
              </Card>
            </LoadingState>
          </Col>
        </Row>
      </Grid>
    </>
  );
};
