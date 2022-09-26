import React from 'react'
import { Link } from 'react-router-dom';
import './areaGrota.css';
import img1 from '../../assets/Rua_da_grota-first.webp'
import img2 from '../../assets/Rua_da_grota-fourth.webp'
import img3 from '../../assets/Rua_da_grota-fifth.webp'
import img4 from '../../assets/Rua_da_grota-third.webp'
import img5 from '../../assets/Rua_da_grota-sixth.webp'

export default function ProjectGrota() {
    return (
        /*--Section Grota--*/
        <section id="gallery__grota" className="gallery__grota">
            <h2 className="gallery__title">Rua da Grota, 20131</h2>
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
                                <img src={img1} alt="gallery grota"/>
                            </Link>
                            <span className="gallery__span">Rua da Grota, 20131</span>
                        </div>
                        <div className="gallery__left gallery__position">
                            <Link className="gallery__link" to="#">
                                <img src={img2} alt="gallery grota"/>
                            </Link>
                            <span className="gallery__span">Rua da Grota, 20131</span>
                        </div>
                    </div>
                </div>
                {/*--Gallery Middle--*/}
                <div className="gallery__area">
                    <div className="gallery__content">
                        <div className="gallery__middle gallery__position">
                            <Link className="gallery__link" to="#">
                                <img src={img3} alt="gallery grota"/>
                            </Link>
                            <span className="gallery__span">Rua da Grota, 20131</span>
                        </div>
                    </div>
                </div>
                {/*--Gallery Right--*/}
                <div className="gallery__area">
                    <div className="gallery__content">
                        <div className="gallery__right gallery__position">
                            <Link className="gallery__link" to="#">
                                <img src={img3} alt="gallery grota"/>
                            </Link>
                            <span className="gallery__span">Rua da Grota, 20131</span>
                        </div>
                    </div>
                </div>
                {/*--Gallery Right--*/}
                <div className="gallery__area">
                    <div className="gallery__content">
                        <div className="gallery__right gallery__position">
                            <Link className="gallery__link" to="#">
                                <img src={img4} alt="gallery grota"/>
                            </Link>
                            <span className="gallery__span">Rua da Grota, 20131</span>
                        </div>
                        <div className="gallery__right--right gallery__position">
                            <Link className="gallery__link" to="#">
                                <img src={img5} alt="gallery grota"/>
                            </Link>
                            <span className="gallery__span">Rua da Grota, 20131</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );

}
