import React from 'react';
import ReactDOM from 'react-dom';
import { IModalProps } from '../infrastructure/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

export const ModalWindow: React.FC<IModalProps> = ({
    isShown,
    hide,
    modalContent,
    headerText
  }) => {
    const modal = (
      <React.Fragment>
        <div className="m-backdrop"/>
        <div className = "m-wrapper">
          <div className="m-modal">
            <div className="m-header">
              <div className="m-header-text">{headerText}</div>
              <FontAwesomeIcon icon={faTimes} onClick={hide} className="m-close-btn"/>
            </div>
            <div className="m-content">{modalContent}</div>
          </div>
        </div>
      </React.Fragment>
    );
    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
  };