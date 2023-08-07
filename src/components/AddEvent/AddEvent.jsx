import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { createEvent } from '../../redux/eventsOperations';
import { toast } from 'react-toastify';
import DatePicker from "react-datepicker";
import {Section, Title, Form} from './AddEvent.styled';

import "react-datepicker/dist/react-datepicker.css";

const AddEvent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [priority, setPriority] = useState('');

    const handleChange = e => {
        const { name, value } = e.target;
        
        switch (name) {
          case 'name':
            setName(value);
            break;
  
          case 'description':
            setDescription(value);
            break;

        case 'time':
            setTime(value);
            break;

        case 'location':
            setLocation(value);
            break;

        case 'category':
            setCategory(value);
            break;

        case 'priority':
            setPriority(value);
            break;
  
            default:
              return;
        }
      };

      const handleChangeImage = e => {
        const fileUploaded = e.target.files[0];
        setImage(URL.createObjectURL(fileUploaded));
      };

      const handleSubmit = e => {
        e.preventDefault(); 
        const newEvent = { 
          name, 
          description,
          date,
          time,
          location,
          category,
          image,
          priority
        };
      
        dispatch(createEvent(newEvent));
        toast.success("Event is created");
        navigate(`/events`, { replace: true });
        }
 
    return (
      <Section>
        <Title>Create new event</Title>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="name">Title</label>
            <input
            id='name'
            type="text"
            name="name" 
            minLength="5" 
            maxLength="30"
            placeholder="title"
            required
            value={name}
            onChange={handleChange}
            />
        
          <label htmlFor="description">Description</label>
            <textarea
            id="description"
            type="text"
            name="description" 
            maxLength="300"
            rows="5" 
            placeholder="description"
            required
            value={description}
            onChange={handleChange}
            />
          
          <label htmlFor="date">Select date</label>
          <div>
            <DatePicker
            selected={date}
            onChange={setDate}
            dateFormat='dd/MM/yyyy'
            />
          </div>
      
          
          <label htmlFor="time">Select time</label>
            <input
            id="time"
            type="time"
            name="time" 
            required
            value={time}
            onChange={handleChange}
            />
         
          <label htmlFor="location">Location</label>
            <input
            id="location"
            type="text"
            name="location" 
            placeholder="location"
            required
            value={location}
            onChange={handleChange}
            />
          

          <label htmlFor="category">Category</label>
          <select id="category" name="category" 
            defaultValue={"DEFAULT"}
            value={category.option}
            onChange={handleChange}>
            <option value="DEFAULT" disabled>Choose a category</option>
            <option value="art">Art</option>
            <option value="music">Music</option>
            <option value="business">Business</option>
            <option value="conference">Conference</option>
            <option value="workshop">Workshop</option>
            <option value="party">Party</option>
            <option value="sport">Sport</option> 
          </select>
          
          <label htmlFor="image">Add picture</label>
          <img
              src={image}
              alt={name}
            />
            <input
            multiple 
            id="image"
            type="file"
            name="image"
            placeholder="Add picture"
            accept="image/png, image/gif, image/jpeg, image/jpg"
            onChange={handleChangeImage}
            />
          
          <label htmlFor="priority">Priority</label>
          <select id="priority" name="priority" 
            defaultValue={'DEFAULT'}
            value={priority.option}
            onChange={handleChange}>
            <option value="DEFAULT" disabled>Choose a priority</option>
            <option value="hight">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
            
          </select>

          <button type="submit">Add Event</button>
        </Form>
       
        </Section>
    );
};

export default AddEvent;