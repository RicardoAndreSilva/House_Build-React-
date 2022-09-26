import React from 'react'
import { Link } from 'react-router-dom';
import './areaNelson.css';
import img1 from '../../assets/gallery_neslon-first.webp'
import img2 from '../../assets/gallery_middle.webp'
import img3 from '../../assets/gallery_middle-bottom.webp'
import img4 from '../../assets/gallery-middle.webp'
import img5 from '../../assets/gallery_first-bottom.webp'

export default function ProjectNelson() {
    return (

        /*--Section Nelson--*/
        <section id="gallery__nelson" className="gallery__nelson">
            <h2 className="gallery__title">Projeto do Nelson</h2>
            <p className="gallery__text">
                Sou um parágrafo. Aqui você pode adicionar seu texto. É fácil, basta clicar em
                "Editar texto" ou clicar duas vezes sobre mim para editar o conteúdo, a fonte e mais.
            </p>
            <div className="gallery__container">
                {/*--Gallery Left--*/}
                <div className="gallery__area">
                    <div className="gallery__content">
                        <div className="gallery__left gallery__position">
                            <Link className="gallery__link" to="#">
                                <img className="gallery__img" src={img1} alt=" gallery Nelson" />
                            </Link>
                            <span className="gallery__span">Projeto do Nelson</span>
                        </div>
                    </div>
                </div>
                
                { /*--Gallery Middle--*/}
                <div className="gallery__area">
                    <div className="gallery__content">
                        <div className="gallery__middle gallery__position">
                            <Link className="gallery__link" to="#">
                                <img className="gallery__img" src={img2} alt="Gallery  Nelson" />
                            </Link>
                            <span className="gallery__span">Projeto do Nelson</span>
                        </div>
                        <div className="gallery__middle--bottom gallery__position">
                            <Link className="gallery__link" to="#">
                                <img className="gallery__img" src={img3} alt="Gallery  Nelson" />
                            </Link>
                            <span className="gallery__span">Projeto do Nelson</span>
                        </div>
                    </div>
                </div>
                
                {/*--Gallery Right--*/}
                <div className="gallery__area">
                    <div className="gallery__content">
                        <div className="gallery__right gallery__position">
                            <Link className="gallery__link" to="#">
                                <img className="gallery__img" src={img4} alt="Gallery Nelson" />
                            </Link>
                            <span className="gallery__span">Projeto do Nelson</span>
                        </div>
                    </div>
                </div>
                
                {/*--Gallery Right--*/}
                <div className="gallery__area">
                    <div className="gallery__content">
                        <div className="gallery__right gallery__position">
                            <Link className="gallery__link" to="#">
                                <img className="gallery__img" src={img5} alt="Gallery Nelson" />
                            </Link>
                            <span className="gallery__span">Projeto do Nelson</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}
