import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from '../Layout/MainLayout';
import HomeLayout from '../Layout/HomeLayout';
import Register from '../Components/Register/Register';
import Login from '../Components/Login/Login';

const router = createBrowserRouter([
    {
        path: "",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/" ,
                element:<HomeLayout></HomeLayout>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
        ]
    },
]);

export default router;