export default function SkillBar(props) {
    return (
        <div className="skillBar" style={{width: `${props.range}%`}}>
            {props.name}
        </div>
    )
}