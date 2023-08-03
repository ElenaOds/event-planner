import { createSlice } from '@reduxjs/toolkit';
import { getEvents, createEvents, updateEvents, deleteEvents} from './eventsOperations';

const eventsSlice = createSlice({
    name: "events",
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [getEvents.pending](state) {
        state.isLoading = true;
        },
        [getEvents.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.data = action.payload;
        },
        [getEvents.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
        },

        [createEvents.pending](state) {
        state.isLoading = true;
        },
        [createEvents.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;   
        state.data.push(action.payload);;
        },
        [createEvents.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
        },
        [updateEvents.pending](state) {
        state.isLoading = true;
        },
        [updateEvents.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;   
        const index = state.data.findIndex(
          data => data.id === action.payload.id);
          state.data.splice(index, 1, action.payload);
        },
        [updateEvents.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
        },
        [deleteEvents.pending](state) {
        state.isLoading = true;
        },
        [deleteEvents.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;   
        const index = state.data.findIndex(
        data => data.id === action.payload.id);
        state.data.splice(index, 1);
        },
        [deleteEvents.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
        },
    },
    
});

export default eventsSlice;