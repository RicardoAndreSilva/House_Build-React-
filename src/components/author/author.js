import React from 'react'
import { Link } from 'react-router-dom';

import './author.css';

export default function Author() {
    return (
        
        /*--section author--*/
        <section className="author__nelson">
            <div className="author__area">
                <div className="author__items">
                    <p className="author__text">
                        nossos projetos</p>
                </div>
                <div className="author__items">
                    <Link to="#gallery__nelson" className="author__name">
                        projeto do nelson
                    </Link>
                </div>
                <div className="author__items">
                    <Link to="#gallery__grota" className="author__name">
                        rua da grota,20131
                    </Link>
                </div>
                <div className="author__items">
                    <Link to="#gallery__jefferson" className="author__name">
                        casa do lago do Jefferson
                    </Link>
                </div>
            </div>
        </section>
    );

}
