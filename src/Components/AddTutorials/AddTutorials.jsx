import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddTutorials = () => {
    const { user } = useContext(authContext);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.tutorName.value;
        const email = form.tutorEmail.value;
        const image = form.image.value;
        const language = form.language.value;
        const price = form.price.value;
        const description= form.description.value;
        const review = form.review.value;
        const newTutor = {name, email, image, language, price, description, review}

        //sending data to the server
        fetch('http://localhost:5000/tutors', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTutor)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        icon: "success",
                        title: "Great...",
                        text: "Tutorial Added Successfully!",
                    })
                    navigate('/myTutorials')
                }
            })
    }

    return (
        <div className='my-20'>
            <form onSubmit={handleSubmit}
                className="max-w-lg mx-auto bg-lime-600 shadow-md rounded-lg p-6 space-y-4">
                <h2 className="text-2xl font-bold text-center">Add Tutorial</h2>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        name="tutorName"
                        value={user?.displayName || 'User'}
                        readOnly
                        className="input input-bordered w-full bg-gray-100"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name="tutorEmail"
                        value={user?.email || 'No email available'}
                        readOnly
                        className="input input-bordered w-full bg-gray-100"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input
                        type="text"
                        name="image"
                        placeholder="Enter tutorial image url"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Language</span>
                    </label>
                    <input
                        type="text"
                        name="language"
                        placeholder="Enter language name"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="text"
                        name="price"
                        placeholder="Enter price"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        name="description"
                        placeholder="Enter description"
                        className="textarea textarea-bordered w-full"
                    ></textarea>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Review</span>
                    </label>
                    <input
                        type="number"
                        name="review"
                        placeholder="Enter your review"
                        defaultValue={0}
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control mt-4">
                    <button type="submit" className="btn btn-block border-black border-1">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTutorials;