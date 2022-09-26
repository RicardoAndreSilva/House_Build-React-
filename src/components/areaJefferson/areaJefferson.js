import React from 'react'
import { Link } from 'react-router-dom';
import './areaJefferson.css';
import img1 from '../../assets/img_jefferson.jpg'
import img2 from '../../assets/img_casa-do-jefferson5.webp'
import img3 from '../../assets/img_jefferson3.jpg'
import img4 from '../../assets/img_casa-do-jefferson2.webp'
import img5 from '../../assets/img_casa-do-jefferson5.webp'

export default function ProjectJefferson() {
    return (


        /*--Section Jefferson--*/ 
        <section id ="gallery__jefferson" className="gallery__jefferson">
            <h2 className="gallery__title">Casa do lago do Jefferson</h2>
            <p className="gallery__text">
                Sou um parágrafo. Aqui você pode adicionar seu texto. É fácil, basta clicar em
                "Editar texto" ou clicar duas vezes sobre mim para editar o conteúdo, a fonte e mais.
            </p>
            <div className="gallery__container">
                {/*--Gallery Left--*/}
                <div className="gallery__area">
                    <div className="gallery__content">
                        <div className="gallery__left gallery__position">
                            <Link className="gallery__link" href="#">
                                <img src={img1} alt="Gallery Jefferson"/>
                            </Link>
                            <span className="gallery__span">Projeto do Jefferson</span>
                        </div>
                        <div className="gallery__left gallery__position">
                            <Link className="gallery__link" href="#">
                                <img src={img2} alt="Gallery Jefferson"/>
                            </Link>
                            <span className="gallery__span">Projeto do Jefferson</span>
                        </div>
                    </div>
                </div>
                {/*--Gallery Middle--*/}
                <div className="gallery__area">
                    <div className="gallery__content">
                        <div className="gallery__middle gallery__position">
                            <Link className="gallery__link" to="#">
                                <img src={img3} alt="Gallery Jefferson"/>
                            </Link>
                            <span className="gallery__span">Projeto do Jefferson</span>
                        </div>
                    </div>
                </div>
                {/*--Gallery Right--*/}
                <div className="gallery__area">
                    <div className="gallery__content">
                        <div className="gallery__right gallery__position">
                            <Link className="gallery__link" href="#">
                                <img src={img4} alt="Gallery Jefferson"/>
                            </Link>
                            <span className="gallery__span">Projeto do Jefferson</span>
                        </div>
                    </div>
                </div>
                {/*--Gallery Right--*/}
                <div className="gallery__area">
                    <div className="gallery__content">
                        <div className="gallery__right gallery__position">
                            <Link className="gallery__link" to="#">
                                <img src={img5} alt="Gallery Jefferson"/>
                            </Link>
                            <span className="gallery__span">Projeto do Jefferson</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}
