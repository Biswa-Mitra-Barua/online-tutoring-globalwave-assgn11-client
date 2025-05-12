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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-20 mb-20 px-4 sm:px-6 lg:px-6">
            {categories.map((category, index) => (
                <div
                    key={index}
                    onClick={() => navigate(`/find-tutors/${category.name}`)}
                    className="card group flex flex-col sm:flex-row items-center bg-base-100 shadow-md p-6 sm:p-6 border-black border-l-2 cursor-pointer hover:shadow-2xl hover:scale-[1.04] transition-all duration-300"
                >
                    <figure className="mb-4 sm:mb-0 sm:mr-4">
                        <img
                            className="w-14 h-14 rounded-full border-b-4 border-black"
                            src={category.image}
                            alt={category.name}
                        />
                    </figure>
                    <div className="flex-1">
                        <h2 className="card-title text-center text-lg sm:text-left">
                            {category.name} Tutors
                        </h2>
                        <p className="text-center text-sm sm:text-left">{category.count} teachers</p>
                    </div>
                    <div className="text-xl mt-4 sm:mt-0">
                        <SlArrowRight />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LanguageCategory;
