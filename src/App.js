import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import './global.css'


//---Components---//
import Nav from './components/nav/nav';
import NavSocial from './components/nevSocial/navSocial'
import BackToTop from './components/iconBackToTop/iconBackToTop'

//---Pages---//
import Home from './pages/home/home';
import Contact from './pages/contact/contact';
import Projetos from './pages/projetos/projetos';
import Services from './pages/servicos/servicos';



function App() {
  return (
    <Fragment id="intro">
      <Nav />
      <NavSocial />
      <BackToTop />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Fragment>
  );
}

export default App;