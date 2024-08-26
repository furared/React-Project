import './App.css';
import './index.css';
import './components/Pages/shop.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Pages/Home';
import Shop from './components/Pages/Shop';
import Contactus from './components/Pages/Contactus';
import Aboutus from './components/Pages/Aboutus';
import  Cart  from './components/Pages/Cart';
import Labequipment from './components/Pages/Labequipment';
import Glasswareandplasticware from './components/Pages/Glasswareandplasticware';
import Industrialchemical from './components/Pages/Industrialchemical';
import Kitsupplies from './components/Pages/Kitsupplies';
import Saftyequipment from './components/Pages/Saftequipment';
import Teachingmodel from './components/Pages/Teachingmodel';
import Footer from './components/Footer';

function App() {
  return(
    <div>

<BrowserRouter>
<Navbar/>
<Routes>

<Route path="/" element={<Home/>} />
<Route path="/Aboutus" element={<Aboutus/>}/>
<Route path="/Contactus" element={<Contactus/>}/>
<Route path="/Cart" element={<Cart/>}/>
<Route path="/Shop" element={<Shop/>}/>
<Route path="/Labequipment" element={<Labequipment/>}/>
<Route path="/Saftyequipment" element={<Saftyequipment/>}/>
<Route path="/Teachingmodel" element={<Teachingmodel/>}/>
<Route path="/Glasswareandplsticware" element={<Glasswareandplasticware/>}/>
<Route path="/Industrialchemical" element={<Industrialchemical/>}/>
<Route path="/Kitsupplies" element={<Kitsupplies/>}/>
</Routes>
</BrowserRouter>
<Footer/>

</div>

  );
}

export default App;
