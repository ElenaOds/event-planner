import {Wrapper, Title} from './MainPage.styled';
import EventList from '../../components/EventsList/EventsList';


const MainPage = () => {
      return (
        <Wrapper>
         <Title>My events</Title>
         <EventList />
        </Wrapper> 
          
      )
  };
  
  export default MainPage;