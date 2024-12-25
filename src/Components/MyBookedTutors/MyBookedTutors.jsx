import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const MyBookedTutors = () => {

    const { user } = useContext(authContext);

    const [tutorials, setTutorials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        const userBookedTutorials = async () => {
            if (!user?.email) {
                setError('User not authenticated');
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`http://localhost:5000/users?email=${user.email}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch booked tutorials');
                }

                const data = await response.json();
                setTutorials(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        userBookedTutorials();
    }, [user.email]);

    if (loading) {
        return <div className="text-center"><span className="loading loading-bars loading-lg"></span></div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{error.message}</div>;
    }

    const handleReview = async (tutorId) => {
        try {
            const response = await fetch(`http://localhost:5000/tutors/${tutorId}`, {
                method: 'PATCH',
                headers: {
                    'content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to update review');
            }

            setTutorials(prevTutorials =>
                prevTutorials.map(tutorial =>
                    tutorial._id === tutorId ? { ...tutorial, review: (tutorial.review || 0) + 1 } : tutorial
                )
            );

            toast('Review updated successfully!');
        } catch (error) {
            console.error('Error updating review:', error);
            toast('Failed to update review');
        }
    };


    return (
        <div className='w-11/12 mx-auto'>
            
            <div className="overflow-x-auto">
                <table className="table">

                    <thead className='font-bold text-cyan-700 text-sm'>
                        <tr>
                            <th>Sl No.</th>
                            <th>Tutor's Name</th>
                            <th>Image</th>
                            <th>Language</th>
                            <th>Price</th>
                            <th>Review</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            tutorials.map((tutorial, index) =>
                                <tr key={tutorial._id}>
                                    <th>{index + 1}</th>
                                    <td>{tutorial.name}</td>
                                    <td><img className='w-12 h-12 rounded-full' src={tutorial.Image} alt="" /></td>
                                    <td>{tutorial.language}</td>
                                    <td>${tutorial.Price}</td>
                                    
                                    <td>
                                        <button
                                            onClick={() => handleReview(tutorial._id)}
                                            className="btn btn-primary">Review</button>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookedTutors;