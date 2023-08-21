import { useParams, useLocation, useNavigate } from "react-router-dom";
import {  useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {deleteEvent} from '../../redux/eventsOperations';
import { Section, Title, Wrapper, Img, DetailsBox, Description, DetailsInfo, DetailsList, Priority, StyledLink, BtnWrapper, Button } from './EventDetails.styled';



const EventDetails = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();
    const events = useSelector((state) => state.events.data);
    const event = events.find(event => event.id === id);
    const { name, date, time, place, description, image, category, priority } = event;

    const formattedDate = new Date(date).toLocaleDateString('dsb-DE', { day:"numeric", month:"numeric" })
    const formattedTime = new Date(time).toLocaleTimeString('en-US', { hour:"numeric", minute:"numeric" })

    const handleDelete = () => {
         dispatch(deleteEvent({id}));
         toast.success("Event is deleted");
         navigate("/events", { replace: true });
    };
    
return (

<Section>
 <Title>{name}</Title>
<Wrapper> 
<Img src={image} alt={name}/>
<DetailsBox>
    <Description>{description}</Description>
    <DetailsInfo>
    <DetailsList>{category}</DetailsList>
   <Priority>{priority}</Priority> 
    <DetailsList>{place}</DetailsList>
    <DetailsList>{formattedDate} at {formattedTime}</DetailsList>
    </DetailsInfo>
    
    <BtnWrapper>
        <StyledLink to={`/event/${id}/edit`} key={id} id={id} state={{from: location}}>Edit</StyledLink>
        <Button onClick={handleDelete}>Delete</Button>
    </BtnWrapper>
</DetailsBox>
</Wrapper> 
</Section>
)
}



export default EventDetails;