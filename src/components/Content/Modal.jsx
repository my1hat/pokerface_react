import { createPortal } from 'react-dom';

function Modal(props) {
  const { show, closeModal } = props;
  const modal = (
    <>
      <div className={`popup ${show ? 'open' : 'hide'}`} onClick={closeModal} />
      <div className={!!show && 'popup__wrapper'}>
        <div className={show ? 'popup__content' : 'hide'}>
          <button onClick={closeModal}>X</button>
          <h1>Modal heading</h1>
          <p>This is modal content</p>
        </div>
      </div>
    </>
  );
  return createPortal(modal, document.getElementById('modal-root'));
}
export default Modal;
