import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {SearchBox} from '../SearchBox/SearchBox';
import { HeaderWrapper, Wrapper, Title, Selector, Box } from './AppBar.styled';

export const AppBar = () => {
  const location = useLocation();
  const [isTablet, setTablet] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setTablet(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <HeaderWrapper>
       
    
    {isTablet ? ( 
       <Box>
      <Title to={`/events`} state={{from: location}}>Event Planner</Title>
      <Wrapper>
        <SearchBox />
        <Selector>
       <option  value='UA'
          >UA</option>
        <option value='EN'
          >EN</option>   
      </Selector>
      </Wrapper>
      </Box> 
    ) : (
      <div>
      <Box>
      <Title to={`/events`} state={{from: location}}>Event Planner</Title>
      <Selector>
       <option  value='UA'
          >UA</option>
        <option value='EN'
          >EN</option>   
      </Selector>
      </Box> 
      <SearchBox /> 
      </div>
    )}

      </HeaderWrapper>
    )
}