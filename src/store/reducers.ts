import { IAction, IState } from "../infrastructure/interfaces";
import { TASK_CREATE, TASK_DELETE, TASK_UPDATE, TASK_GET_ALL, TASK_CAT_CHANGE, TASK_DESCR_CHANGE, TASK_NAME_CHANGE, TASK_ID_CHANGE, CAT_NAME_CHANGE, CAT_DESCR_CHANGE, CAT_ID_CHANGE, CAT_GET_ALL, CAT_CREATE, CAT_UPDATE, CAT_DELETE } from "./actions";
import { initialState } from "./state";
import * as api from '../Api';

export const rootReducer = (state:IState= initialState, action: IAction) => {
    let res: any;
    switch(action.type){
        case TASK_CREATE:
            res = {
                ...state,
                 tasks: [...state.tasks, action.payload]
                };
            api.SaveTasks(res.tasks);
            return res;
        case TASK_UPDATE:
            res = {
                ...state,
                tasks: state.tasks.map(task => {                    
                    if (task.id === action.payload.id) {
                        return {
                            ...task,
                            ...action.payload
                        }
                    }
                    return task;
                })
            };
            api.SaveTasks(res.tasks);
            return res;
        case TASK_DELETE:
            res =  {
                ...state,
                tasks: state.tasks.filter(task =>
                    task.id !== action.payload)
            };
            api.SaveTasks(res.tasks);
            return res;
        case TASK_GET_ALL:
            return {
                tasks: action.payload
            };

        case TASK_CAT_CHANGE:
            return {
                ...state,
                currentTaskCategory: action.payload
                };
        case TASK_DESCR_CHANGE:
            return {
                ...state,
                currentTaskDescription: action.payload
                };
        case TASK_NAME_CHANGE:
            return {
                ...state,
                 currentTaskName: action.payload
                };
        case TASK_ID_CHANGE:
            return {
                ...state,
                 currentTaskId: action.payload
                };
        case CAT_NAME_CHANGE:
            return {
                ...state,
                currentCategoryName: action.payload
                };
        case CAT_DESCR_CHANGE: 
            return {
                ...state,
                currentCategoryDescription: action.payload
                };
        case CAT_ID_CHANGE: 
            return {
                ...state,
                currentCategoryId: action.payload
                };
        case CAT_GET_ALL:
            return {
                tasks: action.payload
            };
        case CAT_CREATE: 
            res =  {
                ...state,
                 categories: [...state.categories!, action.payload]
            };
            api.SaveCategories(res.categories);
            return res;
        case CAT_UPDATE:
            res = {
                ...state,
                categories: state.categories!.map(category => {                    
                    if (category.id === action.payload.id) {
                        return {
                            ...category,
                            ...action.payload
                        }
                    }
                    return category;
                })
            };
            api.SaveCategories(res.categories);
            return res;
        case CAT_DELETE:
            res =  {
                ...state,
                categories: state.categories!.filter(category =>
                    category.id !== action.payload)
            };
            api.SaveCategories(res.categories);
            return res;
    }
    return state;
};