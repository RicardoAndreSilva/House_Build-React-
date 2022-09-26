import React from 'react'
import { Link } from 'react-router-dom';
import './nav.css'


export default function Nav() {
    return (
        <div>
            {/*---Header---*/}
            <header className="header">
                <div className="header__container">
                    <div className="header__description">
                        <span className="header__info">newel</span>
                        <span className="header__info">reformas</span>
                        <span className="header__info">residenciais</span>
                    </div>
                    {/*---Nav---*/}
                    <nav className="nav">
                        <input type="checkbox" class="menu__checkbox"></input>
                        <div class="nav__mobile">
                            <span class="nav__span"></span>
                            <span class="nav__span"></span>
                            <span class="nav__span"></span>
                        </div>
                        <i className="icofont-navigation-menu nav__mobile"></i>
                        <ul className="nav__list">
                            <li className="nav__item">
                                <Link className="nav__link" to="/">Home</Link>
                            </li>
                            <li className="nav__item">
                                <Link className="nav__link" to="/Services">Serviços</Link>
                            </li>
                            <li className="nav__item">
                                <Link className="nav__link" to="/projetos"> projetos </Link>
                            </li>
                            <li className="nav__item">
                                <Link to="#hrefp__href__back" className="nav__link"> contatos </Link>
                            </li>
                            <li className="nav__item nav__item--select">
                                <span className="nav__link--span" to="/projetos"> ligar </span>
                            </li>
                        </ul>
                    </nav>
                </div>
                / {/*---Header About--- */}
                <div className="header__about">
                    <h1 className="header__title">newel reformas residenciais</h1>
                    <span className="header__subtitle">Criando os ambientes dos seus sonhos</span>
                </div>
            </header>
        </div>

    );

}

