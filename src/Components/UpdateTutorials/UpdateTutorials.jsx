import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateTutorials = () => {
    const tutorials = useLoaderData();
    const navigate = useNavigate();

    const { name, email, image, language, price, description, review } = tutorials;

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.tutorName.value;
        const email = form.tutorEmail.value;
        const image = form.image.value;
        const language = form.language.value;
        const price = form.price.value;
        const description = form.description.value;
        const review = form.review.value;
        const updatedTutor = { name, email, image, language, price, description, review }

        //sending data to the server
        fetch(`http://localhost:5000/tutors/${tutorials._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTutor)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Great...",
                        text: "Tutorial Updated Successfully!",
                    })
                    navigate('/myTutorials')
                }
            })
    }


    return (
        <div className='my-20'>
            <form onSubmit={handleUpdate}
                className="max-w-lg mx-auto bg-lime-600 shadow-md rounded-lg p-6 space-y-4">
                <h2 className="text-2xl font-bold text-center">Update Tutorial</h2>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        name="tutorName"
                        defaultValue={name}
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
                        defaultValue={email}
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
                        defaultValue={image}
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
                        defaultValue={language}
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
                        defaultValue={price}
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
                        defaultValue={description}
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
                        defaultValue={review}
                        readOnly
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control mt-4">
                    <button type="submit" className="btn btn-block border-black border-1">
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateTutorials;