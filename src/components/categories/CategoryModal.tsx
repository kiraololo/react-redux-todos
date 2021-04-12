import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ICategory, ICategoryState } from '../../infrastructure/interfaces';
import { setCatDescription, setCatName } from '../../store/actions';
import { ModalWindow } from '../ModalWindow';

type CategoryModalProps = {
    isShown:boolean,
    hide: () => void,
    isCreation: boolean,
    onSave:(newCategory:ICategory) => void
};

export const CategoryModal: React.FC<CategoryModalProps> = ({isShown, hide, isCreation, onSave}) =>{   
    const catId = useSelector<ICategoryState, ICategoryState['currentCategoryId']>(
        (state) => {
            return state.currentCategoryId;
        }
    );    
    const catName = useSelector<ICategoryState, ICategoryState['currentCategoryName']>(
        (state) => {
            return state.currentCategoryName;
        }
    );
    const catDescription = useSelector<ICategoryState, ICategoryState['currentCategoryDescription']>(
        (state) => {
            return state.currentCategoryDescription;
        }
    );
    
    const dispatch = useDispatch();

    const onNameChange = (name: string) => {
        dispatch(setCatName(name));
    };
    const onDescrChange = (name: string) => {
        dispatch(setCatDescription(name));
    };

    const ctrlWigth={minWidth:'750px'};
    const btnPwidth = {minWidth: '200px'}
    const content = <>
        <label htmlFor="cat-name" className="m-lbl" style={ctrlWigth}>
            <span className="m-lbl-txt">Имя</span> 
            <input type="text" 
                    id="cat-name" 
                    placeholder="Введите имя категории"
                    value={catName}
                    onChange={event=>{onNameChange(event.target.value)}}/>
        </label>
        <label htmlFor="cat-descr" className="m-lbl" style={ctrlWigth}>
            <span className="m-lbl-txt">Описание</span> 
            <textarea id="cat-descr" 
                        placeholder="Введите описание категории"
                        value={catDescription}
                        onChange={event=>{onDescrChange(event.target.value)}}></textarea>
        </label>
        <button className="m-btn" onClick={hide}>Закрыть</button>
        <button className="m-btn m-btn-p" 
            style={btnPwidth} 
            onClick={()=>onSave({id: catId, name: catName, description: catDescription})}>
                {isCreation ? 'Создать' : 'Сохранить'}
        </button>        
    </>;
    const headerText = isCreation ? 'Создание категории' : 'Редактирование категории';
    return <ModalWindow isShown={isShown} hide={hide} headerText={headerText} modalContent={content} />;  
};