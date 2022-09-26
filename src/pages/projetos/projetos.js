import React from 'react'

import './projetos.css';

//---Components--
import Author from '../../components/author/author'
import Footer from '../../components/footer/footer'
import ProjectNelson from '../../components/areaNelson/areaNelson'
import ProjectJefferson from '../../components/areaJefferson/areaJefferson'
import ProjectGrota from '../../components/areaGrota/areaGrota'

export default function Projetos() {
    return (
        <main className="container">
            <Author />
            <ProjectNelson />
            <ProjectGrota />
            <ProjectJefferson />
            <Footer />
        </main>

    );

}
