import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './Header'
import { StartScreen } from './pages/StartScreen'
import { EndScreen } from './pages/EndScreen'
import { Quiz } from './pages/Quiz'
import { NotFound } from './pages/NotFound'

function App () {
  return (
    <main>
      <h1>Who wants to be millionare</h1>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartScreen />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/finish' element={<EndScreen />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
