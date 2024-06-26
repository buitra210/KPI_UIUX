import { Box, Button } from "@mui/material";
import { log } from "console";
import React from "react";
import TodoItem from "src/views/KPIManage/AddKPI/AddTask/TodoList/TodoItem";
import { Todo1 } from "src/views/KPIManage/AddKPI/AddTask/TodoList/TodoList";

export default function List({
  todolist,
  updateTodo,
  onDeleteClick,
  updateIsCompleted,
}: //   onEditClick,
{
  todolist: Todo1[];
  updateIsCompleted: (todoId: string) => void;
  onDeleteClick: (id: string) => void;
  updateTodo: (todoId: string, name: string) => void;

  //onEditClick: (id: string) => void;
}) {
  return (
    <Box>
      {todolist.map((todo) => {
        return (
          <TodoItem
            todoId={todo.id}
            updateIsCompleted={updateIsCompleted}
            updateTodo={updateTodo}
            key={todo.id}
            name={todo.name}
            isCompleted={todo.isCompleted}
            onDeleteClick={() => onDeleteClick(todo.id)}
            // onEditClick={() => onEditClick(todo.id)}
          />
        );
      })}
      <br />
    </Box>
  );
}
