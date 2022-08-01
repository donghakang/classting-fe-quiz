describe('quiz', () => {
  const totalQuizCount = 10
  function finishAllQuiz() {
    // 첫번째 화면
    cy.visit('/')
    cy.findByRole('button', { name: /퀴즈 풀기/i }).click()

    // 두번째 화면 (퀴즈 화면)
    for (let i = 0; i < totalQuizCount; i++) {
      cy.get('#option-1').click()
      cy.findByRole('button', {
        name: /next/i,
      }).click()
    }
  }

  it('Reroute - 페이지 우회', () => {
    cy.visit('/')
    cy.findByRole('button', { name: /퀴즈 풀기/i }).should('be.visible')

    cy.visit('/asdfasdf')
    cy.findByRole('button', { name: /퀴즈 풀기/i }).should('be.visible')

    cy.visit('/score')
    cy.findByRole('button', { name: /퀴즈 풀기/i }).should('be.visible')

    cy.visit('/quiz')
    cy.findByRole('button', { name: /퀴즈 풀기/i }).should('be.visible')
  })

  it('Quiz Question - 문제 페이지', () => {
    cy.visit('/')
    cy.findByRole('button', { name: /퀴즈 풀기/i }).click()

    // 답지를 선택하기 전에는 버튼이 나와있지 않는다.
    cy.findByRole('button', {
      name: /next/i,
    }).should('not.exist')

    // 답을 고른 뒤 버튼을 확인한다.
    cy.get('#option-1').click()
    cy.findByRole('button', {
      name: /next/i,
    }).should('be.visible')

    // 정답 입니다!!!, 오답입니다 에러
    cy.get('.message').then((message) => {
      if (message.text().includes('정답 입니다')) {
        cy.get('.correct-message').should('be.visible')
      } else if (message.text().includes('오답 입니다')) {
        cy.get('.incorrect-message').should('be.visible')
      } else {
        cy.log('ERROR: Message not shown')
      }
    })
  })

  it('Quiz Start - 문제 결과 페이지', () => {
    finishAllQuiz()

    // 테이블이 있는지 확인한다.
    cy.findByRole('columnheader', { name: /총 문제 수/i }).should('be.visible')
    cy.findByRole('columnheader', { name: /정답 수/i }).should('be.visible')
    cy.findByRole('columnheader', { name: /오답 수/i }).should('be.visible')
    cy.findByRole('columnheader', { name: /시간/i }).should('be.visible')

    // 그래프가 있는지 확인한다.
    cy.get('#doughnut-graph').should('be.visible')

    // 다시 풀기 버튼과 오답 노트 버튼 확인한다.
    cy.findByRole('button', { name: /다시 풀기/i }).should('be.visible')
    cy.findByRole('button', { name: /오답 노트/i }).should('be.visible')

    cy.get('[data-test-id="correct-count"]').then((correct) => {
      // parse text to int/number
      const correctCount = parseInt(correct.text())

      // get element id #num2
      cy.get('[data-test-id="incorrect-count"]').then((incorrect) => {
        // parse text to int/number
        const incorrectCount = parseInt(incorrect.text())

        // expect/assert number total equal to some expected total
        // cy.log(correctCount, incorrectCount)
        expect(correctCount + incorrectCount).equal(totalQuizCount)
      })
    })
  })

  it('Quiz Time - 시간 계산', () => {
    // 첫번째 화면
    cy.visit('/')
    cy.findByRole('button', { name: /퀴즈 풀기/i }).click()

    // 두번째 화면 (퀴즈 화면)
    for (let i = 0; i < totalQuizCount - 1; i++) {
      cy.get('#option-1').click()
      cy.findByRole('button', {
        name: /next/i,
      }).click()
    }

    // 10초 기다린다.
    cy.wait(10000)

    cy.get('#option-1').click()
    cy.findByRole('button', {
      name: /next/i,
    }).click()

    cy.get('[data-test-id="time-count"]').then((time) => {
      const timeCount = parseInt(time.text())

      expect(timeCount).greaterThan(10)
    })
  })

  it('Quiz Restart - 다시 풀기', () => {
    finishAllQuiz()

    cy.findByRole('button', { name: /다시 풀기/i }).click()

    // 다시 풀기 시작한다.
    cy.findByText(/퀴즈 풀기/i).should('be.visible')
  })

  it('Quiz Review - 오답 노트', () => {
    finishAllQuiz()

    // 아직은 없지만 버튼을 누르면 Modal이 나타난다.
    cy.get('#modal').should('not.exist')
    cy.findByRole('button', { name: /오답 노트/i }).click()
    cy.get('#modal').should('be.visible')

    cy.get('#review-table').should('be.visible')
    cy.get('#review-table > :nth-child(1) > :nth-child(1)').should('be.exist')
    cy.get('#review-table > :nth-child(1) > :nth-child(2)').should('be.exist')
    cy.get('#review-table > :nth-child(1) > :nth-child(3)').should('be.exist')
    cy.get('#review-table > :nth-child(1) > :nth-child(4)').should('be.exist')
    cy.get('#review-table > :nth-child(1) > :nth-child(5)').should('be.exist')
    cy.get('#review-table > :nth-child(1) > :nth-child(6)').should('be.exist')

    for (let i = 0; i < totalQuizCount; i++) {
      cy.get(`#review-table > :nth-child(${i + 2}) > :nth-child(1)`).should(
        'have.text',
        `${i + 1}`
      )
    }

    // 다시 클릭하면 modal이 사라진다
    cy.get('#modal').click().should('not.exist')
  })
})
