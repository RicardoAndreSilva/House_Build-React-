
import React, { useEffect, useId, useState } from "react";
import { Link } from 'react-router-dom';
import './footer.css'
//--import form validation--//

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


export default function Footer() {
    /*--Method useId--*/
    const id1 = useId()
    const id2 = useId()
    const id3 = useId()
    const id4 = useId()
    const id5 = useId()

    const [message, setMessage] = useState("");

    //--validation form--//
    const createUsersFormValidate = yup.object().shape({
        nome: yup
            .string().required('Nome é obrigatorio'),
        sobrenome: yup
            .string().required('Sobrenome é obrigatorio'),
        telefone: yup
            .number().min(9).required('Telefone é obrigatorio'),
        email: yup
            .string().required('Email é obrigatorio'),
        morada: yup
            .string().required('Morada é obrigatoria')

    });

    //--yupResolver--validate inputs--//
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(createUsersFormValidate)
    });


    //-- Reset when submited--//
    const onSubmitHandler = (data) => {
        setMessage(<alert>Enviado com sucesso!</alert>)
        reset();
    };

    //--Remove message when submited after seconds--//
    useEffect(() => {
        setTimeout(() => {
            setMessage("")
        }, 16000)
    }, [message])

    return (
        /*--Footer--*/
        <footer className="footer" id="top__to__back">
            <div className="footer__container container">
                <div className="footer__content">
                    <div className="footer__items">
                        <h4 className="footer__name">Fale conosco</h4>
                        <div className="footer__adress">
                            <svg preserveAspectRatio="xMidYMid meet" data-bbox="20.36 20 159.28 160" viewBox="20.36 20 159.28 160"
                                height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation"
                                aria-hidden="true" aria-labelledby="svgcid--grof51-mkp2jv">
                                <g>
                                    <path
                                        d="M179.64 180H20.36V83.717L99.476 20l80.164 63.706V180zm-154.142-5.138h149.004V86.185L99.496 26.578 25.498 86.175v88.687z"
                                        fill="#9A8A78" data-color="1"></path>
                                </g>
                            </svg>
                            <span className="footer__text">Av. Bernardino de Campos, 98 São Paulo </span>
                        </div>
                        <div className="footer__email">
                            <svg preserveAspectRatio="xMidYMid meet" data-bbox="20 50.968 160 98.064" viewBox="20 50.968 160 98.064"
                                height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation"
                                aria-hidden="true" aria-labelledby="svgcid-eo42at20xlj6">
                                <g>
                                    <path d="M180 149.032H20V50.968h160v98.064zm-154.839-5.161h149.677V56.129H25.161v87.742z" fill="#9A8A78"
                                        data-color="1"></path>
                                    <path fill="#9A8A78"
                                        d="M100 118.79L20.968 55.565l3.226-4.033L100 112.177l75.806-60.645 3.226 4.033L100 118.79z"
                                        data-color="1"></path>
                                </g>
                            </svg>
                            <span className="footer__text">info@meusite.com</span>
                        </div>
                        <div className="footer__phone">
                            <svg preserveAspectRatio="xMidYMid meet" data-bbox="50.968 20 98.064 160" viewBox="50.968 20 98.064 160"
                                height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation"
                                aria-hidden="true" aria-labelledby="svgcid-4dkwt-n355tl">
                                <g>
                                    <path
                                        d="M135.615 180H64.388c-7.399 0-13.42-6.018-13.42-13.417V33.42c0-7.651 5.769-13.42 13.42-13.42h71.227c7.399 0 13.417 6.021 13.417 13.42v133.163c0 7.399-6.018 13.417-13.417 13.417zM64.388 25.161c-4.786 0-8.259 3.473-8.259 8.259v133.163c0 4.94 4.269 8.256 8.259 8.256h71.227c4.94 0 8.256-4.269 8.256-8.256V33.42c0-4.94-4.269-8.259-8.256-8.259H64.388z"
                                        fill="#9A8A78" data-color="1"></path>
                                    <path fill="#9A8A78" d="M146.451 147.999v5.161H53.548v-5.161h92.903z" data-color="1"></path>
                                </g>
                            </svg>
                            <span className="footer__text">(11) 3456-7890</span>
                        </div>
                        <div className="footer__about">
                            <span className="footer__text">© 2022 por rewel Reformas residenciais. orgulhosamente criado Ricardo S.</span>
                        </div>
                    </div>
                </div >

                {/*Footer middle--*/}
                <div className="footer__content">
                    <div className="footer__items">
                        <form onSubmit={handleSubmit(onSubmitHandler)} className="footer__htmlForm" action="enviar.php" method="post">
                            <div className="input__your--name">
                                <div className="input__name">
                                    <label htmlFor={id1} className="label">Nome</label>
                                    <input type="text" id={id1} name="nome" {...register('nome')} />
                                    {errors.nome && <errorMessage>{errors.nome?.message}</errorMessage>}
                                </div>
                                <div className="input__surname">
                                    <label htmlFor="sobrenome" className="label">sobrenome</label>
                                    <input type="text" id="sobrenome" name="sobrenome" {...register('sobrenome')} />
                                    {errors.sobrenome && <errorMessage>{errors.sobrenome?.message}</errorMessage>}
                                </div>
                            </div>
                            <div className="input__email">
                                <label htmlFor={id2} className="label">Email</label>
                                <input type="email" className="input__mail" id={id2} name="email" {...register('email')} />
                                {errors.email && <errorMessage>{errors.email?.message}</errorMessage>}
                            </div>
                            <div className="input__extra">
                                <div className="input__phone">
                                    <label htmlFor={id3} className="label">telefone</label>
                                    <input type="text" id={id3} name="telefone" {...register('telefone')} />
                                    {errors.telefone && <errorMessage>{errors.telefone?.message}</errorMessage>}
                                </div>
                                <div className="input__adress">
                                    <label htmlFor={id5} className="label">morada</label>
                                    <input type="text" id={id4} name="morada" {...register('morada')} />
                                    {errors.morada && <errorMessage>{errors.morada?.message}</errorMessage>}
                                </div>
                            </div>
                            <div className="button__submit">
                                <button type="submit" className="button__send">enviar</button>
                            </div>
                            <span className="submited__sucess">{message}</span>
                        </form>
                    </div>
                </div>

                {/*--- footer Right---*/}
                <div className="footer__content">
                    <div className="footer__items">
                        <ul className="footer__pages">
                            <li className="footer__page">
                                <Link className="footer__link" to="#top">início</Link>
                            </li>
                            <li className="footer__page">
                                <Link className="footer__link" to="servicos.html">serviços</Link>
                            </li>
                            <li className="footer__page">
                                <Link className="footer__link" to="projetos.html">projetos</Link>
                            </li>
                            <li className="footer__page">
                                <Link className="footer__link" id="contato" to="#contato">contato</Link>
                            </li>
                            <li className="footer__page">
                                <button className="footer__link--call" href="tel:(11) 111-7890">ligar</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
        </footer>

    );

}
