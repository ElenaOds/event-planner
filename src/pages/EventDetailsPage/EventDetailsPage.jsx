import { useLocation, Outlet } from "react-router-dom";
import { Suspense }  from 'react';
import { Wrapper, StyledLink, ArrowLeft } from './EventDetailsPage.styled';


const EventDetailsPage = () => {
    const location = useLocation();

    const backLinkHref = location.state?.from ?? "/events";
    return (
        <Wrapper>
             <StyledLink to={backLinkHref}>
            <ArrowLeft aria-label="Back"/>
            Back</StyledLink> 
      
        <Suspense fallback={null}>
        <Outlet />
        </Suspense>  
    
        </Wrapper>
    )
}

export default EventDetailsPage;
