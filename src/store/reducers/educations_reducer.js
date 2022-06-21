import { createReducer } from "@reduxjs/toolkit"
import { ADD_EDUCATIONS, SET_ERROR, SET_LOADED, SET_LOADING } from "../constants/educations_constants"

const initialState = {
    educations: [],
    status: ""
}

export const educationsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(ADD_EDUCATIONS, (state, action) => {
            state.educations = action.payload
        })
        .addCase(SET_LOADING, (state, _action) => {
            state.status = "loading"
        })
        .addCase(SET_LOADED, (state, _action) => {
            state.status = "loaded"
        })
        .addCase(SET_ERROR, (state, _action) => {
            state.status = "error"
        })
  })