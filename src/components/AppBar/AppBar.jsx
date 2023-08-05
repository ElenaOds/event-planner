import { Wrapper, Title, Selector, Box } from './AppBar.styled';
import {SearchBox} from '../SearchBox/SearchBox';
import { useLocation } from "react-router-dom";

export const AppBar = () => {
  const location = useLocation();
  return (
    <Wrapper>
      <Box>
      <Title to={`/events`} state={{from: location}}>Event Planner</Title>
      <SearchBox />
      </Box>
      
      <Selector>
       <option  value='UA'
          >UA</option>
        <option value='EN'
          >EN</option>   
      </Selector>
      </Wrapper>
    )
}