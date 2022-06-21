import Info from "../Info/info";

export default function FeedbackItem (props) {
    return (
        <div className="feedbackContainer">
            <blockquote className="feedback">
                <Info text={props.feedback}/>
            </blockquote>
            <div className="feedbackInfo">
                {/* <img className="feedbackAvatar" src={props.photoUrl} alt="Reporter"/> */}
                <div className="feedbackName">
                    {props.name}, <a href={props.citeUrl}>{props.citeUrl}</a>
                </div>
            </div>
        </div>
    )
}
