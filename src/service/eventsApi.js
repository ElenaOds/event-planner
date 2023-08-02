import axios from "axios";

axios.defaults.baseURL = 'https://64c8abb1a1fe0128fbd6090c.mockapi.io/';


export const getEvents = data => axios.get('/events', data);

export const createEvent = data => axios.post(`/events/${data.id}`, data);

export const updateEvent = data => axios.put(`/events/${data.id}`, data);

export const deleteEvent = data => axios.delete(`/events/${data.id}`, data);
