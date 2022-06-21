import { combineReducers } from "redux";
import { skillsReducer } from "./skills_reducer";
import { educationsReducer } from "./educations_reducer";

const allReducers = combineReducers({
    skills: skillsReducer,
    educations: educationsReducer
})

export default allReducers;