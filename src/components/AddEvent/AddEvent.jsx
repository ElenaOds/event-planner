import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { createEvent } from '../../redux/eventsOperations';
import { Section, Title, StyledForm, Label, StyledField } from './AddEvent.styled';

const format = '[A-Za-zА-Яа-яЁёІіЇїЄє/s]+';

const schema = yup.object({
  name: yup.string().matches(format, 'Only letters are allowed').min(3, 'Title should not be shorter than 3 characters').max(25, 'Title should not be longer than 25 characters').required('Please type a title'),
  description: yup.string().min(3, 'Description should not be shorter than 3 characters').max(80, 'Description should not be longer than 80 characters').required('Please type description'),
  place: yup.string().matches(format, 'Only letters are allowed').min(3, 'Location name should not be shorter than 3 characters').max(15, 'Location name should not be longer than 15 characters').required("Please type location"),
  category: yup.mixed().oneOf(['art', 'music', 'business', 'conference', 'workshop', 'party', 'sport'], 'Please select category').required(),
  priority: yup.mixed().oneOf(['high', 'medium', 'low'], 'Please select priority').required(),
  date: yup.date().required('Please select date'),
  time: yup.string().required('Please select time'),
  image: yup.string(),
});

const initialValues = {
  name: '',
  description: '',
  place: '',
  category: 'DEFAULT',
  priority: 'DEFAULT',
  date: '',
  time: '',
  image: '',
}

const AddEvent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


const handleSubmit = (values, {resetForm}) => {
  console.log(values);
 
dispatch(createEvent(values));
toast.success("Event is created");
navigate(`/events`, { replace: true });
resetForm();
}
 
return (
  <Section>
    <Title>Create new event</Title>
  <Formik 
  initialValues={initialValues} 
  validationSchema={schema}
  onSubmit={handleSubmit}>
    <StyledForm autoComplete="off">
      <Label htmlFor="name"><span>Title</span>
      <StyledField
        type="text"
        name="name" 
        placeholder="Title"
      />
      <ErrorMessage name="name" component="div"/>
      </Label>

      <Label htmlFor="description"><span>Description</span>
      <StyledField as="textarea"
        name="description" 
        placeholder="Description"
      />
      <ErrorMessage name="description" component="div"/>
      </Label>

      <Label htmlFor="date"><span>Select date</span>
      <StyledField
        type="date"
        name="date" 
        placeholder="select date"
      />
      <ErrorMessage name="date" component="div"/>
      </Label>

      <Label htmlFor="time"><span>Select time</span>
      <StyledField
        type="time"
        name="time" 
      />
      <ErrorMessage name="time" component="div"/>
      </Label>
  
      <Label htmlFor="place"><span>Location</span>
      <StyledField
        type="text"
        name="place" 
        placeholder="Location"
      />
      <ErrorMessage name="place" component="div"/>
      </Label>

      <Label htmlFor="category"><span>Category</span>
      <StyledField as="select" name="category">
      <option value="DEFAULT" disabled>Choose a category</option>
        <option value="art">Art</option>
        <option value="music">Music</option>
        <option value="business">Business</option>
        <option value="conference">Conference</option>
        <option value="workshop">Workshop</option>
        <option value="party">Party</option>
        <option value="sport">Sport</option> 
      </StyledField>
      <ErrorMessage name="category" component="div"/>
      </Label>

     <Label htmlFor="image"><span>Add picture</span>
      <StyledField
        multiple 
        type="file"
        name="image" 
        placeholder="Add picture"
        accept="image/png, image/gif, image/jpeg, image/jpg"
      />
      <ErrorMessage name="image" component="div"/>
      </Label>

      <Label htmlFor="priority"><span>Priority</span>
      <StyledField as="select" name="priority">
      <option value="DEFAULT" disabled>Choose a priority</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </StyledField>
      <ErrorMessage name="priority" component="div"/>
      </Label>

      <button type="submit">Add Event</button>
      </StyledForm>
    </Formik>
    </Section>
  )
}
export default AddEvent;

// import { useState, useEffect  } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';
// import { createEvent } from '../../redux/eventsOperations';
// import { Section, Title, Form, Label,  Button, FormWrapper } from './AddEvent.styled';

// const AddEvent = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [place, setPlace] = useState('');
//   const [category, setCategory] = useState('');
//   // const [image, setImage] = useState('');
//   const [priority, setPriority] = useState('');
//   const [touched, setTouched] = useState(false);
//   const [disabled, setDisabled] = useState(true);

 
//  const handleChange = e => {
//   const { name, value } = e.target;

//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
      
//       case 'description':
//         setDescription(value);
//         break;

//       case 'date':
//         setDate(value);
//         break;

