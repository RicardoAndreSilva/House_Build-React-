import React from 'react'

import img1 from '../../assets/img_service.webp'
import img2 from '../../assets/img_service-2.webp'

import './servicos.css';

export default function Servicos() {
    return (
        
        /*--section service--*/
        <section id="service" className="container">
            <div className="service__content">
                <div className="service__area">
                    <div className="service__items">
                        <h2 className="service__title--h2">nossos serviços</h2>
                    </div>
                </div>
                <div className="service__area">
                    <div className="service__items">
                        <h3 className="service__title--h3">reforma completa</h3>
                        <p className="service__text">
                            Sou um parágrafo. Aqui você pode adicionar seu texto. É fácil, basta clicar em "Editar
                            texto" ou
                            clicar duas vezes sobre
                            mim para editar o conteúdo, a fonte e mais.
                        </p>
                    </div>
                </div>
                <div className="service__area">
                    <div className="service__items">
                        <h3 className="service__title--h3">reforma de cozinhas</h3>
                        <p className="service__text">
                            Sou um parágrafo. Aqui você pode adicionar seu texto. É fácil, basta clicar em "Editar
                            texto" ou
                            clicar duas vezes sobre
                            mim para editar o conteúdo, a fonte e mais.
                        </p>
                    </div>
                </div>
                <div className="service__area">
                    <img className="service__img" src={img1} alt="Logo service" />
                </div>
                <div className="service__area">
                    <img className="service__img" src={img2} alt="logo service" />
                </div>
                <div className="service__area">
                    <div className="service__items">
                        <h3 className="service__title--h3">interiores</h3>
                        <p className="service__text">
                            Sou um parágrafo. Aqui você pode adicionar seu texto. É fácil, basta clicar em "Editar
                            texto" ou
                            clicar duas vezes sobre
                            mim para editar o conteúdo, a fonte e mais.
                        </p>
                    </div>
                </div>
                <div className="service__area">
                    <div className="service__items">
                        <h3 className="service__title--h3">pisos ...</h3>
                        <p className="service__text">
                            Sou um parágrafo. Aqui você pode adicionar seu texto. É fácil, basta clicar em "Editar
                            texto" ou
                            clicar duas vezes sobre
                            mim para editar o conteúdo, a fonte e mais.
                        </p>
                    </div>
                </div>
                <div className="service__area">
                    <div className="service__items">
                        <h3 className="service__title--h3 service__remove--space">reforma de banheiros</h3>
                        <p className="service__text">
                            Sou um parágrafo. Aqui você pode adicionar seu texto. É fácil, basta clicar em "Editar
                            texto" ou
                            clicar duas vezes sobre
                            mim para editar o conteúdo, a fonte e mais.
                        </p>
                    </div>
                </div>
                <div className="service__area">
                    <h4 className="service__title">nossa expertise</h4>
                </div>
                <div className="service__area">
                    <div className="service__items">
                        <h3 className="service__title--list">pré-construção</h3>
                        <ul className="service__item">
                            <li className="service__list">design projetos</li>
                            <li className="service__list">programação</li>
                            <li className="service__list">estimativa e orcamento</li>
                        </ul>
                    </div>
                </div>
                <div className="service__area">
                    <div className="service__items">
                        <h3 className="service__title--list">construção</h3>
                        <ul className="service__item">
                            <li className="service__list">controle de qualidade</li>
                            <li className="service__list">gestao de segurança</li>
                            <li className="service__list">guestao de mão de obra</li>
                        </ul>
                    </div>
                </div>
                <div className="service__area">
                    <div className="service__items">
                        <h3 className="service__title--list">pós-construção</h3>
                        <ul className="service__item">
                            <li className="service__list">certificações legais</li>
                            <li className="service__list">documentaçoes</li>
                            <li className="service__list">garantia</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    );

}
