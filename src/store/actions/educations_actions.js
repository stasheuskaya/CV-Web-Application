import { createAction } from "@reduxjs/toolkit"
import { ADD_EDUCATIONS, SET_LOADING, SET_LOADED, SET_ERROR } from "../constants/educations_constants"

export const addEducations = createAction(ADD_EDUCATIONS)
export const setLoading = createAction(SET_LOADING)
export const setLoaded = createAction(SET_LOADED)
export const setError = createAction(SET_ERROR)