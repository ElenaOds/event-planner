import { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import Layout from './components/Layout/Layout';
import './App.css';

function App() {

  const MainPage = lazy(() => import('./pages/MainPage/MainPage'));

  return (
    <>
    <Suspense fallback={<Loader />}>
        <Routes>
        <Route path="/" element={<Layout />}> 
        <Route index element ={<Navigate to="MainPage"/>} />
        <Route path="MainPage" element={<MainPage />} />
       
          
          </Route> 
        </Routes>
     </Suspense>
    </>
  );
}

export default App;
