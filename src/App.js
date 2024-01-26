import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Singin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import MoreInformation from './pages/MoreInformation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Signup/>} path='/'/>
        <Route element={<Singin/>} path='/signin'/>
        <Route element={<Home/>} path='/home'/>
        <Route element={<MoreInformation/>} path='/moreinfo'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
