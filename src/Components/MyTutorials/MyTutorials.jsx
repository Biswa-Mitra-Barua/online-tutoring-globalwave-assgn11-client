import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyTutorials = () => {
    const { user } = useContext(authContext);

    const [tutorials, setTutorials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const userSpecificTutorials = async () => {
            if (!user?.email) {
                setError('User not authenticated');
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`http://localhost:5000/tutors?email=${user.email}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch tutorials');
                }

                const data = await response.json();
                setTutorials(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        userSpecificTutorials();
    }, [user.email]);

    if (loading) {
        return <div className="text-center"><span className="loading loading-bars loading-lg"></span></div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{error.message}</div>;
    }

    const handleDelete = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/tutors/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your equipment has been deleted.",
                                icon: "success"
                            });
                            const remaining = tutorials.filter(tut => tut._id !== _id)
                            setTutorials(remaining)
                        }
                    })
            }
        });
    }


    return (
        <div className='w-11/12 mx-auto'>
            <div className="overflow-x-auto">
                <table className="table">

                    <thead className='font-bold text-cyan-700 text-sm'>
                        <tr>
                            <th>Sl No.</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Language</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Review</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            tutorials.map((tutorial, index) =>
                                <tr key={tutorial._id}>
                                    <th>{index + 1}</th>
                                    <td>{tutorial.name}</td>
                                    <td><img className='w-12 h-12 rounded-full' src={tutorial.image} alt="" /></td>
                                    <td>{tutorial.language}</td>
                                    <td>${tutorial.price}</td>
                                    <td>{tutorial.description}</td>
                                    <td>{tutorial.review}</td>
                                    <td>
                                        <Link to={`/updateTutorials/${tutorial._id}`}>
                                        <button type='submit' className="btn btn-primary">Update</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(tutorial._id)}
                                            className="btn btn-primary">Delete</button>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTutorials;