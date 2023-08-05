import { Wrapper, Img, FilterBox, Category, Priority, Details, DetailsBox, DetailsInfo, Title, ContentWrapper, Description, StyledLink } from './EventCard.styled';
import { useLocation } from "react-router-dom";

const EventCard = ({ id, name, date, time, place, description, image, category, priority}) => {
    const location = useLocation();

    const formattedDate = new Date(date).toLocaleDateString('he-IL', { day:"numeric", month:"numeric" })
    const formattedTime = new Date(time).toLocaleTimeString('he-IL', { hour:"numeric", minute:"numeric" })
    
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
                <Description>{description.slice(0, 90)} {description.length > 90 && '...'}</Description> 
                <StyledLink to={`/event/${id}`} key={id} id={id} state={{from: location}}>More info</StyledLink>
            </ContentWrapper>
            
        </Wrapper>
    )
}

export default EventCard;