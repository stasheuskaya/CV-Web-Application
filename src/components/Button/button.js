import './button.css';

export default function Button(props) {
    return (
        <button
            icon={props.icon}
            disabled={props.disabled}
            onClick={props.onClickHandler}
            className={props.className}>
                <div className="icon">
                    {props.icon}
                </div>
                    {props.title} 
        </button>
    )
}
