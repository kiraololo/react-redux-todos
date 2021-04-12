import React from 'react';
import { ICategory } from '../../infrastructure/interfaces';
import { Category } from './Category';

type CategoriesListProps = {
    categories: ICategory[],
    onShowEditWindow: (category:ICategory) => void,
    onDelete:(id:number, name:string) => void
};

export const CategoriesList: React.FC<CategoriesListProps> = ({categories, onShowEditWindow, onDelete}) => {
    return <ul className="list px1"> 
                {categories.map(category =>
                    <li key={category.id}>
                        <Category category={category} onShowEditWindow={onShowEditWindow} onDelete = {onDelete}/>
                    </li>)}
        </ul>;
};