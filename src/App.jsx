/*
Assignment1
Allen Pader
300593768
05/20/24
*/
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import MainRouter from './main-router'

function App() {
  
  return (
    <>
      <Router>
        <MainRouter />
      </Router>
    </>
  )
}

export default App
