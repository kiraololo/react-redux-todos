import React from 'react';
import { ModalWindow } from './ModalWindow';

type ConfirmationProps = {
  onConfirm: () => void;
  onCancel: () => void;
  message: string;
};

type ConfirmationModalProps = {
    confirmationProps: ConfirmationProps,
    isShown: boolean,
    toggle: ()=>void,
    headerText: string
};

const ConfirmationModalBody: React.FC<ConfirmationProps> = (props) => {
  return (
    <>
        <div className="mb2 m-conf-msg">{props.message}</div>
        <button className="m-btn m-btn-p" onClick={props.onCancel}>Нет</button>
        <button className="m-btn" onClick={props.onConfirm}>Да</button>
    </>
  );
};


export const ConfirmationModal: React.FC<ConfirmationModalProps> =(props) =>{
    const body = <ConfirmationModalBody 
                    onConfirm={props.confirmationProps.onConfirm} 
                    onCancel={props.confirmationProps.onCancel} 
                    message={props.confirmationProps.message} />

    return <ModalWindow 
                    isShown={props.isShown}
                    hide={props.toggle}
                    headerText={props.headerText}
                    modalContent={body} />;
}

