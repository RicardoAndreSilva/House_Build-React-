import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import img1 from '../../assets/project_img.jpg'
import img2 from '../../assets/img_projeto-nelson.jpg'
import img3 from '../../assets/img_rua-da-grota-2.webp'
import img4 from '../../assets/projecto-nelson-2.jpg'
import img5 from '../../assets/img_casa-do-jefferson.webp'
import './project.css';


export default function Project() {
    return (

        /*--Project area--*/
        <section className="project container">
            <h4 className="project__name">projetos recentes</h4>
            <div className="project__area">
                <div className="project__gallery">
                    <div className="project__left">
                        <div className="project__left--1 project__position">
                            <Link className="project__link" to="/Projetos#gallery__grota">
                                <img className="project__img" src={img1} alt="Projeto rua da grota" />
                                <span className="project__text">Rua da Grota,20131</span>
                            </Link>
                        </div>
                        <div className="project__left--2 project__position">
                            <Link className="project__link" to="/Projetos#gallery__nelson">
                                <img className="project__img" src={img2} alt="Projeto Nelson" />
                                <span className="project__text">Projecto do Nelson</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="project__gallery">
                    <div className="project__middle">
                        <div className="project__middle--1 project__position">
                            <Link className="project__link" to="/Projetos#gallery__grota">
                                <img className="project__img" src={img3} alt="logo" />
                                <span className="project__text">Rua da Grota, 20131</span>
                            </Link>
                        </div>
                        <div className="project__middle--2 project__position">
                            <Link className="project__link" to="/Projetos#gallery__nelson">
                                <img className="project__img" src={img4} alt="logo" />
                                <span className="project__text">Project do Nelson</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="project__right project__position">
                    <Link className="project__link" to="/Projetos#gallery__jefferson">
                        <img className="project__img" src={img5} alt="Casa do lago do jefferson" />
                        <span className="project__text">Casa do lago do jefferson</span>
                    </Link>
                </div>
            </div>
            <div className="project__more">
                <div className="project__button">
                    <Link className="project__button--link" id="serviços" to="/Projetos#project__more">ver todos</Link>
                </div>
            </div>
        </section >


    );

}
