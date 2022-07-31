import styled from '@emotion/styled'

export const Table = styled.table`
  white-space: nowrap;
  th {
    padding: 0.2rem 0.2rem;
  }

  td {
    padding: 0 0.2rem;
  }

  .center {
    text-align: center;
  }

  .is-correct {
    padding: 0 0.3rem;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.white};
  }
  .O {
    background-color: ${({ theme }) => theme.colors.green[500]};
  }

  .X {
    background-color: ${({ theme }) => theme.colors.red[400]};
  }

  .level {
    padding: 0 0.3rem;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.white};
  }

  .easy {
    background-color: ${({ theme }) => theme.colors.green[500]};
  }

  .medium {
    background-color: ${({ theme }) => theme.colors.orange};
  }
  .hard {
    background-color: ${({ theme }) => theme.colors.red[400]};
  }
`
