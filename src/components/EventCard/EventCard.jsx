import { Wrapper, Img, FilterBox, Category, Priority, Details, DetailsBox, DetailsInfo, Title, ContentWrapper, Description, StyledLink } from './EventCard.styled';
import { useLocation } from "react-router-dom";

const EventCard = ({ id, name, date, time, place, description, image, category, priority}) => {
    const location = useLocation();

    const formattedDate = new Date(date).toLocaleDateString('dsb-DE', { day:"numeric", month:"numeric" })
    const formattedTime = new Date(time).toLocaleTimeString('dsb-DE', { hour:"numeric", minute:"numeric" })
    const capitalizedValue = value => value.charAt(0).toUpperCase() + value.slice(1);

     
    
    return (
        <Wrapper>    
        <DetailsBox>
            <Img src={image} alt={name}/>
            <FilterBox>
                <Category>{capitalizedValue(category)}</Category>
                <Priority style={{ color: priority === "High" ? "#FF2B77" : priority === "Medium" ? "#E2A300" : priority === "Low" ? "#6BD475" : null}}>
                    {capitalizedValue(priority)}</Priority>
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