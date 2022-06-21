import ExpertiseItem from "./expertise_item";
import './expertise.css';

export default function Expertise(props) {
    return (
      <div>
        {props.data.map(item => 
        <ExpertiseItem 
          date={item.date}
          key={item.date}
          company={item.info.company} 
          job={item.info.job} 
          description={item.info.description} 
          />)}
      </div>
    )
}
