import React from 'react';
import { SlArrowRight } from 'react-icons/sl';

const LanguageCategory = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20 mb-20'>

            <div className="card items-center card-side bg-base-100 shadow-xl">
                <figure>
                    <img className='w-20 h-20 rounded-full'
                        src="/LanguageImage/Bangla.avif"
                        alt="Bangla" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Bangla Tutors</h2>
                    <p>5,503 teachers</p>
                </div>
                <div className="text-3xl mr-5">
                    <SlArrowRight />
                </div>
            </div>
            
            <div className="card items-center card-side bg-base-100 shadow-xl">
                <figure>
                    <img className='w-20 h-20 rounded-full'
                        src="/LanguageImage/English.jpg"
                        alt="English" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">English Tutors</h2>
                    <p>13,380 teachers</p>
                </div>
                <div className="text-3xl mr-5">
                    <SlArrowRight />
                </div>
            </div>
            
            <div className="card items-center card-side bg-base-100 shadow-xl">
                <figure>
                    <img className='w-20 h-20 rounded-full'
                        src="/LanguageImage/Chinese.jpg"
                        alt="Chinese" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Chinese Tutors</h2>
                    <p>8,489 teachers</p>
                </div>
                <div className="text-3xl mr-5">
                    <SlArrowRight />
                </div>
            </div>

            <div className="card items-center card-side bg-base-100 shadow-xl">
                <figure>
                    <img className='w-20 h-20 rounded-full'
                        src="/LanguageImage/Arabic.jpg"
                        alt="Arabic" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Arabic Tutors</h2>
                    <p>2,073 teachers</p>
                </div>
                <div className="text-3xl mr-5">
                    <SlArrowRight />
                </div>
            </div>
            <div className="card items-center card-side bg-base-100 shadow-xl">
                <figure>
                    <img className='w-20 h-20 rounded-full'
                        src="/LanguageImage/Spanish.jpg"
                        alt="Spanish" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Spanish Tutors</h2>
                    <p>2,073 teachers</p>
                </div>
                <div className="text-3xl mr-5">
                    <SlArrowRight />
                </div>
            </div>
            <div className="card items-center card-side bg-base-100 shadow-xl">
                <figure>
                    <img className='w-20 h-20 rounded-full'
                        src="/LanguageImage/Russian.jpg"
                        alt="Russian" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Russian Tutors</h2>
                    <p>2,073 teachers</p>
                </div>
                <div className="text-3xl mr-5">
                    <SlArrowRight />
                </div>
            </div>
            <div className="card items-center card-side bg-base-100 shadow-xl">
                <figure>
                    <img className='w-20 h-20 rounded-full'
                        src="/LanguageImage/French.jpg"
                        alt="French" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">French Tutors</h2>
                    <p>2,073 teachers</p>
                </div>
                <div className="text-3xl mr-5">
                    <SlArrowRight />
                </div>
            </div>
            <div className="card items-center card-side bg-base-100 shadow-xl">
                <figure>
                    <img className='w-20 h-20 rounded-full'
                        src="/LanguageImage/Hindi.jpg"
                        alt="Hindi" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Hindi Tutors</h2>
                    <p>2,073 teachers</p>
                </div>
                <div className="text-3xl mr-5">
                    <SlArrowRight />
                </div>
            </div>
            <div className="card items-center card-side bg-base-100 shadow-xl">
                <figure>
                    <img className='w-20 h-20 rounded-full'
                        src="/LanguageImage/Germany.jpg"
                        alt="Germany" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">German Tutors</h2>
                    <p>2,073 teachers</p>
                </div>
                <div className="text-3xl mr-5">
                    <SlArrowRight />
                </div>
            </div>
        </div>
    );
};

export default LanguageCategory;