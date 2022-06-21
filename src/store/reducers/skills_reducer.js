import { createReducer } from "@reduxjs/toolkit"
import { ADD_SKILL, ADD_SKILLS, TOGGLE_OPEN } from "../constants/skills_constants"

const initialState = {
    isOpen: false,
    items: []
}

export const skillsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(ADD_SKILL, (state, action) => {
            state.items.push(action.payload)
        })
        .addCase(ADD_SKILLS, (state, action) => {
            state.items = action.payload
        })
        .addCase(TOGGLE_OPEN, (state, action) => {
            state.isOpen = !state.isOpen
        })
  })