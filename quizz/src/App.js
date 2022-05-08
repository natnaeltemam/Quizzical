import React from 'react'
import './App.css'
import Quizzes from './compontes/Quizzes';
import StartQuizzes from './compontes/StartQuizz';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>

      <div className="App">


        <Routes>
          <Route path="/about" element={<Quizzes />} />
          <Route path="/" element={<StartQuizzes />} />
        </Routes>
      </div>
    </Router>


  );
}

export default App;
