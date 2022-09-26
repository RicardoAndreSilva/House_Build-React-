import React from 'react'
import { Link } from 'react-router-dom'
import './iconBackToTop.css';


export default function BackToTop(props) {
    return (
 /*--Icon back to top--*/
        <Link className="back-to-top" to="#intro" title="back to top" >
            <span className="material-symbols-outlined">
                keyboard_arrow_up
            </span>
        </Link>
    );
}