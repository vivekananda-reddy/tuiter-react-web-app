import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {
    createTuitThunk,
    deleteTuitThunk,
    findTuitsThunk,
    updateTuitThunk
} from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}


const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "../../../images/nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "disliked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "dislikes": 0
}

const tuitsSlice = createSlice(
    {
               name: 'tuits',
               initialState,
                reducers: {


                },
                extraReducers: {
                    [findTuitsThunk.pending]:
                        (state) => {
                            state.loading = true
                            state.tuits = []
                        },
                    [findTuitsThunk.fulfilled]:
                        (state, { payload }) => {
                            state.loading = false
                            state.tuits = payload
                        },
                    [findTuitsThunk.rejected]:
                        (state, action) => {
                            state.loading = false
                            state.error = action.error
                        },
                    [deleteTuitThunk.fulfilled] :
                        (state, { payload }) => {
                            state.loading = false
                            state.tuits = state.tuits.filter(t => t._id !== payload)
                        },
                    [createTuitThunk.fulfilled]:
                        (state, { payload }) => {
                            state.loading = false
                            state.tuits.push(payload)
                        },
                    [updateTuitThunk.fulfilled]:
                        (state, { payload }) => {
                            state.loading = false
                            const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)
                            state.tuits[tuitNdx] = {
                                ...state.tuits[tuitNdx],
                                ...payload
                            }
                        }



                },


    });

export default tuitsSlice.reducer;
export const {toggleLikes, createTuit, deleteTuit} = tuitsSlice.actions;