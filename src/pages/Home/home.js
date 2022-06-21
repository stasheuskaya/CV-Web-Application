import './home.css';
import Button from "../../components/Button/button";
import PhotoBox from "../../components/PhotoBox/photo_box";
import userAvatar from '../../assets/images/userAvatar.png';
import { useNavigate } from "react-router-dom";

export default function Home() {
    let navigate = useNavigate(); 
    const routeChange = (path) => () => {
        navigate(path);
    }

    return (
        <>
            <div className="startScreen">
                <div>
                <PhotoBox 
                    avatar={<img src={userAvatar} className="userAvatar" alt="userAvatar"/>}
                    name="Yuliya Stasheuskaya"
                    userSummary="Programmer. Creative. Innovator"
                    description={"Web developer with 6 months of experience in designing websites. \n Recognized for leadership, collaborative abilities when working in team settings."}
                />
                <Button 
                    className='startButton' 
                    title='Know more'
                    onClickHandler={routeChange("/inner")}
                />
                </div>
            </div>
        </>
    )
}
