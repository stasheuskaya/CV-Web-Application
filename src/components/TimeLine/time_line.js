import './time_line.css';
import React from "react";
import TimeLineItem from "./time_line_item";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

export default function TimeLine() {
  const educations = useSelector(state => state.educations.educations);
  const status = useSelector(state => state.educations.status);

  const content = () => {
    switch(status) {

      case "loading": return <FontAwesomeIcon className="loadingIndicator" icon={faSyncAlt} />;
      case "loaded": return educations.map(item => 
                              <TimeLineItem 
                                date={item.date}
                                title={item.title} 
                                text={item.text}
                                key={item.date}
                              />);
      case "error": return <h1 className="errorMessage">Something went wrong, please review your server connection!</h1>;

      default: return '';
    }
  }

    return (
      <div className={`timeLineData${status !== "loaded" ? ' center' : ''}`}>
        {content()}
      </div>
    )
}
