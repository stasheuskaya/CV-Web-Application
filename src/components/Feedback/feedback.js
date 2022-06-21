import './feedback.css';
import FeedbackItem from "./feedback_item";

export default function Feedback(props) {
    return (
      <div>
        {props.data.map(item => 
          <FeedbackItem
            feedback={item.feedback}
            key={item.feedback}
            // photoUrl={item.reporter.photoUrl} 
            name={item.reporter.name} 
            citeUrl={item.reporter.citeUrl}
          />)}
      </div>
    )
}
