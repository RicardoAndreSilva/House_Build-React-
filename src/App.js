import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './global.css'


//---Components---//
import Nav from './components/nav/nav';
import NavSocial from './components/navSocial/navSocial'
import BackToTop from './components/iconBackToTop/iconBackToTop'

//---Pages---//
import Home from './pages/home/home';
import Projetos from './pages/projetos/projetos';
import Services from './pages/servicos/servicos';



function App() {
  return (
    <div id="intro">
      <Nav />
      <NavSocial />
      <BackToTop />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
    </div>
  );
}

export default App;