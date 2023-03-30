import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';

function App() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/about"> About Us </Link>
        </li>
        <li>
          <Link to="/contact"> Contact Us </Link>
        </li>
      </ul>
    </nav>
      <Routes>
        <Route path='/' element={< Home/>} /> 
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
        <h1> Hello everyone</h1>
    </>
  );
}

export default App;
