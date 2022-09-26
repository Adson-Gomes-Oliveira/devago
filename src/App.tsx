import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return(
    <Routes>
      <Route path='/admin' element={<h1>Admin</h1>} />
      <Route path='/' element={<h1>Articles</h1>} />
      <Route path='/projects' element={<h1>Projects</h1>} />
      <Route path='*' element={<h1>Do not exist</h1>} />
    </Routes>
  );
}

export default App;
