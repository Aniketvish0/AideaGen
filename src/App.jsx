import React from 'react'
import LandingPage from './LandingPage.jsx';
import { Route, Routes } from 'react-router-dom';
import TranscriptInput from './TranscriptAnalyzer.jsx';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/generate' element={<TranscriptInput/>}/>
      </Routes>
    </div>
  )
}

export default App