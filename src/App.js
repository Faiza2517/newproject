import logo from './logo.svg';
import './App.css';
import { Link, } from 'react-router-dom';
import { Routers } from './work/Router';




function App() {
  return (
  
    <div className='bg-secondary py-3'>
      <header className='container d-flex justify-contant-between align-item-center'>
        <a href='#'>logo</a>
        <nav>
        <ul className='list-unstyled d-flex align-item-center mb-0'>
        <li className='me-3'><Link to='/'>Home </Link></li>
        <li className='me-3'><Link to='about'>About </Link></li>
        <li className='me-3'><Link to='contact'>Contact </Link></li>
      </ul>
        </nav>
      </header>
      <Routers/>
    </div>
  );
}

export default App;
