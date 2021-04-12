import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState, ITask, ITaskState } from '../../infrastructure/interfaces';
import { setTaskDescription, setTaskCategoty, setTaskName } from '../../store/actions';
import { ModalWindow } from '../ModalWindow';

type TaskModalProps = {
    isShown:boolean,
    hide: () => void,
    isCreation: boolean,
    onSave:(newTask:ITask) => void
};

export const TaskModal: React.FC<TaskModalProps> = ({isShown, hide, isCreation, onSave}) =>{   
    const taskId = useSelector<ITaskState, ITaskState['currentTaskId']>(
        (state) => {
            return state.currentTaskId;
        }
    );    
    const taskName = useSelector<ITaskState, ITaskState['currentTaskName']>(
        (state) => {
            return state.currentTaskName;
        }
    );
    const taskDescription = useSelector<ITaskState, ITaskState['currentTaskDescription']>(
        (state) => {
            return state.currentTaskDescription;
        }
    );
    const taskCategory = useSelector<ITaskState, ITaskState['currentTaskCategory']>(
        (state) => {
            return state.currentTaskCategory;
        }
    );
    const allCategories = useSelector<IState, IState['categories']>(
        (state) => {
            return state.categories;
        }
    );
    const dispatch = useDispatch();

    const onNameChange = (name: string) => {
        dispatch(setTaskName(name));
    };
    const onCategoryChange = (value: string) => {        
        let category = allCategories?.find(c=>c.id == +value);
        dispatch(setTaskCategoty(category));
    };
    const onDescrChange = (name: string) => {
        dispatch(setTaskDescription(name));
    };

    const ctrlWigth={minWidth:'750px'};
    const btnPwidth = {minWidth: '200px'}
    const content = <>
        <div className="m-ctrls-g m-ctr-2" style={ctrlWigth}>
            <label htmlFor="task-name" className="m-lbl">
                <span className="m-lbl-txt">Имя</span> 
                <input type="text" 
                    id="task-name" 
                    placeholder="Введите имя задачи" 
                    value={taskName}
                    onChange={event=>{onNameChange(event.target.value)}} />
            </label>
            <label htmlFor="categoty" className="m-lbl">
                <span className="m-lbl-txt">Категория</span> 
                <select id="categoty" onChange={event=>{onCategoryChange(event.target.value)}} value={taskCategory?.id}
                    className={taskCategory ? 'm-s-filled' : 'm-s-empty'}>
                    <option value="" disabled selected hidden>Выберите категорию</option>
                    {allCategories?.map(category=>{
                        return <option value={category.id} className="m-s-opt">{category.name}</option>;
                    })}
                </select>
            </label>
        </div>
        <label htmlFor="task-descr" className="m-lbl" style={ctrlWigth}>
            <span className="m-lbl-txt">Описание</span> 
            <textarea id="task-descr" 
                placeholder="Введите описание задачи" 
                value={taskDescription}
                onChange={event=>{onDescrChange(event.target.value)}}
                ></textarea>
        </label>
        <button className="m-btn" onClick={hide}>Закрыть</button>
        <button className="m-btn m-btn-p" 
            style={btnPwidth} 
            onClick={()=>onSave({id: taskId, name: taskName, description: taskDescription, category: taskCategory})}>
                {isCreation ? 'Создать' : 'Сохранить'}
        </button>        
    </>;
    const headerText = isCreation ? 'Создание задачи' : 'Редактирование задачи';

    return <ModalWindow isShown={isShown} hide={hide} headerText={headerText} modalContent={content} />;  
};