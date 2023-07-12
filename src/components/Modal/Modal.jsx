import React from 'react'
import { StyledCloseBtn, StyledModal, StyledOverlay } from './ModalStyled'

const Modal = ({user, close}) => {
    
  return (
      <StyledOverlay>
          <StyledModal>
              <StyledCloseBtn onClick={close}>&times;</StyledCloseBtn>
              <div>
                  <p>{String(user.hasJob)}</p>
                  <p>{user.name}</p>
              </div>
          </StyledModal>
    </StyledOverlay>
  )
}

export default Modal