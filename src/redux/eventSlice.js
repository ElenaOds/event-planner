import { createSlice } from '@reduxjs/toolkit';
import { getEvents, createEvent, updateEvents, deleteEvent} from './eventsOperations';

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
        [createEvent.pending](state) {
        state.isLoading = true;
        },
        [createEvent.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;   
        state.data.push(action.payload);
        },
        [createEvent.rejected](state, action) {
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
          state.data.splice(index, 1);
        },
        [updateEvents.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
        },
        
        [deleteEvent.pending](state) {
        state.isLoading = true;
        },
        [deleteEvent.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;   
        const index = state.data.findIndex(
        data => data.id === action.payload.id);
        state.data.splice(index, 1);
        },
        [deleteEvent.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
        },
    },
    
});

export default eventsSlice;