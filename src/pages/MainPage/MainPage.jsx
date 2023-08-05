import {Wrapper, Title} from './MainPage.styled';
import EventList from '../../components/EventsList/EventsList';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MainPage = () => {
  const location = useLocation();
      return (
        <Wrapper>
         <Title>My events</Title>
         <Link to={`/event/add`} state={{from: location}}>Add event</Link>
         <EventList />
        </Wrapper>  
      )
  };
  
  export default MainPage;