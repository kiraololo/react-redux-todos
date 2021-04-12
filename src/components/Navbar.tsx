import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { useModal } from '../infrastructure/hooks';
import { ICategory, ITask } from '../infrastructure/interfaces';
import { CategoriesRoute, TasksRoute } from '../infrastructure/routs';
import { catCreate, setCatDescription, setCatId, setCatName, setTaskCategoty, setTaskDescription, setTaskId, setTaskName, taskCreate } from '../store/actions';
import { CategoryModal } from './categories/CategoryModal';
import { TaskModal } from './tasks/TaskModal';

export const Navbar: React.FC = () => {
    const useTaskModal = useModal();
    const useCategoryModal = useModal();
    const dispatch = useDispatch();
    const location = useLocation();    

    const showCreateTaskWindow = () => {
        dispatch(setTaskName(''));
        dispatch(setTaskCategoty());
        dispatch(setTaskDescription(''));
        dispatch(setTaskId(Date.now()));
        useTaskModal.toggle();
    };

    const showCreateCatkWindow = () => {
        dispatch(setCatName(''));
        dispatch(setCatDescription(''));
        dispatch(setCatId(Date.now()));
        useCategoryModal.toggle();
    };

    const onTaskCreate = (newTask:ITask) => {
        useTaskModal.toggle();
        dispatch(taskCreate(newTask));
    };

    const onCategoryCreate = (newCategory:ICategory) => {
        useCategoryModal.toggle();
        dispatch(catCreate(newCategory));
    };
    
    const renderTaskSubMenu = ()=> {
        if(location.pathname == TasksRoute){
            return <>
                <button onClick={showCreateTaskWindow} className="nb-btn">Добавить задачу</button>
                <TaskModal isShown={useTaskModal.isShown} hide={useTaskModal.toggle} isCreation={true} onSave = {onTaskCreate}/>
            </>;
        }
    };

    const renderCategorySubMenu = ()=> {
        if(location.pathname == CategoriesRoute){
            return <>
                <button onClick={showCreateCatkWindow} className="nb-btn">Добавить категорию</button>
                <CategoryModal isShown={useCategoryModal.isShown} hide={useCategoryModal.toggle} isCreation={true} onSave = {onCategoryCreate}/>
            </>;
        }
    };

    return <div className="navbar">
        <div className="nb-logo">
            ToDo List
        </div>
        <div className="nb-menu"> 
            <NavLink to="/">Задачи</NavLink>
            <div className="splitter mr1"/>
            <NavLink to="/Categories">Категории</NavLink>
        </div>
        <div className="nb-menu-second">
            {renderTaskSubMenu()}
            {renderCategorySubMenu()}            
        </div>
    </div>;
};