import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { AppBar } from "../AppBar/AppBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader/Loader';
import { Main } from './Layout.styled';



const Layout = () => {
    return (       
    <div display="grid" gridtemplaterows="300px 1fr">
         <AppBar />
         <Main>
         <Suspense fallback={<Loader />}> 
            <Outlet />
         </Suspense> 
         <ToastContainer autoClose={3000} theme="colored"/>
         </Main>
    </div>
    );
};

export default Layout;