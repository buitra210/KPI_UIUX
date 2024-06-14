import React, { ChangeEvent } from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

type Props = {
    newTodoString: string;
    onNewToDoChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onAddingBtnClick: () => void;
};
export const CreatNewTodo = ({ newTodoString, onNewToDoChange, onAddingBtnClick }: Props) => {
    return (
        <div>
            <div>
                <TextField id="outlined-textarea" label="Your todolist" placeholder="Enter your todolist here" multiline value={newTodoString} onChange={onNewToDoChange} />
            </div>
            <Button variant="contained" color="success" onClick={onAddingBtnClick}>
                Add
            </Button>
        </div>
    );
};
