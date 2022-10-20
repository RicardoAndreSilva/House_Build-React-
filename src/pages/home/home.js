import React from 'react';



//---Components--
import Cards from '../../components/cards/cards';
import Highlights from '../../components/highlights/highlights';
import About from '../../components/about/about';
import Project from '../../components/projetos/project'
import Review from '../../components/review/review'
import Footer from '../../components/footer/footer'



import './home.css';

function Home() {
    return (
        <div >
            <Cards />
            <Highlights />
            <About />
            <Project />
            <Review />
            <Footer />
        </div>
    );
}

export default Home;