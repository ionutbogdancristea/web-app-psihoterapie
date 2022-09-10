import { Route, Routes } from 'react-router-dom';
import AcasaPage from './pages/Acasa.js';
import BlogPage from './pages/Blog';
import DespreMinePage from './pages/DespreMine';
import PsihozonePage from './pages/Psihozone';
import ServiciiPage from './pages/Servicii';

function App() {
  return (
    // current local domain: http://localhost:3000/
      <Routes>
        <Route path='/' element={<AcasaPage/>}/>
        <Route path='/blog' element={<BlogPage/>}/>       
        <Route path='/despre_mine' element={<DespreMinePage/>}/>   
        <Route path='/psihozone' element={<PsihozonePage/>}/>     
        <Route path='/servicii' element={<ServiciiPage/>}/>
      </Routes>
      );
}

export default App;
