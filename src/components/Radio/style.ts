import styled from '@emotion/styled'

export const Radio = styled.label`
  display: flex;
  align-items: center;

  input[type='radio'] {
    height: 1rem;
    width: 1rem;
    appearance: none;
    -webkit-appearance: none;
    border: 0.2rem solid #fff;
    background-color: ${({ theme }) => theme.colors.gray};
    border-radius: 50%;

    outline: 1px solid ${({ theme }) => theme.colors.gray};

    &:hover {
      outline-color: ${({ theme }) => theme.colors.green[500]};
      animation: outline-hovered;
      animation-duration: 0.2s;
      animation-iteration-count: 2;
      animation-direction: alternate;
      animation-timing-function: ease-in-out;
    }

    &:checked {
      outline-color: ${({ theme }) => theme.colors.green[500]};
      background-color: ${({ theme }) => theme.colors.green[500]};

      animation: outline-checked;
      animation-duration: 0.1s;
      animation-iteration-count: 4;
      animation-direction: alternate;
      animation-timing-function: linear;
    }

    @keyframes outline-hovered {
      0% {
        outline-offset: 0;
      }

      100% {
        outline-offset: -0.1rem;
      }
    }

    @keyframes outline-checked {
      0% {
        outline-offset: 0;
      }

      100% {
        outline-offset: -0.2rem;
      }
    }
  }

  span {
    margin-left: 0.75rem;
  }

  .correct {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.green[500]};
  }

  .real-answer {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.red[400]};
  }
`
