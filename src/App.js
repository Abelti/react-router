import { Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Books } from './pages/Books'
import { BookList } from './pages/BookList';

function App() {
  return (
    <>
    <nav>
      <ul>
        <li>
        <NavLink
  to="/"
  style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
>
  Home
</NavLink>
        </li>
        <li>
          <NavLink to="/about"> About Us </NavLink>
        </li>
        <li>
          <NavLink to="/contact"> Contact Us </NavLink>
        </li>
        <li>
          <NavLink to="/books"> Books </NavLink>
        </li>
      </ul>
    </nav>
      <Routes>
        <Route path='/home' element={< Home/>} /> 
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/books/' element={<BookList/>} />
        <Route path='/books/:id' element={<Books/>} />
        
      </Routes>
        
    </>
  );
}

export default App;
