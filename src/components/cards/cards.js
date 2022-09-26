import React from 'react'
import { Link } from 'react-router-dom';
import './cards.css';

export default function Cards() {
    return (
        //--Section card-- }
        <div className='container'>
            <section className="cards">
                <div className="card__logo"></div>
                <div className="card__info">
                    <div className="card__content">
                        <h2 className="card__title">Nossos serviços</h2>
                        <ul className="cards__list">
                            <li className="card__item">reforma completa</li>
                            <li className="card__item">reforma de cozinhas</li>
                            <li className="card__item">reforma de banheiros</li>
                            <li className="card__item">design interiores</li>
                            <li className="card__item">pisos e acabamentos</li>
                        </ul>
                        <div className="card__extra">
                            <Link className="card__link" to="/services">mais informações</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

}
