import React from 'react'
import './areaGrota.css';
import { PROJECT_GROTA } from '../../mocks/projectGrota';


export default function ProjectGrota() {
    return (
        /*--Section Grota--*/

        <section id="gallery__grota" className="gallery__grota">

            {PROJECT_GROTA.map(item => (
                <div key={item.id}>
                    <h2 className="gallery__title">{item.title}</h2>
                    <p className="gallery__text">{item.text}</p>
                    <div className="gallery__container">
                        {/*--Gallery Left--*/}
                        <div className="gallery__area">
                            <div className="gallery__content">
                                <div className="gallery__left gallery__position">
                                    <picture className="gallery__picture" >
                                        <img src={item.img1} alt="gallery grota" />
                                    </picture>
                                    <span className="gallery__span">Rua da Grota, 20131</span>
                                </div>
                                <div className="gallery__left gallery__position">
                                    <picture className="gallery__picture" to="#">
                                        <img src={item.img2} alt="gallery grota" />
                                    </picture>
                                    <span className="gallery__span">Rua da Grota, 20131</span>
                                </div>
                            </div>
                        </div>
                        {/*--Gallery Middle--*/}
                        <div className="gallery__area">
                            <div className="gallery__content">
                                <div className="gallery__middle gallery__position">
                                    <picture className="gallery__picture" to="#">
                                        <img src={item.img3} alt="gallery grota" />
                                    </picture>
                                    <span className="gallery__span">Rua da Grota, 20131</span>
                                </div>
                            </div>
                        </div>
                        {/*--Gallery Right--*/}
                        <div className="gallery__area">
                            <div className="gallery__content">
                                <div className="gallery__right gallery__position">
                                    <picture className="gallery__picture" to="#">
                                        <img src={item.img3} alt="gallery grota" />
                                    </picture>
                                    <span className="gallery__span">Rua da Grota, 20131</span>
                                </div>
                            </div>
                        </div>
                        {/*--Gallery Right--*/}
                        <div className="gallery__area">
                            <div className="gallery__content">
                                <div className="gallery__right gallery__position">
                                    <picture className="gallery__picture" to="#">
                                        <img src={item.img4} alt="gallery grota" />
                                    </picture>
                                    <span className="gallery__span">Rua da Grota, 20131</span>
                                </div>
                                <div className="gallery__right--right gallery__position">
                                    <picture className="gallery__picture" to="#">
                                        <img src={item.img5} alt="gallery grota" />
                                    </picture>
                                    <span className="gallery__span">Rua da Grota, 20131</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>

    );

}
