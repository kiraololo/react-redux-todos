import { IAction, ICategory, ITask } from "../infrastructure/interfaces";
import * as api from '../Api';

export const TASK_GET_ALL: string = 'TASK_GET_ALL';
export const TASK_CREATE: string = 'TASK_CREATE';
export const TASK_UPDATE: string = 'TASK_UPDATE';
export const TASK_DELETE: string = 'TASK_DELETE';
export const TASK_NAME_CHANGE: string = 'TASK_NAME_CHANGE';
export const TASK_DESCR_CHANGE: string = 'TASK_DESCR_CHANGE';
export const TASK_CAT_CHANGE: string = 'TASK_CAT_CHANGE';
export const TASK_ID_CHANGE: string = 'TASK_ID_CHANGE';
export const CAT_NAME_CHANGE: string = 'CAT_NAME_CHANGE';
export const CAT_DESCR_CHANGE: string = 'CAT_DESCR_CHANGE';
export const CAT_ID_CHANGE: string = 'CAT_ID_CHANGE';
export const CAT_GET_ALL: string = 'CAT_GET_ALL';
export const CAT_CREATE: string = 'CAT_CREATE';
export const CAT_UPDATE: string = 'CAT_UPDATE';
export const CAT_DELETE: string = 'CAT_DELETE';


export const taskGetAll: () => IAction 
= ()=> ({
    type: TASK_GET_ALL,
    payload: api.GetTasksList()
});

export const taskCreate: (data: ITask) => IAction
= (data: ITask) => ({
    type: TASK_CREATE,
    payload: data
});

export const taskUpdate: (data: ITask) => IAction
= (data: ITask) => ({
    type: TASK_UPDATE,
    payload: data
});

export const taskDelete: (id: number) => IAction
= (id: number) => ({
    type: TASK_DELETE,
    payload: id
});

export const setTaskName: (name:string) => IAction 
= (name:string)=> ({
    type: TASK_NAME_CHANGE,
    payload: name
});

export const setTaskDescription: (description: string) => IAction
= (description: string) => ({
    type: TASK_DESCR_CHANGE,
    payload: description
});

export const setTaskCategoty: (category?: ICategory) => IAction
= (category?: ICategory) => ({
    type: TASK_CAT_CHANGE,
    payload: category
});

export const setTaskId: (id: number) => IAction
= (id: number) => ({
    type: TASK_ID_CHANGE,
    payload: id
});

export const setCatName: (name:string) => IAction 
= (name:string)=> ({
    type: CAT_NAME_CHANGE,
    payload: name
});

export const setCatDescription: (description: string) => IAction
= (description: string) => ({
    type: CAT_DESCR_CHANGE,
    payload: description
});

export const setCatId: (id: number) => IAction
= (id: number) => ({
    type: CAT_ID_CHANGE,
    payload: id
});

export const catGetAll: () => IAction 
= ()=> ({
    type: CAT_GET_ALL,
    payload: api.GetCategoriesList()
});

export const catCreate: (data: ICategory) => IAction
= (data: ICategory) => ({
    type: CAT_CREATE,
    payload: data
});

export const catUpdate: (data: ICategory) => IAction
= (data: ICategory) => ({
    type: CAT_UPDATE,
    payload: data
});

export const catDelete: (id: number) => IAction
= (id: number) => ({
    type: CAT_DELETE,
    payload: id
});


 /*export const taskGetAll0: () => Promise<IAction> 
 = () => api.GetTasksList().then(allTasks =>({
     type: TASK_GET_ALL,
     payload: allTasks
 }));

export const taskGetAll: () => IAction 
= ()=> ({
    type: TASK_GET_ALL,
    payload: api.taskList
});

export const taskCreate: (data: ITask) => Promise<IAction> 
= (data: ITask) => api.TaskCreate(data).then(newTask =>({
    type: TASK_CREATE,
    payload: newTask
}));

export const taskUpdate: (data: ITask) => Promise<IAction> 
= (data: ITask) => api.TaskUpdate(data).then(updated =>({
    type: TASK_CREATE,
    payload: updated
}));

export const taskDelete: (id: number) => Promise<IAction> 
= (id: number) => api.TaskDelete(id).then(id =>({
    type: TASK_CREATE,
    payload: id
}));*/