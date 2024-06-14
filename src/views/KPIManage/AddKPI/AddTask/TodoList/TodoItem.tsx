import { Button, IconButton } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import DeleteIcon from "@mui/icons-material/Delete";
interface TodoItemProps {
  todoId: string;
  name: string;
  isCompleted: boolean;
  updateIsCompleted: (todoId: string) => void;
  onDeleteClick: (id: string) => void;
  updateTodo: (todoId: string, name: string) => void;
}
interface TodoState {
  name: string;
  isEditing: boolean;
}
const HIcon = ({
  todoId,
  isCompleted,
  updateIsCompleted,
}: {
  todoId: string;
  isCompleted: boolean;
  updateIsCompleted: (todoId: string) => void;
}) => {
  return (
    <div onClick={() => updateIsCompleted(todoId)}>
      {isCompleted ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
    </div>
  );
};

export default function TodoItem({
  todoId,
  name,
  isCompleted,
  updateIsCompleted,
  onDeleteClick,
  updateTodo,
}: TodoItemProps) {
  const handleInputChange = (value: string) => {
    updateTodo(todoId, value);
    // dispatch({ type: 'SAVE', payload: newValue });
  };

  return (
    <Button
      style={{ justifyContent: "space-between", width: "50vw" }}
      startIcon={
        <HIcon
          todoId={todoId}
          isCompleted={isCompleted}
          updateIsCompleted={updateIsCompleted}
        />
      }
      endIcon={
        <>
          <IconButton onClick={() => onDeleteClick(todoId)}>
            <DeleteIcon />
          </IconButton>
        </>
      }
    >
      <input
        type="text"
        value={name}
        onChange={(e) => handleInputChange(e.target.value)}
        style={{ outline: "none" }}
      />
    </Button>
  );
}
