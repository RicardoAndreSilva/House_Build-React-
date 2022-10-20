
import { useState, React} from "react";
import './iconBackToTop.css';


export default function BackToTop(props) {

    const [pageYPosition, setPageYPosition] = useState(0);

    function getPageYAfterScroll() {
        setPageYPosition(window.scrollY);
    }

    window.addEventListener('scroll', getPageYAfterScroll);
    return (
        /*--Hiperlink Icon back to top--*/
        <div>
            {pageYPosition > 1000 &&
                <a className="back-to-top" href="#intro" title="back to top" >
                    <span className="material-symbols-outlined">
                        keyboard_arrow_up
                    </span>
                </a>
            }
        </div>
    );
}