import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/Navibar'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 

import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';

//import logo from '../src/logo.jpg';
//import auto from '../src/auto.png';

import {Home} from './pages/Home';
import {Users} from './pages/Users';

//<Image src={logo} roundedCircle />

//import styles from './Sergey.css'



function App() {
  return (
      <>
      <Router>
      <NaviBar /> 
         <Routes>
             <Route exact path="/" element={<Home />}/> 
             <Route path="/users" element={<Users />}/> 
         </Routes>
      </Router>
      <Footer />     
      </>
      
  );
}

export default App;
