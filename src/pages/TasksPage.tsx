import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ConfirmationModal } from "../components/ConfirmationModal";
import { TaskModal } from "../components/tasks/TaskModal";
import { TasksList } from "../components/tasks/TasksList";
import { useModal } from "../infrastructure/hooks";
import { ITask, IState } from "../infrastructure/interfaces";
import { taskUpdate, taskDelete, setTaskName, setTaskCategoty,
         setTaskDescription, setTaskId } from "../store/actions";

export const TasksPage: React.FC = () => {
    const [delTaskId, setDelTaskId] = useState<number>(0);
    const [delTaskMessage, setDelTaskMessage] = useState<string>('');
    const tasks = useSelector<IState, IState['tasks']>(
        (state) => {
            return state.tasks;
        }
    ); 
    const useTaskModal = useModal();
    const useConfirmModal = useModal();
    const dispatch = useDispatch();
    
    const onShowEditWindow = (task: ITask) => {
        dispatch(setTaskName(task.name));
        dispatch(setTaskCategoty(task.category));
        dispatch(setTaskDescription(task.description ?? ''));
        dispatch(setTaskId(task.id));
        useTaskModal.toggle();
    };

    const onUpdateTask = (newTask:ITask) => {
        useTaskModal.toggle();
        dispatch(taskUpdate(newTask));
    };

    const onDeleteTask = (id: number, name: string) => {
        setDelTaskId(id);
        setDelTaskMessage(`Вы уверены, что хотите удалить задачу '${name}'?`);
        useConfirmModal.toggle();
    };

    const onConfirmDeleting = () => {
        dispatch(taskDelete(delTaskId));
        setDelTaskId(0);
        setDelTaskMessage('');
        useConfirmModal.toggle();
    };
    
    const onCancelDeleting=()=>{
        useConfirmModal.toggle();
    }

    return <>
            <TasksList tasks={tasks} onShowEditWindow={onShowEditWindow} onDelete={onDeleteTask} />
            <TaskModal isShown={useTaskModal.isShown} hide={useTaskModal.toggle} isCreation={false} onSave = {onUpdateTask}/>
            <ConfirmationModal 
                headerText = "Удаление задачи"
                isShown={useConfirmModal.isShown} 
                toggle={useConfirmModal.toggle} 
                confirmationProps={{message: delTaskMessage, onCancel: onCancelDeleting, onConfirm: onConfirmDeleting}}/>
        </>;
};