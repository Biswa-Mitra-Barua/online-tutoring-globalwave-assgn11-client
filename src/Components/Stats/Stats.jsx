import React from 'react';

const Stats = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="stat text-center">
                    <div className="stat-title text-lg font-semibold">Total Tutors</div>
                    <div className="stat-value text-3xl sm:text-4xl font-bold">2</div>
                    <div className="stat-desc text-sm text-gray-500">Experienced tutors</div>
                </div>
                <div className="stat text-center">
                    <div className="stat-title text-lg font-semibold">Total Review</div>
                    <div className="stat-value text-3xl sm:text-4xl font-bold">40</div>
                    <div className="stat-desc text-sm text-gray-500">Praised tutors review</div>
                </div>
                <div className="stat text-center">
                    <div className="stat-title text-lg font-semibold">Total Languages</div>
                    <div className="stat-value text-3xl sm:text-4xl font-bold">9</div>
                    <div className="stat-desc text-sm text-gray-500">Max languages of the world</div>
                </div>
                <div className="stat text-center">
                    <div className="stat-title text-lg font-semibold">Total Users</div>
                    <div className="stat-value text-3xl sm:text-4xl font-bold">2</div>
                    <div className="stat-desc text-sm text-gray-500">Users count</div>
                </div>
            </div>
        </div>
    );
};

export default Stats;