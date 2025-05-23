import { Link } from 'react-router-dom';

const TutorCard = ({ tutor }) => {
    const { name, image, language, review } = tutor;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-2 pt-10">
                    <img
                        src={image}
                        alt="Tutor"
                        className=" w-3/4 h-[210px] rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p className='my-1 text-lg'>Language: {language}</p>
                    <p>{review}</p>
                    <div className="card-actions mt-3">
                        <Link to={`/tutor/${tutor._id}`} className="btn btn-outline px-28">
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorCard;