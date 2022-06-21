// import Button from "../Button/button";
// import { useNavigate } from "react-router-dom";
import './navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import { faSuitcase} from '@fortawesome/free-solid-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-scroll';



export default function Navigation(props) {
    // let navigate = useNavigate(); 
    // const routeChange = (path) => () => {
    //     navigate(path);
    // }

    return (
        <nav >
             <ul className="navBar">
                <Link 
                    className="panelLinks"
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    to="about"
                    >
                    <p className='linkIcon'>
                    {<FontAwesomeIcon icon={faUser} />}
                        </p>
                        <p className='linkName'>
                        About
                        </p>
                </Link>
                <Link 
                    className="panelLinks"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    to="education"
                    >
                    <p className='linkIcon'>
                        {<FontAwesomeIcon icon={faGraduationCap}/>}
                    </p>
                    <p className='linkName'>
                        Education
                    </p>
                </Link>
                <Link 
                    className="panelLinks"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    to="experience"
                    >
                     <p className='linkIcon'>
                        {<FontAwesomeIcon icon={faPen} />}
                    </p>
                    <p className='linkName'>
                        Experience
                    </p>
                </Link>
                <Link
                    className="panelLinks"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    to="skills"
                    >
                    <p className='linkIcon'>
                        {<FontAwesomeIcon icon={faGem} />}
                    </p>
                    <p className='linkName'>
                        Skills
                    </p>
                </Link>
                <Link 
                    className="panelLinks"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    to="portfolio"
                    >
                        <p className='linkIcon'>
                            {<FontAwesomeIcon icon={faSuitcase} />}
                        </p>
                        <p className='linkName'>
                            Portfolio
                        </p>
                </Link>
                <Link 
                    className="panelLinks"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    to="contacts"
                    >
                        <p className='linkIcon'>
                            {<FontAwesomeIcon icon={faLocationArrow}/>}
                        </p>
                        <p className='linkName'>
                            Contacts
                        </p>
                </Link>
                <Link 
                    className="panelLinks"
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    to="feedbacks"
                    >
                        <p className='linkIcon'>
                            {<FontAwesomeIcon icon={faComment} />}
                        </p>
                        <p className='linkName'>
                            Feedback
                        </p>
            
                </Link>
            </ul>
        </nav>
    )
}
