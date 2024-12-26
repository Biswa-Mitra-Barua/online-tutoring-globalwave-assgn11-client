import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';

const TutorDetails = () => {
    const { user } = useContext(authContext);
    const tutor = useLoaderData();
    const navigate = useNavigate();

    const handleBook = () => {
        if(user?.email === tutor?.email){
            toast.error('Action not permitted!');
            return
        } 

        const name = tutor.name;
        const tutorId = tutor._id;
        const Image = tutor.image;
        const language = tutor.language;
        const Price = tutor.price;
        const tutorEmail = tutor.email;
        const review = tutor.review;
        const email = user.email;
            
        const bookedTutor = { name, tutorId, tutorEmail, Price, language, Image, email, review }

        //sending data to the server
        fetch('https://global-wave-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookedTutor)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Great...",
                        text: "Tutor Booked Successfully!",
                    })
                    navigate('/myBookedTutors')
                }
            })
    }

    

    return (
        <div className='my-10'>
            <div className="py-12 bg-blue-800 bg-opacity-5">
                <h1 className="text-center shadow-highlight text-4xl sm:text-5xl font-extrabold text-gray-500 drop-shadow-lg">
                    Explore the Details of this Tutorial
                </h1>
                <p className="text-center text-lg text-gray-500 mt-3">
                    Dive deep into the specifics and features of this tutorial.
                </p>
            </div>

            <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4 sm:px-6 lg:px-8">

                <div className="relative group flex flex-col md:flex-row max-w-4xl items-center gap-6 p-6 bg-white rounded-xl shadow-xl transform transition-transform duration-500 hover:scale-105">

                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl blur-lg opacity-70 animate-glaze"></div>

                    <div className="relative w-full md:w-1/2">
                        <img
                            src={tutor.image}
                            alt="Equipment"
                            className="rounded-xl shadow-lg object-cover w-full h-52 sm:h-64 md:h-full transition-transform duration-700 hover:scale-110"
                        />
                    </div>

                    <div className="relative w-full md:w-1/2 text-left space-y-2">
                        <h2 className="text-2xl font-extrabold text-purple-700 mb-4">
                            Tutor: {tutor.name}
                        </h2>
                        <h2 className="text-xl font-extrabold text-purple-700 mb-4">
                            Language: {tutor.language}
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Price: ${tutor.price}
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Description: {tutor.description}
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Review: {tutor.review}
                        </p>
                        <button onClick={handleBook} className='btn btn-info'>Book</button>
                        <ToastContainer></ToastContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorDetails;