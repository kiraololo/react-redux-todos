// export const initialState = {
//     tasks: [{
//         id: 1,
//         category: {
//             id: 1,
//             name: 'Категория 1',
//             description: 'Описание категории'
        
//         },
//         name: 'Задача 1',
//         description: 'Описание задачи, которое хер знает, где брать и как выдумывать, потому что заебался с этим реактом вкрай!!!'
//     },{
//         id: 2,
//         category: {
//             id: 1,
//             name: 'Категория 1',
//             description: 'Описание категории'
        
//         },
//         name: 'Задача 2',
//         description: 'Просто дескрипшен'
//     },{
//         id: 3,
//         category: {
//             id: 2,
//             name: 'Категория 2',
//             description: 'Описание категории 2'
        
//         },
//         name: 'Задача 3'
//     }],
//     categories:[{
//         id: 1,
//         name: 'Категория 1',
//         description: 'Описание категории'
    
//     },{
//         id: 2,
//         name: 'Категория 2',
//         description: 'Описание категории 2'
    
//     }]
// };
import * as api from '../Api';

export const initialState = {
    tasks: api.GetTasksList(),
    categories: api.GetCategoriesList()
};