//       case 'time':
//         setTime(value);
//         break;

//       case 'place':
//         setPlace(value);
//         break;

//       case 'category':
//         setCategory(value);
//         break;

//       case 'priority':
//         setPriority(value);
//         break;
  
//         default:
//         return;
//   }
// };

// // const handleChangeImage = e => {
// //   const fileUploaded = e.target.files[0];
// //   setImage(URL.createObjectURL(fileUploaded));
// // };

//   const handleSubmit = e => {
//     e.preventDefault(); 
//     const newEvent = { 
//       name, 
//       description,
//       date,
//       time,
//       place,
//       category,
//       priority
//     };

//     dispatch(createEvent(newEvent));
//     toast.success("Event is created");
//     navigate(`/events`, { replace: true });
//   }

//   useEffect(() => {
//     if (name.length > 5 && description.length > 1) {
//         setDisabled(false);
//     }
//     else {
//       setDisabled(true);
//     }
//  }, [name, description, place]);


//   return (

//     <Section>
//       <Title>Create new event</Title>
//       <Form onSubmit={handleSubmit}>
//           <FormWrapper>
//         <Label htmlFor="name"><span>Title</span>
//           {touched ? (
//           <input 
//           required
//           minLength="5" 
//           maxLength="30"
//           pattern="[A-Za-zА-Яа-яЁёІіЇїЄє\s]+"/> 
//           ) : (
//             <input
//             id='name'
//             type="text"
//             name="name" 
//             placeholder="Title"
//             value={name}
//             onChange={handleChange}
//             onBlur={() => setTouched(true)}
//           />
//           )}
          
//           {touched ? <p>Please enter 5 - 30 characters. Only letters are accepted</p> : null}
        
        
//         </Label>
        
//         <Label htmlFor="description"><span>Description</span>
//           <textarea
//           id="description"
//           type="text"
//           name="description"
//           rows="5"
//           placeholder="Description"
//           value={description}
//           onChange={handleChange}
//           onBlur={() => setTouched(true)}
//           />
//           </Label>

//           <Label htmlFor="date"><span>Select date</span>
//           <input
//             id="date"
//             type="date"
//             name="date" 
//             value={date}
//             onChange={handleChange}
//           />
//           </Label>
//           <Label htmlFor="time"><span>Select time</span> 
//           <input
//             id="time"
//             type="time"
//             name="time" 
//             value={time}
//             onChange={handleChange}
//           />
//         </Label>
       
//           <Label htmlFor="place"><span>Location</span>
//            {touched ? (
//             <input
//             minLength="3" 
//             maxLength="20"
//             pattern="[A-Za-zА-Яа-яЁёІіЇїЄє\s]+"
//             required
//             />
//            ) : (
//           <input
//           id="place"
//           type="text"
//           name="place" 
//           placeholder="Location"
//           value={place}
//           onChange={handleChange}
//           onBlur={() => setTouched(true)}
//           />
//           )}
//            {touched ? <p>Please type location. Only letters are allowed</p>: null}
//           </Label>

//           <Label htmlFor="category"><span>Category</span>
//           <select 
//             required
//             id="category" 
//             name="category"
//             defaultValue={'DEFAULT'} 
//             value={category.option}
//             onChange={handleChange}>
//             <option value="DEFAULT" disabled>Choose a category</option>
//             <option value="art">Art</option>
//             <option value="music">Music</option>
//             <option value="business">Business</option>
//             <option value="conference">Conference</option>
//             <option value="workshop">Workshop</option>
//             <option value="party">Party</option>
//             <option value="sport">Sport</option> 
//           </select>
//           <p>Please choose an option</p>
//           </Label>

//           <Label htmlFor="image"><span>Add image</span>
//           {/* <img src={image} alt={name}/> */}
//             <input
//             disabled
//             // multiple 
//             // id="image"
//             // type="file"
//             // name="image"
//             // placeholder="Add picture"
//             // accept="image/png, image/gif, image/jpeg, image/jpg"
//             // onChange={handleChangeImage}
//             />
//             </Label>
          
//           <Label htmlFor="priority"><span>Priority</span>
//           <select 
//             required
//             id="priority" 
//             name="priority"
//             defaultValue={'DEFAULT'}
//             value={priority.option}
//             onChange={handleChange}>
//              <option value="DEFAULT" disabled>Choose a priority</option>
//             <option value="High">High</option>
//             <option value="Medium">Medium</option>
//             <option value="Low">Low</option>
            
//           </select>
//           <p>Please choose an option</p>
//           </Label>

//           <Button type="submit" disabled={disabled}>Add Event</Button>
//           </FormWrapper>

        
//         </Form>
//         </Section>
//     );
// };


