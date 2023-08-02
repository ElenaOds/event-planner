import { Wrapper, Title, Selector, Box } from './AppBar.styled';
import {SearchBox} from '../SearchBox/SearchBox';

export const AppBar = () => {
  return (
    <Wrapper>
      <Box>
      <Title>Event Planner</Title>
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