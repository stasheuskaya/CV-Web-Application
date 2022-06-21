export default function ExpertiseItem (props) {
    return (
        <table className="expertiseContainer">
            <tr>
                <th className="expertiseCompany">
                    {props.company}
                </th>
                <th className="expertiseJob">
                    {props.job}
                </th>
            </tr>
            <tr>
                <th className="expertiseDate">
                    {props.date}
                </th>
                <th className="expertiseDescription">
                    {props.description}
                </th>
            </tr>
        </table>
    )
  }
