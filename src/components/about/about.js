import React from 'react'
import './about.css';

export default function About() {
    return (
        //--<--About-- >
        <section className="about container">
            <div className="about__us">
                <div className="about__content">
                    <h3 className="about__title">Sobre nós</h3>
                    <h4 className="about__subtitle">newel reformas residenciais</h4>
                    <p className="about__text">
                        Desde a especificação de seus projetos, até os ajustes finais,
                        integrando isso a sua realização, a ENGENHARIA ,possui experiência,
                        técnica e prática em todas as etapas necessárias para o
                        desenvolvimento de grandes obras, atendendo as necessidades da sua
                        empresa, seja ela pequena, média ou grande, comercial, industrial ou
                        empreendimentos imobiliários.
                    </p>
                </div>
            </div>
            <div className="about__logo"></div>
        </section>
    );

}
