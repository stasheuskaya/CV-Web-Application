import '../skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import AddSkillForm from "../AddSkillForm/add_skill_form";
import { useSelector, useDispatch } from "react-redux";
import { toggleOpen } from '../../../store/actions/skills_actions';
import SkillBar from './skill_bar';

export default function Skills () {
    const showSkillForm = useSelector(state => state.skills.isOpen);
    const skills = useSelector(state => state.skills.items);
    const dispatch = useDispatch();

    return (
        <div className="skills">
            <button
                className='skillsEditButton'
                title="Open edit"
                icon={<FontAwesomeIcon icon={faPenToSquare} />}
                onClick={() => dispatch(toggleOpen())}>
                {<FontAwesomeIcon icon={faPenToSquare} />} Open edit
            </button>
            {showSkillForm && (<AddSkillForm />)}
            {skills.map(item => 
                <SkillBar 
                    name={item.name}
                    range={item.range}
            />)}
            <table className="skillTable">
                <tbody className="skillsLine">
                    <tr>
                        <th width="25%"></th>
                        <th></th>
                        <th width="25%"></th>
                    </tr>
                </tbody>
            </table>
            <div className="skillsLineText">
                <h1 className="beginnerSkill">
                    Beginner 
                </h1>
                <h1 className="masterSkill">
                    Master 
                </h1>
            </div>
            <div className="skillsLineText center">
                <h1 className="proficientSkill">
                    Proficient 
                </h1>
                <h1 className="expertSkill">
                    Expert
                </h1>
            </div>
        </div>
    )
}