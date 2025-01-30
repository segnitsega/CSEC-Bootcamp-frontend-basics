import React from 'react'
import HomePage from './components/HomePage'
import JoinPage from './components/JoinPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/join' element={<JoinPage/>} />
        </Routes>
      </Router>
    
    </div>
  )
}

export default App
