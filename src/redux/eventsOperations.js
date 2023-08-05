import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCards, createCard, updateCard, deleteCard} from '../service/eventsApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getEvents = createAsyncThunk('events/get', async (thunkAPI) => {
    try {
      const { data } = await getCards();
      return data;
    } catch (error) {
      toast.error('Events cannot be displayed');
      return thunkAPI.rejectWithValue(error.message);
    }
  });

  export const createEvent = createAsyncThunk('events/create',
    async (id, thunkAPI) => {
      try {
        const { data } = await createCard(id);
        return data;
      } catch (error) {
        toast.error('Event cannot be created');
        return thunkAPI.rejectWithValue(error.message);
      }
    });

  export const updateEvents = createAsyncThunk('events/update',
    async (id, thunkAPI) => {
      try {
        const { data } = await updateCard(id);
        return data;
      } catch (error) {
        toast.error('Event cannot be updated');
        return thunkAPI.rejectWithValue(error.message);
      }
    });

    export const deleteEvent = createAsyncThunk('events/delete',
    async (id, thunkAPI) => {
      try {
        const { data } = await deleteCard(id);
        return data;
      } catch (error) {
        toast.error('Event cannot be deleted');
        return thunkAPI.rejectWithValue(error.message);
      }
    });