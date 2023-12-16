import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { StartScreen } from './pages/StartScreen'
import { EndScreen } from './pages/EndScreen'
import { Quiz } from './pages/Quiz'
import { NotFound } from './pages/NotFound'
import Best from './pages/Best'

function App () {
  return (
    <main className='w-[70rem]'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartScreen />} />
          <Route path='/best' element={<Best />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/finish' element={<EndScreen />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
