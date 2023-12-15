import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QuizProvider } from './contexts/QuizProvider.jsx'
import { LifelineProvider } from './contexts/LifelineProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuizProvider>
      <LifelineProvider>
        <App />
      </LifelineProvider>
    </QuizProvider>
  </React.StrictMode>
)
