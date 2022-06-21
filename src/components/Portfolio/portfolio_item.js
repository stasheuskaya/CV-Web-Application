import UI_one from "../../assets/images/UI_one.png";
import UI_two from "../../assets/images/UI_two.png";

export default function PortfolioItem (props) {
    return (
        <div className="portfolioItem">      
            <img 
                src={props.type === "ui" ? UI_one : UI_two} 
                className="portfolioImage" 
                alt="userAvatar"/>
            <div className='portfolioDescription'>
                <h1 className="portfolioTextTitle">
                    {props.title}
                </h1>
                <h2>{props.text}</h2>
                <a href="/inner">View resource</a>
            </div>
        </div>
    )
}
