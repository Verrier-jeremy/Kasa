import React from 'react';
import {Routes, Route} from 'react-router-dom';

// import des pages du site KASA
import Home from "./pages/Home";
import Apartment from './pages/Apartment';
import Error404 from "./pages/Error404";
import About from './pages/About';

// import des components Header & footer
import Header from './Components/Header';
import Footer from './Components/Footer';

// import du style générale de l'application
import './styles/App.scss';



function App() {
  return (
    <div className="App">
      <Header />
        <Routes>   
          <Route path="/" element={<Home/>}/>
          <Route path='/Apartement/:id' element={<Apartment />}/>
          <Route path="/A_Propos" element={<About/>}/>
          <Route path="/*" element={<Error404/>}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
