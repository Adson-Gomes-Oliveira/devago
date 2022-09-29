import { Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin';
import Articles from './pages/Articles';

function App() {
  return (
    <Routes>
      <Route path='/admin' element={<Admin />} />
      <Route path='/' element={<Articles />} />
      <Route path='/projects' element={<h1>Projects</h1>} />
      <Route path='*' element={<h1>Do not exist</h1>} />
    </Routes>
  );
}

export default App;
