import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { CSSTransition } from 'react-transition-group';
import { MdOutlineClose } from 'react-icons/md';
import { ModalClose, ModalContainer, ModalWrap, ModalBox } from './Modal';
import Backdrop from '../UIElements/Backdrop';



const Modal = ({ children, show, onClose }) => {
    const history = useHistory();
    
    const closeModal = (e) => {
        onClose();
        e.stopPropagation();
        history.goBack();
    };

    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        return () => {
          document.body.classList.remove('overflow-hidden');
        };
    }, []);
    return (
        <ModalContainer>
            {show && <Backdrop onClick={closeModal} />}
            <CSSTransition 
                in={show}
                timeout={300}
                classNames="modal"
                mountOnEnter
                unmountOnExit
            >
                <ModalBox>
                    <ModalWrap onClick={closeModal}>
                        <ModalClose>
                            <MdOutlineClose size={22} />
                        </ModalClose>
                    </ModalWrap>
                    {children}
                </ModalBox>
            </CSSTransition>
        </ModalContainer>
    );
};

export default Modal;