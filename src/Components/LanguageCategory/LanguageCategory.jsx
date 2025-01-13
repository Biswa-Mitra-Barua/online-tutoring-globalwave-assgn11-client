import React from 'react';
import { SlArrowRight } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';

const LanguageCategory = () => {
    const navigate = useNavigate();

    const categories = [
        { name: 'Bangla', image: '/LanguageImage/Bangla.avif', count: 5503 },
        { name: 'English', image: '/LanguageImage/English.jpg', count: 13380 },
        { name: 'Chinese', image: '/LanguageImage/Chinese.jpg', count: 8489 },
        { name: 'Arabic', image: '/LanguageImage/Arabic.jpg', count: 2073 },
        { name: 'Spanish', image: '/LanguageImage/Spanish.jpg', count: 2073 },
        { name: 'Russian', image: '/LanguageImage/Russian.jpg', count: 2073 },
        { name: 'French', image: '/LanguageImage/French.jpg', count: 2073 },
        { name: 'Hindi', image: '/LanguageImage/Hindi.jpg', count: 2073 },
        { name: 'German', image: '/LanguageImage/Germany.jpg', count: 2073 },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-10 px-4 sm:px-6 lg:px-8">
            {categories.map((category, index) => (
                <div
                    key={index}
                    onClick={() => navigate(`/find-tutors/${category.name}`)}
                    className="card flex flex-col sm:flex-row items-center bg-base-100 shadow-xl p-4 sm:p-6 cursor-pointer hover:shadow-2xl transition-shadow"
                >
                    <figure className="mb-4 sm:mb-0 sm:mr-4">
                        <img
                            className="w-20 h-20 rounded-full"
                            src={category.image}
                            alt={category.name}
                        />
                    </figure>
                    <div className="flex-1">
                        <h2 className="card-title text-center sm:text-left">
                            {category.name} Tutors
                        </h2>
                        <p className="text-center sm:text-left">{category.count} teachers</p>
                    </div>
                    <div className="text-3xl text-teal-500 mt-4 sm:mt-0">
                        <SlArrowRight />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LanguageCategory;
