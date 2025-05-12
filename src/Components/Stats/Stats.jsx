import React, { useEffect, useState } from 'react';

const Stats = () => {
    const [tutorsCount, setTutorsCount] = useState(0);
    const [reviewCount, setReviewCount] = useState(0);
    const [languagesCount, setLanguagesCount] = useState(0);
    const [usersCount, setUsersCount] = useState(0);

    useEffect(() => {
        // Fetch Tutor Count
        fetch('https://global-wave-server.vercel.app/stats/tutors-count')
            .then(res => res.json())
            .then(data => setTutorsCount(data.count));

        // Fetch Review Count
        fetch('https://global-wave-server.vercel.app/stats/review-count')
            .then(res => res.json())
            .then(data => setReviewCount(data.count));

        // Fetch Language Count
        fetch('https://global-wave-server.vercel.app/stats/languages-count')
            .then(res => res.json())
            .then(data => setLanguagesCount(data.count));

        // Fetch Users Count
        fetch('https://global-wave-server.vercel.app/stats/users-count')
            .then(res => res.json())
            .then(data => setUsersCount(data.count));
    }, []);

    return (
        <div className="p-4 sm:px-6 lg:px-8 mt-20 bg-gradient-to-br from-gray-500 to-gray-200 rounded-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="stat text-center">
                    <div className="stat-title text-lg text-gray-800 font-bold">Total Tutors</div>
                    <div className="stat-value text-gray-800 text-base sm:text-4xl font-semibold">{tutorsCount}</div>
                    <div className="stat-desc text-sm text-gray-800">Experienced tutors</div>
                </div>
                <div className="stat text-center">
                    <div className="stat-title text-gray-800 text-lg font-bold">Total Reviews</div>
                    <div className="stat-value text-gray-800 text-base sm:text-4xl font-semibold">{reviewCount}</div>
                    <div className="stat-desc text-sm text-gray-800">Praised tutors review</div>
                </div>
                <div className="stat text-center">
                    <div className="stat-title text-lg font-bold text-gray-800">Total Languages</div>
                    <div className="stat-value text-gray-800 text-base sm:text-4xl font-semibold">{languagesCount}</div>
                    <div className="stat-desc text-sm text-gray-800">Max languages of the world</div>
                </div>
                <div className="stat text-center">
                    <div className="stat-title text-lg font-bold text-gray-800">Total Users</div>
                    <div className="stat-value text-gray-800 text-base sm:text-4xl font-bold">{usersCount}</div>
                    <div className="stat-desc text-sm text-gray-800">Users count</div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
