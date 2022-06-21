import './photo_box.css';
export default function PhotoBox(props) {
    return (
        <div className="photoBox">
            <div 
                className="userImage">
                    {props.avatar}
            </div>
            <h1 className={"userName"}
                name={props.name}>
                    {props.name}
            </h1>
            <h2 className="userSummary">
                    {props.userSummary}
            </h2>
            <div 
                style={{ whiteSpace: "pre-line" }}
                className="userDescription">
                    {props.description}
            </div>
        </div>
    )
}