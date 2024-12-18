import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../share/Navbar';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;