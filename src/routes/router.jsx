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
import UpdateTutorials from '../Components/UpdateTutorials/UpdateTutorials';
import PrivateRoute from '../Components/PrivateRoute/PrivateRoute';
import TutorDetails from '../Components/TutorDetails/TutorDetails';

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
                path: 'find-tutors',
                element: <FindTutors></FindTutors>,
                loader: () => fetch('http://localhost:5000/tutors')
            },
            {
                path: 'tutor/:details',
                element: <PrivateRoute>
                    <TutorDetails></TutorDetails>,
                </PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/tutors/${params.details}`)
            },
            {
                path: 'addTutorials',
                element: <PrivateRoute>
                    <AddTutorials></AddTutorials>,
                </PrivateRoute>,
            },
            {
                path: 'updateTutorials',
                element: <UpdateTutorials></UpdateTutorials>
            },
            {
                path: 'myTutorials',
                element: <PrivateRoute>
                    <MyTutorials></MyTutorials>,
                </PrivateRoute>,
            },
            {
                path: 'myBookedTutors',
                element: <PrivateRoute>
                    <MyBookedTutors></MyBookedTutors>,
                </PrivateRoute>,
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