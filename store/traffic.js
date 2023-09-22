import {createSlice, createAction} from "@reduxjs/toolkit";

const trafficSlice = createSlice({
    name: "traffics",
    initialState: {
        trafficState: {currentState: [[0,0,3], [1,0,0], [1,0,0], [1,0,0]], duration: 0, direction: 'asc'},
    },
    reducers: {
        trafficStateUpdated: (traffics, action) => {
            traffics.trafficState = action.payload;
        },

        trafficStateReset: (traffics, action) => {
            traffics.trafficState = {currentState: [[0,0,3], [1,0,0], [1,0,0], [1,0,0]], duration: 0, direction: 'asc'}
        },
    }
});

// console.log(slice);

export const {trafficStateUpdated, trafficStateReset} = trafficSlice.actions;

export default trafficSlice.reducer;

//Actions
export const setTrafficState = createAction(trafficStateUpdated.type);
export const resetTrafficState = createAction(trafficStateReset.type);

// Selector
export const getTrafficState = (state) => state.entities.traffics.trafficState;
