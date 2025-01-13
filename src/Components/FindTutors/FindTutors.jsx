import { useEffect, useState } from 'react';
import TutorCard from '../TutorCard/TutorCard';
import { useParams } from 'react-router-dom';

const FindTutors = () => {
    const [tutors, setTutors] = useState([]);
    const [search, setSearch] = useState('');
    const { category } = useParams();

    useEffect(() => {
        const url = search
            ? `http://localhost:5000/all-tutors?search=${search}`
            : category
                ? `http://localhost:5000/all-tutors?category=${category}`
                : 'http://localhost:5000/all-tutors';


        fetch(url)
            .then(res => res.json())
            .then(data => setTutors(data))
            .catch(error => console.error('Fetch error:', error));
    }, [category, search]);


    return (
        <div className='my-10 w-11/12 mx-auto'>
            <div>
                <h2 className='text-4xl text-center font-bold mb-10'>Find Tutorials Here</h2>
            </div>
            <div className='text-center mb-3'>
                <h2><span className='text-xl mr-2'>Search:</span>
                    <input onChange={e => setSearch(e.target.value)} type="text" placeholder="Type here" name='search' className="input input-bordered w-full max-w-xs" /></h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    tutors.map(tutor => <TutorCard key={tutor._id} tutor={tutor}></TutorCard>)
                }
            </div>
        </div>
    );
};

export default FindTutors;