import React from "react";
import { FaChalkboardTeacher, FaClock, FaGlobe, FaCertificate } from "react-icons/fa";

const WhyChooseUs = () => {
    const features = [
        {
            icon: <FaChalkboardTeacher className="text-5xl text-lime-900" />,
            title: "Expert Tutors",
            description: "Learn from industry experts with years of teaching experience.",
        },
        {
            icon: <FaClock className="text-5xl text-lime-900" />,
            title: "Flexible Scheduling",
            description: "Attend live classes or watch recordings at your convenience.",
        },
        {
            icon: <FaGlobe className="text-5xl text-lime-900" />,
            title: "Global Access",
            description: "Join from anywhere in the world with an internet connection.",
        },
        {
            icon: <FaCertificate className="text-5xl text-lime-900" />,
            title: "Certified Courses",
            description: "Earn certifications to boost your career and confidence.",
        },
    ];

    return (
        <section className="bg-gradient-to-br from-gray-600 to-gray-200 py-10">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
                    Why Choose Us?
                </h2>
                <p className="text-center text-gray-800 mb-10">
                    Discover the key benefits that make us the right choice for your learning journey.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
                            >
                                <div className="mb-4 flex items-center justify-center">{feature.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
