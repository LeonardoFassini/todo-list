export interface TodoListModel {
  list: TodoListData[];
}

export interface TodoListData {
  id?: number;
  name: string;
  done: boolean;
  description?: string;
}
