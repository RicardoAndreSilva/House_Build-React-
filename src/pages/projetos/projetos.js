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
            <Author id="project__more" />
            <ProjectNelson id="gallery__nelson" />
            <ProjectGrota id="gallery__grota" />
            <ProjectJefferson id="gallery__jefferson" />
            <Footer />
        </main>

    );

}
