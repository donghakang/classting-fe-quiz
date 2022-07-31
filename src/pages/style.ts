import styled from '@emotion/styled'

export const Start = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

export const Quiz = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  .quiz-content {
    background-color: ${({ theme }) => theme.colors.white};
    width: 60%;
    border-radius: 8px;
    padding: 2rem;

    .quiz-title {
    }

    .quiz-options {
      margin-top: 2rem;
    }

    .button-container {
      margin: 1rem 0 1rem 0;
      height: 30px;

      .correct-message {
        color: ${({ theme }) => theme.colors.green[500]};
      }
      .incorrect-message {
        color: ${({ theme }) => theme.colors.red[400]};
      }
    }
  }
`

export const Score = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;

  .score-container {
    background-color: ${({ theme }) => theme.colors.white};
    width: 60%;
    padding: 2rem;
    border-radius: 8px;

    .info-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      // 정보가 있는 데이터
      .info-table {
        text-align: left;
        width: 100%;
        height: 200px;

        .report-title {
          font-size: 30px;
          font-weight: 900;
          margin-bottom: 1rem;
        }
        th {
          width: 100px;
        }
      }
      // 그래프
      .graph-wrapper {
        width: 70%;
      }
      ${({ theme }) => theme.screen.web} {
        flex-direction: column;
      }
    }
  }

  .button-container {
    display: flex;
    margin: 1rem;
  }
`
