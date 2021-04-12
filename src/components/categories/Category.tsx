import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ICategory } from '../../infrastructure/interfaces';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

type CategoryProps = {
    category: ICategory,
    onShowEditWindow: (category:ICategory) => void,
    onDelete:(id:number, name:string) => void
};

export const Category: React.FC<CategoryProps> = ({category, onShowEditWindow, onDelete}) => {
    const handleOnDelete=():void=>{
        onDelete(category.id, category.name);
    };

    const handleOnShowEdit=():void=>{
        onShowEditWindow(category);
    };

    return <div className="item-ctr">
        <div className="item-cont px1 py1">
            <div>
                <strong>{category.name}</strong>
            </div>
            <div className="item-descr">
                <span>{category.description}</span>
            </div>
        </div>
        <div className="item-ctrl">                        
            <FontAwesomeIcon icon={faPen} onClick={handleOnShowEdit}/>
            <FontAwesomeIcon icon={faTrash} onClick={handleOnDelete}/>
        </div>
    </div>;
};