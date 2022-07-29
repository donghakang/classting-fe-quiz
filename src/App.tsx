import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { FallbackPage, QuizPage, ScorePage, StartPage } from './pages'
import { QuizProvider } from './context/QuizContext'

function App() {
  return (
    <QuizProvider>
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          {/* <Route path="/quiz" element={<QuizPage />} /> */}
          <Route path="/quiz/:id" element={<QuizPage />} />
          <Route path="/score" element={<ScorePage />} />
          <Route path="*" element={<FallbackPage />} />
        </Routes>
      </Router>
    </QuizProvider>
  )
}

export default App
