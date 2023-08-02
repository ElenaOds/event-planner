import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { AppBar } from "../AppBar/AppBar";
import Loader from '../Loader/Loader';

const Layout = () => {
    return (       
    <div display="grid" gridtemplaterows="300px 1fr">
         <AppBar />
         <Suspense fallback={<Loader />}> 
            <Outlet />
         </Suspense> 
    </div>
    );
};

export default Layout;