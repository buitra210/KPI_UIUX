import { Box, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
// import { Button } from 'antd';
// import { v4 as uuidv4 } from "uuid";
import FunctionsIcon from "@mui/icons-material/Functions";
import Icon from "@mui/material/Icon";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { CreatNewTodo } from "src/components/Task/CreatNewTodo";
import List from "src/components/Task/List";
export type Todo1 = { id: string; name: string; isCompleted: boolean };

export default function TodoList() {
  const [todoList, setTodoList] = useState<Todo1[]>([]);
  const [newTodoString, setNewTodoString] = useState("");
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(0);
  const onNewToDoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoString(e.target.value);
  };

  const addClick = () => {
    const newTodoItem: Todo1 = {
      id: uuidv4(),
      name: newTodoString,
      isCompleted: false,
    };
    setTodoList([newTodoItem, ...todoList]); //cap nhat cho TodoList
    setNewTodoString("");
    setCount(count + 1);
  };
  const updateIsCompleted = (todoId: string) => {
    setTodoList((prevState) => {
      return prevState.map((todo) => {
        if (todo.id == todoId) {
          return { ...todo, isCompleted: !todo.isCompleted }; //hien trang thai hoan thanh doan nguoc
        }
        return todo;
      });
    });
  };

  const updateTodo = (todoId: string, name: string) => {
    setTodoList((prevState) => {
      return prevState.map((todo) => {
        if (todo.id == todoId) {
          return { ...todo, name: name };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (todoId: string) => {
    setTodoList(todoList.filter((todo) => todo.id !== todoId));
    setCount(count - 1);
  };

  return (
    <Box>
      <CreatNewTodo
        newTodoString={newTodoString}
        onNewToDoChange={onNewToDoChange}
        onAddingBtnClick={addClick}
      />
      <List
        todolist={todoList}
        updateIsCompleted={updateIsCompleted}
        onDeleteClick={deleteTodo}
        updateTodo={updateTodo}
      />
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Icon>
          <FunctionsIcon />
        </Icon>
        <Typography variant="body1">
          <Typography component={"span"}>alo</Typography> {count}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Icon>
          <TaskAltIcon />
        </Icon>
        <Typography>{count}</Typography>
      </Box>
      <Box component={"a"}>aaa</Box>
    </Box>
  );
}
