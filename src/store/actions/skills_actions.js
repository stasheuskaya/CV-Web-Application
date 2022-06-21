import { createAction } from "@reduxjs/toolkit"
import { ADD_SKILL, ADD_SKILLS, TOGGLE_OPEN } from "../constants/skills_constants"

export const addSkill = createAction(ADD_SKILL)
export const addSkills = createAction(ADD_SKILLS)
export const toggleOpen = createAction(TOGGLE_OPEN)