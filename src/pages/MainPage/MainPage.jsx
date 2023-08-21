import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import EventList from '../../components/EventsList/EventsList';
import { ReactComponent as PlusIcon} from '../../icons/plus.svg'
import { Wrapper, Title, StyledLink, BtnWrapper, BtnText, BtnContainer, ListWrapper } from './MainPage.styled';

const MainPage = () => {
  const location = useLocation();
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1280);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1450);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
    return (
      <Wrapper>
        
        {isDesktop ? (
          <BtnContainer>
            <Title>My events</Title>
            <BtnWrapper>
              <StyledLink to={`/event/add`} state={{from: location}}>
              <PlusIcon/>
              <BtnText>Add new event</BtnText>
              </StyledLink>
            </BtnWrapper>
          </BtnContainer>
      ) : (
        <div>
          <BtnWrapper>
            <StyledLink to={`/event/add`} state={{from: location}}>
            <PlusIcon/>
            <BtnText>Add new event</BtnText>
           </StyledLink>
          </BtnWrapper>

          <Title>My events</Title>
       </div>
      )}
      <ListWrapper>
      <EventList />
      </ListWrapper>
      
      </Wrapper>  
    )
  };
  
  export default MainPage;