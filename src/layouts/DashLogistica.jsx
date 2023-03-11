import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/NavbarLogistica/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'


export const DashLogistica = () => {
    return (
        <>
            <div className='w-full bg-[#0283C6] h-1/3 fixed'></div>
            <Sidebar />
            <div className="relative md:ml-64">
                <Navbar />

                <div className="px-4 md:px-10 mx-auto w-full">
                    <Outlet />
                </div>
            </div>
        </>
    )
};

