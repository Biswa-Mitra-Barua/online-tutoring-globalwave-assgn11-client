import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from '../Layout/MainLayout';
import HomeLayout from '../Layout/HomeLayout';
import Register from '../Components/Register/Register';
import Login from '../Components/Login/Login';
import FindTutors from '../Components/FindTutors/FindTutors';
import AddTutorials from '../Components/AddTutorials/AddTutorials';
import MyTutorials from '../Components/MyTutorials/MyTutorials';
import MyBookedTutors from '../Components/MyBookedTutors/MyBookedTutors';

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
                path: 'findTutors',
                element: <FindTutors></FindTutors>
            },
            {
                path: 'addTutorials',
                element: <AddTutorials></AddTutorials>
            },
            {
                path: 'myTutorials',
                element: <MyTutorials></MyTutorials>
            },
            {
                path: 'myBookedTutors',
                element: <MyBookedTutors></MyBookedTutors>
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