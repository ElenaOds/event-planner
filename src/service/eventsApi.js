import axios from "axios";

axios.defaults.baseURL = 'https://64c8abb1a1fe0128fbd6090c.mockapi.io/';

export const getCards = data => axios.get('/events', data);

export const createCard = data => axios.post(`/events/`, data);

export const updateCard = data => axios.put(`/events/${data.id}`, data);

export const deleteCard = data => axios.delete(`/events/${data.id}`, data);
