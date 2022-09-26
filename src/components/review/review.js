import React from 'react'

import './review.css';

export default function Review() {
    return (
        /*--Review--*/
        <section className="review container" >
            <div className="review__content">
                <div className="review__item">
                    <p className="review__info">depoimentos</p>
                </div>

                <div className="review__item">
                    <div className="review__action">
                        <p className="review__text">
                            "Sou um depoimento. Clique aqui para editar seu próprio texto. Você também pode alterar a fonte e mais.
                            Use
                            este espaço
                            para compartilhar algo bom sobre você e seus serviços."
                        </p>
                        <span className="review__name">
                            matheus
                        </span>
                    </div>
                </div>

                <div className="review__item">
                    <div className="review__action">
                        <p className="review__text">
                            "Sou um depoimento. Clique aqui para editar seu próprio texto. Você também pode alterar a fonte e mais.
                            Use
                            este espaço
                            para compartilhar algo bom sobre você e seus serviços."
                        </p>
                        <span className="review__name">lars & Marisa</span>
                    </div>
                </div>

                <div className="review__item">
                    <div className="review__action">
                        <p className="review__text">
                            "Sou um depoimento. Clique aqui para editar seu próprio texto. Você também pode alterar a fonte e mais.
                            Use
                            este espaço
                            para compartilhar algo bom sobre você e seus serviços."
                        </p>
                        <span className="review__name">chris pacheco</span>
                    </div>
                </div>
            </div>
        </section>

    );

}
