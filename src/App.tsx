import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Admin from './pages/Admin';
import AboutMe from './components/about/AboutMe';

function App() {
  return (
    <Routes>
      <Route path='/admin' element={<Admin />} />
      <Route path='/' element={<Home Children={AboutMe}/>} />
      <Route path='/projects' element={<Home Children={AboutMe}/>} />
      <Route path='*' element={<h1>Do not exist</h1>} />
    </Routes>
  );
}

export default App;
