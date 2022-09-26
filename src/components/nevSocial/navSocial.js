import React from 'react'
import { Link } from 'react-router-dom';
import facebook from '../../assets/logo_facebook.webp'
import instagram from '../../assets/logo__instagram.webp'
import media from '../../assets/logo_media.webp'
import './navSocial.css';

export default function NavSocial() {
    return (
        /*--Nav Social--*/
        <div className="social">
            <ul className="social__pages">
                <li className="social__page">
                    <Link className="social__link" to="#">
                        <img className="social__img" src={facebook} alt="Icon facebook" />
                    </Link>
                </li>
                <li className="social__page">
                    <Link className="social__link" to="#">
                        <img className="social__img" src={instagram} alt="Icon instagram" />
                    </Link>
                </li>
                <li className="social__page">
                    <Link className="social__link" to="#">
                        <img className="social__img" src={media} alt="Icon facebook" />
                    </Link>
                </li>
            </ul>
        </div>
    );

}
