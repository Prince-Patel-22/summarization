import './App.css';
import Home from './screen/Home';
import { Routes,  Route } from 'react-router-dom';
import PDF from './screen/PDF.js';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/pdfSummary' element={<PDF/>} />
    </Routes>
    </>
  );
}

export default App;
