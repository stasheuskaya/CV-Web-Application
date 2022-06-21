import { getEducations } from '../../services/api_client'
import { addEducations, setError, setLoaded, setLoading } from '../actions/educations_actions';
import { addSkills, addSkill } from '../actions/skills_actions';

export const loadEducations = () => async (dispatch, _getState) => {
    try {
        dispatch(setLoading());
        const response = await getEducations();
        const educations = await response.json();
        dispatch(addEducations(educations));
        dispatch(setLoaded());
    } catch(e) {
        dispatch(setError());
    }
}

export const loadSkills = () => async (dispatch, _getState) => {
  try {
    const skills = JSON.parse(localStorage.skills);
    dispatch(addSkills(skills));
  } catch(e) {
    dispatch(addSkills([]));
  }
}

export const saveSkill = (skill) => async (dispatch, getState) => {
  dispatch(addSkill(skill))
  const skills = getState().skills.items;
  localStorage.skills = JSON.stringify(skills);
}