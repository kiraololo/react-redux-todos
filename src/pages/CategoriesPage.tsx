import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CategoriesList } from '../components/categories/CategoriesList';
import { CategoryModal } from '../components/categories/CategoryModal';
import { ConfirmationModal } from '../components/ConfirmationModal';
import { useModal } from '../infrastructure/hooks';
import { ICategory, IState } from '../infrastructure/interfaces';
import { catDelete, catUpdate, setCatDescription, setCatId, setCatName } from '../store/actions';

export const CategoriesPage: React.FC = () => {
    const [delCatId, setDelCatId] = useState<number>(0);
    const [delCatMessage, setDelCatMessage] = useState<string>('');
    const useConfirmModal = useModal();
    const useCatModal = useModal();
    const dispatch = useDispatch();
    
    const cats = useSelector<IState, IState['categories']>(
        (state) => {
            return state.categories;
        }
    ) ?? new Array<ICategory>();
    
    const onShowEditWindow = (category: ICategory) => {
        dispatch(setCatName(category.name));
        dispatch(setCatDescription(category.description ?? ''));
        dispatch(setCatId(category.id));
        useCatModal.toggle();
    };

    const onUpdateCat = (newCategory: ICategory) => {
        useCatModal.toggle();
        dispatch(catUpdate(newCategory));
    };

    const onDeleteCat = (id: number, name: string) => {
        setDelCatId(id);
        setDelCatMessage(`Вы уверены, что хотите удалить задачу '${name}'?`);
        useConfirmModal.toggle();
    };
    
    const onConfirmDeleting = () => {
        dispatch(catDelete(delCatId));
        setDelCatId(0);
        setDelCatMessage('');
        useConfirmModal.toggle();
    };
    
    const onCancelDeleting=()=>{
        useConfirmModal.toggle();
    }

    return <>
        <CategoriesList categories={cats} onShowEditWindow={onShowEditWindow} onDelete={onDeleteCat}/>
        <CategoryModal isShown={useCatModal.isShown} hide={useCatModal.toggle} isCreation={false} onSave = {onUpdateCat}/>
        <ConfirmationModal 
                headerText = "Удаление категории"
                isShown={useConfirmModal.isShown} 
                toggle={useConfirmModal.toggle} 
                message={delCatMessage}
                onCancel={onCancelDeleting}
                onConfirm = {onConfirmDeleting}/>
    </>;
};