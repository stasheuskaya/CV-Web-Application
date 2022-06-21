import './box.css';

export default function Box(props) {
    return (
        <>
            <div className="boxContainer">
                <p 
                    id={props.id}
                    className="boxTitle">
                    {props.title}
                </p>
                <div className="boxContent">
                    {props.content}
                </div>
            </div>
        </>
    )
}