import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { Routers } from './work/Router';





function App() {
  return (
  
    <div>
       <div  className='bg-info'>
      <header className='container d-flex justify-contant-between align-items-center'>
        <a href='#'>logo</a>
        <nav>
        <ul className='list-unstyled d-flex align-items-center mb-0'>
        <li className='me-3'><Link to='/'>Home </Link></li>
        <li className='me-3'><Link to='about'>About </Link></li>
        <li className='me-3'><Link to='contact'>Contact </Link></li>
        <li className='me-3'><Link to='task'>Task </Link></li>
        <li className='me-3'><Link to='task2'>Task2</Link></li>
        <li></li>
      </ul>
        </nav>
      </header>
      <Routers/>
      </div> 
     </div>
  );
}

export default App;
