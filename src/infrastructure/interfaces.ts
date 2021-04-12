export interface IAction{
    type:string,
    payload:any
}

export interface ICategory{
    id: number,
    name: string,
    description: string
}

export interface ITask{
    id: number,
    name: string,
    category?: ICategory,
    description?: string
}

export interface IModalProps {
    isShown: boolean;
    hide: () => void;
    modalContent: JSX.Element;
    headerText: string;
  }

export interface ICategoryState {
    currentCategoryId: number,
    currentCategoryDescription: string,
    currentCategoryName: string
}

export interface ITaskState {
    currentTaskId: number,
    currentTaskCategory: ICategory,
    currentTaskDescription: string,
    currentTaskName: string
}

export interface IState {
    tasks: ITask[],
    categories?: ICategory[],
    currentTaskId?: number,
    currentTaskCategory?: string, 
    currentTaskDescription?: string, 
    currentTaskName?: string,
    currentCategoryId?: number,
    currentCategoryDescription?: string,
    currentCategoryName?: string
}