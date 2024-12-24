import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TutorCard from '../TutorCard/TutorCard';

const FindTutors = () => {
    const tutors = useLoaderData();

    return (
        <div className='my-10 w-11/12 mx-auto'>
            <div>
                <h2 className='text-5xl text-center font-bold mb-10'>Find All Tutorials here</h2>
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