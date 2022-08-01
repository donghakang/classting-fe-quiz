import styled from '@emotion/styled'

export const Modal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #00000055;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-content {
    max-width: 90%;
    background-color: #ffffff;
    border-radius: 8px;
    padding: 1rem;
    overflow: auto;
  }
`
