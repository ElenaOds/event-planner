import { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import Layout from './components/Layout/Layout';
import EventDetails from './components/EventDetails/EventDetails';
import EditEvent from './components/EditEvent/EditEvent';
import AddEvent from './components/AddEvent/AddEvent';

import './App.css';

function App() {

  const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
  const EventDetailsPage = lazy(() => import('./pages/EventDetailsPage/EventDetailsPage'));

  return (
    <>
    <Suspense fallback={<Loader />}>
        <Routes>
        <Route path="/" element={<Layout />}> 
        <Route index element ={<Navigate to="events"/>} />
        <Route path="events" element={<MainPage />}/>
        <Route path="event" element={<EventDetailsPage />} >
          <Route path="add" element={<AddEvent />} />
          <Route path=":id" element={<EventDetails />} />
          <Route path=":id/edit" element={<EditEvent />} />
         
        </Route> 
        <Route path="*" element={<MainPage />} />
       
          </Route> 
        </Routes>
     </Suspense>
    </>
  );
}

export default App;
