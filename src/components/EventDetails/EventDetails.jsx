import { useParams, useLocation } from "react-router-dom";
import {  useSelector, useDispatch } from 'react-redux';
import { Wrapper, Img, FilterBox, Category, Priority, Details, DetailsBox, DetailsInfo, Title, ContentWrapper, Description, StyledLink } from './EventDetails.styled';
import {deleteEvent} from '../../redux/eventsOperations';

const EventDetails = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { id } = useParams();
    const events = useSelector((state) => state.events.data);
    const event = events.find(event => event.id === id);
    const { name, date, time, place, description, image, category, priority } = event;


    const formattedDate = new Date(date).toLocaleDateString('he-IL', { day:"numeric", month:"numeric" })
    const formattedTime = new Date(time).toLocaleTimeString('he-IL', { hour:"numeric", minute:"numeric" })

    const handleDelete = () => {
         dispatch(deleteEvent({id}));
    };
    
return (
    <Wrapper>    
    <DetailsBox>
        <Img src={image} alt={name}/>
        <FilterBox>
            <Category>{category}</Category>
            <Priority>{priority}</Priority>
        </FilterBox>
        <Details>
            <DetailsInfo>{formattedDate} at {formattedTime}</DetailsInfo>
            <DetailsInfo>{place}</DetailsInfo>
        </Details>
    </DetailsBox>
        <ContentWrapper>
            <Title>{name}</Title>
            <Description>{description}</Description>
            <StyledLink to={`/event/${id}/edit`} key={id} id={id}  state={{from: location}}>Edit</StyledLink>
            <button key={id }onClick={handleDelete}>Delete</button>
        </ContentWrapper>
        
    </Wrapper>
)
  

}

export default EventDetails;