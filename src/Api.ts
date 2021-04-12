import { ICategory, ITask } from "./infrastructure/interfaces";
import { openDB, DBSchema } from 'idb';

interface TasksDb extends DBSchema {
    categories:{
        value: {
            id: number,
            name: string,
            description?: string
        },
        key: string
    },
    tasks:{
        value:{
            id: number,
            name: string,
            description?: string,
            category?: {
                id: number,
                name: string,
                description: string
            }
        },
        key:string
    }
  }

async function databaseApi() {
    const db = await openDB<TasksDb>('tasks-db', 1, {
      upgrade(db) {
        db.createObjectStore('categories', {
            keyPath: 'id',
        });

        db.createObjectStore('tasks', {
            keyPath: 'id',
        });
      },
    });
  
    await db.put('categories', {
        id: 1,
        name: 'Категория 1',
        description: 'Описание категории'
    
    });

    await db.put('categories', {
        id: 2,
        name: 'Категория 2',
        description: 'Описание категории 2'
    
    });

    await db.put('tasks', {
        id: 1,
        category: {
            id: 1,
            name: 'Категория 1',
            description: 'Описание категории'
        
        },
        name: 'Задача 1',
        description: 'Описание первой задачи'
    });

    await db.put('tasks', {
        id: 2,
        name: 'Задача 2'
    });

    await db.put('tasks', {
        id: 3,
        category: {
            id: 1,
            name: 'Категория 1',
            description: 'Описание категории'
        
        },
        name:'Задача 3',
        description: 'Описание третьей задачи, которое должно быть длинным, но у меня заканчивается фантазия для его описания, поэтому пусть будет так, как есть, все равно оно в сраку никому не нужно. Вот так вот!'
    })
}

const categoriesList: ICategory[] = [{
    id: 1,
    name: 'Категория 1',
    description: 'Описание категории'

},{
    id: 2,
    name: 'Категория 2',
    description: 'Описание категории 2'

}];

const taskList: ITask[] = [{
    id: 1,
    category: categoriesList[0],
    name: 'Задача 1',
    description: 'Описание первой задачи'
},{
    id: 2,
    name: 'Задача 2'
},{
    id: 3,
    category: categoriesList[1],
    name:'Задача 3',
    description: 'Описание третьей задачи, которое должно быть длинным, но у меня заканчивается фантазия для его описания, поэтому пусть будет так, как есть, все равно оно в сраку никому не нужно. Вот так вот!'
}];

export const GetTasksList:() => ITask[] =  ()=> {
    let tasksListSaved: ITask[] = JSON.parse(localStorage.getItem('Tasks') ?? '[]');
    return tasksListSaved;
};
export const GetCategoriesList:() => ICategory[] =  ()=> {
    let tasksListSaved: ICategory[] = JSON.parse(localStorage.getItem('Categories') ?? '[]');
    return tasksListSaved;
};

export const SaveCategories:(categories?: ICategory[]) => void 
=(categories: ICategory[] = []) => {    
    localStorage.setItem('Categories', JSON.stringify(categories));
};

export const SaveTasks:(tasks?: ITask[]) => void 
=(tasks: ITask[] = []) => {
    localStorage.setItem('Tasks', JSON.stringify(tasks));
};

/*export const GetTasksList: ()=>Promise<ITask[]> 
= ()=>{
    return new  Promise(resolve=>{
        setTimeout(()=> resolve(taskList), 500);
    });
};

export const GetTasksList2: () => ITask[] = ()=> taskList;

export const TaskCreate: (data: ITask) => Promise<ITask>
= (data: ITask) => {
    return new  Promise(resolve=>{
        setTimeout(()=> {
            taskList.push(data);
            return resolve(data);
        }, 500);
    });
};

export const TaskUpdate: (data: ITask) => Promise<ITask>
= (data: ITask) => {
    return new  Promise(resolve=>{
        let task = taskList.find(t=>t.id === data.id);
        task!.category = data.category;
        task!.name = data.name;
        setTimeout(()=> resolve(data), 500);
    });
};

export const TaskDelete: (id: number) => Promise<number>
= (id: number) => {
    return new  Promise(resolve=>{
        taskList = taskList.filter(t=> t.id === id);
        setTimeout(()=> resolve(id), 500);
    });
};*/