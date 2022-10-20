import React from 'react'
import { PROJECT_JEFFERSON } from '../../mocks/projectJefferson';
import './areaJefferson.css';


export default function ProjectJefferson() {
    return (


        /*--Section Jefferson--*/
        <section id="gallery__jefferson" className="gallery__jefferson">
            {PROJECT_JEFFERSON.map(item => (
            <div key={item.id}>
                    <h2 className="gallery__title">{item.title}</h2>
                <p className="gallery__text">{item.text}</p>
                <div className="gallery__container">
                    {/*--Gallery Left--*/}
                    <div className="gallery__area">
                        <div className="gallery__content">
                            <div className="gallery__left gallery__position">
                                <picture className="gallery__picture">
                                    <img src={item.img1} alt="Gallery Jefferson" />
                                </picture>
                                <span className="gallery__span">Projeto do Jefferson</span>           
                            </div>
                            <div className="gallery__left gallery__position">
                                <picture className="gallery__picture">
                                    <img src={item.img2} alt="Gallery Jefferson" />
                                </picture>
                                <span className="gallery__span">Projeto do Jefferson</span>
                            </div>
                        </div>
                    </div>
                    {/*--Gallery Middle--*/}
                    <div className="gallery__area">
                        <div className="gallery__content">
                            <div className="gallery__middle gallery__position">
                                <picture className="gallery__picture">
                                    <img src={item.img3} alt="Gallery Jefferson" />
                                </picture>
                                <span className="gallery__span">Projeto do Jefferson</span>
                            </div>
                        </div>
                    </div>
                    {/*--Gallery Right--*/}
                    <div className="gallery__area">
                        <div className="gallery__content">
                            <div className="gallery__right gallery__position">
                                <picture className="gallery__picture">
                                    <img src={item.img4} alt="Gallery Jefferson" />
                                </picture>
                                <span className="gallery__span">Projeto do Jefferson</span>
                            </div>
                        </div>
                    </div>
                    {/*--Gallery Right--*/}
                    <div className="gallery__area">
                        <div className="gallery__content">
                            <div className="gallery__right gallery__position">
                                <picture className="gallery__picture">
                                    <img src={item.img5} alt="Gallery Jefferson" />
                                </picture>
                                <span className="gallery__span">Projeto do Jefferson</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </section>
    );

}
