import { StyledSearch,  Form, Input, StyledCross } from './SearchBox.styled';

export const SearchBox = () => {
  return (
      <Form> 
      <StyledSearch />
      <Input type="text" placeholder="Search by keywords"/>
      <StyledCross />
       </Form> 
    )
}