import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
                        <EventCard key={id} id={id} name={name} date={date} time={time} place={place} description={description} image={image} category={category} priority={priority}/>
                    )
                })
            )}

        </List>
    )
}

export default EventList;