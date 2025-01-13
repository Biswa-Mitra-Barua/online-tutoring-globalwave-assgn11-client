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
import ForgotPassword from '../Components/ForgotPassword/ForgotPassword';
import Error from '../Components/Error/Error';


const router = createBrowserRouter([
    {
        path: "",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <HomeLayout></HomeLayout>
            },
            {
                path: 'find-tutors/:category?',
                element: <FindTutors></FindTutors>,
            },
            {
                path: 'tutor/:details',
                element: <PrivateRoute>
                    <TutorDetails></TutorDetails>,
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://global-wave-server.vercel.app/tutors/${params.details}`)
            },
            {
                path: 'addTutorials',
                element: <PrivateRoute>
                    <AddTutorials></AddTutorials>,
                </PrivateRoute>,
            },
            {
                path: 'updateTutorials/:id',
                element: <PrivateRoute>
                    <UpdateTutorials></UpdateTutorials>,
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://global-wave-server.vercel.app/tutors/${params.id}`)
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
            {
                path: '/forgotPassword',
                element: <ForgotPassword></ForgotPassword>
            },
            {
                path: '*',
                element: <Error></Error>
            },
        ]
    },
]);

export default router;