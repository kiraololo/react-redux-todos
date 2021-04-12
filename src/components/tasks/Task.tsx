import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faFolder } from '@fortawesome/free-solid-svg-icons';
import { ITask } from '../../infrastructure/interfaces';

type TaskProps = {
    task: ITask,
    onShowEditWindow: (task: ITask) => void,
    onDelete: (id: number, name: string) => void
};

export const Task: React.FC<TaskProps> = ({ task, onShowEditWindow, onDelete }) => {
    return <div className="item-ctr">
        <div className="item-cont px1 py1">
            <div>
                <strong>{task.name}</strong>
                <span className="item-info">
                    {task.category ? <><FontAwesomeIcon icon={faFolder} /> {task.category?.name}</> : ''}
                </span>
            </div>
            <div className="item-descr">
                <span>{task.description}</span>
            </div>
        </div>
        <div className="item-ctrl">
            <FontAwesomeIcon icon={faPen} onClick={() => onShowEditWindow(task)} />
            <FontAwesomeIcon icon={faTrash} onClick={() => onDelete(task.id, task.name)} />
        </div>
    </div>;
};