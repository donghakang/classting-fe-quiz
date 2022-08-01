import React from 'react'
import * as S from './style'
interface ModalProps {
  opened: boolean
  setOpened: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ opened, children, setOpened }) => {
  return (
    <>
      {opened && (
        <S.Modal onClick={() => setOpened(false)}>
          <div
            id="modal"
            className="modal-content"
            onClick={() => setOpened(false)}
          >
            {children}
          </div>
        </S.Modal>
      )}
    </>
  )
}

export default Modal
