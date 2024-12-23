import React from 'react';

const Stats = () => {
    return (
        <div>
            <div className="stats shadow gap-10">
                <div className="stat">
                    <div className="stat-title">Total Tutors</div>
                    <div className="stat-value">89,400</div>
                    <div className="stat-desc">Experienced tutors</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Total Review</div>
                    <div className="stat-value">89,400</div>
                    <div className="stat-desc">Praised tutors review</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Total Languages</div>
                    <div className="stat-value">89,400</div>
                    <div className="stat-desc">Max languages of the world</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Total Users</div>
                    <div className="stat-value">89,400</div>
                    <div className="stat-desc">Users count</div>
                </div>
            </div>
        </div>
    );
};

export default Stats;