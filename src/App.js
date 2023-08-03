import { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import Layout from './components/Layout/Layout';
import './App.css';

function App() {

  const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
  const EventDetailsPage = lazy(() => import('./pages/EventDetailsPage/EventDetailsPage'))


  return (
    <>
    <Suspense fallback={<Loader />}>
        <Routes>
        <Route path="/" element={<Layout />}> 
        <Route index element ={<Navigate to="events"/>} />
        <Route path="events" element={<MainPage />} />
        <Route path="events/:eventId" element={<EventDetailsPage />}></Route>
        <Route path="*" element={<MainPage />} />
       
          </Route> 
        </Routes>
     </Suspense>
    </>
  );
}

export default App;
