import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getEvents } from '../../redux/eventsOperations';
import EventCard from '../EventCard/EventCard';
import { List } from './EventsList.styled';

const EventList = () => {
    const dispatch = useDispatch();
    const events = useSelector((state) => state.events.data);

    useEffect(() => {
        dispatch(getEvents());
      }, [dispatch]);
    return (
        <List>
            {events.length === 0 ? (<p>No events are available</p>
            ) : (
                events.map(event => {
                    const { id, name, date, time, place, description, image, category, priority } = event;
                    return (
                        <li key={id}>
                        <EventCard  id={id} name={name} date={date} time={time} place={place} description={description} image={image} category={category} priority={priority}/> 
                     </li>
                    )
                    
                })
            )}

        </List>
    )
}

EventList.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ),
};

export default EventList;