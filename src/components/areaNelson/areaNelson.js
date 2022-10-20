import React from 'react';
import { PROJECT_NELSON } from '../../mocks/projectNelson';
import './areaNelson.css';

export default function ProjectNelson(props) {

 return (
        /*--Section Nelson--*/
        <section id="gallery__nelson" className="gallery__nelson">

            {PROJECT_NELSON.map(item => (
                <div key={item.id}>
                    <h2 className="gallery__title">{item.title}</h2>
                    <p className="gallery__text">{item.text}</p>
                    <div className="gallery__container">
                        {/*--Gallery Left--*/}
                        <div className="gallery__area">
                            <div className="gallery__content">
                                <div className="gallery__left gallery__position">
                                    <picture className="gallery__picture">
                                        <img className="gallery__img" src={item.img1} alt=" gallery Nelson" />
                                    </picture>
                                    <span className="gallery__span">{item.subtitle}</span>
                                </div>
                            </div>
                        </div>

                        { /*--Gallery Middle--*/}
                        <div className="gallery__area">
                            <div className="gallery__content">
                                <div className="gallery__middle gallery__position">
                                    <picture className="gallery__picture">
                                        <img className="gallery__img" src={item.img2} alt="Gallery Nelson" />
                                    </picture>
                                    <span className="gallery__span">{item.subtitle}</span>
                                </div>
                                <div className="gallery__middle--bottom gallery__position">
                                    <picture className="gallery__picture">
                                        <img className="gallery__img" src={item.img3} alt="Gallery  Nelson" />
                                    </picture>
                                    <span className="gallery__span">{item.subtitle}</span>
                                </div>
                            </div>
                        </div>

                        {/*--Gallery Right--*/}
                        <div className="gallery__area">
                            <div className="gallery__content">
                                <div className="gallery__right gallery__position">
                                    <picture className="gallery__picture">
                                        <img className="gallery__img" src={item.img4} alt="Gallery Nelson" />
                                    </picture>
                                    <span className="gallery__span">{item.subtitle}</span>
                                </div>
                            </div>
                        </div>

                        {/*--Gallery Right--*/}
                        <div className="gallery__area">
                            <div className="gallery__content">
                                <div className="gallery__right gallery__position">
                                    <picture className="gallery__picture">
                                        <img className="gallery__img" src={item.img5} alt="Gallery Nelson" />
                                    </picture>
                                    <span className="gallery__span">{item.subtitle}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );

}
