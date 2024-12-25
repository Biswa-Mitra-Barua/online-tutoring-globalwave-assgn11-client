import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TutorCard from '../TutorCard/TutorCard';

const FindTutors = () => {
    const tutors = useLoaderData();
    const [updateTutors, setUpdateTutors] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch(`http://localhost:5000/all-tutors?search=${search}`)
            .then(res => res.json())
            .then(data => {
                setUpdateTutors(data)
            })
    }, [search])

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
                    updateTutors.map(tutor => <TutorCard key={tutor._id} tutor={tutor}></TutorCard>)
                }
            </div>
        </div>
    );
};

export default FindTutors;