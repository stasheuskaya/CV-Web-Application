import './inner.css';
import Panel from "../../components/Panel/panel";
import Box from "../../components/Box/box"
import Expertise from "../../components/Expertise/expertise";
import TimeLine from "../../components/TimeLine/time_line";
import Contacts from "../../components/Contacts/contacts";
import Feedback from "../../components/Feedback/feedback";
import { expertisesData, feedbackData, portfolioData } from '../../mock_data/mock_data';
import Portfolio from "../../components/Portfolio/portfolio";
import Skills from "../../components/Skills/Skills/skills";
import Button from "../../components/Button/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Inner(props) {
    return (
            <div className="innerPage">
                <Panel />
                <div className="innerContent">
                    <Box 
                        id="about"
                        title="About me"
                        content="Diligent Web developer with 6 months of experience in designing and maintaining websites. Recognized for leadership and collaborative abilities when working in team settings. Motivated to provide clients with user-friendly and high quility applications."
                    />
                    <Box
                        id="education"
                        title="Education"
                        content={<TimeLine id="experience" />}
                    />
                    <Box 
                        id="experience"
                        title="Experience"
                        content={<Expertise data={expertisesData}/>}
                    />
                    <Box 
                        id="skills"
                        title="Skills"
                        content={<Skills />}
                    />
                    <Box 
                        id="portfolio"
                        title="Portfolio"
                        content={<Portfolio data={portfolioData}/>}
                    />
                    <Box 
                        id="contacts"
                        title="Contacts"
                        content={<Contacts />}
                    />
                    <Box 
                        title="Feedbacks"
                        id="feedbacks"
                        content={<Feedback data={feedbackData} />}
                    />
                    <div className="backToTop">
                        <Button 
                            icon={<FontAwesomeIcon icon={faChevronUp} 
                            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}/>} />
                    </div>
                </div>
            </div>  
    )
}
