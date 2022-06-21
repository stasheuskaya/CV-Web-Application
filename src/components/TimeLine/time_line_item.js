export default function TimeLineItem (props) {
    return (
        <div className="timeLine">
            <div className="dateContent">
                <div className="content">
                    <div className="educationDate">
                        {props.date}
                    </div>
                    <div className="vertRuler">
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="textContent">
                <aside className="content">
                    <h1 className="educationTitle">
                        {props.title}
                    </h1>
                    <p className="educationText">
                        {props.text}
                    </p>
                </aside>
            </div>
        </div>
    )
}
