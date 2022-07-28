import React from 'react'
import logo from './logo.svg'
import './App.css'
import { fetchQuiz } from './helper/api'

function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          fetchQuiz(10)
            .then((res) => res.json())
            .then((data) => console.log(data))
        }}
      >
        API
      </button>
    </div>
  )
}

export default App
