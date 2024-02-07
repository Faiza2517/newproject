import logo from './logo.svg';
import './App.css';
import { Banner } from './work/Banner';
import { Header } from './work/Header';
import { Routes,Route } from 'react-router-dom';
import { MyDetail } from './work/Detail';
import { Eidtpost } from './work/Eidtpost';
import { From } from './work/From';


function App() {
  return (
  
    <>
    <Header/>      
      <Routes>
        <Route path='/' element={<Banner/>}/>
        <Route path='/form/:id' element={<From/>}/>
        <Route path='/ReadMore/:id' element={<MyDetail />} />
        <Route path='/editpost/:id' element={<Eidtpost />} />

      </Routes>

     </>
  );
}

export default App;
