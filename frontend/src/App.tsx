import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Question from './pages/Question';
import Result from './pages/Result';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/question' element={<Question/>} />
        <Route path='/result' element={<Result/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
