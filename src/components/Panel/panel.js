import './panel.css';
import Navigation from "../Navigation/navigation";
import PhotoBox from "../PhotoBox/photo_box";
import userAvatar from "../../assets/images/userAvatar.png";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from "../Button/button";
import { useNavigate } from "react-router-dom";
import hamburgerButton from '../../assets/images/hamburgerButton.png';
import { useState } from "react";

export default function Panel() {
    const media = "(max-width: 600px)";
    const mediaQuery = window.matchMedia(media);
    const [isCompact, setIsCompact] = useState(mediaQuery.matches);

    const [isHidden, setIsHidden] = useState(false);
    const clickListener = () => {
        setIsHidden(!isHidden);
    }

    const navigate = useNavigate(); 
    const routeChange = (path) => () => {
        navigate(path);
    }

    mediaQuery.addEventListener("change", () => {
        setIsCompact(mediaQuery.matches)
    });

    const panelState = (isCompact, isHidden) => {
        if (isHidden) {
            return " hidden"
        } else if (isCompact) {
            return " compact"
        } else {
            return ""
        }
    }

    return (
        <div className={`navigationPanel${panelState(isCompact, isHidden)}`}>
            <div className="navigationPanel__fixed">
                <div className={`menuButton${panelState(isCompact, isHidden)}`}>
                    <Button icon={<img src={hamburgerButton} alt="hamburgerButton" />} onClickHandler={clickListener} />
                </div>
                <div className="panelPhotoBox">
                    <PhotoBox 
                        avatar={<img 
                            src={userAvatar} 
                            className={`userImageSideBar${isCompact ? ' compact' : ''}`}
                            alt="userAvatar"/>}
                        name={isCompact ? "" : "Yuliya Stasheuskaya"}
                    />
                </div>
                <Navigation />
                <Button 
                    icon={<FontAwesomeIcon icon={faChevronLeft} />} 
                    title={`${isCompact ? '' : 'Go back'}`}
                    className={`navBackButton${isCompact ? ' compact' : ''}`}
                    onClickHandler={routeChange("/")}
                />
            </div>
        </div>
    )
}