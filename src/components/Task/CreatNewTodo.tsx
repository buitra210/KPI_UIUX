import React, { ChangeEvent } from "react";
import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonCustom from "../ButtonCustom/ButtonCustom";

type Props = {
  newTodoString: string;
  onNewToDoChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onAddingBtnClick: () => void;
};
export const CreatNewTodo = ({
  newTodoString,
  onNewToDoChange,
  onAddingBtnClick,
}: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
      }}
    >
      <Box>
        <TextField
          id="outlined-textarea"
          label="KPI's Task"
          placeholder="Enter your orther task here"
          multiline
          value={newTodoString}
          onChange={onNewToDoChange}
        />
      </Box>
      <Box onClick={onAddingBtnClick}>
        <ButtonCustom>Add</ButtonCustom>
      </Box>
    </Box>
  );
};
