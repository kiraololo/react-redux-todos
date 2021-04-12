import React from 'react';
import { ModalWindow } from './ModalWindow';

type ConfirmationModalProps = {
    isShown: boolean,
    toggle: ()=>void,
    headerText: string,
    onConfirm: () => void;
    onCancel: () => void;
    message: string;
};

export const ConfirmationModal: React.FC<ConfirmationModalProps> =({
  isShown,
  toggle,
  headerText,
  onConfirm,
  onCancel,
  message
}) =>{
    const renderContent = 
    <>
      <div className="mb2 m-conf-msg">{message}</div>
      <button className="m-btn m-btn-p" onClick={onCancel}>Нет</button>
      <button className="m-btn" onClick={onConfirm}>Да</button>
    </>;

    return <ModalWindow 
                    isShown={isShown}
                    hide={toggle}
                    headerText={headerText}
                    modalContent={renderContent} />;
}

