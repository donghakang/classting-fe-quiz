import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { FallbackPage, QuizPage, ScorePage, StartPage } from './pages'
import { QuizProvider } from './context/QuizContext'
import { Global, ThemeProvider } from '@emotion/react'
import theme from './styles/theme'
import { global } from './styles/Global'

function App() {
  return (
    <QuizProvider>
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Router>
          <Routes>
            <Route path="/" element={<StartPage />} />
            {/* <Route path="/quiz" element={<QuizPage />} /> */}
            <Route path="/quiz/:id" element={<QuizPage />} />
            <Route path="/score" element={<ScorePage />} />
            <Route path="*" element={<FallbackPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </QuizProvider>
  )
}

export default App
