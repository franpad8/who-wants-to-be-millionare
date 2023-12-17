import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { StartScreen } from './pages/StartScreen'
import { EndScreen } from './pages/EndScreen'
import { Quiz } from './pages/Quiz'
import { NotFound } from './pages/NotFound'
import Best from './pages/Best'
import { useQuiz } from './contexts/QuizContext'

function App () {
  const { status } = useQuiz()

  function appComponentToRender () {
    switch (status) {
      case 'initial': return <StartScreen />
      case 'selecting': return <Quiz />
      case 'resolving': return <Quiz />
      case 'resolved': return <Quiz />
      case 'finished': return <EndScreen />
      default: return <StartScreen />
    }
  }

  return (
    <main className='w-[70rem] relative'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={appComponentToRender()} />
          <Route path='/best' element={<Best />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
