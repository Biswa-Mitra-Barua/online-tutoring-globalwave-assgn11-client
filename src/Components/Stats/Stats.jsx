import React, { useEffect, useState } from 'react';

const Stats = () => {
    const [tutorsCount, setTutorsCount] = useState(0);
    const [reviewCount, setReviewCount] = useState(0);
    const [languagesCount, setLanguagesCount] = useState(0);
    const [usersCount, setUsersCount] = useState(0);

    useEffect(() => {
        // Fetch Tutor Count
        fetch('http://localhost:5000/stats/tutors-count')
            .then(res => res.json())
            .then(data => setTutorsCount(data.count));

        // Fetch Review Count
        fetch('http://localhost:5000/stats/review-count')
            .then(res => res.json())
            .then(data => setReviewCount(data.count));

        // Fetch Language Count
        fetch('http://localhost:5000/stats/languages-count')
            .then(res => res.json())
            .then(data => setLanguagesCount(data.count));

        // Fetch Users Count
        fetch('http://localhost:5000/stats/users-count')
            .then(res => res.json())
            .then(data => setUsersCount(data.count));
    }, []);

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="stat text-center">
                    <div className="stat-title text-lg font-semibold">Total Tutors</div>
                    <div className="stat-value text-3xl sm:text-4xl font-bold">{tutorsCount}</div>
                    <div className="stat-desc text-sm text-gray-500">Experienced tutors</div>
                </div>
                <div className="stat text-center">
                    <div className="stat-title text-lg font-semibold">Total Reviews</div>
                    <div className="stat-value text-3xl sm:text-4xl font-bold">{reviewCount}</div>
                    <div className="stat-desc text-sm text-gray-500">Praised tutors review</div>
                </div>
                <div className="stat text-center">
                    <div className="stat-title text-lg font-semibold">Total Languages</div>
                    <div className="stat-value text-3xl sm:text-4xl font-bold">{languagesCount}</div>
                    <div className="stat-desc text-sm text-gray-500">Max languages of the world</div>
                </div>
                <div className="stat text-center">
                    <div className="stat-title text-lg font-semibold">Total Users</div>
                    <div className="stat-value text-3xl sm:text-4xl font-bold">{usersCount}</div>
                    <div className="stat-desc text-sm text-gray-500">Users count</div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
