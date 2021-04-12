import React from 'react';
import { ITask } from '../../infrastructure/interfaces';
import { Task } from './Task';

type TaskListProps = {
    tasks: ITask[],
    onShowEditWindow: (task:ITask) => void,
    onDelete:(id:number, name:string) => void
};

export const TasksList: React.FC<TaskListProps> = ({tasks, onShowEditWindow, onDelete}) => {
    return <ul className="list px1"> 
         {tasks.map(task =><li key={task.id}>
            <Task task={task} onShowEditWindow={onShowEditWindow} onDelete = {onDelete}/>
        </li>)}
    </ul>;
};