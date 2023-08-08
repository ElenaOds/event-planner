import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { createEvent } from '../../redux/eventsOperations';
import { toast } from 'react-toastify';
import { Section, Title, Form, Label,  Button, FormWrapper } from './AddEvent.styled';

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
  const [touched, setTouched] = useState(false);

 
 const handleChange = e => {
  const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      
      case 'description':
        setDescription(value);
        break;

      case 'date':
        setDate(value);
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
          <FormWrapper>
        <Label htmlFor="name"><span>Title</span>
          {touched ? (
          <input 
          required
          minLength="5" 
          maxLength="30"
          pattern="[A-Za-zА-Яа-яЁёІіЇїЄє\s]+"/> 
          ) : (
            <input
            id='name'
            type="text"
            name="name" 
            placeholder="Title"
            value={name}
            onChange={handleChange}
            onBlur={() => setTouched(true)}
          />
          )}
          
          {touched ? <p>Please enter 5 - 30 characters. Only letters are accepted</p> : null}
        
        
        </Label>
        
        <Label htmlFor="description"><span>Description</span>
          <textarea
          id="description"
          type="text"
          name="description"
          rows="5"
          placeholder="Description"
          value={description}
          onChange={handleChange}
          onBlur={() => setTouched(true)}
          />
          </Label>

          <Label htmlFor="date"><span>Select date</span>
          <input
            id="date"
            type="date"
            name="date" 
            value={date}
            onChange={handleChange}
          />
          </Label>
          <Label htmlFor="time"><span>Select time</span> 
          <input
            id="time"
            type="time"
            name="time" 
            value={time}
            onChange={handleChange}
          />
        </Label>
       
          <Label htmlFor="location"><span>Location</span>
           {touched ? (
            <input
            minLength="3" 
            maxLength="20"
            pattern="[A-Za-zА-Яа-яЁёІіЇїЄє\s]+"
            required
            />
           ) : (
          <input
          id="location"
          type="text"
          name="location" 
          placeholder="Location"
          value={location}
          onChange={handleChange}
          />
          )}
           {touched ? <p>Please type location. Only letters are allowed</p>: null}
          </Label>

          <Label htmlFor="category"><span>Category</span>
          <select 
            required
            id="category" 
            name="category"
            defaultValue={'DEFAULT'} 
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
          <p>Please choose an option</p>
          </Label>

          <Label htmlFor="image"><span>Add image</span>
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
            </Label>
          
          <Label htmlFor="priority"><span>Priority</span>
          <select 
            required
            id="priority" 
            name="priority"
            defaultValue={'DEFAULT'}
            value={priority.option}
            onChange={handleChange}>
             <option value="DEFAULT" disabled>Choose a priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
            
          </select>
          <p>Please choose an option</p>
          </Label>

          <Button type="submit">Add Event</Button>
          </FormWrapper>

        
        </Form>
        </Section>
    );
};

export default AddEvent;