import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEvent } from '../../redux/eventsOperations';


const AddEvent = () => {
    const dispatch = useDispatch();
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
            
        case 'image':
            setImage(value);
            break;

        case 'priority':
            setPriority(value);
            break;
  
            default:
              return;
        }
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
        reset();  
      } 
 
      const reset = () => {
        setName('');
        setDescription('');
        setDate('');
        setTime('');
        setLocation('');
        setCategory('');
        setImage('');
        setPriority('');
      };


    return (
      <div>
        <h2>Create new event</h2>
        <form onSubmit={handleSubmit}>
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
            <input
            id="date"
            type="date"
            name="date" 
            required
            value={date}
            onChange={handleChange}
            />
          
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
          <select id="category" name="category" defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled>Choose a category</option>
            <option value="art">Art</option>
            <option value="music">Music</option>
            <option value="business">Business</option>
            <option value="conference">Conference</option>
            <option value="workshop">Workshop</option>
            <option value="party">Party</option>
            <option value="sport">Sport</option>
            value={category}
            onChange={handleChange}
          </select>
          
          <label htmlFor="image">Add picture</label>
            <input
            id="image"
            type="file"
            name="image"
            placeholder="Add picture"
            accept="image/png, image/jpeg, image/jpg"
            value={image}
            onChange={handleChange}
            />
          

          <label htmlFor="priority">Priority</label>
          <select id="priority" name="priority" defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled>Choose a priority</option>
            <option value="hight">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
            value={priority}
            onChange={handleChange}
          </select>

          <button type="submit">Add Event</button>
        </form>
       
        </div>
    );
};

export default AddEvent;